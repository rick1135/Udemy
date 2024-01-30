const { result } = require("lodash");

function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}`);

//parte 2

function real(partes, ...valores){
    const res = [];
    valores.forEach((valor, indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        res.push(partes[indice], valor);
    })
    return res.join('');
}

const preco = 29.9;
const precoParcela = 11;
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`);