// Dependancie
import * as mongoose from 'mongoose';

import { BaseModel } from '../baseModel';
import userSchema from './schema';


/**
 * @description
 *  User record interface
 *
 * @interface IUserModel
 * @extends {mongoose.Document}
 */
export interface IUserModel extends mongoose.Document {
    username    :   string;
    email       :   string;
    password    :   string;
    dateCreated :   Date;
}


/**
 * @description
 *  User Model Class
 *
 * @class UserModel
 * @extends {BaseModel}
 */
class User extends BaseModel<mongoose.Model<IUserModel>> {
    public model     : mongoose.Model<IUserModel>;

    constructor(
        protected schema    :   mongoose.Schema,
        private modelName   :   string,
        private collection? :   string
    ) {
        super(userSchema, modelName, collection);
    }
}


//  Export the instance of User model
export const { model } = new User(userSchema, 'User', 'users');
