const publication = require("../models/publication");

exports.likePublication = (req, res, next) => {
  publication
    .findOne({ _id: req.params.id })
    .then((publication) => {
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
    })
    .catch((error) => res.status(404).json({ error }));
};
