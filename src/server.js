const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
let port = process.env.PORT;

app.use(bodyparser.json());
app.get('/',(req, res) => {
    res.send('Welcome to Our Blogs')
  })
app.listen(port, () => console.log(`Express App is running on http://localhost:${port}`));
module.exports= app; 