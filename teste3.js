var data =  require("./fakeData");

module.exports = function(req, res) {
  
    var name =  req.query.name;


    try{
        const reg = data.find(d => d.name == name);
        const index = data.indexOf(reg);
        data.splice(index, 1);

        if(data.find(d => d.name == name)){
            res.send("Erro ao deletar")
        }else{
            res.send("Deletado com sucesso")
        }
    }catch (e) {
        res.send("Erro ao deletar")
    }

    res.send("success");

};