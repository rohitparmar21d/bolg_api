const router = require('./src/server');
const validationResult  = require('express-validator');
const controller = require('./controllers/controller');

// get all blogs
router.get('/blogs', controller.fetchAll);

// get a perticular blog

router.get('/blogs/:id', controller.fetchById);

//Delete a blog
router.delete('/blogs/:id', controller.delete);

// Insert Blog

router.post('/blogs', controller.insert);
// router.post('/blogs', (req,res) => {
//       let blog = { 
//                    title : req.body.title , 
//                    imagepath : req.body.imagepath , 
//                    description : req.body.description , 
//                    publisheddate : req.body.publisheddate, 
//                    author : req.body.author 
//                   } ;
//       mysqlConnection.query('INSERT INTO  blog SET ?', blog ,(err,rows,fields) => {
//           if(!err)
//             res.send("Inserted Succesfully");
//           else
//             console.log(err);
//       })
// });

router.put('/blogs/:id',controller.update);

// router.put('/blogs/:id', (req,res) => {
//     let sql = `UPDATE blog SET  title="${req.body.title}" , imagepath="${req.body.imagepath}" , description="${req.body.description}" , publisheddate="${req.body.publisheddate}" , author="${req.body.author}"  WHERE blogId="${req.params.id}"` ;
//     mysqlConnection.query(sql ,(err,rows,fields) => {
//       if(!err)
//         res.send("Updated Succesfully");
//       else
//         console.log(err);
//     })

// });
