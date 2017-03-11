//  Dependancies
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as bodyParser from 'body-parser';

//  Development packages
import * as opn from 'opn';
import * as cors from 'cors';

//  Initialize the express application
const app: express.Application = express();

//  Configure the environment variables
dotenv.config();

//  Extract the environment variables
const {
    DB_CONNECT, //  database connection
    SECRET,     //  json web token secret
    NODE_ENV,   //  dev/prod environment
    PORT        //  application port
} = process.env;


if(NODE_ENV === 'dev' || NODE_ENV === 'development') app.use(cors());


//  Database connection
mongoose.connect(DB_CONNECT);
mongoose.connection.on('connect', () => {
    console.log(`
        Successfuly connected to the database!
    `);
});
mongoose.connection.on('error', (err: mongoose.Error) => {
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
import { userRoutes } from './routes';

//  Register the routes
app.use('/user', userRoutes);


//  Demo index route
app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res
        .send('Index route');
});


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
