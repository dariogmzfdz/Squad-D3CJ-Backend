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
const axios_1 = __importDefault(require("axios"));
const user_route_1 = __importDefault(require("./routes/user.route"));
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
app.get('/users', (_req, res) => {
    axios_1.default.get('https://jsonplaceholder.typicode.com/users')
        .then(response => res.json(response.data))
        .catch(err => {
        console.error('An error occurred when retrieving users.');
        console.error(err);
        res.sendStatus(500);
    });
});
app.get('/users/count', (_req, res) => {
    axios_1.default.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        if (response.data != null && response.data.length > 0) {
            res.json(response.data.length);
        }
        else {
            res.json(0);
        }
    })
        .catch(err => {
        console.error('An error occurred when retrieving the number of users.');
        console.error(err);
        res.sendStatus(500);
    });
});
app.get('/users/:id', (req, res) => {
    axios_1.default.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        if (response.data != null && response.data.length > 0) {
            res.json(response.data.filter((user) => user.id === req.params.id));
        }
        else {
            res.sendStatus(404);
        }
    })
        .catch(err => {
        console.error('An error occurred while retrieving the user.');
        console.error(err);
        res.sendStatus(500);
    });
});
app.use('/api/users', user_route_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
