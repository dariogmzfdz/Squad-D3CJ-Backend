"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error('Incorrect or missing name');
    }
    return nameFromRequest;
};
const isNumber = (num) => {
    return typeof num === 'number' || num instanceof Number;
};
const parsePrice = (price) => {
    if (!isNumber(price)) {
        throw new Error('Incorrect or missing price');
    }
    return price;
};
const toNewProductEntry = (object) => {
    const newEntry = {
        name: parseName(object.name),
        price: parsePrice(object.price)
    };
    return newEntry;
};
exports.default = toNewProductEntry;
