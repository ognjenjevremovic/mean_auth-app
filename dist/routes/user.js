"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
exports.router = express.Router();
const demo = 'Demo route :';
exports.router.get('/register', (req, res, next) => {
    res
        .send(`${demo} /users/register`);
});
exports.router.get('/authenticate', (req, res, next) => {
    res
        .send(`${demo} /users/authenticate`);
});
exports.router.get('/login', (req, res, next) => {
    res
        .send(`${demo} /users/login`);
});
