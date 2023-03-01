"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("../services/product.service");
const utils_1 = require("../utils/utils");
const productService = new product_service_1.ProductService();
exports.productController = {
    getAllProducts: (_req, res) => {
        void productService.getAllProducts().then(result => {
            res.send(result);
        });
    },
    getProductById: (req, res) => {
        productService.getProductById(+req.params.id).then(result => {
            return (result != null) ? res.send(result) : res.sendStatus(404);
        });
    },
    addProduct: (req, res) => {
        try {
            const inputProduct = (0, utils_1.parseInputProduct)(req.body);
            productService.addProduct(inputProduct).then(result => {
                res.json(result);
            });
        }
        catch (e) {
            res.sendStatus(400);
        }
    },
    deleteProduct: (req, res) => {
        productService.deleteProduct(+req.params.id).then(result => {
            return (result != null) ? res.send(result) : res.sendStatus(404);
        });
    },
    updateProduct: (req, res) => {
        productService.updateProduct(+req.params.id, req.body).then(result => {
            return (result != null) ? res.send(result) : res.sendStatus(404);
        });
    }
};
