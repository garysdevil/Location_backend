const phoneUA = [
    'iphone', 'android', 'phone', 'mobile', 'wap', 'netfront', 'java', 'opera mobi',
    'opera mini', 'ucweb', 'windows ce', 'symbian', 'series', 'webos', 'sony', 'blackberry', 'dopod',
    'nokia', 'samsung', 'palmsource', 'xda', 'pieplus', 'meizu', 'midp', 'cldc', 'motorola', 'foma',
    'docomo', 'up.browser', 'up.link', 'blazer', 'helio', 'hosin', 'huawei', 'novarra', 'coolpad', 'webos',
    'techfaith', 'palmsource', 'alcatel', 'amoi', 'ktouch', 'nexian', 'ericsson', 'philips', 'sagem',
    'wellcom', 'bunjalloo', 'maui', 'smartphone', 'iemobile', 'spice', 'bird', 'zte-', 'longcos',
    'pantech', 'gionee', 'portalmmm', 'jig browser', 'hiptop', 'benq', 'haier', '^lct', '320x320',
    '240x320', '176x220', 'w3c ', 'acs-', 'alav', 'alca', 'amoi', 'audi', 'avan', 'benq', 'bird', 'blac',
    'blaz', 'brew', 'cell', 'cldc', 'cmd-', 'dang', 'doco', 'eric', 'hipt', 'inno', 'ipaq', 'java', 'jigs',
    'kddi', 'keji', 'leno', 'lg-c', 'lg-d', 'lg-g', 'lge-', 'maui', 'maxo', 'midp', 'mits', 'mmef', 'mobi',
    'mot-', 'moto', 'mwbp', 'nec-', 'newt', 'noki', 'oper', 'palm', 'pana', 'pant', 'phil', 'play', 'port',
    'prox', 'qwap', 'sage', 'sams', 'sany', 'sch-', 'sec-', 'send', 'seri', 'sgh-', 'shar', 'sie-', 'siem',
    'smal', 'smar', 'sony', 'sph-', 'symb', 't-mo', 'teli', 'tim-', 'tosh', 'tsm-', 'upg1', 'upsi', 'vk-v',
    'voda', 'wap-', 'wapa', 'wapi', 'wapp', 'wapr', 'webc', 'winw', 'winw', 'xda', 'xda-',
    'Googlebot-Mobile',
];

// const brower = u => {
//     const allUA = {
//         trident: u.indexOf('Trident') > -1, // IE内核
//         presto: u.indexOf('Presto') > -1, // opera内核
//         webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
//         gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
//         mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
//         ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
//         android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
//         iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
//         iPad: u.indexOf('iPad') > -1, // 是否iPad
//         webApp: u.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
//         weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
//         qq: u.match(/\sQQ/i) == ' qq', // 是否QQ
//     };
//     if (allUA.mobile || allUA.android || allUA.ios) {
//         return 'mobile';
//     }
//     return 'computer';
// };
const getDevice = brower => {
    const flag = phoneUA.some(ua => brower.toLowerCase().includes(ua));
    if (flag) {
        return 'cell phone';
    }
    return 'personnal computer';
};
module.exports = getDevice;
