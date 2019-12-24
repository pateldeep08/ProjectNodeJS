import express from 'express'
import Metric from '../models/metric';

const {ensureAuthenticated} = require( '../auth')

const router: express.Router = express.Router();

//Welcome page
router.get('/', (req:any, res:any)=>{
    res.render('welcome')
})

//Dashboard 
router.get('/dashboard/',ensureAuthenticated,(req:any, res:any)=>{
    
    
    Metric.find({}, function(err, result) {
        res.render('dashboard', {
            name: req.user.name,
            table : result
        })
    });
    
})




module.exports = router;