// Dependancie
import * as mongoose from 'mongoose';

import { GenericModel } from '../generic';
import { userSchema } from './schema';


/**
 * @description
 *  User Model Class
 *
 * @class UserModel
 * @extends {GenericModel}
 */
class User extends GenericModel {
    protected schema : mongoose.Schema;
    public model     : mongoose.Model<mongoose.Document>;

    constructor(
        private userSchema  :   mongoose.SchemaDefinition,
        private modelName   :   string,
        private collection? :   string
    ) {
        super(userSchema, modelName, collection);
    }
}


//  Export the instance of UserModel
const { model: user } = new User(userSchema, 'User', 'users');
export default user;
