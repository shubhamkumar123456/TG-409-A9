const express = require('express');
const app = express();
const port = 8090;
const cors = require('cors')

const main = require('./config/db') ///main function

app.use(cors())
app.use(express.json())   // data parse;

// Middleware --> middleware are functions that have the access of requesting to an object and  responding to an object. they can also modify the request and response 

app.use((req, res , next)=>{
    console.log("hello i am middleware")
    next()
})

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


app.post('/register',async (req, res)=>{
    // console.log(req.body)
    let collection = await main()
    let data = await collection.insertOne(req.body)
    res.json({msg:"user registered"})
})




app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})

// https://github.com/shubhamkumar123456/TG-409-A9.git














