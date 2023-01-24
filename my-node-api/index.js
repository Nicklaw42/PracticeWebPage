require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const cors = require('cors');
app.use(cors());
app.get('/', (req,res) => res.send('Try: /status, /warehouses, or /warehouses/2') );

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


const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});