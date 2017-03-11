import * as express from 'express';

import { router as userRouters } from './routes';
import { IUser } from './models/user.interface';

export class User {
    public userRoutes: express.Router;
    public IUser: IUser;

    constructor() {
        this.userRoutes = userRouters;
    }
}
