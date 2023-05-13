function minCedulas(valor) {
    let cedulas = [100, 50, 10, 5, 1];
    let qtdCedulas = [0, 0, 0, 0, 0];
    let resto = valor;
    for (let i = 0; i < cedulas.length; i++) {
        qtdCedulas[i] = Math.floor(resto / cedulas[i]);
        resto = resto % cedulas[i];
    }
    return qtdCedulas;
}

function imprimirCedulas(qtdCedulas) {
    let cedulas = [100, 50, 10, 5, 1];
    for (let i = 0; i < cedulas.length; i++) {
        if (qtdCedulas[i] > 0) {
            console.log(`${qtdCedulas[i]} cédula(s) de R$ ${cedulas[i]}`);
        }
    }
}

function sacar(valor) {
    let qtdCedulas = minCedulas(valor);
    imprimirCedulas(qtdCedulas);
    console.log('------------------');
}

sacar(18);
sacar(153);
sacar(1004);
sacar(1000000);
sacar(0);