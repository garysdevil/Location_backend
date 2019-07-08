const decimalConversion = decimal => {
    const regPos = /^\d+$/; // 非负整数
    let result = decimal * 1;
    if (!regPos.test(result)) {
        throw console.error(`input=${result}\nerror:please input a integer`);
    } else if (result === 0) {
        return 0;
    }
    const arr62 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const radix = 62; // 设置要转为多少进制
    let remainder;
    const stack = [];
    while (result !== 0) {
        remainder = result % radix;
        result = Math.floor(result / radix);
        stack.unshift(remainder);
    }
    const conversion = stack.map(index => arr62[index]).join('');
    return conversion;
};
module.exports = {
    decimalConversion,
};
