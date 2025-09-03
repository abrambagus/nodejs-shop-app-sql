const Sequelize = require("sequelize");

const sequileze = require("../util/database");

const CartItem = sequileze.define("cartItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CartItem;
