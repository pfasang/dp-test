import 'reflect-metadata';

const express = require('express');
const bodyParser = require("body-parser");
import * as router from "./routers";
import {verifyUser} from "./controllers/externalController";

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!.'));
app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(router.testRouter)
    .use(verifyUser)
    .use(router.profileRouter);

app.listen(port);
console.log(`App is running on port: ${port}`);

export {app, port};
