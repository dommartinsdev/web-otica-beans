const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./config/router')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', router)
app.use('/service', router)
app.use('/about', router)
app.use('/contact', router)

app.use(function(req, res,) {
    let title = 'Ótica Beans - Erro 404'
    res.status(404).render('error/error',{title});
});

app.listen(port)