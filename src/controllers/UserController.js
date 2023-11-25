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
      updated_at: date_now,
      created_at: date_now,
    });

    return createdUser;
  }
}


module.exports = UserController;