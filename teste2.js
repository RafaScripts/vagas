var data =  require("./fakeData");

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job =  req.body.job;
    
    var newUser = {
        id: data[data.length - 1].id + 1,
        name: name,
        job: job,
    }

    data.push(newUser)
    
    res.send(newUser);

};