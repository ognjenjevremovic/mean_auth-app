//  Dependancies
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as serveFavicon from 'serve-favicon';

import './config';
import database from './lib/database';
import logger from './util/logger';
import customerController from './api/customerController';


//  Environment variables
const { NODE_ENV, PORT } = process.env;


//  Initialize the express application
const app: express.Application = express();


/**
 * @description
 *  Server class, that defines
 *  all the behaviour
 *
 * @class Server
 */
class Server {
    app: express.Application = express();

    constructor() {
        this.registerMiddlewares();
        this.initDbConnection();
        this.registerRoutes();
        this.start();
    }

    /**
     * @description
     *  Open the web server socket and
     *  listen for incoming requests
     *  on defined port
     *
     * @memberOf Server
     */
    start(): void {
        app.listen(PORT, () => {
            logger.log('blue', `
                Starting. . .
                Server listening on the port ${PORT}

                If you're not redirected automaticly,
                go to:
                    http://localhost:${PORT}
            `);
        });
    }

    /**
     * @description
     *  Register the application middlewares
     *
     * @memberOf Server
     */
    registerMiddlewares(): void {
        app.use(morgan(NODE_ENV));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        //  Static file server
        // app.use('static', express.static(path.join(__dirname, 'client')));

        //  Favicon serve
        // app.use(serveFavicon(path.join(__dirname, 'public', 'favicon.png')));
    }

    /**
     * @description
     *  Connect to the database instance
     *
     * @memberOf Server
     */
    initDbConnection(): void {
        database.open();
        logger.log('blue', 'Database connection open');
    }

    /**
     * @description
     *  Register the application routes
     *
     * @memberOf Server
     */
    registerRoutes(): void {
        //  API routes
        app.use('/api', customerController.router);
    }
}


//  Export the server instance
export default new Server();
