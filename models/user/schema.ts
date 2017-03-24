//  Dependancie
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { BaseSchema } from '../baseSchema';
import { userSchemaDefinition } from './definition';
import { IUserModel } from './model';


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
userSchema.pre('validate', function(next) {
    const user : IUserModel = this;
    const date : Date = new Date();

    user.dateCreated = {
        timestamp : date.getTime(),
        human     : {
            date : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            time : `${date.getHours()}:${date.getMinutes().toString}:${date.getSeconds()}`
        }
    };

    next();
});


//  Register pre 'save' hook
//  for hashing the password
userSchema.registerHook('save', async function(next) {
    const user : IUserModel = this;
    const salt : string = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    next();
});


//  Export the userSchema
export default userSchema;
