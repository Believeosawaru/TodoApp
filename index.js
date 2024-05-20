const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

const connectionUrl = 'mongodb://localhost:27017/todo-app'

mongoose.connect(connectionUrl)
.then(() => {
    console.log('DB Connection successful!')
})
.catch((error) => {
    console.log(error.messsage)
});

app.get('/', (req, res, next) => {
    try {
        res.render('index')
    } catch (error) {
        res.status(500).send(error.messsage)
    }
});

app.get('/new-todo', (req, res, next) => {
    try {
        res.render('newTodo.ejs')
    } catch (error) {
        res.status(500).send(error.messsage)
    }
});

app.get('/update-todo', (req, res, next) => {
    try {
        res.render('updateTodo.ejs')
    } catch (error) {
        res.status(500).send(error.messsage)
    }
});

app.get('/delete-todo', (req, res, next) => {
    try {
        res.render('deleteTodo.ejs')
    } catch (error) {
        res.status(500).send(error.messsage)
    }
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

