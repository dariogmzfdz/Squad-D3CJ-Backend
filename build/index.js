"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
const PORT = 5000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here' + ' ' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/api/products', products_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
