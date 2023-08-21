module.exports = function reverse(number) {
    let stringNumber = String(Math.abs(number));
    let result = "";

    for (let i = stringNumber.length - 1; i >= 0; i--) {
        result += stringNumber[i];
    }
    return +result;
};
