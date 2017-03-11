//  Dependacies
import * as express from 'express';

//  Define and export the router
export const router: express.Router = express.Router();

//  For development purposes
const demo: string = 'Demo route :';

//  Dummy routes
router.get('/register', (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
    res
        .send(`${demo} /users/register`);
});
router.get('/authenticate', (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
    res
        .send(`${demo} /users/authenticate`);
});
router.get('/login', (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
    res
        .send(`${demo} /users/login`);
});
