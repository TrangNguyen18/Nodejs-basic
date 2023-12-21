const express = require("express");
const app = express();
const configViewEngine = require("./config/configViewEngine");
configViewEngine(app);
const webRounter = require("./routes/web");
const pool = require("./config/pgConfig");
const { Connection } = require("pg");

pool.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected to database')
  }
})
app.use(express.json());
app.use(express.urlencoded({extended : true }));
app.use(webRounter);
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
