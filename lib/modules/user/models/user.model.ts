//  Dependancies
import * as mongoose from 'mongoose';

//  User schem
const UserSchema: mongoose.Schema = new mongoose.Schema({
    username: {
        unique  : true,
        type    : String
    },
    email: {
        required : true,
        type     : String,
        unique   : true
    },
    password: {
        type     : String,
        required : true
    }
});

//  Define the model
const User: mongoose.Model<mongoose.Document> = mongoose.model('User', UserSchema);
