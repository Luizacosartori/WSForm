var dbDetails = require("./db_details");
var mysql = require('./WSForms/node_modules/mysql2');
var http = require('http');

var bodyParser = require("./WSForms/node_modules/body-parser");

module.exports = {
	getconnection: ()=>{
	return mysql.createConnection({
		host:dbDetails.host,
		user:dbDetails.user,
		password:dbDetails.password,
		database:dbDetails.database	
	});
}};



