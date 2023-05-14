Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        // o primeiro parâmetro é o elemento, o segundo é o índice e o terceiro é o array
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const preco = carrinho.map2(function(e) {
    return JSON.parse(e).preco;
});
console.log(preco);