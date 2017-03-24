//  Dependancies
import * as mongoose from 'mongoose';

import { BaseSchema } from '../baseSchema';
import { customerSchemaDefinition } from './definition';


/**
 * @description
 *  Defines mongoose Schema for Customer Model
 * 
 * @class CustomerSchema
 * @extends {BaseSchema}
 */
class CustomerSchema extends BaseSchema {
    constructor(
        private schemaDefintion : mongoose.SchemaDefinition
    ) {
        super(schemaDefintion);
    }
}


//  Instantiate Customer Schema
const customerSchema : CustomerSchema = new CustomerSchema(customerSchemaDefinition);

//  Register pre 'save' hook
//  for adding dateCreated field
customerSchema.registerHook('save', (next) => {
    this.dateCreated = new Date();
    next();
});


//  Customer Schema
export default customerSchema;
