import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import mongoose from 'mongoose'
import flash from 'connect-flash'
import session from 'express-session'
import passport from 'passport'
import bodyParser from 'body-parser'



const app = express(); 
//app.use(require('./middleware/flash'))

//MongoDB confifuration and connection 
const url: string = 'mongodb://127.0.0.1:27017/local'

mongoose.connect(url, (err:any)=>{
    if(err){
        console.log(err.message)
    } else {
        console.log("Connection to DB succes")
    }
})
//DB
import Metric from './models/metric';
// EJS
app.use(expressLayouts);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Bodyparser 
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//express session
app.use(session({
    secret:'secret',
    resave: true, 
    saveUninitialized : true,
    cookie:{secure:false}
}))

//passport middleware config
require('./passport')(passport) 
app.use(passport.initialize());
app.use(passport.session()); 

//flash 
app.use(flash());



//global variable for error or succes messages 
app.use((req, res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();

})


// Routes 
app.use('/', require('./Routes/index'))
app.use('/users', require('./Routes/users'))

app.post('/dashboard', (req : any, res :any)=>{
    const {number, date} = req.body
    if(req.body.number=='' || req.body.date== ''){
       // req.flash('error', "All the fields should be filled")
        res.redirect('/dashboard')

    }else {
        const metric: any = new Metric({
            date,
            number
        });
      
        metric.save((err: Error) => {
            //console.log(metric)
            req.flash('success_msg','You are now registered and can log in')
            res.redirect('/dashboard')
        })
    }
    
})



app.listen(8080, ()=>console.log("Server Running"))

