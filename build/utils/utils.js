"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInputLogin = exports.parseInputUser = void 0;
const parseUsername = (inputUsername) => {
    if (!isString(inputUsername)) {
        throw new Error('Nombre de usuario incorrecto o no presente');
    }
    return inputUsername;
};
const parsePassword = (inputPassword) => {
    if (!isString(inputPassword)) {
        throw new Error('Contraseña incorrecta o no presente');
    }
    return inputPassword;
};
const parseEmail = (inputEmail) => {
    if (!isString(inputEmail)) {
        throw new Error('Email incorrecto o no presente');
    }
    return inputEmail;
};
const isString = (string) => {
    return typeof string === 'string';
};
const parseInputUser = (object) => {
    const newUser = {
        username: parseUsername(object.username),
        password: parsePassword(object.password),
        /* role: parseRole(object.role), */
        email: parseEmail(object.email)
    };
    return newUser;
};
exports.parseInputUser = parseInputUser;
const parseInputLogin = (object) => {
    const newUser = {
        email: parseUsername(object.email),
        password: parsePassword(object.password)
    };
    return newUser;
};
exports.parseInputLogin = parseInputLogin;
