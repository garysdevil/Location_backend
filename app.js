
const express = require('express');
const logger = require('./utils/logger');
const { generateHunter, getHunter } = require('./service/hunterService');
const { addPrey, getPrey } = require('./service/preyService');

const app = express();

const getInfo = req => {
    const ip = req.hostname;
    const ua = req.headers['user-agent'];
    const { path } = req;
    return { ip, ua, path };
};
/**
 * @api {get} hunter/add
 * @apiName addHunter
 * @apiGroup hunter
 * @apiSuccessExample Success-Response:
 * {
 *      "url": ""
 * }
 */
app.get('/hunter/add', (req, res) => {
    const info = getInfo(req);
    const url = generateHunter(info);
    res.send(url);
});
app.get('/hunter/get', async (req, res) => {
    const { hunter } = await getHunter();
    res.send(hunter);
});
// /prey/add
app.get('/get/moon/*', async (req, res) => {
    const info = getInfo(req);
    const { joke } = await addPrey(info);
    res.send(joke);
});
app.get('/prey/get', async (req, res) => {
    const data = await getPrey();
    res.send(data);
});
app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500);
    res.send('inner error');
});

module.exports = app;
