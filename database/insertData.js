var express = require('express')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reptile_ecommerce'
});

connection.connect(function (error){
    //callback
    if(!!error){
      console.log('error')
    } else {
      console.log('connected')
    }
})


let sql = `LOAD DATA LOCAL INFILE 'file.csv'
INTO TABLE reptile_ecommerce.prices
FIELDS TERMINATED BY ';'
LINES TERMINATED BY '\n'
(CompanyID, ProductID, Quantity, Price);`

connection.query(sql);                    
 
connection.end();
 