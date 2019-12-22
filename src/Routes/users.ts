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

//Registerhandling 
router.post('/register',(req:any, res:any)=>{
    const {name, email, password} = req.body
    let errors: Array<string> = []
    var msg1:string = 'All fields should be fill'
    var msg2:string = 'Password should be at least 6 charaters'

    //check is all the field are fill 
    if(!name || !email || !password){
        errors.push( msg1)
    }

    //Password length 
    if(password.length<6){
        errors.push(msg2)
    }

    if(errors.length>0){
        res.render('register', { errors, name, password, email})
    } else {
        res.send('pass')
    }
})


module.exports = router;