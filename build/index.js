"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/first */
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const app = (0, express_1.default)();
const cookieParser = require('cookie-parser');
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
app.use(express_1.default.json());
const allowedOrigins = ['http://localhost:62243'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(cookieParser());
app.get('/ping', (_req, res) => {
    console.log('someone pinged here' + ' ' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/api/users', user_route_1.default);
app.use('/api/products', product_route_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
