//  Dependancie
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { BaseSchema } from '../baseSchema';
import { userSchemaDefinition } from './definition';


/**
 * @description
 *  Defines mongoose Schema for User model
 *
 * @class UserSchema
 * @extends {BaseSchema}
 */
class UserSchema extends BaseSchema {
    constructor(
        userSchemaDefinition : mongoose.SchemaDefinition
    ) {
        super(userSchemaDefinition);
    }
}


//  Instantiate User Schema
const userSchema : UserSchema = new UserSchema(userSchemaDefinition);

//  Register pre 'save' hook
//  for adding date created field
userSchema.pre('validate', function (next) {
    console.log('validate hook');
    this.dateCreated = new Date();
    next();
});


//  Register pre 'save' hook
//  for hashing the password
userSchema.registerHook('save', async function (next) {
    const salt : string = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


//  Export the userSchema
export default userSchema;
