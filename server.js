const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./src/config/database');

const userRoutes = require('./src/routes/user');

const app = express();

app.use(logger('dev'));
app.use(express.json({
    type: ['application/json', 'text/plain']
}));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/users', userRoutes);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Express app running on port ${port}`);
});