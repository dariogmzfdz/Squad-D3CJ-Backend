"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let Products = class Products extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'product id'
    }),
    __metadata("design:type", Number)
], Products.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'color'
    }),
    __metadata("design:type", String)
], Products.prototype, "color", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'model'
    }),
    __metadata("design:type", String)
], Products.prototype, "model", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'brand'
    }),
    __metadata("design:type", String)
], Products.prototype, "brand", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'carYear'
    }),
    __metadata("design:type", Number)
], Products.prototype, "carYear", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'material'
    }),
    __metadata("design:type", String)
], Products.prototype, "material", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'amount'
    }),
    __metadata("design:type", Number)
], Products.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'price'
    }),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
Products = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        tableName: 'Product',
        timestamps: false
    })
], Products);
exports.Products = Products;
