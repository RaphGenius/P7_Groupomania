const passwordValidator = require("password-validator");

const passWordschema = new passwordValidator();

// Mot de passe doit etre entre 8 et 20 caractères, une lettre majuscule, 1 caractères digital et sans espace
passWordschema
  .is()
  .min(8)
  .is()
  .max(20)
  .has()
  .uppercase()
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

module.exports = (req, res, next) => {
  if (passWordschema.validate(req.body.password)) {
    console.log("Mot de passe prend en compte les critères établis");
    next();
  } else {
    return res.status(400).json({
      error:
        "Mot de passe trop faible ! Il doit contenir entre 8 et 20 caractères, une lettre majuscule, 1 caractères digital et sans espace",
    });
  }
};
