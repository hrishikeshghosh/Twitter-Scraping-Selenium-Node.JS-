const mongoose= require('mongoose')

 
module.exports= function() {
    mongoose.connect(process.env.MONGO_STRING)
    .then(()=>{
        console.log("Connection established to Database...")
    })
    .catch((err)=>{
        console.log("Database error: ")
        console.log(err)
    })
}
 

 