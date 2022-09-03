const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }, // unique : true permet de ne pas pouvoir s'inscrire avec la même adresse mail
  password: { type: String, required: true },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
});

userSchema.plugin(uniqueValidator); // Applique le plugin mongoose unique validator
module.exports = mongoose.model("User", userSchema);
