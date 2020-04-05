
import * as chai from "chai";
import {app} from "../src/server";
import {
    skillTestOutput,
    skillListTestOutput
} from "../src/utilities/validation/skillValidation";

const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
let skillID: number, inputBody, createRes;

const baseUrl = '/skills';
const jsonType = 'application/json';

describe('Skills tests', () => {
    describe('GET all skills', () => {
        describe('Correct GET skills', () => {
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .get(`${baseUrl}`)
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
                const {error} = skillListTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });
    });

    describe('POST Create Skill', () => {

        describe('Correct create', () => {
            before(async () => {

                inputBody = {
                    name: 'skillCreateCorrect',
                };
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}`)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
                expect(res.type).to.eq(jsonType);
                const {error} = skillTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
            });
        });

        describe('Skill already exists', () => {
            before(async () => {
                inputBody = {
                    name: 'skillAlreadyExists',
                };
            });
            it('returns 400', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}`);
                expect(res.status).to.eq(400);
                expect(res.type).to.eq(jsonType);
                expect(res.body.error).to.not.eq(undefined);
            });
        });

        describe('Validation Error', () => {
            before(async () => {
                inputBody = {
                    name: 123,
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

    describe("PUT Update Skill", () => {
        describe("Update by admin", () => {
            before(async () => {
                inputBody = {
                    name: 'skillUpdateCorrect',
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                skillID = createRes.body.id;
                expect(createRes.status).to.eq(201);
                expect(createRes.type).to.eq(jsonType);
            });
            describe("Correct UPDATE", () => {
                it("returns 200", async () => {
                    const res = await
                        chai.request(app)
                            .patch(`${baseUrl}/${skillID}`)
                            .send({ name: 'skillUpdatedCorrect'});
                    const {error} = skillTestOutput.validate(res.body);
                    expect(error).to.eq(undefined);
                    expect(res.status).to.eq(200);
                    expect(res.type).to.eq(jsonType);
                });
            });

            describe("Wrong ID in URL", () => {
                before(() => {
                    inputBody = {
                        name: 'skillUpdateWrongID',
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
                        name: "skillWrongFields",
                    };
                    createRes = await chai.request(app)
                        .post(baseUrl)
                        .send(inputBody);
                    skillID = createRes.body.id;
                    expect(createRes.status).to.eq(201);
                    expect(createRes.type).to.eq(jsonType);
                });
                it("returns 400", async () => {
                    const res = await chai.request(app)
                        .patch(`${baseUrl}/${skillID}`)
                        .send({test: "test"});
                    expect(res.status).to.eq(400);
                    expect(res.type).to.eq(jsonType);
                    expect(res.body.error).to.not.eq(undefined);
                });
            });

            describe("Name already exists", () => {
                before(async () => {
                    inputBody = {
                        name: "SkillUpdate",
                    };
                    await chai.request(app)
                        .post(baseUrl)
                        .send(inputBody);

                    createRes = await chai.request(app)
                        .post(baseUrl)
                        .send({
                            name: "SkillUpdateSameName",
                        });
                    expect(createRes.status).to.eq(201);
                    expect(createRes.type).to.eq(jsonType);
                    skillID = createRes.body.id;
                });
                it("returns 404", async () => {
                    const res = await chai.request(app)
                        .patch(`${baseUrl}/${skillID}`)
                        .send({name: "SkillUpdate"});
                    expect(res.body.error).to.not.eq(undefined);
                    expect(res.status).to.eq(404);
                    expect(res.type).to.eq(jsonType);
                });
            });
        });
    });

    describe('POST Assign Skill', () => {
        describe('Correct assignment to User', () => {
            before(async () => {
                inputBody = {
                    skill: '1',
                    owner: '1',
                    level: 1,
                };
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}/assign`)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
            });
        });
        describe('Correct assignment to Activity', () => {
            before(async () => {
                inputBody = {
                    skill: '1',
                    owner: '1',
                    level: 2,
                };
            });
            it('returns 201', async () => {
                const res = await chai.request(app)
                    .post(`${baseUrl}/assign`)
                    .send(inputBody);
                expect(res.body.error).to.eq(undefined);
                expect(res.status).to.eq(201);
            });
        });
    });

    describe('PATCH Update Skill', () => {
        describe('Correct skill update', () => {
            before(async () => {
                inputBody = [{
                    id: "2",
                    level: 1,
                }];
            });
            it('returns 200', async () => {
                const res = await chai.request(app)
                    .patch(`/profiles/7/skills`)
                    .send(inputBody);
                expect(res.status).to.eq(200);
                expect(res.body.error).to.eq(undefined);
            });
        });
    });

    // TODO get UserSkills tests, updateUserSkills wrong cases
});
