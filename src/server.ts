import express from 'express'
import expressLayouts from 'express-ejs-layouts'
const app = express(); 

// EJS
app.use(expressLayouts);
//app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


// Routes 
app.use('/', require('./Routes/index'))
app.use('/users', require('./Routes/users'))



app.listen(8080, ()=>console.log("Server Running"))

