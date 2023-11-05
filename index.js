const express = require('express')
const app = express()
const PORT = 4000


var path = require('path');






var registerRouter = require('./routes/register');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>{
  console.log(`API listening on PORT ${PORT} `)
})

app.get('',(req,res)=>{
  res.send('Hey this is my API running 🥳')
})

app.get('/about',(req,res)=>{
  res.send('This is my about route.... ')
})


// app.use((req, res , next)=>{
//   const timestamp = new Date()
//   req.timestamp = timestamp.toString()
//   next()
// })


app.use('/register', registerRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app
