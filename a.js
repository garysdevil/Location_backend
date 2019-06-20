
// const axios = require('axios');

// const bb = async () => {
//     const amapData = (await axios('https://restapi.amap.com/v3/ip?ip=223.166.18.36&key=5b9bfc75dc1d5b7c63ba3ef68f6f5a0f')).data;
//     const { status, province, city } = amapData;
//     console.log(amapData);
// };
const showError = error => {
    switch (error.code) {
    case error.PERMISSION_DENIED:
        alert('定位失败,用户拒绝请求地理定位');
        break;
    case error.POSITION_UNAVAILABLE:
        alert('定位失败,位置信息是不可用');
        break;
    case error.TIMEOUT:
        alert('定位失败,请求获取用户位置超时');
        break;
    case error.UNKNOWN_ERROR:
        alert('定位失败,定位系统失效');
        break;
    default:
        alert('aa');
    }
    console.log(error.code);
};
function showPosition(position) {
    const lat = position.coords.latitude; // 纬度
    const lag = position.coords.longitude; // 经度
    console.log(position.coords);
    alert(`纬度:${lat},经度:${lag}`);
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert('浏览器不支持地理定位。');
    }
}
getLocation();
