//  Dependancie
import * as express from 'express';

import userDAO from '../DAO/user/user';


/**
 * @description
 *  User controller (routes && logic)
 *
 * @class UserController
 */
class UserController {
    public router : express.Router = express.Router();

    constructor() {
        this.router.get('/users', this.getUsers);
    }

    /**
     * @description
     *  Retrieve all the records from
     *  the 'users' collection
     *
     * @private
     * @param {express.Request} req
     * @param {express.Response} res
     * @returns {Promise<void>}
     * @memberOf UserController
     */
    private async getUsers(
        req :   express.Request,
        res :   express.Response
    ): Promise<void> {
        res
            .json(await userDAO.findAll());
    }
}


//  Export instance of UserController
export default new UserController();
