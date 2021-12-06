var fs = require("fs");

// var data = fs.readFileSync("part1-test.txt", "utf8");
var data = fs.readFileSync("part1-data.txt", "utf8");

const lines = data
    .toString()
    .split("\n")
    .map((row) => {
        const [a, b] = row.split(" -> ");
        const [x1, y1] = a.split(",").map((d) => +d);
        const [x2, y2] = b.split(",").map((d) => +d);
        return { x1, y1, x2, y2 };
    });
// .filter((row) => row.x1 === row.x2 || row.y1 === row.y2);

const maxX = lines
    .map((line) => Math.max(line.x1, line.x2))
    .reduce((a, b) => Math.max(a, b), 0);
const maxY = lines
    .map((line) => Math.max(line.y1, line.y2))
    .reduce((a, b) => Math.max(a, b), 0);
// console.log(lines);
const grid = new Array(maxX + 1).fill(0).map(() => new Array(maxY + 1).fill(0));

const sign = (a, b) => (a === b ? 0 : a < b ? 1 : -1);

lines.map(({ x1, y1, x2, y2 }) => {
    let x = x1;
    let y = y1;
    do {
        grid[x][y] += 1;
        if (y === y2 && x === x2) break;
        y += sign(y1, y2);
        x += sign(x1, x2);
    } while (true);
    // console.log(x1, y1, x2, y2);
    // console.log(grid.map((row) => row.join("")).join("\n"), "\n");
});

const total = grid.reduce(
    (acc, row) => acc + row.reduce((a, b) => a + (b >= 2 ? 1 : 0), 0),
    0
);
console.log(total);