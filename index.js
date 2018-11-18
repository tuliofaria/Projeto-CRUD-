const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'127.0.0.1',
    port:'8889',
    user:'root',
    password:'root',
    database:'cadastro'
})

const dependencies = {
    connection
}
const pessoas = require('./routes/pessoas')

app.use(express.static('public'))

app.get('/',(req,res) => res.render('home'))

app.use('/pessoas',pessoas(dependencies))
//Diretório em que será guardado os view engines
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

connection.connect(() => {
    app.listen(port, () => console.log('CRUD listening on port: '+port))
})


