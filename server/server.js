const mysql = require("mysql");
const express = require("express");
const mysqlConnection = require("./connection");
var app = express();
var cors = require('cors');
const bodyparser = require("body-parser");

const PeopleRoutes = require("./people");
app.use(bodyparser.json());
app.use(cors());
app.use("/people", PeopleRoutes);


app.listen(3010, ()=>console.log("Express Server is running at Port No : 3010"));
