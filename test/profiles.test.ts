import {seedProfiles} from "../src/database/seeds/seedFunctions";
import {login} from "./utilities/testHelper";

import * as chai from "chai";
import {app} from "../src/server";
import {profileTestOutput} from "../src/utilities/validation/profileValidation";

const expect = chai.expect, validAdminUsername = 'john.doe@latasna.com', validAdminPassword = '12345678',
    validUsername = 'jozef.dressel@latasna.com', validPassword = '12345678';
let res, adminToken: string, userToken: string, userID: string, adminUser, inputBody, createRes;

const baseUrl = '/profile';
const jsonType = 'application/json';

describe('Profile tests', () => {

    before(async () => {
        await seedProfiles();
        res = await login(validAdminUsername, validAdminPassword);
        adminToken = res.body.token;
        adminUser = res.body.user;
        res = await login(validUsername, validPassword);
        userToken = res.body.token;
    });

    describe('GET profile by ADMIN', () => {
        describe('Correct GET profile', () => {
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .get(`${baseUrl}/1`)
                    .set('token', adminToken);
                expect(res.body.error).to.eq(undefined);
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(200);
                const {error} = profileTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });


    describe('POST Create Profile', () => {
        describe('Correct create by ADMIN', () => {
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}/1`)
                    .set('token', adminToken)
                    .send();
                expect(res.body.error).to.eq(undefined);
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(201);
                const {error} = profileTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });
});
