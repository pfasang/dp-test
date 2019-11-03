import * as chai from 'chai';
import chaiHttp = require('chai-http');
import {port} from '../src/server';
import {login, randomFields} from './utilities/testHelper';
import * as Joi from '@hapi/joi';
import {
    userListTestOutput,
    userTestOutput,
    activeUserTestOutput,
    removedUserTestOutput
} from '../src/utilities/validation/userValidation';

let app = 'http://localhost:' + port;

chai.use(chaiHttp);
const expect = chai.expect, validEmail = 'marcel.dvorak@latasna.com', validPassword = '12345678', validReaderEmail = 'jozef.dressel@latasna.com', validReaderPassword = '12345678';

let adminToken: string;
let readerToken: string;

describe('User tests', () => {

    before(async () => {
        /*await knex.migrate.rollback();
        await knex.migrate.latest();
        await knex.seed.run();*/
        let res = await login(validEmail, validPassword)
        adminToken = res.body.token;
        res = await login(validReaderEmail, validReaderPassword)
        readerToken = res.body.token;
    });

    const baseUrl = '/users';
    const jsonType = 'application/json';
    describe('GET all users', () => {
        describe('Correct GET all users', () => {
            it('returns 200', () => {
                return chai.request(app)
                    .get(baseUrl)
                    .set('token', adminToken)
                    .then(res => {
                        expect(res.status).to.eq(200);
                        expect(res.type).to.eq(jsonType);
                        expect(res.body).to.be.an('array');
                        const validatedBody = Joi.validate(res.body, userListTestOutput);
                        expect(validatedBody.error).to.eq(null);
                    });
            });
        });

        describe('Wrong userRole', () => {
            it('returns 403', () => {
                return chai.request(app)
                    .get(baseUrl)
                    .set('token', readerToken)
                    .catch(err => {
                        expect(err.status).to.eq(403);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });

        describe('No token set', () => {
            it('returns 401', () => {
                return chai.request(app)
                    .get(baseUrl)
                    .catch(err => {
                        expect(err.status).to.eq(401);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });
    });

    describe("GET Detail of user", () => {

        describe("Detail by admin", () => {

            describe("Correct GET detail", () => {
                it("returns 200", () => {
                    return chai.request(app)
                        .get(`${baseUrl}/1`)
                        .set("token", adminToken)
                        .then( res => {
                            expect(res.status).to.eq(200);
                            expect(res.type).to.eq(jsonType);
                            const validateBody = Joi.validate(res.body, userTestOutput);
                            expect(validateBody.error).to.eq(null);
                        });
                });
            });

            describe("Wrong userRole", () => {
                it("returns 403", () => {
                    return chai.request(app)
                        .get(`${baseUrl}/1`)
                        .set("token", readerToken)
                        .catch(err => {
                            expect(err.status).to.eq(403);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });

            describe("Wrong ID in URL", () => {
                it("returns 404", () => {
                    return chai.request(app)
                        .get(`${baseUrl}/0`)
                        .set("token", adminToken)
                        .catch(err => {
                            expect(err.status).to.eq(404);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });
        });
    });

    describe("POST Create User", () => {
        const inputBody = {
            firstName: 'Jan',
            lastName: 'Horvath',
            email: 'jan.horvath@latasna.com',
            password: "12345678",
            isActive: true,
            userRole: 1
        }

        describe("All correct fields",() => {
            const createInput: any = {...inputBody};

            it("returns 201", ()=>{
                return chai.request(app)
                    .post(baseUrl)
                    .set("token", adminToken)
                    .send(createInput)
                    .then(res => {
                        expect(res.status).to.eq(201);
                        expect(res.type).to.eq(jsonType);
                        expect(res.body).to.be.an("object");
                        const validateBody = Joi.validate(res.body, userTestOutput);
                        expect(validateBody.error).to.eq(null);
                    });
            });
        });

        describe("Wrong userRole",() => {
            const createInput: any = {...inputBody, email: "jan.horvath1@gmail.com"};

            it("returns 403", ()=> {
                return chai.request(app)
                    .post(baseUrl)
                    .set("token", readerToken)
                    .send(createInput)
                    .then(res => {
                        expect(res.status).to.not.eq(201);
                    })
                    .catch(err => {
                        expect(err.status).to.eq(403);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });

        describe("Email is already in use",() => {
            const createInput: any = {...inputBody};

            it("returns 400", ()=> {
                return chai.request(app)
                    .post(baseUrl)
                    .set("token", adminToken)
                    .send(createInput)
                    .then(res => {
                        expect(res.status).to.not.eq(201);
                    })
                    .catch(err => {
                        expect(err.status).to.eq(400);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });

        describe("Wrong email field",() => {
            const createInput: any = {...inputBody, email: "jan.horvath1"};

            it("returns 400", ()=> {
                return chai.request(app)
                    .post(baseUrl)
                    .set("token", adminToken)
                    .send(createInput)
                    .then(res => {
                        expect(res.status).to.not.eq(201);
                    })
                    .catch(err => {
                        expect(err.status).to.eq(400);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });

        describe("Missing fields",() => {
            const createInput: any = randomFields({...inputBody});

            it("returns 400", ()=> {
                return chai.request(app)
                    .post(baseUrl)
                    .set("token", adminToken)
                    .send(createInput)
                    .then(res => {
                        expect(res.status).to.not.eq(201);
                    })
                    .catch(err => {
                        expect(err.status).to.eq(400);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });
    });

    describe("PUT Update User", () => {
        const inputBody = {
            firstName: 'Andrej',
            lastName: 'Horvath',
            email: 'andrej.horvath@latasna.com',
            password: '12345678',
            isActive: true,
            userRole: 1
        };
        let userID: number;

        describe("Update by admin", () => {
            describe("Correct UPDATE", () => {
                it("returns 200", async () => {
                    const createRes = await
                        chai.request(app)
                            .post(baseUrl)
                            .set("token", adminToken)
                            .send(inputBody);
                    userID = createRes.body.id;
                    inputBody.firstName = "Frantisek";
                    inputBody.email = "f.horvath@latasna.com";
                    delete inputBody.password;
                    const res = await
                        chai.request(app)
                            .put(`${baseUrl}/${userID}`)
                            .set("token", adminToken)
                            .send(inputBody);
                    expect(res.status).to.eq(200);
                    expect(res.type).to.eq(jsonType);
                    const validateBody = Joi.validate(res.body, userTestOutput);
                    expect(validateBody.error).to.eq(null);
                    return res;
                });
            });

            describe("Wrong ID in URL", () => {
                inputBody.firstName = "Andrej";
                it("returns 404", () => {
                    return chai.request(app)
                        .put(`${baseUrl}/999999`)
                        .set("token", adminToken)
                        .send(inputBody)
                        .then(res => {
                            expect(res.status).to.not.eq(200);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(404);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });

            describe("Wrong fields", () => {
                const inputBody = {
                    firstName: 'Katarina',
                    lastName: 'Novakova',
                    email: 'katarina.novak@latasna.com',
                    password: "12345678",
                    isActive: true,
                    userRole: 1
                };
                it("returns 400", async () => {
                    return chai.request(app)
                        .post(baseUrl)
                        .set('token', adminToken)
                        .send(inputBody)
                        .then(res => {
                            userID = res.body.id;
                            delete inputBody.password;
                            inputBody.email = 'knovak.com';
                            return chai.request(app)
                                .put(`${baseUrl}/${userID}`)
                                .set('token', adminToken)
                                .send(inputBody)
                                .catch(err => {
                                    expect(err.status).to.eq(400);
                                    expect(err.response.type).to.eq(jsonType);
                                });
                        });
                });
            });

            describe("Wrong userRole", () => {
                inputBody.firstName = "Andrej";
                it("returns 403", () => {
                    return chai.request(app)
                        .put(`${baseUrl}/1`)
                        .set("token", readerToken)
                        .send(inputBody)
                        .then(res => {
                            expect(res.status).to.not.eq(200);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(403);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });
        });
    });

    describe("PATCH Change Password", () => {
        const inputBody = {
            firstName: 'User',
            lastName: 'toChangePass',
            email: 'user.pass@latasna.com',
            password: "12345678",
            userRole: 2
        };
        let userID: number;

        describe("Change password by admin", () => {
            describe("Correct CHANGE", () => {
                it("returns 202", async () => {
                    const createRes = await
                        chai.request(app)
                            .post(baseUrl)
                            .set("token", adminToken)
                            .send(inputBody);
                    userID = createRes.body.id;
                    const res = await
                        chai.request(app)
                            .patch(`${baseUrl}/${userID}/password`)
                            .set("token", adminToken)
                            .send({password: "56789012"});
                    expect(res.status).to.eq(202);
                    expect(res.type).to.eq(jsonType);
                    return res;
                });
            });

            describe("Wrong ID in URL", () => {
                it("returns 404", () => {
                    return chai.request(app)
                        .patch(`${baseUrl}/999999/password`)
                        .set("token", adminToken)
                        .send({password: "56789012"})
                        .then(res => {
                            expect(res.status).to.not.eq(202);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(404);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });

            describe("Wrong userRole", () => {
                it("returns 403", () => {
                    return chai.request(app)
                        .patch(`${baseUrl}/${userID}/password`)
                        .set("token", readerToken)
                        .send({password: "56789012"})
                        .then(res => {
                            expect(res.status).to.not.eq(202);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(403);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });
        });
    });

    describe("PATCH Activate User", () => {
        const inputBody = {
            firstName: 'User',
            lastName: 'toActivate',
            email: 'activate.user@latasna.com',
            password: "12345678",
            isActive: false,
            userRole: 2
        };
        let userID: number;

        describe("Activate by admin", () => {
            describe("Correct ACTIVATE", () => {
                it("returns 200", async () => {
                    const createRes = await
                        chai.request(app)
                            .post(baseUrl)
                            .set("token", adminToken)
                            .send(inputBody);
                    userID = createRes.body.id;
                    const res = await
                        chai.request(app)
                            .patch(`${baseUrl}/${userID}/activate`)
                            .set("token", adminToken);
                    expect(res.status).to.eq(200);
                    expect(res.type).to.eq(jsonType);
                    expect(res.body.isActive).to.eq(true);
                    const validateBody = Joi.validate(res.body, activeUserTestOutput);
                    expect(validateBody.error).to.eq(null);
                    return res;
                });
            });

            describe("Wrong ID in URL", () => {
                it("returns 404", () => {
                    return chai.request(app)
                        .patch(`${baseUrl}/999999/activate`)
                        .set("token", adminToken)
                        .then(res => {
                            expect(res.status).to.not.eq(200);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(404);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });

            describe("Wrong userRole", () => {
                it("returns 403", () => {
                    return chai.request(app)
                        .patch(`${baseUrl}/${userID}/activate`)
                        .set("token", readerToken)
                        .then(res => {
                            expect(res.status).to.not.eq(200);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(403);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });
        });
    });

    describe("PATCH Deactivate User", () => {
        const inputBody = {
            firstName: 'User',
            lastName: 'toDeactivate',
            email: 'deactivate.user@latasna.com',
            password: "12345678",
            isActive: true,
            userRole: 2
        };
        let userID: number;

        describe("Deactivate by admin", () => {
            describe("Correct DEACTIVATE", () => {
                it("returns 200", async () => {
                    const createRes = await
                        chai.request(app)
                            .post(baseUrl)
                            .set("token", adminToken)
                            .send(inputBody);
                    userID = createRes.body.id;
                    const res = await
                        chai.request(app)
                            .patch(`${baseUrl}/${userID}/deactivate`)
                            .set("token", adminToken);
                    expect(res.status).to.eq(200);
                    expect(res.type).to.eq(jsonType);
                    expect(res.body.isActive).to.eq(false);
                    const validateBody = Joi.validate(res.body, userTestOutput);
                    expect(validateBody.error).to.eq(null);
                    return res;
                });
            });

            describe("Wrong ID in URL", () => {
                it("returns 404", () => {
                    return chai.request(app)
                        .patch(`${baseUrl}/999999/deactivate`)
                        .set("token", adminToken)
                        .then(res => {
                            expect(res.status).to.not.eq(200);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(404);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });

            describe("Wrong userRole", () => {
                it("returns 403", () => {
                    return chai.request(app)
                        .patch(`${baseUrl}/${userID}/deactivate`)
                        .set("token", readerToken)
                        .then(res => {
                            expect(res.status).to.not.eq(200);
                        })
                        .catch(err => {
                            expect(err.status).to.eq(403);
                            expect(err.response.type).to.eq(jsonType);
                        });
                });
            });
        });
    });




    describe("DELETE user", () => {
        const inputBody = {
            firstName: 'User',
            lastName: 'Removed',
            email: 'user.removed@latasna.com',
            password: "12345678",
            isActive: true,
            isRemoved:  false,
            userRole: 1
        };
        let userID: number;

        describe("Correct DELETE", () => {
            it("returns 200", async () => {
                const delRes = await
                    chai.request(app)
                        .post(baseUrl)
                        .set("token", adminToken)
                        .send(inputBody);
                userID = delRes.body.id;
                inputBody.isActive =  false;
                inputBody.isRemoved =  true;
                const res = await
                    chai.request(app)
                        .patch(`${baseUrl}/${userID}/remove`)
                        .set("token", adminToken);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
                const validateBody = Joi.validate(res.body, removedUserTestOutput);
                expect(validateBody.error).to.eq(null);
                return res;
            });
        });

        describe("Wrong ID in URL", () => {
            it("returns 404", () => {
                return chai.request(app)
                    .patch(`${baseUrl}/999999/remove`)
                    .set("token", adminToken)
                    .then(res => {
                        expect(res.status).to.not.eq(200);
                    })
                    .catch(err => {
                        expect(err.status).to.eq(404);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });

        describe("Wrong userRole", () => {
            it("returns 403", () => {
                return chai.request(app)
                    .patch(`${baseUrl}/1/remove`)
                    .set("token", readerToken)
                    .then(res => {
                        expect(res.status).to.not.eq(200);
                    })
                    .catch(err => {
                        expect(err.status).to.eq(403);
                        expect(err.response.type).to.eq(jsonType);
                    });
            });
        });
    });
});
