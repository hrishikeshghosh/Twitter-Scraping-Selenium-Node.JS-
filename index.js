const express =require('express')
const dotenv=require('dotenv')
const Connect_Database= require('./DB_Connect') 
const fetch_trending_route=require('./routes/fetch_trending_route')
const ejs= require('ejs')
const app= express()

dotenv.config()
app.use(express.json())
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/trends', fetch_trending_route)



app.listen(process.env.PORT, ()=> {
console.log("Started the server")
Connect_Database()
})
