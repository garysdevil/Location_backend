const { hunterDao } = require('../dao/index');
const getDevice = require('../utils/getDevice');
const logger = require('../utils/logger');

const domain = 'garys.top:801/get/moon/';
const generateKey = () => {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const randomCha = [0, 0, 0, 0].map(() => {
        const random = Math.floor(Math.random() * arr.length);
        return arr[random];
    }).join('');
    const time = new Date().getTime().toString(16);
    const key = time + randomCha;
    return key;
};
const generateHunter = info => {
    const publickKey = generateKey();
    const secretKey = publickKey;
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
