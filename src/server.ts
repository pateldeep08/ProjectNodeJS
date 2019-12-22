import express from 'express'

const app = express(); 

// Routes 
app.use('/', require('./Routes/index'))
app.use('/users', require('./Routes/users'))
//app.use('/register', require('./Routes/users'))


app.listen(8080, ()=>console.log("Server Running"))

