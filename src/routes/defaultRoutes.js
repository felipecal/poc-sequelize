const { Router } = require("express");
const { sequelizeGetAll, sequelizeGetById } = require("../controller/controller.js");

const router = Router();

router.get("/getAll ", (req, res) => sequelizeGetAll(req, res));

router.get("/getById/:id", (req, res) => sequelizeGetById(req, res));

module.exports = { router };
