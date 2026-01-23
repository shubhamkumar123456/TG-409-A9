const express = require('express');
const app = express();
const port = 8080;

app.get('/' , (req, res)=>{
  res.send('welcome page')  
})

app.get('/products' , (req, res)=>{
    let products = [
        {name:"iphone" , price:80000, rating:4.5},
        {name:"Mi" , price:30000, rating:4},
        {name:"Realme" , price:60000, rating:5},
        {name:"Samsung" , price:40000, rating:3},
        {name:"Oppo" , price:20000, rating:2},
    ]
    res.json({allProducts: products})
})




app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})
