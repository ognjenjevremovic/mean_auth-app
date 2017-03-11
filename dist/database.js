"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("./config");
mongoose.connect(config_1.DB_CONNECT);
mongoose.connection.on('connect', () => {
    console.log(`
        Successfuly connected to the database!
    `);
});
mongoose.connection.on('error', (err) => {
    console.log(`
        Error connecting to the database:
        ${err.message}
    `);
});
