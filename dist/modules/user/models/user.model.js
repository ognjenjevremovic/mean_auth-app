"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
function hashPassword(next) {
    function genPassword(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt.genSalt().catch((err) => err);
            if (salt instanceof Error)
                return next(salt);
            const hashed = yield bcrypt.hash(user.password, salt).catch((err) => err);
            if (hashed instanceof Error)
                return next(hashed);
            user.password = hashed;
            next();
        });
    }
    genPassword(this);
}
;
function addDate(next) {
    const date = new Date();
    this.dateCreated = {
        human: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
        timestamp: date.getTime(),
        date
    };
    next();
}
;
UserSchema.pre('save', hashPassword);
UserSchema.pre('save', addDate);
exports.User = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map