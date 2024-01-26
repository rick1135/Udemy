function primeiroEultimo(x){
    return [x[0], x[x.length - 1]];
}

console.log(primeiroEultimo([7, 14, 'Olá']));
console.log(primeiroEultimo([-100, 'Aplicativo', 16]));