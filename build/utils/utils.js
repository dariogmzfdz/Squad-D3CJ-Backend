"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInputProduct = exports.parseInputLogin = exports.parseInputUser = void 0;
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
const parseColor = (inputColor) => {
    if (!isString(inputColor)) {
        throw new Error('Color incorrecto o no presente');
    }
    return inputColor;
};
const parseModel = (inputModel) => {
    if (!isString(inputModel)) {
        throw new Error('Modelo incorrecto o no presente');
    }
    return inputModel;
};
const parseBrand = (inputBrand) => {
    if (!isString(inputBrand)) {
        throw new Error('Marca incorrecta o no presente');
    }
    return inputBrand;
};
const parseCarYear = (inputCarYear) => {
    if (!isNumber(inputCarYear)) {
        throw new Error('Año incorrecto o no presente');
    }
    return inputCarYear;
};
const parseMaterial = (inputMaterial) => {
    if (!isString(inputMaterial)) {
        throw new Error('Material incorrecto o no presente');
    }
    return inputMaterial;
};
const parseAmount = (inputAmount) => {
    if (!isNumber(inputAmount)) {
        throw new Error('Cantidad incorrecta o no presente');
    }
    return inputAmount;
};
const parsePrice = (inputPrice) => {
    if (!isNumber(inputPrice)) {
        throw new Error('Precio incorrecto o no presente');
    }
    return inputPrice;
};
const isNumber = (number) => {
    return typeof number === 'number';
};
const parseInputLogin = (object) => {
    const newUser = {
        email: parseUsername(object.email),
        password: parsePassword(object.password)
    };
    return newUser;
};
exports.parseInputLogin = parseInputLogin;
const parseInputProduct = (object) => {
    const newProduct = {
        color: parseColor(object.color),
        model: parseModel(object.model),
        brand: parseBrand(object.brand),
        carYear: parseCarYear(object.carYear),
        material: parseMaterial(object.material),
        amount: parseAmount(object.amount),
        price: parsePrice(object.price)
    };
    return newProduct;
};
exports.parseInputProduct = parseInputProduct;
