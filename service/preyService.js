
// Network requests should be in the control layer in theory
const axios = require('axios');

const { preyDao, hunterDao } = require('../dao/index');
const getDevice = require('../utils/getDevice');
const logger = require('../utils/logger');
const { jokes } = require('../utils/jokes');

const addPrey = async info => {
    const {
        ip, ua, path,
    } = info;
    const device = getDevice(ua);
    const userId = null;
    const publickKey = path.substring('10');
    const hunterIdObj = await hunterDao.getIdByPublickKey({ publickKey });
    if (!hunterIdObj) {
        logger.error(`do no exist this hunterId, publickKey=${publickKey}`);
        return 'error';
    }
    const hunterId = hunterIdObj.id;
    const amapData = (await axios('https://restapi.amap.com/v3/ip?ip=223.166.18.36&key=5b9bfc75dc1d5b7c63ba3ef68f6f5a0f')).data;
    const { status, province, city } = amapData;
    if (parseInt(status, 10) === 0) {
        logger.error('status=0, can not get location from amap');
    }
    const obj = {
        hunterId, ip, device, ua, province, city,
    };
    await preyDao.add(obj);
    const joke = jokes[0];
    return { joke };
};
const getPrey = async () => {
    const result = await preyDao.get();
    return result;
};
module.exports = {
    addPrey, getPrey,
};
