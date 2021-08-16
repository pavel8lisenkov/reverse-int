module.exports = function reverse (n) {
    let num = Math.abs(n) + "";
    return num.split("").reverse().join("");
};