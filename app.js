const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    const buah = [
        { name: 'apel' },
        { name: 'mangga' },
        { name: 'melon' }
    ]
    res.render('index', {
        nama: 'Angga',
        stack: 2021,
        buah: buah
    })
})

app.get('/:name', (req, res) => res.send(`Name : ${req.params.name}`));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})