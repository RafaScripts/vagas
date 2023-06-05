var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;

    //for(let i = 0; i < data.length;  i++) {
    //    if(i.name == name) {
    //        res.send(data[i]);
    //    }
   // }


    // Correção basica o que torna funcional
    //for(let i = 0; i < data.length;  i++) {
    //    if(data[i].name == name) {
    //        res.send(data[i]);
    //    }
    //}

    if(name){
        const response = data.find(d => d.name == name);

        response.counterLog = response.counterLog ? response.counterLog + 1 : 1;

        if(!response) {
            res.send("Não encontrado")
        }else{
            res.send(response);
        }
    }else{
        res.send("Não enviado um nome")
    }

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};