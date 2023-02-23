"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
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
const parseRole = (inputRole) => {
    if (!isString(inputRole) && !isRole(inputRole)) {
        throw new Error('Rol de usuario incorrecto o no presente');
    }
    return inputRole;
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
const isRole = (role) => {
    return Object.values(types_1.UserRole).includes(role);
};
const parseInputUser = (object) => {
    const newUser = {
        username: parseUsername(object.username),
        password: parsePassword(object.password),
        role: parseRole(object.role),
        email: parseEmail(object.email)
    };
    return newUser;
};
exports.default = parseInputUser;
