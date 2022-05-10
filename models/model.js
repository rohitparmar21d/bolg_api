const mysqlConnection = require('../src/connection');

exports.fetchAll = function (callback) {mysqlConnection.query('SELECT * FROM blog',(err,rows,fields) => {
    if(!err)
    {
        callback(rows);
    }
      
    else
    {
        callback(err)
    }
})}

exports.fetchById = (id,callback) => {mysqlConnection.query('SELECT * FROM blog WHERE blogid = ?',id,(err,rows,fields) => {
    if(!err)
      callback( rows);
    else
      callback (err);
})}

exports.delete = (id,callback) => {
    mysqlConnection.query('DELETE FROM blog WHERE blogid = ?',id,(err,rows,fields) => {
        if(!err)
          callback(`${id} Deleted Succesfully`);
        else
          callback(err);
    })

}

exports.insert = (data ,callback) => {
    mysqlConnection.query('INSERT INTO  blog SET ?', data ,(err,rows,fields) => {
        if(!err)
          callback("Inserted Succesfully");
        else
          callback(err);
    })
}

exports.update = (data,callback) => {
    mysqlConnection.query(`UPDATE blog SET  title=?, imagepath=? , description=? , publisheddate=?, author=? WHERE blogId=?` ,data,(err,rows,fields) => {
        if(!err)
          callback("Updated Succesfully");
        else
          callback(err);
      })
}