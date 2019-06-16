
const error = log => {
    const time = new Date();
    console.log(time);
    console.log(log);
};
const info = log => {
    const time = new Date();
    console.log(time);
    console.log(log);
};
module.exports = {
    error,
    info,
};
