import * as mongoose from 'mongoose';

interface IInsertOne {
    success     : boolean;
    document    : mongoose.Document;
    error       : mongoose.Error;
}
