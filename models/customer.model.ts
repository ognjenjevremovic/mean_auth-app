//  Dependancies
import * as mongoose from 'mongoose';

import { GenericModel } from './generic';
import { customerSchema } from './customer.schema';


/**
 * @description
 *  Customer Model
 *
 * @class Customer
 * @extends {GenericModel}
 */
class Customer extends GenericModel {
    protected schema    : mongoose.Schema;
    public model        : mongoose.Model<mongoose.Document>;

    constructor(
        private schemaDefinition : mongoose.SchemaDefinition,
        private modelName   : string,
        private collection? : string
    ) {
        super(schemaDefinition, modelName, collection);
    }
}


//  Export the instance of the CustomerController
export default new Customer(customerSchema, 'Customer', 'customers');
