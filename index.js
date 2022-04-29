const app = require('./src/server');
const mysqlConnection = require('./src/connection');

// get all blogs
app.get('/blogs', (req,res) => {
    mysqlConnection.query('SELECT * FROM blog',(err,rows,fields) => {
        if(!err)
        {
          res.send(rows);
          console.log(rows)
        }
          
        else
          console.log(err);
    })
});

// get a perticular blog

app.get('/blogs/:id', (req,res) => {
    mysqlConnection.query('SELECT * FROM blog WHERE blogid = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
          res.send(rows);
        else
          console.log(err);
    })
});

//Delete a blog
app.delete('/blogs/:id', (req,res) => {
    mysqlConnection.query('DELETE FROM blog WHERE blogid = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
          res.send("Deleted Succesfully");
        else
          console.log(err);
    })
});

// Insert Blog

app.post('/blogs', (req,res) => {
      let blog = { 
                   title : req.body.title , 
                   imagepath : req.body.imagepath , 
                   description : req.body.description , 
                   publisheddate : req.body.publisheddate, 
                   author : req.body.author 
                  } ;
      mysqlConnection.query('INSERT INTO  blog SET ?', blog ,(err,rows,fields) => {
          if(!err)
            res.send("Inserted Succesfully");
          else
            console.log(err);
      })
});

app.put('/blogs/:id', (req,res) => {
    let sql = `UPDATE blog SET  title="${req.body.title}" , imagepath="${req.body.imagepath}" , description="${req.body.description}" , publisheddate="${req.body.publisheddate}" , author="${req.body.author}"  WHERE blogId="${req.params.id}"` ;
    mysqlConnection.query(sql ,(err,rows,fields) => {
      if(!err)
        res.send("Updated Succesfully");
      else
        console.log(err);
    })

});