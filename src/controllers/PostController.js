const { Op, Sequelize } = require("sequelize");

const { Post } = require("../models/Post");
const { User } = require("../models/User");

const UserController = require("../controllers/UserController");
const userController = new UserController();

class PostController {
  constructor() {
    console.log("Iniciando o post controller");
  }

  async listAll(req, res) {
    console.log("PostController.listAll()");

    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username", "profileimage"],
        },
      ],
    });   

    return res.status(200).json(posts);
  }

  async create(req, res) {
    console.log("PostController.create()");
    const { content, image, author } = req.body;

    const now = new Date(Date.now());
    const date_now = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const user = await userController.getByEmail(author);
    if(!user){
      return res.status(404).send({ created: false, message: "Autor não existe" });
    }

    const createdPost = await Post.create({
      content: content,
      image: image || "",
      author: author,
      updated_at: now,
      created_at: now,
    });

    if (createdPost) {
      return res.status(201).send({ created: true, id: createdPost.id });
    } else {
      return res.status(500).send({ created: false, message: "Error" });
    }
  }
}

module.exports = PostController;
