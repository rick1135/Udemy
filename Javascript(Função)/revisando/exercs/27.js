function ultrapassa (alt1 ,t1, alt2, t2){
    if(alt1==alt2){
        if(t1>t2) console.log('A criança 1 ultrapassará a criança 2 em 1 ano.');
        else if(t1<t2) console.log('A criança 2 ultrapassará a criança 1 em 1 ano.');
        else console.log('As crianças tem alturas iguais.');
    }
    else{
        if(alt1>alt2){
            if(t1 >= t2){
                console.log('A criança menor não ultrapassará a maior.');
            }
            else{
                console.log(`A criança menor ultrapassará a maior em ${calcTempo(alt2, t2, alt1, t1)} anos`);
            }
        }
        else{
            if(t2 >= t1){
                return 'A criança menor não ultrapassará a maior.'
            }
            else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(alt1, t1, alt2, t2)} anos` 
            }
        }
    }
}

function calcTempo(altMen, tMen, altMa, tMa){
    let anos = 0;
    while (altMen <= altMa) {
        altMen += tMen
        altMa += tMa
        anos++
    }
    return anos;
}

ultrapassa(150, 2, 130, 4);
ultrapassa(175, 2, 130, 4);
ultrapassa(150, 2, 140, 4);