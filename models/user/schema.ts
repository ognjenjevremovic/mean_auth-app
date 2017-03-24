//  Dependancie
import * as mongoose from 'mongoose';


//  User schema
export const userSchema: mongoose.SchemaDefinition = {
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
        unique  :   true,
        trim    :   true
    },
    dateCreated : {
        type    :   Date,
        required:   true
    }
};
