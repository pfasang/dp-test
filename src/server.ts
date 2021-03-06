import 'reflect-metadata';
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
import * as router from "./routers";

const app = express();
const port = process.env.PORT || 4080;

app.get('/', (req, res) => res.send('Hello World!.'));
app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(router.profileRouter)
    .use(router.skillRouter)
    .use(router.activityRouter)
    .use(router.projectRouter)

app.listen(port,()=>{
    console.log(`App is running on port: ${port}`);
});

export {app, port};
