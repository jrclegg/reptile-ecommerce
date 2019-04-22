var express = require('express')
var shape = require('shape-json');
var mysql = require('mysql')
var app = express();

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

app.get('/projects', function(request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  connection.query("SELECT a.ProductID, b.ProductName, b.ProductWeight, c.CompanyID, c.CompanyName, a.Quantity, a.Price FROM reptile_ecommerce.prices a LEFT OUTER JOIN reptile_ecommerce.products b ON a.ProductID = b.ProductID LEFT OUTER JOIN reptile_ecommerce.companies c ON c.CompanyID = a.CompanyID ORDER BY a.CompanyID, a.Quantity", function (error, rows, fields){
      //callback
      if(error){
        console.log(error)
      } else {
        console.log('Successful query')
        var scheme = {
          "$group[products](ProductID)": {
            "product_id": "ProductID",
            "product_name": "ProductName",
            "product_weight": "ProductWeight",
            "$group[retailers](CompanyID)": {
              "company_id": "CompanyID",
              "company_name": "CompanyName",
              "$group[packs](Quantity)": {
                "quantity": "Quantity",
                "price": "Price"
              }
            }
          }
        };
        var hierachicalJSON = shape.parse(rows, scheme);
        response.send(hierachicalJSON);
      }
  })
})

app.listen(8000);
