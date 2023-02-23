"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('../data/model/login/userModelLogin');
console.log(User);
const saveUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = yield User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (username) {
            return res.json(409).send('username already taken');
        }
        const emailcheck = yield User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (emailcheck) {
            return res.json(409).send('Authentication failed');
        }
        next();
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    saveUser
};
