import {seedActivitySkills, seedOwnerSkills, seedSkills} from "../src/database/seeds/seedFunctions";

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

    before(async () => {
        await seedSkills();
        await seedOwnerSkills();
        await seedActivitySkills();
    });

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
                    level: 3,
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
                    name: 'skillCreateCorrect',
                    level: 1,
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
                    level: 1,
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
                    level: 3,
                };
                createRes = await chai.request(app)
                    .post(baseUrl)
                    .send(inputBody);
                skillID = createRes.body.id;
            });
            describe("Correct UPDATE", () => {
                it("returns 200", async () => {
                    const res = await
                        chai.request(app)
                            .patch(`${baseUrl}/${skillID}`)
                            .send({level: 1});
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
                        level: 2,
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
                        level: 2,
                    };
                    createRes = await chai.request(app)
                        .post(baseUrl)
                        .send(inputBody);
                    skillID = createRes.body.id;
                });
                it("returns 400", async () => {
                    const res = await chai.request(app)
                        .patch(`${baseUrl}/${skillID}`)
                        .send({level: "zero"});
                    expect(res.status).to.eq(400);
                    expect(res.type).to.eq(jsonType);
                    expect(res.body.error).to.not.eq(undefined);
                });
            });

            describe("Name already exists", () => {
                before(async () => {
                    inputBody = {
                        name: "SkillUpdate",
                        level: 2,
                    };
                    await chai.request(app)
                        .post(baseUrl)
                        .send(inputBody);

                    createRes = await chai.request(app)
                        .post(baseUrl)
                        .send({
                            name: "SkillUpdateSameName",
                            level: 2,
                        });

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
                    skillId: '1',
                    userId: '1',
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
                    skillId: '1',
                    activityId: '1',
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

});