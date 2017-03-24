//  Dependancie
import * as mongoose from 'mongoose';

import { BaseDAO } from './base';


/**
 * @description
 *  Write operations generic class
 *  with read operations on the provided
 *  model instance
 *
 * @abstract
 * @class Write
 */
export abstract class Write<T extends mongoose.Document> {

    constructor(
        public model: mongoose.Model<T>
    ) { }

    /**
     * @description
     *  Insert single document to the collection
     *
     * @param {Object} docObject
     * @returns {Promise<mongoose.Document>}
     * @memberOf Write
     */
    public async insertOne(
        docObject   : Object
    ): Promise<T> {
        const document : T = await new this.model(docObject);
        await document.save();

        return document;
    }
}


/**
 * @description
 *  Write operations decorator
 *
 * @export
 * @returns
 */
export function writeDecorator<T extends {new(...args:any[]):{}}>(Constructor: T) {
    return class extends Constructor {
        insertOne = Write.prototype.insertOne;
    };
}
