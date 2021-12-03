var fs = require("fs");

// var data = fs.readFileSync("part1-test.txt", "utf8");
var data = fs.readFileSync("part1-data.txt", "utf8");

const bits = data
    .toString()
    .split("\n")
    .map((d) => d.split("").map((b) => +b));

const size = bits[0].length;

function filter(bits, pos, high) {
    const sum = bits.map((b) => b[pos]).reduce((a, b) => a + b, 0);
    const criteria = 2 * sum >= bits.length ? 1 - high : high;
    return bits.filter((b) => b[pos] === criteria);
}

let dataset = bits;
let i = 0;
while (i < size && dataset.length > 1) {
    dataset = filter(dataset, i, 1);
    i++;
}
const e = dataset[0].reduce((a, b) => 2 * a + b, 0);
console.log(e);

dataset = bits;
i = 0;
while (i < size && dataset.length > 1) {
    dataset = filter(dataset, i, 0);
    i++;
}
const c = dataset[0].reduce((a, b) => 2 * a + b, 0);
console.log(c);
console.log(e * c);