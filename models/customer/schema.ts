//  Dependancies
import * as mongoose from 'mongoose';


//  Customer Schema
export const customerSchema : mongoose.SchemaDefinition = {
    name: {
        first: {
            required: true,
            type    : String,
            trim    : true
        },
        last : {
            required : true,
            type     : String,
            trim     : true
        }
    },
    age : {
        required : false,
        type     : Number
    },
    email : {
        required : true,
        type     : String,
        trim     : true,
        unique   : true
    }
};
