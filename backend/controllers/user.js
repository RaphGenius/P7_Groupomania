require("dotenv").config();
const bcrypt = require("bcrypt"); // npm install --save bcrypt pour installer le package bcrypt, permettant de hasher les mots de passes
const User = require("../models/user");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken"); // package permettant la création de token
exports.signup = (req, res, next) => {
  const emailCrypt = cryptojs
    .HmacSHA256(req.body.email, `${process.env.CRYPTOJS}`)
    .toString();
  bcrypt
    .hash(req.body.password, 10) // .hash(element à hasher, nombre de salage) permet de hasher un élément ciblé
    .then((hash) => {
      // Création de l'utilisateur
      const user = new User({
        email: emailCrypt,
        password: hash,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
      });
      user
        .save() // On enregistre l'utilisateur dans la base de donnée
        .then(() => res.status(201).json({ message: "Utilisateur crée" }))
        .catch((error) => res.status(400).json(console.log(error)));
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
};

exports.login = (req, res, next) => {
  const emailDecrypt = cryptojs
    .HmacSHA256(req.body.email, `${process.env.CRYPTOJS}`)
    .toString();
  User.findOne({
    // Permet de trouver un élément selon un paramètre
    email: emailDecrypt,
  })
    .then((user) => {
      if (user === null) {
        // Si aucune adresse mail ne correspond
        res
          .status(401)
          .json({ message: "Paire identifiant/mot de passe incorrecte" });
      } else {
        bcrypt
          .compare(req.body.password, user.password) // .compare est une fonction bcrypt qui compare le hash utilisateur avec le hash stocké
          .then((valide) => {
            if (!valide) {
              // Si cela ne correspond pas
              res
                .status(401)
                .json({ message: "Paire identifiant/mot de passe incorrecte" });
            } else {
              // Si cela correspond, renvoie un userId et un Token
              res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  // .sign permet de creer une token avec 3 argument
                  { userId: user._id, admin: user.admin }, // 1. on verifie l'userId de l'élement avec l'user._id de l'utilisateur qui fait la demande
                  process.env.SECRETTOKEN, // 2. Le code qui permet de creer un token
                  { expiresIn: "24h" } // 3. Le temps d'expiration du token
                ),
              });
            }
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getProfil = (req, res, next) => {
  User.findOne({ _id: req.auth.userId }) // .findOne permet de trouver un élément à l'aide d'un paramètre
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

exports.deleteProfil = (req, res, next) => {
  User.findOne({ _id: req.auth.userId })
    .then((user) => {
      /* const filename = profil.imageUrl.split("/image/")[1]; */
      /*  fs.unlink(`image/${filename}`, () => { */
      User.deleteOne({ _id: req.auth.userId })
        .then(() => {
          res.status(200).json({ message: "objet supprimé" });
        })
        .catch((error) => res.status(401).json({ error }));
      /*  }); */
    })
    .catch((error) => res.status(500).json(console.log(error)));
};
