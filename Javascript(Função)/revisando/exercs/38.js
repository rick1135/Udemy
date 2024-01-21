let inicio=0, fim=100;

function pares(inicio, fim){
    if (inicio > fim) {
        let aux=fim;
        fim=inicio;
        inicio=aux;  
    }
    for(let i=inicio; i<=fim; i++){
        if (i%2!=0) console.log(i);
    }
}

pares(fim, inicio);