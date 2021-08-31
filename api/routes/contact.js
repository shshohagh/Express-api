const express = require('express')
const morgan = require('morgan')
const router  = express.Router()

// GET
router.get('/', morgan('dev'), (req, res, next) => {
    res.status(200).json({
        message: 'Hello, I am All Contacts Get Route'
    })
})
// POST
router.post('/', morgan('dev'), (req, res, next) => {
    res.status(201).json({
        message: 'Hello, I am All Contacts Post Route'
    })
})
// GET
router.get('/:id',(req, res, next)=>{
    //console.log(req.url)
    const id = req.params.id
    res.json({
        //id: req.url
        message: 'Hello, I am Single GET Route'
    })
})
//PUT
router.put('/:id',(req, res, next)=>{
    res.json({
        message: 'Hello, I am PUT Route'
    })
})
//DELETE
router.delete('/:id',(req, res, next)=>{
    res.json({
        message: 'Hello, I am DELETE Route'
    })
})
module.exports = router