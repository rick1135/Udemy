function getIntegerAleatoryBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option;

do{
    option = getIntegerAleatoryBetween(-1, 10);
    console.log(`Chosen option was ${option}.`);
}while (option != -1)

console.log("See you later!");