"use strict";
var calcAverage = function (values) { return (values.reduce(function (prev, curr) { return prev + curr; }, 0) / values.length); };
var calcStandardDeviation = function (values) {
    var average = calcAverage(values);
    var squareDiffs = values.map(function (value) {
        return Math.pow(value - average, 2);
    });
    return Math.sqrt(calcAverage(squareDiffs));
};
var values = [8, 42, 99, 161];
console.log(calcStandardDeviation(values));
