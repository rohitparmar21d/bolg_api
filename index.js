const dotenv = require('dotenv');
dotenv.config();
const mysqlConnection = require('./src/connection');
const app = require('./src/server');

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

app.post('/blogs/:id', (req,res) => {

  mysqlConnection.query('SELECT * FROM blog WHERE blogid = ?',[req.params.id],(err,rows,fields) => {
      if(!err)
        res.send(rows);
      else
        console.log(err);
  })
});