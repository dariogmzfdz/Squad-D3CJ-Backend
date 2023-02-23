"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
const db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize,
    users: null
};
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = sequelize;
db.users = require('./userModelLogin')(sequelize, sequelize_1.DataTypes);
module.exports = db;
