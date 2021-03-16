const express = require("express");
const mysqlConnection = require("./connection");
const router = express.Router();


router.post("/", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  let email = req.body.email;
  let password = req.body.password;
  mysqlConnection.query("INSERT INTO details (`email`, `password`) VALUES ('" + req.body.email + "' ,'" + req.body.password + "')",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      }
      else {
        console.log(err);
      }
    });
});

module.exports = router;
