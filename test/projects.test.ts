import {seedProjects} from "../src/database/seeds/seedFunctions";
import * as chai from "chai";
import {app} from "../src/server";
import 'chai-http';
import {projectListTestOutput, projectTestOutput} from "../src/utilities/validation/projectValidation";

chai.use(require('chai-http'));
const expect = chai.expect;

let projectID: number, inputBody, createRes;

const baseUrl = '/projects';
const jsonType = 'application/json';

describe('Project tests', () => {

    before(async () => {
        await seedProjects();
    });

    describe('GET all projects', () => {
        describe('Correct GET', () => {
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .get(`${baseUrl}`);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
                const {error} = projectListTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });

    describe('POST Create Project', () => {

        describe('Correct create', () => {
            before(async () => {

                inputBody = {
                    name: 'projectCreateCorrect',
                    description: 'Euismod Magna Pellentesque Venenatis Ullamcorper',
                    managerId: '2',
                    startDate: '2020-01-08',
                    endDate: '2020-01-10',
                };
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}`)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
                expect(res.type).to.eq(jsonType);
                const {error} = projectTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });

        describe('Validation Error', () => {
            before(async () => {
                inputBody = {
                    name: 'projectValidationError',
                    description: 'Euismod Magna Pellentesque Venenatis Ullamcorper',
                    managerId: '3',
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

    describe("PATCH Update Project", () => {
        describe("Correct UPDATE", () => {
            before(async () => {
                inputBody = {
                    name: 'projectUpdateCorrect',
                    description: 'Euismod Magna Pellentesque Venenatis Ullamcorper',
                    managerId: '2',
                    startDate: '2020-01-08',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                projectID = createRes.body.id;
            });
            it("returns 200", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/${projectID}`)
                    .send({endDate: '2020-03-10'});
                expect(res.status).to.eq(200);
                const {error} = projectTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
                expect(res.type).to.eq(jsonType);
            });
        });

        describe("Wrong ID in URL", () => {
            before(async () => {
                inputBody = {
                    name: 'projectUpdateWrongID',
                    description: 'Euismod Magna Pellentesque Venenatis Ullamcorper',
                    managerId: '4',
                    startDate: '2020-01-08',
                    endDate: '2020-01-10',
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
                    name: "projectWrongFields",
                    description: 'Euismod Magna Pellentesque Venenatis Ullamcorper',
                    managerId: '5',
                    startDate: '2019-09-23',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                projectID = createRes.body.id;
            });
            it("returns 400", async () => {
                const res = await chai.request(app)
                    .patch(`${baseUrl}/${projectID}`)
                    .send({
                        description: 2,
                        endDate: "xxx"
                    });
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });
    });

    describe("DELETE Project", () => {
        describe("Correct DELETE", () => {
            before(async () => {
                inputBody = {
                    name: 'toRemoveActivity',
                    description: 'Euismod Magna Pellentesque Venenatis Ullamcorper',
                    managerId: '1',
                    startDate: '2019-05-18',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                expect(createRes.status).to.eq(201);
                expect(createRes.type).to.eq(jsonType);
                projectID = createRes.body.id;
            });

            it("returns 204", async () => {
                const res = await chai.request(app)
                    .del(`${baseUrl}/${projectID}`);
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
