const createError = require('http-errors');
const express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/components/user/UserRoute');
//var usersRouter = require('./routes/users');

/*Linha abaixo utilizada quando não existe a rota correspondente*/
const {handleError404} = require('./middlewares');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);


/*tratamento de erros do middleware do handover*/
app.use(handleError404);

/*se quiser voltar a usar o tratamento de erros do modulo httperrors, descomentar o trecho abaixo*/

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(JSON.stringify(err));
});*/

module.exports = app;
