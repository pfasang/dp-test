import {port} from '../src/server';
import {seedUsers} from "../src/database/seeds/seedFunctions";
import {
    userTestOutput,
} from '../src/utilities/validation/userValidation';

const app = 'http://localhost:' + port;
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect, validUsername = "john.doe@latasna.com", validPassword = "12345678",
    wrongUsername = "wrong username", wrongPassword = "wrong password", authUrl = "/auth";
chai.use(chaiHttp);

const jsonType = 'application/json';

describe("Authorization tests", () => {
    before(async () => {
        await seedUsers();
    });

    describe("Login with correct parameters", () => {
        it("returns 200", async () => {
            const res = await chai.request(app)
                .post(authUrl)
                .send({username: validUsername, password: validPassword});
            expect(res.status).to.eq(200);
            const {error} = userTestOutput.validate(res.body.user);
            expect(error).to.eq(undefined);
            return res;
        });
    });

    describe("Login with missing parameters", () => {
        describe("Missing username", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({password: validPassword})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
        describe("Missing password", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({username: validUsername})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
        describe("Missing username and password", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
    });
    describe("Login with wrong parameters", () => {

        describe("Wrong username", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({username: wrongUsername})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
        describe("Wrong password", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({password: wrongPassword})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
        describe("Wrong username and password", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({username: wrongUsername, password: wrongPassword})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
        describe("Wrong username and valid password", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({username: wrongUsername, password: validPassword})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
        describe("Valid username and wrong password", () => {
            it("returns 401", () => {
                return chai.request(app)
                    .post(authUrl)
                    .send({username: validUsername, password: wrongPassword})
                    .catch(err => {
                        expect(err.response.type).to.eq(jsonType);
                        expect(err.status).to.eq(401);
                    });
            });
        });
    });
});
