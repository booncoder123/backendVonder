const http = require('http');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoConnect = require('./util/database')

app.use(bodyParser.urlencoded({extended : false}))

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorRoutes = require('./controllers/error')

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(errorRoutes.errorPage)

mongoConnect((client) => {
    console.log(client)
    app.listen(3000)
})