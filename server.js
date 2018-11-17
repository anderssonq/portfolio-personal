const express = require('express'),
    app = express(),
    path = require('path');

const {
    mongoose
} = require('./database')

const morgan = require('morgan');
//Settings
app.set('port', process.env.PORT || 8080);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//Routes
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/email', require('./routes/email.route'));
app.use('/api/user', require('./routes/users.route'));
//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => console.log(`Servido iniciado en el puerto localhost:${app.get('port')}/`)); 