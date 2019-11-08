const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('<h1>Hello Stranger, Welcome to this screen.</h1>')
})

app.set('view engine', 'pug')

app.get('/students', (request, response) => {
    pageData = {
        students: ['Ujwala', 'Upasana', 'Tatiana', 'Patrick Emm', 'Patrick Ohh', 'Caleb']
    }
    response.render('students', pageData)
})

app.listen(1337), () => {
    console.log('Welcome, This is it.')
}