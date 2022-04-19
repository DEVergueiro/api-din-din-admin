const express = require("express");
const CursosController = require("../controllers/cursos.controller");
const cors = require('Cors');


const routes = express.Router();

routes.post("/cursos", CursosController.cadastrarCurso);

module.exports = routes;
