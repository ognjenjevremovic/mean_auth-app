//  Dependancie
import * as mongoose from 'mongoose';


//  User schema definition
export const userSchemaDefinition: mongoose.SchemaDefinition = {
    username : {
        type    :   String,
        required:   true,
        unique  :   true,
        trim    :   true
    },
    email   :   {
        type    :   String,
        required:   true,
        lowercase:  true,
        unique  :   true,
        trim    :   true
    },
    password :  {
        type    :   String,
        required:   true,
        trim    :   true
    },
    dateCreated : {
        type    :   String,
        required:   true
    }
};
