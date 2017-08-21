'use strict'
//All Dependencies
const express = require('express'),
      logger = require('morgan'),
      graphQLSchema = require('./graphql/schema'),
      graphqlHTTP = require('express-graphql'),

      //Express Instance
      app = express();

app.use(logger('dev'));

app.use('/', graphqlHTTP({
  schema: graphQLSchema,
  graphiql: true
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
