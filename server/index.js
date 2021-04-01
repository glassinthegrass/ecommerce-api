const express = require('express')
const app = express()
app.use(express.json())
let port =3111
const products = require(`./products`)
const product = require(`./products`)



app.get('/api/products', products.get)
app.get(`/api/products/:id`, product.get)

app.listen(port, console.log(`hi ${port}`))
