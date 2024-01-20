function aumento(plano, salario){
    switch(plano){
        case 'A':
            console.log(salario+salario*0.1);
            break;
        case 'B':
            console.log(salario+salario*0.15);
            break;
        case 'C':
            console.log(salario+salario*0.2);
            break;
        default:
            console.log('Plano inválido');
    }
}

aumento('A', 1000);
aumento('B', 1000);
aumento('C', 1000);
aumento('D', 1000);