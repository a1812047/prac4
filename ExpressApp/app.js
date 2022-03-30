/* eslint-disable no-var */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/last.txt', indexRouter);
app.use('/color.html', indexRouter);
app.use('/log.html', indexRouter);
app.use('/main.html', indexRouter);
app.use('/first.html', indexRouter);
module.exports = app;
