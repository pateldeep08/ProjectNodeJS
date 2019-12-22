import express from 'express'

const app = express(); 

app.get('/', (req:any, res:any)=>{
    res.send('Hdello')
})

app.listen(8080, ()=>console.log("Server Running"))

