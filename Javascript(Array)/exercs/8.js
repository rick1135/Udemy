function multiplica (a, b) {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
        resultado += a;
    }
    return resultado;
}

console.log(multiplica(5, 5));
console.log(multiplica(0, 7));