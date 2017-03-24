//  Dependancie
import * as mongoose from 'mongoose';

import {
    readDecorator,
    IFindMany
} from './get';


/**
 * @description
 *  Data Access Object generic class
 *  with CRUD operations on the provided
 *  model instance
 *
 * @export
 * @abstract
 * @class GenericDAO
 */
@readDecorator()
export abstract class GenericDAO {

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
