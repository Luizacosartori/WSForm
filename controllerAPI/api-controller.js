var dbcon = require("../database");
var connection = dbcon.getconnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
    connection.query("SELECT * FROM therapists", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data");
        } else {
            response.send(records);
        }
    })
})

// router.post("/", (request, response) => {
//     this.connect.query("SELECT * FROM therapists")=>{
//         if (err) {
//             console.log("Error when retriving the data");
//         } else {
//             response.send(records);
//         }
//     }
// })

// router.delete("/", (request, response) => {
//     this.connect.query()
// })

module.exports = router;