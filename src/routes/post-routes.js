const { Router } = require("express");
const router = Router();

const PostController = require("../controllers/PostController");
const isAuth = require("../middlewares/isAuth");
const controller = new PostController();

router.get("/", isAuth, (req, res) => {
  controller.listAll(req, res);
});

router.post("/", isAuth, (req, res) => {
  controller.create(req, res);
});

module.exports = router;
