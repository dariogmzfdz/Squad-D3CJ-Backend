"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.getEntries = void 0;
const products_json_1 = __importDefault(require("./products.json"));
const products = products_json_1.default;
const getEntries = () => products;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = products.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const addEntry = (newProductEntry) => {
    const newEntry = Object.assign({ id: Math.max(...products.map(p => p.id)) + 1 }, newProductEntry);
    products.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;
