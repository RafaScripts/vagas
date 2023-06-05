const data = require("./fakeData");

module.exports = function(req, res){
    
    var name =  req.query.name;

    const reg = data.find(d => d.name == name);

    if(reg){
        res.send("Usuário " +  name  + "  foi lido " + reg.counterLog + " vezes.");
    }else{
        res.send("Usuário não encontrado");
    }

};