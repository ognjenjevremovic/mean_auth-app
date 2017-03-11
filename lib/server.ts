//  Dependancies
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as bodyParser from 'body-parser';

//  Environment variables
import { NODE_ENV, PORT } from './config';

//  Database connection
import './database';

//  Development packages
const opn   = (NODE_ENV === 'development' || NODE_ENV === 'dev') ? require('opn') : null;
const cors  = (NODE_ENV === 'development' || NODE_ENV === 'dev') ? require('cors') : null;

//  Initialize the express application
const app: express.Application = express();


//  Routes
import { User } from './modules';
const { userRoutes, IUser } = new User();


//  Enable CORS if in development
if(NODE_ENV === 'dev' || NODE_ENV === 'development') app.use(cors());


//  Middlewares
app.use(morgan(NODE_ENV));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//  Static file server
app.use('static', express.static(path.join(__dirname, 'client')));

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
