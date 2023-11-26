const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize-connection");

const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    profileimage: {
      type: DataTypes.STRING,
    },
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "user",
  }
);

module.exports = { User };
