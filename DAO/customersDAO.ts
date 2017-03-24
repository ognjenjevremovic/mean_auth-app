//  Dependancie
import * as mongoose from 'mongoose';

import { GenericDAO } from './generic';
import customer from '../models/customer.model';


/**
 * @description
 *  Customer database document interface
 *
 * @interface ICustomer
 */
interface ICustomer {
    firstName   : string;
    lastName    : string;
    age?        : number;
    email       : string;
}

/**
 * @description
 *  Customers Data Access Object method
 *  return value
 *
 * @interface IMethodReturn
 */
interface IMethodReturn {
    count   : number;
    content : mongoose.Document[];
}


/**
 * @description
 *  Customer Data Access Object
 *  for CRUD operations over customers collection
 *
 * @class CustomerDAO
 */
class CustomerDAO extends GenericDAO {

    constructor(
        protected model : mongoose.Model<mongoose.Document>
    ) {
        super(model);
    }
}


//  Export the new instance of CustomerDAO
export default new CustomerDAO(customer.model);