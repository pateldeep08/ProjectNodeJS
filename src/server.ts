import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import mongoose from 'mongoose'


const app = express(); 

//MongoDB confifuration and connection 
const url: string = 'mongodb://127.0.0.1:27017/local'

mongoose.connect(url, (err:any)=>{
    if(err){
        console.log(err.message)
    } else {
        console.log("Connection to DB succes")
    }
})

// EJS
app.use(expressLayouts);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Bodyparser 
app.use(express.urlencoded({extended:false}));


// Routes 
app.use('/', require('./Routes/index'))
app.use('/users', require('./Routes/users'))



app.listen(8080, ()=>console.log("Server Running"))

