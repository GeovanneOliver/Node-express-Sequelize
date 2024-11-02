/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const express = require('express');
const pessoas = require('./pessoasRoutes.js');
const categorias = require('./CategoriasRoutes.js');
const cursos = require('./cursosRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        categorias,
        cursos
    );
};