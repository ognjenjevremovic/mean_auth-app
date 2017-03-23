//  Dependancie
import * as chalk from 'chalk';


/**
 * @description
 *  Logger class for outputing the messages
 *  to the console, with styles
 *
 * @class Logger
 */
class Logger {

    /**
     * @description
     *  Outputs the message to the console
     *
     * @param {string} color
     * @param {string} message
     * @memberOf Logger
     */
    log(color: string, message: string): void {
        console.log(
            chalk.bold[color](message)
        );
    }
}


//  Export the instance of the Logger
export default new Logger();
