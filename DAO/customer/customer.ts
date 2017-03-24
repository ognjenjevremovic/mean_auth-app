//  Dependancie
import * as mongoose from 'mongoose';

import { BaseDAO } from '../base';
import { model as customerModel, ICustomerModel } from '../../models/customer/model';


/**
 * @description
 *  Customer Data Access Object
 *  for CRUD operations over customers collection
 *
 * @class CustomerDAO
 */
class CustomerDAO extends BaseDAO<ICustomerModel> {

    constructor(
        public model : mongoose.Model<ICustomerModel>
    ) {
        super(model);
    }
}


//  Export the new instance of CustomerDAO
export default new CustomerDAO(customerModel);
