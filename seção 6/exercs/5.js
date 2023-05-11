function valor(x){
    valorEmReais = `R$ ${x.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

valor(0.1 + 0.2);
valor(0.2 + 0.4);
valor(0.3 + 0.6);
valor(0.4 + 0.8);