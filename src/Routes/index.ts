import express from 'express'

const router: express.Router = express.Router();

//Welcome page
router.get('/', (req:any, res:any)=>{
    res.render('welcome')
})


module.exports = router;