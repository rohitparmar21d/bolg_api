const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
var app = express();
const bodyparser = require('body-parser');
let port = process.env.PORT;


app.use(bodyparser.json());
app.use("/", router);
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index');
});
app.listen(port, () => console.log(`Express App is running on http://localhost:${port}`));
module.exports= router; 