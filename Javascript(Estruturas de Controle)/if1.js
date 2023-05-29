function justGoodNews(note){
    if(note >= 7){
        console.log("Aprovado com " + note);
    }
}

justGoodNews(8.1);
justGoodNews(6.1);

function ifTrueITalk(value){
    if(value){
        console.log("É verdade..." + value);
    }
}

ifTrueITalk();
ifTrueITalk(null);
ifTrueITalk(undefined);
ifTrueITalk(NaN);
ifTrueITalk("");
ifTrueITalk(0);
ifTrueITalk(-1);
ifTrueITalk(" ");
ifTrueITalk("?");
ifTrueITalk([]);
ifTrueITalk([1, 2]);
ifTrueITalk({});