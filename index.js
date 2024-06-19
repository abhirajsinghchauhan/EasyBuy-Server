const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const productRoutes = require('./src/routes/products.js')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(productRoutes)

app.get('/', (req, res) => {
  res.send({
    status: 'Server is up :)',
    now: new Date()
  })
})

app.listen(4000, () => {
  mongoose
    .connect(process.env.URL)
    .then(() => console.log('Server is running :)'))
    .catch((error) => console.log(error))
})