const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRETTOKEN);
    const admin = decodedToken.admin;
    const userId = decodedToken.userId;
    req.auth = {
      userId,
      admin,
    };
    console.log(req.auth);
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
