const data = require("./fakeData");

module.exports = function(req, res, next){
  const id = req.query.id;

  if(!id) return res.send("Id não informado");

  const reg = data.find(d => d.id == id);

  if(reg && reg.isAdmin){
    next();
  }else{
    return res.send("Você não tem permissão para acessar essa rota");
  }

}