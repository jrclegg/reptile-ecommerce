var express = require('express')
var shape = require('shape-json');
var mysql = require('mysql')
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
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
  connection.query("SELECT a.ProductID, b.ProductName, b.ProductWeight, c.CompanyID, c.CompanyName, c.CompanyReview, c.CompanyReviewLink, c.CompanyReviewNumbers, c.FrozenShipping, c.FreeShipping, c.CompanyLogo, c.CompanyLogo, a.Quantity, a.Price, a.ProductLink FROM reptile_ecommerce.prices a LEFT OUTER JOIN reptile_ecommerce.products b ON a.ProductID = b.ProductID LEFT OUTER JOIN reptile_ecommerce.companies c ON c.CompanyID = a.CompanyID WHERE (a.CompanyID = 6 || a.CompanyID = 18 ||  a.CompanyID = 24 || a.CompanyID = 38 || a.CompanyID = 39) ORDER BY a.CompanyID, a.Quantity", function (error, rows, fields){
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
            "$group[packs](Quantity)":  {
              "quantity": "Quantity",
              "$group[retailers](CompanyID)":{
                "price": "Price",
                "product_id": "ProductID",
                "product_link": "ProductLink",
                "company_name": "CompanyName",
                "company_review": "CompanyReview",
                "company_review_link": "CompanyReviewLink",
                "company_review_numbers": "CompanyReviewNumbers",
                "frozen_shipping": "FrozenShipping",
                "free_shipping": "FreeShipping",
                "company_logo": "CompanyLogo",
                "company_id": "CompanyID",
                "product_name": "ProductName",
                "quantity": "Quantity",
                "total": "Total",
                "product_weight": "ProductWeight",
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
