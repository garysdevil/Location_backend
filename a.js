// const https = require('https');
// const aa = async () => {
//     var req = https.get("https://restapi.amap.com/v3/ip?ip=223.166.18.36&key=5b9bfc75dc1d5b7c63ba3ef68f6f5a0f", (res) => {
//         let dataQueue = "";
//         res.on("data", function (d) {
//             dataQueue += d;
//         });
//         const data = res.on("end", function () {
//             dataQueue = JSON.parse(dataQueue);
//             return dataQueue;
//         });
//         console.log(data);
//         // return data;
//     }).on('error', (e) => {
//         console.error(e);
//     });

// }
// aa()
const axios = require('axios');
const fetch = require('node-fetch');

const bb = async () => {
    const amapData = (await axios('https://restapi.amap.com/v3/ip?ip=223.166.18.36&key=5b9bfc75dc1d5b7c63ba3ef68f6f5a0f')).data;
    const { status, province, city } = amapData;
    console.log(amapData);
};
bb();
