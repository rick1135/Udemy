function simboloMais(n){
    let resultado = '';
    for(let i = 0; i < n; i++){
        resultado += '+';
    }
    return resultado;
}

console.log(simboloMais(2));
console.log(simboloMais(4));