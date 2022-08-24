const publication = require("../models/publication");

exports.likePublication = (req, res, next) => {
  console.log("je suis dans le controlleur lik,");
  publication
    .findOne({ _id: req.params.id })
    .then((publication) => {
      /*       console.log(
        `Le req.auth.userId est ${req.auth.userId} et le publication.usersLiked est ${publication.usersLiked}`
      ); */
      if (!publication.usersLiked.includes(req.auth.userId)) {
        console.log("J'aime la publication!");
        publication
          .updateOne({
            $inc: { likes: 1 },
            $push: { usersLiked: req.auth.userId },
          })
          .then(() =>
            res.status(201).json({ message: "Vous avez liker la publication!" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
      if (publication.usersLiked.includes(req.auth.userId)) {
        console.log("Je n'aime plus la publication");
        publication
          .updateOne({
            $inc: { likes: -1 },
            $pull: { usersLiked: req.auth.userId },
          })
          .then(() =>
            res
              .status(201)
              .json({ message: "Vous n'aimez plus la publication ! :(" })
          )
          .catch((error) =>
            res.status(400).json({ message: "ca marche pas" + error })
          );
      }
      if (
        !publication.usersDisliked.includes(req.auth.userId) &&
        req.body.like === -1
      ) {
        console.log("J'aime pas la publication!");
        publication
          .updateOne({
            $inc: { dislikes: 1 },
            $push: { usersDisliked: req.auth.userId },
          })
          .then(() =>
            res
              .status(201)
              .json({ message: "Vous avez disliker la publication!" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
      if (
        publication.usersDisliked.includes(req.auth.userId) &&
        req.body.like === 0
      ) {
        console.log("J'enleve mon dislike");
        publication
          .updateOne({
            $inc: { dislikes: -1 },
            $pull: { usersDisliked: req.auth.userId },
          })
          .then(() =>
            res.status(201).json({ message: "Finalement j'enlève mon dislike" })
          )
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
