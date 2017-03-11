//  Dependancies
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

import '../models/user.model';

const User = mongoose.model('User');

export const register = (
        req  : express.Request,
        res  : express.Response,
        next : express.NextFunction
    ) => {
        const { username, email, password } = req.body;
        const user = new User({
            username,
            email,
            password
        });
        user.save(
            (error: mongoose.Error, document: mongoose.Document) => {
                res
                    .send(document);
            }
        );
};
