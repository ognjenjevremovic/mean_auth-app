"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
exports.register = (req, res, next) => {
    const { username, email, password } = req.body;
    const user = new user_model_1.User({
        username,
        email,
        password
    });
    user.save((error, document) => {
        if (error)
            return res.send(error.message);
        res
            .send(document);
    });
};
//# sourceMappingURL=register.js.map