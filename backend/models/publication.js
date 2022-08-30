const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
  userId: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: false },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
  creationDate: { type: String },
});

module.exports = mongoose.model("Publication", publicationSchema);
