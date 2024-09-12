const character = "#";

function pyramid (numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
        console.log(" ".repeat(numberOfRows - i) + character.repeat(2 * i + 1));
    }
}

pyramid(8);
