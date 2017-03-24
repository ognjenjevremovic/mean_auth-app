//  Dependancie
import * as mongoose from 'mongoose';

import { BaseDAO } from './base';


/**
 * @description
 *  Return the number of documents matching the query
 *  and array of documents matching the query
 *
 * @interface IFindMany
 */
export interface IFindMany<T> {
    count       : number;
    documents   : T[];
}


/**
 * @description
 *  Read operations generic class
 *  with read operations on the provided
 *  model instance
 *
 * @class Read
 */
export abstract class Read<T extends mongoose.Document> {

    constructor(
        public model : mongoose.Model<T>
    ) { }

    /**
     * @description
     *  Find a single document, matching the unique id supplied
     *
     * @param {string} id
     * @returns {Promise<mongoose.Document>}
     * @memberOf Read
     */
    public async findById(
        id  : string
    ): Promise<T> {
        const document: T = await this.model.findById(id) as T;

        return document;
    }

    /**
     * @description
     *  Find documents matching a query supplied
     *
     * @param {Object} query
     * @returns {Promise<IFindMany>}
     * @memberOf Read
     */
    public async find(
        query : Object
    ): Promise<IFindMany<T>> {
        const documentNum   : number = await this.model.count(query);
        const documents     : T[] = await this.model.find(query).exec();

        return { count: documentNum, documents };
    }

    /**
     * @description
     *  Get all documents from the collection
     *
     * @returns {Promise<IFindMany>}
     * @memberOf Read
     */
    public async findAll(): Promise<IFindMany<T>> {
        const documentNum: number = await this.model.count({});
        const documents: T[] = await this.model.find({}).exec();

        return { count: documentNum, documents };
    }

    /**
     * @description
     *  Get certain number of documents
     *  from the certain position in the cursor
     *
     * @param {number} startAt
     * @param {number} [limitTo=10]
     * @returns {Promise<IFindMany>}
     * @memberOf Read
     */
    public async findFrom(
        startAt  :   number,
        limitTo  :   number = 10
    ): Promise<IFindMany<T>> {
        const documents : T[] = await this.model.find({}).skip(startAt);

        return { count: documents.length, documents };
    }
}


/**
 * @description
 *  Read operations decorator
 *
 * @export
 * @returns
 */
export function readDecorator<T extends {new(...args:any[]):{}}>(Constructor: T) {
    return class extends Constructor {
        find = Read.prototype.find;
        findAll = Read.prototype.findAll;
        findById = Read.prototype.findById;
        findFrom = Read.prototype.findFrom;
    };
}
