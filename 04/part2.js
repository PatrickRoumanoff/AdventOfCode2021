var fs = require("fs");

// var data = fs.readFileSync("part1-test.txt", "utf8");
var data = fs.readFileSync("part1-data.txt", "utf8");

const bingo = data.toString().split("\n");

const draw = bingo[0].split(",").map((d) => +d);
const boards = [];
let start = 2;
while (start < bingo.length) {
    boards.push(
        bingo.slice(start, start + 5).map((row) =>
            row
            .replaceAll("  ", " ")
            .trim()
            .split(" ")
            .map((d) => ({ v: +d, m: false }))
        )
    );
    start += 6;
}

function updateRow(r, v) {
    return r.map((d) => {
        if (d.v === v) {
            d.m = true;
        }
    });
}

function updateBoard(b, v) {
    return b.map((row) => updateRow(row, v));
}

function updateBoards(bs, v) {
    return bs.map((b) => updateBoard(b, v));
}

function checkRow(row) {
    return row.map((d) => d.m).reduce((a, b) => a && b, true);
}

function checkRows(b) {
    const row = b.find(checkRow);
    return row ? row.map((d) => d.v) : undefined;
}

function checkColumn(b, c) {
    return b.map((row) => row[c].m).reduce((a, b) => a && b, true);
}

function checkColumns(b) {
    for (let c = 0; c < 5; c++) {
        if (checkColumn(b, c)) {
            return b.map((row) => row[c].v);
        }
    }
}

function sum(a, b) {
    return a + b;
}

let win = false;
let cur = 0;
let b = boards;
while (b.length && cur < draw.length) {
    const v = draw[cur];
    console.log("drawn=>", v);
    updateBoards(b, v);
    let next = b.filter((b) => !(checkRows(b) || checkColumns(b)));
    if (next.length === 0) {
        console.log(
            b[0].reduce(
                (a, row) =>
                a +
                row
                .filter((d) => !d.m)
                .map((d) => d.v)
                .reduce(sum, 0),
                0
            ) * v
        );
    }
    b = next;
    cur++;
}

// console.log(JSON.stringify(boards, null, 2));