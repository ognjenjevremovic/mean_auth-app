"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const opn = require("opn");
const cors = require("cors");
const app = express();
dotenv.config();
const { DB_CONNECT, SECRET, NODE_ENV, PORT } = process.env;
if (NODE_ENV === 'dev' || NODE_ENV === 'development')
    app.use(cors());
mongoose.connect(DB_CONNECT);
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
app.use(morgan(NODE_ENV));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('static', express.static(path.join(__dirname, 'client')));
const routes_1 = require("./routes");
app.use('/user', routes_1.userRoutes);
app.get('/', (req, res, next) => {
    res
        .send('Index route');
});
app.listen(PORT, () => {
    console.log(`
        Starting. . .
        Server listening on the port ${PORT}

        If you're not redirected automaticly,
        go to:
            http://localhost:${PORT}
    `);
    if (NODE_ENV === 'dev' || NODE_ENV === 'development')
        opn(`http://localhost:${PORT}`);
});
