import express from 'express'
import passport from 'passport'
import { Request } from "express"



const router: express.Router = express.Router();


// Model 
import User from '../models/User';



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
    var msg3:string = 'Email already register'

    //check is all the field are fill 
    if(!name || !email || !password){
        errors.push( msg1)
    }

    //Password length 
    if(password.length<6){
        errors.push(msg2)
    }

    //If there are error, the register page come page with the field fill
    // Else the dashboard 
    if(errors.length>0){
        res.render('register', { errors, name, password, email})
    } else {
        //validation pass

        User.findOne({ email: email }, (err, user) => {
        
            if (user) {
                res.render('register', { errors, name, password, email})
            } else {
                const user: any = new User({
                    name,
                    email,
                    password
                });
              
                user.save((err: Error) => {
                    console.log(user)
                    req.flash('success_msg','You are now registered and can log in')
                    res.redirect('login')
                })
            }
        
        })
    }

})

//Login handling
router.post('/login', (req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect : '/users/login',
        failureFlash : true 
    })(req,res,next); 
})

//Logout handle 
router.get('/logout',(req,res)=>{
    //req.logout(); 
    res.redirect('/users/login')
})

module.exports = router;