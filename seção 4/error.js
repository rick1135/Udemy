function tractError(error){
    //throw new Error('...');
    //throw 10;
    //throw true;
    //throw 'mensagem';
    throw{
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function showNameG(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e){
        tractError(e);
    }finally{
        console.log('final');
    }
}


const obj = {name: 'Roberto'};
showNameG(obj);