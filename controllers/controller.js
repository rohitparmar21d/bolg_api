const model = require('../models/model')
const mysqlConnection =require('../src/connection')

exports.fetchAll = (req,res) => {
    model.fetchAll(
        (result) => {   res.send(result);  }
)
}

exports.fetchById = (req,res) => {
    
    model.fetchById(req.params.id,(result) => {    
        res.send(result);
    }
 )
}

exports.delete = (req,res) => {
    model.delete(req.params.id,(result) => {    
        res.send(result);
    })
}

exports.insert = (req,res) => {
    let blog = { 
                 title : req.body.title , 
                 imagepath : req.body.imagepath , 
                 description : req.body.description , 
                 publisheddate : req.body.publisheddate, 
                 author : req.body.author 
                } ;
   model.insert(blog, (result)=>{ res.send(result);})
}

exports.update =  (req,res) => {
    let data =[
               req.body.title,
               req.body.imagepath,
               req.body.description,
               req.body.publisheddate,
               req.body.author,
               req.params.id
            ];
    model.update(data,(result) => {res.send(result)});
  
  }