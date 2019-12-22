import express from 'express'

const router: express.Router = express.Router();

//Login Page 
router.get('/login', (req:any, res:any)=>{
    res.send('Login')
})

router.get('/register', (req:any, res:any)=>{
    res.send('Register')
})




module.exports = router;