//  Dependancies
import * as express from 'express';

export const authenticate = (
        req  : express.Request,
        res  : express.Response,
        next : express.NextFunction
    ) => {
        res
            .send('This is the authenticate route');
};
