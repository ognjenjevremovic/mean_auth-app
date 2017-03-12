//  Dependancies
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { User } from '../models/user.model';

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
            (error: Error, document: mongoose.Document) => {
                if (error) return res.send(error.message);
                res
                    .send(document);
            }
        );
};
