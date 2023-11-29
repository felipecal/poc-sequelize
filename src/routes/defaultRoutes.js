const { Router } = require('express');
const { sequelizeInsert } = require('../controller/controller.js');

const router = Router();

router.get('/get', (req, res) => sequelizeInsert(req, res));

module.exports = { router };

