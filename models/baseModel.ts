//  Dependancies
import * as mongoose from 'mongoose';


/**
 * @description
 *  Base abstract Model class
 *  for defining a mongoose Model
 *
 * @export
 * @abstract
 * @class BaseModel
 */
export abstract class BaseModel<T extends mongoose.Model<mongoose.Document>> {
    public model : mongoose.Model<mongoose.Document>;

    constructor(
        protected schema    : mongoose.Schema,
        modelName   : string,
        collection? : string
    ) {
        this.registerModel(modelName, collection);
    }

    /**
     * @description
     *  Assosiate the Schema with the model
     *  and register it with mongoose
     *
     * @memberOf BaseModel
     */
    protected registerModel(
        modelName   : string,
        collection? : string
    ): void {
        this.model = mongoose.model(modelName, this.schema, collection);
    }
}
