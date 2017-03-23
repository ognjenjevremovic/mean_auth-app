//  Dependancies
import * as mongoose from 'mongoose';

//  Schema
const { Schema } = mongoose;


/**
 * @description
 *  Generic abstract class
 *  for defining a Model
 *
 * @export
 * @abstract
 * @class GenericModel
 */
export abstract class GenericModel {
    protected schema : mongoose.Schema;
    public    model  : mongoose.Model<mongoose.Document>;

    constructor(
        schemaDefinition : mongoose.SchemaDefinition,
        modelName   : string,
        collection? : string
    ) {
        this.defineSchema(schemaDefinition);
        this.registerModel(modelName, collection);
    }

    /**
     * @description
     *  Defines the Schema for the model
     *
     * @memberOf GenericModel
     */
    defineSchema(
        schemaDefinition : mongoose.SchemaDefinition
    ): void {
        this.schema = new Schema(schemaDefinition);
    }

    /**
     * @description
     *  Register the model,
     *  with the mongoose
     *
     * @memberOf GenericModel
     */
    registerModel(
        modelName   : string,
        collection? : string
    ): void {
        this.model = mongoose.model(modelName, this.schema, collection);
    }
}
