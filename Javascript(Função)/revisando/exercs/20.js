function notas(val){
    let cedulas = [100, 50, 10, 5, 1];
    let qtdCedulas = [0, 0, 0, 0, 0];
    let resto = val;

    for(let i=0; i<cedulas.length; i++){
        qtdCedulas[i]= Math.floor(resto/cedulas[i]);
        resto=resto%cedulas[i];
    }
    for(let i=0; i<cedulas.length; i++){
        if(qtdCedulas[i]>0){
            console.log(`${qtdCedulas[i]} notas(s) de ${cedulas[i]}`);
        }
    }
}

notas(18);
console.log('-----------------');
notas(153);
console.log('-----------------');
notas(1004);
console.log('-----------------');
notas(1000000);
console.log('-----------------');
notas(0);