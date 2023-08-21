module.exports = function reverse(number) {
    let stringifiedNumber = String(Math.abs(number));
    let result = "";

    for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
        result += stringifiedNumber[i];
    }
    return +result;
};
