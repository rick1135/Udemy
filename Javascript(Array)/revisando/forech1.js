const aprovados = ['Agatha', 'Aldo', 'Daniel', 'raquel'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome));