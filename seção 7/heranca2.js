// cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo, //pai tem como prototipo o avo
    attr2: 'B'
}
const filho = {
    __proto__: pai, //filho tem como prototipo o pai
    attr3: 'C'
}

console.log(filho.attr1); //A
console.log(filho.attr0); //undefined
console.log(filho.attr2); //B
console.log(filho.attr3); //C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing = sombreamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`; //super referencia o prototipo
    }
}

Object.setPrototypeOf(ferrari, carro); //estabelece relação de prototipo entre ferrari e carro
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); //{ modelo: 'F40', velMax: 324 }
console.log(volvo); //{ modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100);

console.log(volvo.status()); //V40: 100km/h de 200km/h

ferrari.acelerarMais(300);

console.log(ferrari.status()); //300km/h de 324km/h