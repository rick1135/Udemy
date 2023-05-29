function rand ([min=0, max=1000]) {
    if (min > max) [min, max] = [max, min]; // swap
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const arr = [50, 40];
console.log(rand(arr));
console.log(rand([955]));
console.log(rand([, 10]));
console.log(rand([]));
