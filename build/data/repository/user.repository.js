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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_db_config_1 = require("../../config/user.db.config");
const user_model_1 = require("../model/user.model");
class UserRepository {
    constructor() {
        this.db = (0, user_db_config_1.connect)();
        this.userRepository = this.db.sequelize.getRepository(user_model_1.Users);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Users = yield this.userRepository.findAll();
                console.log('users:::', Users);
                return Users;
            }
            catch (err) {
                console.error('An error occurred when retrieving users.');
                console.error(err);
                return [];
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            try {
                data = yield this.userRepository.findByPk(id);
                // const users = await this.userRepository.findOne({ where : { userId : id }})
                console.log('users:::', data);
            }
            catch (err) {
                console.error('An error occurred when retrieving the user.');
                console.error(err);
            }
            return data;
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = user;
            try {
                data = yield this.userRepository.findOne({ where: { email: user.email } });
                if (data == null) {
                    data = yield this.userRepository.create(user);
                }
                else {
                    console.error('The user already exists.');
                }
            }
            catch (err) {
                console.error('An error occurred when adding the user.');
                console.error(err);
            }
            return data;
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            try {
                data = yield this.userRepository.findOne({ where: { email: user.email } });
                if (data == null) {
                    console.error('The user does not exist.');
                }
                else {
                    data = yield this.userRepository.update(user, { where: { email: user.email } });
                }
            }
            catch (err) {
                console.error('An error occurred when updating the user.');
                console.error(err);
            }
            return data;
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            try {
                data = yield this.userRepository.findOne({ where: { email } });
                if (data == null) {
                    console.error('The user does not exist.');
                }
                else {
                    console.log('The user exists.');
                }
            }
            catch (err) {
                console.error('An error occurred when retrieving the user.');
                console.error(err);
            }
            return data;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            try {
                const users = yield this.userRepository.destroy({ where: { userId: id } });
                result = users > 0;
            }
            catch (err) {
                console.error('An error occurred when deleting the user.');
                console.error(err);
            }
            return result;
        });
    }
}
exports.UserRepository = UserRepository;
