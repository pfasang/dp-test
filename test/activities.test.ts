import {seedActivities} from "../src/database/seeds/seedFunctions";
import * as chai from "chai";
import {app} from "../src/server";
import {
    activityOutput,
    activityListOutput,
} from "../src/utilities/validation/activityValidation";


import 'chai-http';

chai.use(require('chai-http'));

const expect = chai.expect;
let activityID: number, inputBody, createRes;

const baseUrl = '/activities';
const jsonType = 'application/json';

describe('Activity tests', () => {
    describe('GET all activities', () => {
        describe('Correct GET activities', () => {
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .get(`${baseUrl}`);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
                const {error} = activityListOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });

    describe('GET user activities', () => {
        describe('Correct GET activities', () => {
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .get(`${baseUrl}/1`);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
                const {error} = activityListOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });

    describe('POST Create Activity', () => {

        describe('Correct create', () => {
            before(async () => {

                inputBody = {
                    name: 'activityCreateCorrect',
                    project: '2',
                    user: '7',
                    startDate: '2020-01-08',
                };
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}`)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
                expect(res.type).to.eq(jsonType);
                const {error} = activityOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });

        describe('Validation Error', () => {
            before(async () => {
                inputBody = {
                    name: 'activityValidationError',
                    project: '3',
                    user: '7',
                    startDate: "xxx"
                };
            });
            it('returns 400', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}`)
                    .send(inputBody);
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });

    describe("PATCH Update Activity", () => {
        describe("Correct UPDATE", () => {
            before(async () => {
                inputBody = {
                    name: 'activityUpdateCorrect',
                    project: '3',
                    user: '6',
                    startDate: '2020-02-08',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                activityID = createRes.body.id;
            });
            it("returns 200", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/${activityID}`)
                    .send({endDate: '2020-03-10'});
                expect(res.status).to.eq(200);
                const {error} = activityOutput.validate(res.body);
                expect(error).to.eq(undefined);
                expect(res.type).to.eq(jsonType);
            });
        });

        describe("Wrong ID in URL", () => {
            before(async () => {
                inputBody = {
                    name: 'activityUpdateWrongID',
                    user: '5',
                    startDate: '2012-05-18',
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
                    name: "activityUpdateWrongFields",
                    project: '4',
                    user: '4',
                    startDate: '2019-09-23',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                activityID = createRes.body.id;
            });
            it("returns 400", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/${activityID}`)
                    .send({
                        endDate: "test",
                        xxx: 33
                    });
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });

    describe("DELETE Activity", () => {
        describe("Correct DELETE", () => {
            before(async () => {
                inputBody = {
                    name: 'toRemoveActivity',
                    project: '1',
                    user: '5',
                    startDate: '2019-05-18',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(createRes.status).to.eq(201);
                expect(createRes.type).to.eq(jsonType);
                activityID = createRes.body.id;
            });

            it("returns 204", async () => {
                const res = await chai.request(app)
                    .del(`${baseUrl}/${activityID}`);
                expect(res.status).to.eq(204);
            });
        });

        describe("Wrong ID in URL", () => {
            it("returns 404", async () => {
                const res = await chai.request(app)
                    .del(`${baseUrl}/0`)
                expect(res.status).to.eq(404);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });
});
