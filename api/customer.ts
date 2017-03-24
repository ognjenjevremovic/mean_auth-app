//  Dependancie
import * as express from 'express';

import customerDAO from '../DAO/customer/customer';


/**
 * @description
 *  Customer controller (routes && logic)
 *
 * @class CustomerController
 */
class CustomerController {
    public router: express.Router = express.Router();

    constructor() {
        this.router.get('/customers', this.getCustomers);
    }

    /**
     * @description
     *  Retrieve all the records from
     *  the 'customers' collection
     *
     * @private
     * @param {express.Request} req
     * @param {express.Response} res
     * @returns {Promise<void>}
     * @memberOf CustomerController
     */
    private async getCustomers(
        req : express.Request,
        res : express.Response
    ): Promise<void> {
        res
            .json(await customerDAO.findAll());
    }
}


//  Export the instance of CustomerController
export default new CustomerController();
