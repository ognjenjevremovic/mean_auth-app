//  Dependancies
import * as mongoose from 'mongoose';

import { GenericModel } from '../generic';
import { customerSchema } from './schema';


/**
 * @description
 *  Customer Model Class
 *
 * @class Customer
 * @extends {GenericModel}
 */
class Customer extends GenericModel {
    protected schema    : mongoose.Schema;
    public model        : mongoose.Model<mongoose.Document>;

    constructor(
        private cutomerSchema   : mongoose.SchemaDefinition,
        private modelName       : string,
        private collection?     : string
    ) {
        super(cutomerSchema, modelName, collection);
    }
}


//  Export the instance of the CustomerController
const { model: customer } = new Customer(customerSchema, 'Customer', 'customers');
export default customer;
