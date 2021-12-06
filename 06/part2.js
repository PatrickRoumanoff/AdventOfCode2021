var fs = require("fs");

// var data = fs.readFileSync("part1-test.txt", "utf8");
var data = fs.readFileSync("part1-data.txt", "utf8");

const d = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const fishes = data
    .toString()
    .split(",")
    .map((f) => +f);
fishes.map((f) => d[f]++);

function anotherDay(d) {
    return [d[1], d[2], d[3], d[4], d[5], d[6], d[7] + d[0], d[8], d[0]];
}

let i = 256;
let d2 = d;
while (i--) {
    d2 = anotherDay(d2);
    console.log(
        i,
        d2.reduce((a, b) => a + b)
    );
}