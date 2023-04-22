require('dotenv').config()


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req,res) => res.send('Try: /status, /employees') );


app.get('/status', (req, res) => res.send('Success.') );

app.get('/employees', (req, res) => {
  connection.query(
    "SELECT * FROM tblDarkSouls",
    (error, results, fields) => {
      if(error) throw error;
      res.json(results);
    }
  );
});

app.post('/employeespost', (req, res) => {
  const {name, origin, occupation} = req.body;

  connection.query(
    "INSERT INTO tblDarkSouls (NAME, ORIGIN, OCCUPATION) VALUES (?, ?, ?)",
      [name, origin, occupation],
      (error, results, fields) => {
        if(error) throw error;
        res.send('New employee added named '+ name +'!')
      }
  );
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});