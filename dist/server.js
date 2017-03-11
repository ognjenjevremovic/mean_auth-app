"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const config_1 = require("./config");
require("./database");
const opn = require("opn");
const cors = require("cors");
const app = express();
const modules_1 = require("./modules");
const userModule = new modules_1.User();
if (config_1.NODE_ENV === 'dev' || config_1.NODE_ENV === 'development')
    app.use(cors());
app.use(morgan(config_1.NODE_ENV));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('static', express.static(path.join(__dirname, 'client')));
app.use('/user', userModule.userRoutes);
app.get('/', (req, res, next) => {
    res
        .send('Index route');
});
app.listen(config_1.PORT, () => {
    console.log(`
        Starting. . .
        Server listening on the port ${config_1.PORT}

        If you're not redirected automaticly,
        go to:
            http://localhost:${config_1.PORT}
    `);
    if (config_1.NODE_ENV === 'dev' || config_1.NODE_ENV === 'development')
        opn(`http://localhost:${config_1.PORT}`);
});
