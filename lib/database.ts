//  Dependancie
import * as mongoose from 'mongoose';
import logger from '../util/logger';


//  Mongoose promise promise library
(mongoose as mongoose.Mongoose).Promise = global.Promise;

//  Database connection
const { DB_CONNECT } = process.env;


/**
 * @description
 *  Database class for handling the database connection
 *
 * @class Database
 */
class Database {
    connection: mongoose.Connection;

    /**
     * @description
     *  Opens a database connection
     *
     * @returns {Promise<void>}
     * @memberOf Database
     */
    async open(): Promise<void> {

        //  Connect to the database
        await mongoose.connect(DB_CONNECT, {
            promiseLibrary: global.Promise
        });

        //  Store the connection
        this.connection = mongoose.connection;
        this.connection.on('connect', () => {
            logger.log('blue', `Successfuly connected to the database!`);
        });
        this.connection.on('error', (err: mongoose.Error) => {
            logger.log('red', `
                Error connecting to the database :
                ${err.message}
            `);
        });
    }

    /**
     * @description
     *  Closes a database connection
     *
     * @memberOf Database
     */
    close(): void {
        this.connection.close(() => {
            logger.log('blue', `
                Database connection disconnected, through app termination
            `);
            process.exit(0);
        });
    }
}


//  Export the instance of the database
export default new Database();
