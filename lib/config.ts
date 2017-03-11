//  Dependancies
import * as dotenv from 'dotenv';

//  Extract the environment variables
dotenv.config();
export const {
    DB_CONNECT, //  database connection
    SECRET,     //  json web token secret
    NODE_ENV,   //  dev/prod environment
    PORT        //  application port
} = process.env;
