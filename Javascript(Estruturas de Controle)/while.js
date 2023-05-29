function getIntegerAleatoryBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option;

while (option != -1) {
    option = getIntegerAleatoryBetween(-1, 10);
    console.log(`Chosen option was ${option}.`);
}

console.log("See you later!");