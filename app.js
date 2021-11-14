var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const router = require('./routes/routes')
dotenv.config({path: './config/config.env'})

var app = express();

const mongoConnect = require('./config/db');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Connect to Mongo 
mongoConnect()

app.use('/api/v1/', router());

module.exports = app;
