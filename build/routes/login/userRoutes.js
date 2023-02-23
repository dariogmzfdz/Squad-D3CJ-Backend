"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController = require('../Controllers/userController');
const { signup, login } = userController;
const userAuth = require('../Middlewares/userAuth');
const router = express_1.default.Router();
router.post('/signup', userAuth.saveUser, signup);
router.post('/login', login);
module.exports = router;
