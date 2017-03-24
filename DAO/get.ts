//  Dependancie
import * as mongoose from 'mongoose';
import { GenericDAO } from './generic';


/**
 * @description
 *  Return the number of documents matching the query
 *  and array of documents matching the query
 *
 * @interface IFindMany
 */
export interface IFindMany {
    count       : number;
    documents   : mongoose.Document[];
}

/**
 * @description
 *  Generic Read class
 *  read operation methods
 *
 * @interface IRead
 */
interface IRead {
    findById(id : string)   : Promise<mongoose.Document>;
    find(query : Object)    : Promise<IFindMany>;
    findAll()               : Promise<IFindMany>;
    findFrom(
        startAt: number,
        limitTo: number)    : Promise<IFindMany>;
}


/**
 * @description
 *  Read operations generic class
 *  with read operations on the provided
 *  model instance
 *
 * @class Read
 */
export abstract class Read implements IRead {

    constructor(
        protected model : mongoose.Model<mongoose.Document>
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
    ): Promise<mongoose.Document> {
        const document: mongoose.Document = await this.model.findById(id);

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
    ): Promise<IFindMany> {
        const documentNum   : number = await this.model.count(query);
        const documents     : mongoose.Document[] = await this.model.find(query).exec();

        return { count: documentNum, documents };
    }

    /**
     * @description
     *  Get all documents from the collection
     *
     * @returns {Promise<IFindMany>}
     * @memberOf Read
     */
    public async findAll(): Promise<IFindMany> {
        const documentNum: number = await this.model.count({});
        const documents: mongoose.Document[] = await this.model.find({}).exec();

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
    ): Promise<IFindMany> {
        const documents = await this.model.find({}).skip(startAt);

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
export function readDecorator() {
    return (target: typeof GenericDAO) => {
        target.prototype.find       = Read.prototype.find;
        target.prototype.findById   = Read.prototype.findById;
        target.prototype.findAll    = Read.prototype.findAll;
        target.prototype.findFrom   = Read.prototype.findFrom;
    };
}
