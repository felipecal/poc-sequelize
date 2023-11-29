const { Router } = require("express");
const { sequelizeGetById } = require("../controller/controller.js");

const router = Router();

router.get("/get", (req, res) => sequelizeGetAll(req, res));

router.get("/getById/:id", (req, res) => sequelizeGetById(req, res));

module.exports = { router };
