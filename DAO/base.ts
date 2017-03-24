//  Dependancie
import * as mongoose from 'mongoose';

import {
    readDecorator,
    IFindMany,
    Read
} from './read';
import {
    writeDecorator,
    Write
} from './write';


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
@readDecorator
@writeDecorator
export class BaseDAO<T extends mongoose.Document> implements Read<T>, Write<T> {

    constructor(
        public model : mongoose.Model<T>
    ) { }

    //  Read methods
    public findById : (id: string)    => Promise<mongoose.Document>;
    public find     : (query: Object) => Promise<IFindMany<T>>;
    public findAll  : () => Promise<IFindMany<T>>;
    public findFrom : (
        startAt: number,
        limitTo: number) => Promise<IFindMany<T>>;

    //  Write method
    public insertOne : (document: Object) => Promise<mongoose.Document>;
}
