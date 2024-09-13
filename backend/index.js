var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
const routes = require("./routes/conjunto.routes");
var PORT =  require("dotenv").config();
var app = express();

app.set('port', process.env.PORT || 3000) 
app.use(express.json());
app.use(cors());
app.listen(app.get('port'));
console.log("PORT: " + app.get("port"));
app.use(morgan("dev"));

app.use(routes);