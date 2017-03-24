//  Dependancie
import * as express from 'express';

import customerDAO from '../DAO/customersDAO';


/**
 * @description
 *  Defining customer controller routes
 *
 * @class CustomerController
 */
class CustomerController {
    router: express.Router = express.Router();

    constructor() {
        this.router.get('/customers', this.getCustomers);
    }

    /**
     * @description
     *  Retrieve all documents from the collection
     *  associated with the Customers model
     *
     * @param {express.Request} req
     * @param {express.Response} res
     * @returns {Promise<void>}
     * @memberOf CustomerController
     */
    async getCustomers(
        req : express.Request,
        res : express.Response
    ): Promise<void> {
        res
            .json(await customerDAO.findAll());
    }
}


//  Export the instance of CustomerController
export default new CustomerController();
