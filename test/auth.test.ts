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
            expect(res.body.error).to.eq(undefined);
        });
    });
    describe("Login with missing parameters", () => {
        describe("Missing username", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({password: validPassword});
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
        describe("Missing password", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({username: validUsername});
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
        describe("Missing username and password", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl);
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });
    describe("Login with wrong parameters", () => {

        describe("Wrong username", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({username: wrongUsername})
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
        describe("Wrong password", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({password: wrongPassword})
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
        describe("Wrong username and password", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({username: wrongUsername, password: wrongPassword})
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
        describe("Wrong username and valid password", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({username: wrongUsername, password: validPassword})
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
        describe("Valid username and wrong password", () => {
            it("returns 401", async () => {
                const res = await chai.request(app)
                    .post(authUrl)
                    .send({username: validUsername, password: wrongPassword})
                expect(res.type).to.eq(jsonType);
                expect(res.status).to.eq(401);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });
});
