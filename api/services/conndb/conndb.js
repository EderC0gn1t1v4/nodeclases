/**
 * 
 */
'use script';

// const Sequealize = require('sequelize');
// const dotenv = require('dotenv');

import { Sequelize } from "sequelize";
import { configDotenv } from 'dotenv';
configDotenv();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    'dialect': 'mysql',
    logging: false
});

/* Conexión con SQLITE: */
// const sequelize = new Sequelize('sqlite::memory:'); 

export default db;