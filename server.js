var express = require("./WSForms/node_modules/express")
var app = express();
var formAPI = require("./controllerAPI/api-controller")
var bodyParser= require("./WSForms/node_modules/body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api/WSForms", formAPI);
app.listen(3060);

console.log("Server is up");

