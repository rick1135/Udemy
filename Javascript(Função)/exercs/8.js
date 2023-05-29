let pontuacao  = "10 20 20 8 25 3 0 30 1";

function avaliaPontuacoes (pontuacao){
    let pontuacoes = pontuacao.split(" ");
    let qtdQuebraDeRecords = 0;
    let piorJogo = 1;
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];

    for (let i = 0; i < pontuacoes.length; i++){
        if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i];
            qtdQuebraDeRecords++;
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
            menorPontuacao = pontuacoes[i];
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo];
}

console.log(avaliaPontuacoes(pontuacao));