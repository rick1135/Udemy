//armazenando uma funcao em uma variavel
const sum = function (a, b) {
    console.log(a + b);
}

sum(2, 3); // 5

//armazenando uma funcao arrow em uma variavel
const sum2 = (a, b) => {
    return a + b;
}

console.log(sum2(2, 3)); // 5

//retorno implicito
const sub = (a, b) => a - b;
console.log(sub(2, 3)); // -1