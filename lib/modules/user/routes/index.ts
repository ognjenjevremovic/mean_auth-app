//  Dependacies
import * as express from 'express';

//  Routes
// import { login } from './login';
import { register } from './register';
import { authenticate } from './authenticate';

//  Define and export the router
export const router: express.Router = express.Router();

//  Dummy routes
router.post('/register', register);
router.post('/authenticate', authenticate);
// router.get('/profile',login);
