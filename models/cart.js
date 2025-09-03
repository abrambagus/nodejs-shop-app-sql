const Sequelize = require("sequelize");

const sequileze = require("../util/database");

const Cart = sequileze.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
