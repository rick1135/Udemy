function remover(obj, nome){
    delete obj[nome];
    console.log(obj);
}

remover({a:1, b:2}, "a");
remover({id:20, nome:"caneta", descricao:"Nulo"}, "descricao");