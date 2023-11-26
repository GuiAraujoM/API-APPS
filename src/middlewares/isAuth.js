const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log('O TOKEN É')
  console.log(token)
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err){
        return res.status(500).json({ auth: false, message: err });
      }      

      req.userId = decoded.id;

      next();
    });
};

module.exports = isAuth;
