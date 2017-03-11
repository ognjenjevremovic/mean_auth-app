//  Dependancies
const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const dotenv    = require('dotenv');
const path      = require('path');
const bodyParser = require('body-parser');

//  Initialize the express application
const app = express();

//  Configure the environment variables
dotenv.config();

//  Extract the environment variables
const { 
    DB_CONNECT, //  database connection
    SECRET,     //  json web token secret
    NODE_ENV,   //  dev/prod environment
    PORT        //  application port
} = process.env;


//  Development packages
let opn;
let cors;
if(NODE_ENV === 'dev' || NODE_ENV === 'development') {
    opn   = require('opn');
    cors  = require('cors');  

    //  CORS requests
    app.use(cors());  
}


//  Database connection
mongoose.connect(DB_CONNECT);
mongoose.connection.on('connect', () => {
    console.log(`
        Successfuly connected to the database!
    `);
});
mongoose.connection.on('error', (err) => {
    console.log(`
        Error connecting to the database:
        ${err.message}
    `);
});

//  Middlewares
app.use(morgan(NODE_ENV));
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

    //  If in development mode, navigate to the webpage
    if(NODE_ENV === 'dev' || NODE_ENV === 'development') opn(`http://localhost:${PORT}`);
});