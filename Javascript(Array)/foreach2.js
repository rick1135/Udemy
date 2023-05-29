Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        // o primeiro parâmetro é o elemento, o segundo é o índice e o terceiro é o array
        callback(this[i], i, this);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});
console.log('----------------------');