const mysql= require('mysql');

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database : 'blog'
});

mysqlConnection.connect((err) => {
   if(!err)
      console.log("conneted");
    else
      console.log("DB Connection Failed \n Error :" + JSON.stringify(err,undefined,2));
});

module.exports= mysqlConnection;  