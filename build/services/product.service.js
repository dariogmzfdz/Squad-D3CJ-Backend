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
exports.mapProductResult = exports.ProductService = void 0;
const product_repository_1 = require("../data/repository/product.repository");
class ProductService {
    constructor() {
        this.productRepository = new product_repository_1.ProductRepository();
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productRepository.getAllProducts();
            return products;
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.getProductById(id);
            return product;
        });
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield this.productRepository.addProduct(product);
            return newProduct;
        });
    }
    updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield this.productRepository.updateProduct(id, product);
            return updatedProduct;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProduct = yield this.productRepository.deleteProduct(id);
            return deletedProduct;
        });
    }
}
exports.ProductService = ProductService;
const mapProductResult = (product) => {
    const returnProduct = {
        productId: product.productId,
        color: product.color,
        model: product.model,
        brand: product.brand,
        carYear: product.carYear,
        material: product.material,
        amount: product.amount,
        price: product.price
    };
    return returnProduct;
};
exports.mapProductResult = mapProductResult;
