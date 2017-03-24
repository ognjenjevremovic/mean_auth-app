//  Dependancie
import * as mongoose from 'mongoose';

import { BaseDAO } from '../base';
import { model as userModel, IUserModel } from '../../models/user/model';


/**
 * @description
 *  User Data Access Object
 *  for CRUD operations over users collection
 *
 * @class UserDAO
 * @extends {BaseDAO}
 */
class UserDAO extends BaseDAO {

    constructor(
        protected model : mongoose.Model<IUserModel>
    ) {
        super(model);
    }
}


//  Export the instance of UserDAO
export default new UserDAO(userModel);
