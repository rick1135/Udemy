function conceito(notas){
    for(let i=0; i<notas.length; i++){
        if(notas[i]>=0 && notas[i]<=4.9) console.log('Nota conceito D');
        else if(notas[i]>=5 && notas[i]<=6.9) console.log('Nota conceito C');
        else if(notas[i]>=7 && notas[i]<=8.9) console.log('Nota conceito B');
        else if(notas[i]>=9 && notas[i]<=10) console.log('Nota conceito A');
        else console.log('Nota inválida');
    }
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
conceito(notas);