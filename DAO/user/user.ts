//  Dependancie
import * as mongoose from 'mongoose';

import { GenericDAO } from '../generic';
import user from '../../models/user/model';


/**
 * @description
 *  User Data Access Object
 *  for CRUD operations over users collection
 *
 * @class UserDAO
 * @extends {GenericDAO}
 */
class UserDAO extends GenericDAO {

    constructor(
        protected model : mongoose.Model<mongoose.Document>
    ) {
        super(model);
    }
}


//  Export the instance of UserDAO
export default new UserDAO(user);
