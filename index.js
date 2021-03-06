const express = require("express");
const mysql = require("mysql");
const app = express();
var cors = require("cors");
app.use(cors());
const port = process.env.PORT || 8080;

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

const server = app.listen(port, () => { 
  console.log(`Listening on port ${server.address().port}`);
})

var pool = mysql.createPool(config);
app.get("/locations", (req, res) => {
  pool.query("SELECT * from locations", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});