const mysql= require('mysql');

var mysqlConnection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});

mysqlConnection.connect((err) => {
   if(!err)
      console.log("conneted");
    else
      console.log("DB Connection Failed \n Error :" + JSON.stringify(err,undefined,2));
});

module.exports= mysqlConnection;  