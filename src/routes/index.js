/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const express = require('express');
const pessoas = require('./pessoasRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
    );
};