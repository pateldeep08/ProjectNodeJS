import express from 'express'
const {ensureAuthenticated} = require( '../auth')

const router: express.Router = express.Router();

//Welcome page
router.get('/', (req:any, res:any)=>{
    res.render('welcome')
})

//Dashboard 
router.get('/dashboard/',ensureAuthenticated,(req:any, res:any)=>{
    res.render('dashboard', {
        name: req.user.name
    })
})




module.exports = router;