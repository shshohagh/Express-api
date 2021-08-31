const express = require('express')

//const morgan = require('morgan')

const contactRoute = require('./api/routes/contact')

// console.log(express)

const app = express()
//app.use(morgan('dev'))

const PORT = process.env.PORT || 3001

app.use('/api/contacts', contactRoute)

app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

/* app.get('/api/contacts',(req, res) => {
       res.json(contacts)
}) */
/* app.post('/api/contacts',(req, res) => {
    res.json({
        message: 'I am Post Method'
    })
}) */

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)    
})

/* const contacts = [
    {name: 'A', email: 'a@gmail.com'},
    {name: 'B', email: 'b@gmail.com'},
    {name: 'C', email: 'c@gmail.com'},
    {name: 'D', email: 'd@gmail.com'},
    {name: 'E', email: 'e@gmail.com'},
    {name: 'F', email: 'f@gmail.com'},
    {name: 'G', email: 'g@gmail.com'},
] */