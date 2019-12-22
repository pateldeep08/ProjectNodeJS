import express from 'express'

const router: express.Router = express.Router();

//Login Page 
router.get('/', (req:any, res:any)=>{
    res.send('welcome')
})


module.exports = router;