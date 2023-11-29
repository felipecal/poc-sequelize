const  UserModel  = require("../models/userModel");

async function sequelizeInsert(req, res) {
  const teste = await UserModel.findAll();
  console.log(teste);
  res.status(200).json(teste)
}

module.exports = { sequelizeInsert }