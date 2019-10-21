import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {port} from '../../src/server';
let app = 'http://localhost:' + port;

chai.use(chaiHttp)

//test login function
export const login = (email: string, password: string) => {
    return chai.request(app)
        .post('/auth')
        .send({
            email: email,
            password: password
        });
}

//function to pick random items from object
export const randomFields = (fields: object): object => {
    let keys = Object.keys(fields);
    const numberOfDeletion =  Math.floor(Math.random() * keys.length);
    for (let i = 0; i < numberOfDeletion; i++) {
        var pickedKeyNum = Math.floor(Math.random() * keys.length);
        delete fields[keys[pickedKeyNum]];
        keys.splice(pickedKeyNum,1);
    }
    return fields;
}