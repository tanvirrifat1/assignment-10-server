const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json')
const subjects = require('./Data/subject.json');

app.get('/', (req, res) => {
    res.send('Learning Api running');
})

app.get('/subject-categories', (req, res) => {
    res.send(categories);
})

app.get('/subjects/:id', (req, res) => {
    const id = req.params.id;
    const selectedSubject = subjects.filter(subject => subject.category_id === id);
    res.send(selectedSubject);
})

app.listen(port, () => {
    console.log('learning platform server running on port', port)
})
