"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express_1.default.Router();
productRouter.get('/', product_controller_1.productController.getAllProducts);
productRouter.get('/:id', product_controller_1.productController.getProductById);
productRouter.post('/', product_controller_1.productController.addProduct);
productRouter.delete('/:id', product_controller_1.productController.deleteProduct);
productRouter.put('/:id', product_controller_1.productController.updateProduct);
exports.default = productRouter;
module.exports = productRouter;
