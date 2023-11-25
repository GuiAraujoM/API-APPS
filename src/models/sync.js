const { User } = require("./User");
const { Post } = require("./Post");

User.hasMany(Post, {
  foreignKey: "author",
});
Post.belongsTo(User, {
  foreignKey: "author",
});

const sequelize = require("../database/sequelize-connection");

console.log("Sync Models");
sequelize.sync();
