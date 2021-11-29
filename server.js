const express = require('express'),
bodyParser = require('body-parser'),
 cookieParser = require('cookie-parser'),
 mongoose = require('mongoose'),
 expressSession = require('express-session'),
 MongoStore = require('connect-mongo')(expressSession),
 accountRoutes = require('./routes/accounts'),
 bookingRoutes = require('./routes/bookings'),
 port = 30000;
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = express();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', [accountRoutes, bookingRoutes]);
const server = app.listen(port, function () {
    console.log('Express server listening on port ' + server.address().port);
});