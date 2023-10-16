function criarproduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarproduto('Notebook', 2199.49));
console.log(criarproduto('iPad', 1199.49));