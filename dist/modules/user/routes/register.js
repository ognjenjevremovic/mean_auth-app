"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("../models/user.model");
const User = mongoose.model('User');
exports.register = (req, res, next) => {
    const { username, email, password } = req.body;
    const user = new User({
        username,
        email,
        password
    });
    user.save((error, document) => {
        res
            .send(document);
    });
};
