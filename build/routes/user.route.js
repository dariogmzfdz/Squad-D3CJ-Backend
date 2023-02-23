"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
/* const userAuth = require('../middleware/userAuth') */
const router = express_1.default.Router();
router.get('/', user_controller_1.userController.getUsers);
router.get('/:id', user_controller_1.userController.getUserById);
router.delete('/:id', user_controller_1.userController.deleteUser);
router.post('/signup', user_controller_1.userController.addUser);
router.post('/login', user_controller_1.userController.login);
exports.default = router;
module.exports = router;
