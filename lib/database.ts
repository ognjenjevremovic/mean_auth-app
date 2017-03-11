import * as mongoose from 'mongoose';
import { DB_CONNECT } from './config';

//  Promise
(mongoose as any).Promise = global.Promise;

//  Database connection
mongoose.connect(DB_CONNECT, {
    promiseLibrary: global.Promise
});
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
