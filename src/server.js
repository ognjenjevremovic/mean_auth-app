//  Dependancies
const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const dotenv    = require('dotenv');
const cors      = require('cors');
const path      = require('path');
const opn       = require('opn');
const bodyParser = require('body-parser');

//  Initialize the express application
const app = express();

//  Configure the environment variables
dotenv.config();

//  Extract the environment variables
const { 
    DB,         //  database connection
    SECRET,     //  json web token secret
    NODE_ENV,   //  dev/prod environment
    PORT        //  application port
} = process.env;


//  Middlewares
app.use(morgan(NODE_ENV));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  Static server
app.use('static', express.static(path.join(__dirname, 'client')));


//  Require the routes
const { userRoutes } = require('./routes');

//  Register the routes
app.use('/user', userRoutes);


//  Demo index route
app.get('/', (req, res, next) => {
    res
        .send('Index route');
})


//  Open the socket
app.listen(PORT, () => {
    console.log(`
        Starting. . .
        Server listening on the port ${PORT}

        If you're not redirected automaticly,
        go to:
            http://localhost:${PORT}
    `);
    opn('http://localhost:${PORT}');
});