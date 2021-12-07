const fs = require("fs");
const path = require("path");

// var data = fs.readFileSync(path.join(__dirname, "test.txt"), "utf8");
var data = fs.readFileSync(path.join(__dirname, "data.txt"), "utf8");

const crabs = data
    .toString()
    .split(",")
    .map((d) => +d);

function stepCalc(from, to) {
    const d = Math.abs(from - to);
    return (d * (d + 1)) / 2;
}

function fuelCalc(crabs, target) {
    return crabs.map((c) => stepCalc(c, target)).reduce((a, b) => a + b, 0);
}

const min = Math.min(...crabs);
const max = Math.max(...crabs);
const result = [];
let i = min;

while (i++ <= max) {
    result.push({ p: i, v: fuelCalc(crabs, i) });
}

console.log(result.sort((d1, d2) => (d1.v > d2.v ? 1 : -1))[0]);