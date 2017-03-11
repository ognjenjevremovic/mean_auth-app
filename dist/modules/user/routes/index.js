"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const register_1 = require("./register");
const authenticate_1 = require("./authenticate");
exports.router = express.Router();
exports.router.post('/register', register_1.register);
exports.router.post('/authenticate', authenticate_1.authenticate);
