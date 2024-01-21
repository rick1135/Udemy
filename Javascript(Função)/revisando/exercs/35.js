let vetorPilha = [1, 2, 3, 4, 5], vetorAdiciona = [6, 7, 8, 9, 10];

function add(vet1, vet2){
    let tamvet1=vet1.length;
    for(let i=0; i<vet2.length; i++){
        console.log(`Numero ${vet2[i]} adicionado ao vetorPilha`);
        vet1.push(vet2[i]);
    }

    console.log(`Vetor pilha: ${vet1}`);
    console.log(`Vetor adiciona: ${vet2}`);
}

add(vetorPilha, vetorAdiciona);