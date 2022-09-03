const Publication = require("../models/publication");
const fs = require("fs");
const moment = require("moment");
moment().format();
const date = moment().format("Do MMM YYYY");

exports.createPublication = (req, res, next) => {
  const publicationObject = req.body;
  delete publicationObject._id;
  delete publicationObject._userId;
  const publication = new Publication({
    ...publicationObject,
    userId: req.auth.userId,
    creationDate: date,
    imageUrl: `${req.protocol}://${req.get("host")}/image/${req.file.filename}`,
  });

  publication
    .save()
    .then(() => {
      res.status(201).json({ message: "Publication créée !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.modifyPublication = (req, res, next) => {
  console.log("MON REQ FILE EST ===" + req.file);
  const publicationObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/image/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete publicationObject._userId;
  Publication.findOne({ _id: req.params.id })
    .then((publication) => {
      if (publication.userId === req.auth.userId || req.auth.admin === true) {
        Publication.updateOne(
          { _id: req.params.id },
          { ...publicationObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "objet modifié" }))
          .catch((error) => ({ error }));
      } else {
        res.status(400).json({ message: "Non-autorisé" });
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
exports.deletePublication = (req, res, next) => {
  Publication.findOne({ _id: req.params.id })
    .then((publication) => {
      if (publication.userId === req.auth.userId || req.auth.admin === true) {
        const filename = publication.imageUrl.split("/image/")[1];
        fs.unlink(`image/${filename}`, () => {
          Publication.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "objet supprimé" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      } else {
        res.status(401).json({ message: "Non authorisé " });
      }
    })
    .catch((error) => res.status(500).json(console.log(error)));
};

exports.getAllPublication = (req, res) => {
  // Permet de voir toutes les publication
  Publication.find()
    .then((publication) => res.status(200).json(publication))
    .catch((error) => res.status(404).json({ error }));
};
exports.getAllMyPublication = (req, res) => {
  Publication.find({ userId: req.params.id })
    .then((publication) => res.status(200).json(publication))
    .catch((error) => res.status(404).json({ error }));
};
