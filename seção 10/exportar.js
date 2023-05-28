console.log(module.exports === this);
console.log(module.exports === exports);

// this and exports are just references to module.exports
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

// exports is just a reference to module.exports
exports = {
    nome: 'Teste'
};

console.log(module.exports);

module.exports = { publico: true };
