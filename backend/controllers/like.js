const publication = require("../models/publication");

exports.likePublication = (req, res, next) => {
  console.log("je suis dans le controlleur lik,");
  publication
    .findOne({ _id: req.params.id })
    .then((publication) => {
      if (
        !publication.usersLiked.includes(req.body.userId) &&
        req.body.like === 1
      ) {
        console.log("J'aime la publication!");
        publication
          .updateOne({
            $inc: { likes: 1 },
            $push: { usersLiked: req.body.userId },
          })
          .then(() =>
            res.status(201).json({ message: "Vous avez liker la publication!" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
      if (
        publication.usersLiked.includes(req.body.userId) &&
        req.body.like === 0
      ) {
        console.log("Je n'aime plus la publication");
        publication
          .updateOne({
            $inc: { likes: -1 },
            $pull: { usersLiked: req.body.userId },
          })
          .then(() =>
            res
              .status(201)
              .json({ message: "Vous n'aimez plus la publication ! :(" })
          )
          .catch((error) => res.status(400).json({ message: "ca marche pas" }));
      }
      if (
        !publication.usersDisliked.includes(req.body.userId) &&
        req.body.like === -1
      ) {
        console.log("J'aime pas la publication!");
        publication
          .updateOne({
            $inc: { dislikes: 1 },
            $push: { usersDisliked: req.body.userId },
          })
          .then(() =>
            res
              .status(201)
              .json({ message: "Vous avez disliker la publication!" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
      if (
        publication.usersDisliked.includes(req.body.userId) &&
        req.body.like === 0
      ) {
        console.log("J'enleve mon dislike");
        publication
          .updateOne({
            $inc: { dislikes: -1 },
            $pull: { usersDisliked: req.body.userId },
          })
          .then(() =>
            res.status(201).json({ message: "Finalement j'enlève mon dislike" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
