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
exports.mapUserResult = exports.UserService = void 0;
const user_repository_1 = require("../data/repository/user.repository");
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.userRepository.getAllUsers().then(result => {
                const users = [];
                result.forEach(dbUser => {
                    users.push((0, exports.mapUserResult)(dbUser));
                });
                return users;
            }).catch(err => {
                console.error('An error occurred when retrieving users.');
                console.error(err);
                throw (err);
            });
            return userPromise;
        });
    }
    getUsersSinPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.userRepository.getAllUsers().then(result => {
                const users = [];
                result.map(({ id, username, role, email }) => {
                    return { id, username, role, email };
                });
                return users;
            }).catch(err => {
                console.error('An error occurred when retrieving users.');
                console.error(err);
                throw (err);
            });
            return userPromise;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.userRepository.getUserById(id).then(result => {
                if (result != null) {
                    return (0, exports.mapUserResult)(result);
                }
                else {
                    return undefined;
                }
            }).catch(err => {
                console.error('An error occurred when retrieving the user.');
                console.error(err);
                return undefined;
            });
            return userPromise;
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.userRepository.addUser(user).then(result => {
                return (0, exports.mapUserResult)(result);
            }).catch(err => {
                console.error('An error occurred when adding the user.');
                console.error(err);
                throw (err);
            });
            return userPromise;
        });
    }
    /* async updateUser (user: User): Promise<User | undefined> {
      const userPromise = await this.userRepository.updateUser(user).then(result => {
        if (result != null) {
          return mapUserResult(result)
        } else {
          return undefined
        }
      }).catch(err => {
        console.error('An error occurred when updating the user.')
        console.error(err)
        return undefined
      })
      return userPromise
    } */
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.userRepository.login(email).then(result => {
                if (result != null) {
                    return (0, exports.mapUserResult)(result);
                }
                else {
                    return undefined;
                }
            }).catch(err => {
                console.error('An error occurred when logging in.');
                console.error(err);
                return undefined;
            });
            return userPromise;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this.userRepository.deleteUser(id).then(result => {
                return result;
            }).catch(err => {
                console.error('An error occurred when deleting the user.');
                console.error(err);
                throw (err);
            });
            return userPromise;
        });
    }
}
exports.UserService = UserService;
const mapUserResult = (user) => {
    const returnUser = {
        userId: user.dataValues.userId,
        username: user.dataValues.username,
        password: user.dataValues.password,
        role: user.dataValues.role,
        email: user.dataValues.email
    };
    return returnUser;
};
exports.mapUserResult = mapUserResult;
