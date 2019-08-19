"use strict";
// import mysql from 'promise-mysql';
// const mysql = require('promise-mysql');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('Se conecto a la BD correctamente');
});
//      SEGUN EL VIDEO COMO LO REALIZA LAS LINEAS DE CODIGO SGTE, PERO LO HICE DE OTRA FORMA QUE ENCONTRE EN FOROS
// pool.getConnection()
//     .then( connection => {
//         pool.releaseConnection(connection);
//         console.log("DB is connected");
//     });
exports.default = pool;
// codigo posible a implementar , por si no llego a encontar la solucion con el promise-mysql
// import keys from './keys'
// const util = require('util')
// const mysql = require('mysql')
// const pool = mysql.createPool(keys.database)
// // Ping database to check for common exception errors.
// pool.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       console.error('Database connection was closed.')
//     }
//     if (err.code === 'ER_CON_COUNT_ERROR') {
//       console.error('Database has too many connections.')
//     }
//     if (err.code === 'ECONNREFUSED') {
//       console.error('Database connection was refused.')
//     }
//   }
//   if (connection) connection.release()
//   return
// })
// // Promisify for Node.js async/await.
// pool.query = util.promisify(pool.query)
// module.exports = pool
