const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/UserController");
const controller = new UserController();

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const user = await controller.getByEmail(email);

  if (user) {
    return res.status(200).send({ exists: true });
  } else {
    return res.status(200).send({ exists: false });
  }
    
});

module.exports = router;
