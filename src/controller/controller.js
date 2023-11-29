const UserModel = require("../models/userModel");

async function sequelizeGetAll(req, res) {
  const result = await UserModel.findAll();
  res.status(200).json(result);
}

async function sequelizeGetById(req, res) {
  const userId = req.params.id;
  const result = await UserModel.findByPk(userId);
  res.status(200).json(result);
}

module.exports = { sequelizeGetAll, sequelizeGetById };
