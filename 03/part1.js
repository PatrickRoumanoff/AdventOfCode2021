var fs = require("fs");

// var data = fs.readFileSync("part1-test.txt", "utf8");
var data = fs.readFileSync("part1-data.txt", "utf8");

const bits = data
    .toString()
    .split("\n")
    .map((d) => d.split(""));

const higher = [];

for (let i = 0; i < 12; i++) {
    const sum = bits.map((d) => +d[i]).reduce((a, b) => a + b);
    higher[i] = sum > bits.length / 2 ? 1 : 0;
    console.log(i, "=>", sum, "==>", higher.join(""));
}
const e = higher.reduce((a, b) => 2 * a + b, 0);
const g = higher.map((d) => 1 - d).reduce((a, b) => 2 * a + b, 0);
console.log(higher.join(""));
console.log(g, e);
console.log(e * g);