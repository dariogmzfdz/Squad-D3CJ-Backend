"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const utils_1 = require("../utils/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userService = new user_service_1.UserService();
exports.userController = {
    getUsers: (_req, res) => {
        void userService.getUsers().then(result => {
            res.send(result);
        });
    },
    getUserById: (req, res) => {
        userService.getUserById(+req.params.id).then(result => {
            return (result != null) ? res.send(result) : res.sendStatus(404);
        });
    },
    addUser: (req, res) => {
        try {
            const inputUser = (0, utils_1.parseInputUser)(req.body);
            userService.addUser(inputUser).then(result => {
                res.json(result);
            });
        }
        catch (e) {
            res.sendStatus(400);
        }
    },
    deleteUser: (req, res) => {
        userService.deleteUser(+req.params.id).then(result => {
            return (result != null) ? res.send(result) : res.sendStatus(404);
        });
    },
    login: (req, res) => {
        try {
            const inputUser = (0, utils_1.parseInputLogin)(req.body);
            userService.login(inputUser.email).then(result => {
                if (result != null) {
                    const token = jsonwebtoken_1.default.sign({ userId: result.userId, username: result.username, email: result.email, roles: result.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    res.json({ token });
                }
                else {
                    res.sendStatus(404);
                }
            });
        }
        catch (e) {
            res.sendStatus(400);
        }
    }
};
