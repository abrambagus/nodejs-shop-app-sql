const Sequelize = require("sequelize");

const sequileze = require("../util/database");

const Order = sequileze.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;
