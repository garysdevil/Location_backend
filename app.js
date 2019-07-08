
const express = require('express');
const fs = require('fs');
const logger = require('./utils/logger');

const app = express();


app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500);
    res.send('inner error');
});
const apiPath = `${__dirname}/apidoc`;
app.use('/apidoc', express.static(apiPath));
module.exports = app;
