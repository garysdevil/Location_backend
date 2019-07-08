const router = require('express').Router();
const { generateHunter, getHunter } = require('../service/hunterService');
const { addPrey, getPrey } = require('../service/preyService');

const getInfo = req => {
    const ip = req.hostname;
    const ua = req.headers['user-agent'];
    const { path } = req;
    return { ip, ua, path };
};
/**
 * @api {get} hunter/add generate a link and return this link
 * @apiName addHunter
 * @apiGroup hunter
 * @apiSuccess {String} url
 * @apiSuccessExample Success-Response:
 * {
 *      "url": ""
 * }
 */
router.get('/hunter/add', (req, res) => {
    const info = getInfo(req);
    const url = generateHunter(info);
    res.send(url);
});
/**
 * @api {get} hunter/add get all links
 * @apiName getHunter
 * @apiGroup hunter
 * @apiSuccessExample Success-Response:
 * [
 *      {"id":1,"createTime":"","publickKey":""}
 * ]
 */
router.get('/hunter/get', async (req, res) => {
    const { hunter } = await getHunter();
    res.send(hunter);
});
// /prey/add
/**
 * @api {get} /get/moon/*
 * @apiName addPrey
 * @apiGroup prey
 * @apiSuccessExample Success-Response:
 * {
 *      joke:"joke"
 * }
 */
router.get('/get/moon/*', async (req, res) => {
    const info = getInfo(req);
    const joke = await addPrey(info);
    res.send(joke);
});
/**
 * @api {get} /prey/get
 * @apiName getPrey
 * @apiGroup prey
 * @apiSuccessExample Success-Response:
 * [
 *      {"id":1,"hunterId":5,"clickTime":}
 * ]
 */
router.get('/prey/get', async (req, res) => {
    const data = await getPrey();
    res.send(data);
});
module.exports = router;
