const express = require("express");
const app = express();
const configViewEngine = require("./config/configViewEngine");
configViewEngine(app);
const webRounter = require("./routes/web");
app.use(webRounter);
const pool = require("./config/pgConfig");
const { Connection } = require("pg");
pool.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected to database')
  }
});

pool.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error('query error', err.stack)
  } else {
    console.log(res.rows)
  }
});

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
