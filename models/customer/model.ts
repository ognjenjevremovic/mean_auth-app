//  Dependancies
import * as mongoose from 'mongoose';

import { BaseModel } from '../baseModel';
import customerSchema from './schema';


/**
 * @description
 *  Customer record interface
 *
 * @interface ICustomerModel
 * @extends {mongoose.Document}
 */
export interface ICustomerModel extends mongoose.Document {
    name    : {
        first : string;
        last  : string;
    };
    age?    : number;
    email   : string;
}


/**
 * @description
 *  Customer Model Class
 *
 * @class Customer
 * @extends {BaseModel}
 */
class Customer extends BaseModel<mongoose.Model<ICustomerModel>> {
    public model        : mongoose.Model<ICustomerModel>;

    constructor(
        private cutomerSchema   : mongoose.Schema,
        private modelName       : string,
        private collection?     : string
    ) {
        super(customerSchema, modelName, collection);
    }
}


//  Export the instance of the Customer model
export const { model } = new Customer(customerSchema, 'Customer', 'customers');
