const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Home Page')
});
app.get('/about', (req, res) => {
    res.send('About Page')
});
app.get('/profile/:name', (req, res) => {
    const data = {
        age: 30,
        job: 'developer',
        friends: [
            'sarah', 'jane', 'wilma', 'baba kenya', 'jah man', 'john', 'clifford'
        ]
    }
    res.render('profile', { person: req.params.name, data });
})

app.listen(3000)