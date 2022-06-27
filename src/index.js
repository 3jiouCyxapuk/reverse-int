module.exports = function reverse (n) {
    let result = '';
    let nString = n.toString();
for (let i = nString.length - 1; i >=0; i--)
    {result = `${result}${nString[i]}`}
    return parseInt(result);
};
