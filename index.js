const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();
const path = require('path')

const app = express();

const port = process.env.PORT || 5000;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api',routes);

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const hangghesRouter = require('./routes/hangghes');
const sanbaysRouter = require('./routes/sanbays');
const vesRouter = require('./routes/ves');
const sanbaytrunggiansRouter = require('./routes/sanbaytrunggians');
const soluonghangghesRouter = require('./routes/soluonghangghes');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/hangghes',hangghesRouter);
app.use('/sanbays',sanbaysRouter);
app.use('/ves',vesRouter);
app.use('/sanbaytrunggians',sanbaytrunggiansRouter);
app.use('/soluonghangghes',soluonghangghesRouter);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', ( res,req) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))

  })
}

app.use((err, req, res, next) => {
  console.log(err);
  next();
});





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});