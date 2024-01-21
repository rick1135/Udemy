function anuidade (mes, val){
    let montante;
    if(mes>=1 && mes<=12){
        montante=val*(Math.pow((1+0.05), mes-1));
        console.log(montante);
    }
    else{
        console.log('Dados inválidos');
    }
}

anuidade(4, 100);
