//  Dependancies
import * as express from 'express';

export const login = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
        res
            .send('This is the login route');
};
