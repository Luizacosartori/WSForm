var dbDetails = require("./db_details");
var mysql = require('mysql2');
var http = require('http');

var bodyParser = require("body-parser");

module.exports = {
	getconnection: ()=>{
	return mysql.createConnection({
		host:dbDetails.host,
		user:dbDetails.user,
		password:dbDetails.password,
		database:dbDetails.database	
	});
}};



