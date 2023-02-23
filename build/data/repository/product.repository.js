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
exports.ProductRepository = void 0;
const product_db_config_1 = require("../../config/product.db.config");
const product_model_1 = require("../model/product.model");
class ProductRepository {
    constructor() {
        this.db = (0, product_db_config_1.connect)();
        this.productRepository = this.db.sequelize.getRepository(product_model_1.Products);
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Products = yield this.productRepository.findAll();
                console.log('products:::', Products);
                return Products;
            }
            catch (err) {
                console.error('An error occurred when retrieving products.');
                console.error(err);
                return [];
            }
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            try {
                data = yield this.productRepository.findByPk(id);
                console.log('products:::', data);
            }
            catch (err) {
                console.error('An error occurred when retrieving the product.');
                console.error(err);
            }
            return data;
        });
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = product;
            try {
                data = yield this.productRepository.create(product);
            }
            catch (err) {
                console.error('An error occurred when adding the product.');
                console.error(err);
            }
            return data;
        });
    }
    updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = product;
            try {
                data = yield this.productRepository.update(product, { where: { productId: id } });
            }
            catch (err) {
                console.error('An error occurred when updating the product.');
                console.error(err);
            }
            return data;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            try {
                data = yield this.productRepository.destroy({ where: { productId: id } });
            }
            catch (err) {
                console.error('An error occurred when deleting the product.');
                console.error(err);
            }
            return data;
        });
    }
    getProductsByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            try {
                data = yield this.productRepository.findAll({ where: { category: category } });
            }
            catch (err) {
                console.error('An error occurred when retrieving the products by category.');
                console.error(err);
            }
            return data;
        });
    }
}
exports.ProductRepository = ProductRepository;
