//  Dependancie
import * as mongoose from 'mongoose';

import {
    readDecorator,
    IFindMany
} from './read';


/**
 * @description
 *  Data Access Object generic class
 *  with CRUD operations on the provided
 *  model instance
 *
 * @export
 * @abstract
 * @class BaseDAO
 */
@readDecorator()
export abstract class BaseDAO {

    constructor(
        protected model : mongoose.Model<mongoose.Document>
    ) { }

    //  Read methods
    public findById : (id: string)    => Promise<mongoose.Document>;
    public find     : (query: Object) => Promise<IFindMany>;
    public findAll  : () => Promise<IFindMany>;
    public findFrom : (
        startAt: number,
        limitTo: number) => Promise<IFindMany>;
}
