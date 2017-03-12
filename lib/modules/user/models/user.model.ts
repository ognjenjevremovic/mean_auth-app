//  Dependancies
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { IUser } from './user.interface';

//  Mongoose pre hook callback (middleware)
interface IMongoosePreHookCallback {
    (err? : mongoose.NativeError): void;
}


//  User schema
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

//  Crypt the password before saving the user object
function hashPassword(next: IMongoosePreHookCallback): void {
    async function genPassword(user: IUser): Promise<void> {

        //  Generate the salt
        const salt: string | Error = await bcrypt.genSalt().catch((err: Error) => err);
        if(salt instanceof Error) return next(salt);

        //  Hash the password
        const hashed: string | Error = await bcrypt.hash(user.password, salt).catch((err: Error) => err);
        if(hashed instanceof Error) return next(hashed);
        user.password = hashed;

        //  Call next in the chain
        next();
    }

    genPassword(this);
};

//  Add dateCreated field
function addDate(next: IMongoosePreHookCallback): void {
    const date: Date = new Date();

    this.dateCreated = {
        human     : `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
        timestamp : date.getTime(),
        date
    };
    next();
};


//  Pre 'save' hooks
UserSchema.pre('save', hashPassword);
UserSchema.pre('save', addDate);


//  Export the User model
export const User: mongoose.Model<mongoose.Document> = mongoose.model('User', UserSchema);
