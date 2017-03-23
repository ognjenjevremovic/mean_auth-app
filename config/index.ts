//  Dependancies
import * as dotenv from 'dotenv';


/**
 * @description
 *  Registers the environment variables
 *
 * @class Config
 */
class Config {
    constructor() {
        dotenv.config();
    }
}


//  Register the environment variables
new Config();
