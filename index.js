const mysql = require('mysql');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
<<<<<<< HEAD
const port = 80;
=======
const port = 3000;
>>>>>>> 3fa7af3de68cb4765b05472ea7a7689e0b9adceb

var con = mysql.createConnection({
  host: "store.cxxd91dbn81t.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "lamamadelamama",
  database: "store"
});

var data = [];

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM products";
  con.query(sql, function (err, result) {
    if (err) throw err;
    data = result;
    // console.log(result);
  });
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/api/products", (req, res) => {
  res.send(data);
});

app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const procutsCopy = products.map((p) => ({ ...p }));
  ids.forEach((id) => {
    const product = procutsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
    } else {
      throw "Sin stock";
    }
  });
  products = procutsCopy;
  res.send(products);
});

app.use("/", express.static("src"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
