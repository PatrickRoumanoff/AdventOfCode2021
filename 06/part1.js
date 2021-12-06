var fs = require("fs");

// var data = fs.readFileSync("part1-test.txt", "utf8");
var data = fs.readFileSync("part1-data.txt", "utf8");

const fishes = data
    .toString()
    .split(",")
    .map((d) => +d);

function anotherDay(fishes) {
    const len = fishes.length;
    for (let i = 0; i < len; i++) {
        if (fishes[i] === 0) {
            fishes.push(8);
            fishes[i] = 6;
        } else {
            fishes[i] = fishes[i] - 1;
        }
    }
    return fishes;
}

let i = 80;
while (i--) {
    anotherDay(fishes);
    console.log(i, fishes.length);
}