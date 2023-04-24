const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/', (req, res)=>{
    const {fName, LName, phone} = req.body
    console.log(typeof(Number(phone)));
})

app.listen(PORT, ()=>console.log("Server was started at port 3000"))