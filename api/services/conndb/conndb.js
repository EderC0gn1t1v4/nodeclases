/**
 * 
 */
'use script';

const Sequealize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequealize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    'dialect': 'mysql',
    logging: false
});

module.exports = db;

