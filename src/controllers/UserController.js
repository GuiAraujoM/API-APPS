const { User } = require("../models/User");
const { Op } = require("sequelize");

class UserController {
  constructor() {
    console.log("Iniciando o user controller");
  }

  async getByEmail(id) {
    console.log("UserController.getByEmail()");
    const user = await User.findByPk(id);

    return user;
  }

  async create(user) {
    console.log("UserController.create()");
    const now = new Date(Date.now());
    const date_now = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const createdUser = await User.create({
      email: user.email,
      password: user.password,
      username: user.username,
      profileimage: user.profileimage,
      updated_at: date_now,
      created_at: date_now,
    });

    return createdUser;
  }

  async listAll(req, res) {
    console.log("UserController.listAll()");

    const users = await User.findAll();

    return res.status(200).json(users);
  }
}


module.exports = UserController;