import {seedProfiles} from "../src/database/seeds/seedFunctions";
import {login} from "./utilities/testHelper";

import * as chai from "chai";
import {app} from "../src/server";
import {profileTestOutput} from "../src/utilities/validation/profileValidation";

const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect, validAdminUsername = 'john.doe@latasna.com', validAdminPassword = '12345678',
    validUsername = 'jozef.dressel@latasna.com', validPassword = '12345678';
let res, adminToken: string, userToken: string, userID: string, adminUser, inputBody, createRes;

const baseUrl = '/profiles';
const jsonType = 'application/json';

describe('Profile tests', () => {
    describe('GET user profile by ADMIN', () => {
        describe('Correct GET profile', () => {
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .get(`${baseUrl}/1`)
                expect(res.body.error).to.eq(undefined);
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(200);
                const {error} = profileTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });

    describe('POST Create Profile', () => {

        describe('Correct Create', () => {
            before(async () => {
                inputBody = {
                    firstName: 'Correct',
                    lastName: 'Create',
                    title: 'Mgr.',
                    user: '11',
                };
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
                expect(res.type).to.eq(jsonType);
                const {error} = profileTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });

        describe('User profile already exists', () => {
            before(async () => {
                inputBody = {
                    firstName: 'Profile',
                    lastName: 'Exists',
                    user: '11',
                };
            });
            it('returns 404', async () => {
                const res = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(res.status).to.eq(404);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });

        describe('Validation Error', () => {
            before(async () => {
                 inputBody = {
                    firstName: '',
                    lastName: 'Missing FirstName',
                    title: 'Mgr.',
                    user: '12',
                };
            });
            it('returns 400', async () => {
                const res = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });

    describe("PUT Update Profile", () => {
        describe("Correct UPDATE", () => {
            before(async () => {
                userID = '20';
                inputBody = {
                    firstName: 'Correct',
                    lastName: 'ToUpdate',
                    title: 'Mgr.',
                    user: userID,
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(createRes.status).to.eq(201);
                expect(createRes.type).to.eq(jsonType);
            });
            it("returns 200", async () => {
                const res = await
                    chai.request(app)
                        .patch(`${baseUrl}/${userID}`)
                        .send({lastName: "Update"});
                const {error} = profileTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
            });
        });

        describe("Wrong ID in URL", () => {
            before(() => {
                inputBody = {
                    firstName: 'WrongID',
                    lastName: 'toUpdate',
                };
            });

            it("returns 404", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/0`)
                    .send({lastName: "Update"});
                expect(res.status).to.eq(404);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });

        describe("Wrong fields", () => {
            before(async () => {
                userID = '22';
                inputBody = {
                    firstName: 'WrongFields',
                    lastName: 'Update',
                    user: userID,
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(createRes.status).to.eq(201);
                expect(createRes.type).to.eq(jsonType);
            });
            it("returns 400", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/${userID}`)
                    .send({title: 5444});
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });

        xdescribe("Wrong Permission", () => {
            before(async () => {
                userID = '23';
                inputBody = {
                    firstName: 'WrongPermission',
                    lastName: 'Update',
                    user: userID,
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(createRes.status).to.eq(201);
                expect(createRes.type).to.eq(jsonType);
            });
            it("returns 403", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/${userID}`)
                    .send(inputBody);
                expect(res.status).to.eq(403);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });
});

// TODO getUserProfile, getAllProfiles
