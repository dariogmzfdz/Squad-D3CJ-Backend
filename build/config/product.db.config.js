"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const product_model_1 = require("./../data/model/product.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const connect = () => {
    console.log('===============================');
    console.log('Database environment variables:');
    console.log(`Hostname: ${process.env.DB_HOST}`);
    console.log(`Port: ${process.env.DB_PORT}`);
    console.log(`Database: ${process.env.DB_NAME}`);
    console.log('===============================');
    const hostName = (process.env.DB_HOST == null) ? process.env.DB_HOST : 'localhost';
    const port = !(process.env.DB_PORT == null) ? process.env.DB_PORT : 5432;
    const userName = 'postgres';
    const password = 'postgres';
    const database = !(process.env.DB_NAME == null) ? process.env.DB_NAME : 'postgres';
    const schema = 'D3CJ';
    const dialect = 'postgres';
    const sequelize = new sequelize_typescript_1.Sequelize(database, userName, password, {
        host: hostName,
        port: +port,
        dialect,
        repositoryMode: true,
        schema,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    sequelize.addModels([product_model_1.Products]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    return db;
};
exports.connect = connect;
