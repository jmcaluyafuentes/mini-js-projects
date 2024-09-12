const character = "#";
rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber + 1) + " ".repeat(rowCount - rowNumber);
}

function pyramid(count) {
    for (let i = 0; i < count; i++) {
        rows.push(padRow(i, count));
    }
}

pyramid(8);

for (const row of rows) {
    console.log(row);
}
