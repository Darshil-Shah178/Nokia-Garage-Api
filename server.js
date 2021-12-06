const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const accountRoutes = require('./routes/accounts')
const bookingRoutes = require('./routes/bookings')

const port = process.env.PORT || 30000
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = express()

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', [accountRoutes, bookingRoutes])
const server = app.listen(port, () => {
  console.log(`Express server listening on port ${server.address().port}`)
})
