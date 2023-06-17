const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Absence = db.define(
  "absence",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    completename: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    attendance: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Absence;
