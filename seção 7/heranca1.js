const ferari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferari.__proto__); //objeto vazio
console.log(ferari.__proto__ === Object.prototype); //true
console.log(volvo.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); //null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); //function function
console.log(Object.prototype, MeuObjeto.prototype); //{} MeuObjeto {}