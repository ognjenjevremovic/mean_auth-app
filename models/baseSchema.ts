//  Dependancie
import * as mongoose from 'mongoose';

const { Schema } = mongoose;


/**
 * @description
 *  Base abstract Schema class
 *  for defining a mongoose Schema
 *
 * @export
 * @abstract
 * @class BaseSchema
 */
export abstract class BaseSchema extends mongoose.Schema {

    constructor(
        schemaDefinition : mongoose.SchemaDefinition
    ) {
        super(schemaDefinition);
    }

    /**
     * @description
     *  Register hook on the Schema instance
     *
     * @param {string} hook
     * @param {(next: (err?: mongoose.NativeError) => void) => void} handler
     * @memberOf UserSchema
     */
    registerHook(
        hook : string,
        handler : (next: (err?: mongoose.NativeError) => void) => void
    ): void {
        super.pre(hook, handler);
    }
}
