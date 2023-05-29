const meses= ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto','setembro', 'outubro', 'novembro', 'dezembro'];

function getMes(mes) {
    return meses[mes-1];
}

console.log(getMes(1));
console.log(getMes(4)); 
console.log(getMes(12));