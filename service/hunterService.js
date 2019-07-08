
const { hunterDao } = require('../dao/index');
const getDevice = require('../utils/getDevice');
const logger = require('../utils/logger');
const { decimalConversion } = require('../utils/tools');

const domain = 'garys.top:801/get/moon/';

const generateHunter = info => {
    const randomNum = Math.floor(Math.random() * 10000) + 1;
    const time = new Date().getTime();
    const randomCha = `${time}${randomNum}`;
    const publickKey = decimalConversion(randomCha);
    const secretKey = decimalConversion(randomCha.split('').reverse().join(''));

    const { ip, ua } = info;
    const device = getDevice(ua);
    const userId = null;
    const obj = {
        publickKey, secretKey, ip, device, ua, userId,
    };
    const url = domain + publickKey;
    hunterDao.add(obj).then(data => {
        logger.info(`add a hunter success: id=${data}`);
    }).catch(err => {
        logger.error(`add a hunter failed: key=${publickKey}\n${err}`);
    });
    return { url };
};
const getHunter = async () => {
    const hunter = await hunterDao.get();
    return { hunter };
};
// getHunter();
module.exports = {
    generateHunter, getHunter,
};
