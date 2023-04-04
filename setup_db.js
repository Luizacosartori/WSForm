var express = require('./WSForms/node_modules/express');
var dbcon = require('./database');

//Connecting to the database
var connection = dbcon.getconnection();
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

//Code to create the table Client on SQL
// var createTableCategory = "CREATE TABLE therapists (therapis_id int(5), name varchar(50), treatment varchar(50) , PRIMARY KEY(therapis_id))";
// connection.execute(createTableCategory,(err, records)=> {
//     if (err) throw err;
//     console.log("Table created");
// });

//Code to create the table Appointment on SQL 
// var createTableBook = "CREATE TABLE book (book_id int(5), title varchar(50), author varchar(50), price int(5), description varchar(500), category_id int(5), PRIMARY KEY(book_id))";
// connection.execute(createTableBook,(err, records)=> {
//     if (err) throw err;
//     console.log("Table created");
// });

//Code to create the table Therapist on SQL 
// var createTableBook = "CREATE TABLE book (book_id int(5), title varchar(50), author varchar(50), price int(5), description varchar(500), category_id int(5), PRIMARY KEY(book_id))";
// connection.execute(createTableBook,(err, records)=> {
//     if (err) throw err;
//     console.log("Table created");
// });

//Code to insert record on database
// var insertTherapist = new Array();
// insertTherapist[0] = "INSERT INTO therapists VALUES(1, 'Luiza', 'Remedial Massage')";
// insertBook[1] = "INSERT INTO book VALUES(2, 'Harry Potter 2', 'JK Rowlling', 25, 'About magic', 1)"
// insertBook[2] = "INSERT INTO book VALUES(3, 'Harry Potter 3', 'JK Rowlling', 25, 'About magic', 1)"
// insertBook[3] = "INSERT INTO book VALUES(4, 'Harry Potter 4', 'JK Rowlling', 25, 'About magic', 1)"
// insertBook[4] = "INSERT INTO book VALUES(5, 'Harry Potter 5', 'JK Rowlling', 25, 'About magic', 1)"
// insertBook[5] = "INSERT INTO book VALUES(6, 'The Selection', 'Kierra Cass', 25, 'About princess', 2)"
// insertBook[6] = "INSERT INTO book VALUES(7, 'The Elite', 'Kierra Cass', 25, 'About princess', 2)"
// insertBook[7] = "INSERT INTO book VALUES(8, 'The Heir', 'Kierra Cass', 25, 'About princess', 2)"
// insertBook[8] = "INSERT INTO book VALUES(9, 'The Subtle Art of Not Giving a Fuck', 'Mark Manson', 25, 'Self Help', 3)"
// insertBook[9] = "INSERT INTO book VALUES(10, 'The barefoot Investor', 'Mark Manson', 25, 'About Finance', 4)"


// for (let i = 0; i < insertTherapist.length; i++) {
//     connection.execute(insertTherapist[i], (err, records) => {
//         if (err) throw err;
//         console.log("Books added");
//     });
// }

//Adding all categories in the database
// var insertCategories = new Array();
// insertCategories[0] = "INSERT INTO category VALUES(1,'Fiction and Magic')"
// insertCategories[1] = "INSERT INTO category VALUES(2, 'Fiction and Princess')"
// insertCategories[2] = "INSERT INTO category VALUES(3, 'Self-Help')"
// insertCategories[3] = "INSERT INTO category VALUES(4, 'Financial Help')"
// insertCategories[4] = "INSERT INTO category VALUES(5, 'Children Books')"


// for (let i = 0; i < insertCategories.length; i++) {
//     connection.execute(insertCategories[i], (err, records) => {
//         if (err) throw err;
//         console.log("Categories added");
//     });
// }