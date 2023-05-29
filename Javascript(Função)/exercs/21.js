function identificaValor(idade){
    if (idade >= 0 && idade < 10){
        console.log("Valor a ser pago é de: R$" + (100 + 80));
    } else if (idade >= 10 && idade < 30){
        console.log("Valor a ser pago é de: R$" + (100 + 50));
    } else if (idade > 30 && idade <= 60){
        console.log("Valor a ser pago é de: R$" + (100 + 95));
    } else if (idade > 60){
        console.log("Valor a ser pago é de: R$" + (100 + 130));
    } else {
        return 'Valor inválido';
    }
}

identificaValor(8);
identificaValor(15);
identificaValor(35);
identificaValor(65);