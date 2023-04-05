var dbcon = require("../database");
var connection = dbcon.getconnection();
connection.connect();

var express = require("../WSForms/node_modules/express");
var router = express.Router();

router.get("/therapist/", (request, response) => {
    connection.query("SELECT * FROM therapist", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data");
        } else {
            response.send(records);
        }
    })
})

router.get("/client/", (request, response) => {
    connection.query("SELECT * FROM client", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data");
        } else {
            response.send(records);
        }
    })
})

router.get("/treatment/", (request, response) => {
    connection.query('SELECT tr.treatment_id as treatment_id, concat(c.firstName, " ", c.lastName) as clientName, th.fullName as therapistName, trn.treatment_notes_id as treatment_notes_id, trn.treatment_date as treatment_date, trn.treatment_notes as treatment_notes FROM treatment tr JOIN client c on c.client_id = tr.client_id JOIN therapist th on th.therapist_id = tr.therapist_id JOIN treatment_notes trn on tr.treatment_notes_id = trn.treatment_notes_id', (err, records, fields) => {
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