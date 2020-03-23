import {seedProfiles} from "../src/database/seeds/seedFunctions";
import {login} from "./utilities/testHelper";

import * as chai from "chai";
import {app} from "../src/server";
import {profileTestOutput} from "../src/utilities/validation/profileValidation";

const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect, validAdminUsername = 'john.doe@latasna.com', validAdminPassword = '12345678',
    validUsername = 'jozef.dressel@latasna.com', validPassword = '12345678';
let res, adminToken: string, userToken: string, userID: number, adminUser, inputBody, createRes;

const baseUrl = '/profile';
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

        describe('Correct create', () => {
            before(async () => {

                inputBody = {
                    firstName: 'Correct',
                    lastName: 'Create',
                    title: 'Mgr.',
                };
                userID = 11;
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}/${userID}`)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
                expect(res.type).to.eq(jsonType);
                const {error} = profileTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });

        describe('User profile already exists', () => {
            const userID = 1;
            it('returns 404', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}/${userID}`);
                expect(res.status).to.eq(404);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });

        describe('Validation Error', () => {
            const inputBody = {
                firstName: '',
                lastName: 'Missing FirstName',
                title: 'Mgr.',
            };
            const userID = 12;

            it('returns 400', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}/${userID}`)
                    .send(inputBody);
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });

    describe("PUT Update Profile", () => {
        describe("Correct Update", () => {
            before(async () => {
                const userID = 20;
                inputBody = {
                    firstName: 'Correct',
                    lastName: 'ToUpdate',
                    title: 'Mgr.',
                };
                createRes = await chai.request(app)
                    .post(`${baseUrl}/${userID}`)
                    .send(inputBody);
                inputBody.lastName = "Update"
            });
            describe("Correct UPDATE", () => {
                it("returns 200", async () => {
                    const res = await
                        chai.request(app)
                            .patch(`${baseUrl}/${userID}`)
                            .send(inputBody);
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
                        lastName: 'Update',
                    };
                });

                it("returns 404", async () => {
                    const res = await chai.request(app)
                        .patch(`${baseUrl}/0`)
                        .send(inputBody);
                    expect(res.status).to.eq(404);
                    expect(res.type).to.eq(jsonType);
                    expect(res.body.error).to.not.eq(undefined);
                });
            });

            describe("Wrong fields", () => {
                before(async () => {
                    inputBody = {
                        firstName: 'WrongFields',
                        lastName: 'Update',
                    };
                    createRes = await chai.request(app)
                        .post(baseUrl)
                        .send(inputBody);
                    userID = createRes.body.id;
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
                    inputBody = {
                        firstName: 'WrongPermission',
                        lastName: 'Update',
                    };
                    createRes = await chai.request(app)
                        .post(baseUrl)
                        .send(inputBody);
                    userID = createRes.body.id;
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
});

// TODO getUserProfile, getAllProfiles
