import express from 'express'

const router: express.Router = express.Router();

// Render is to render a HTML Page 
// And send put the message as it is 

//Login Page 
router.get('/login', (req:any, res:any)=>{
    res.render('login')
})

//Register Page 
router.get('/register', (req:any, res:any)=>{
    res.render('register')
})




module.exports = router;