import * as chai from 'chai';
import chaiHttp = require('chai-http');
import {port} from '../src/server';
import {userRole} from "../src/utilities/enums";
import {login, randomFields} from './utilities/testHelper';
import * as Joi from '@hapi/joi';
import {
    userListTestOutput,
    userTestOutput,
    activeUserTestOutput,
    removedUserTestOutput
} from '../src/utilities/validation/userValidation';
import {seedUsers} from "../src/database/seeds/seedFunctions";
import {User} from "../src/generated/prisma-client";

let app = 'http://localhost:' + port;

chai.use(chaiHttp);
const expect = chai.expect, validUsername = 'john.doe@latasna.com', validPassword = '12345678',
    validReaderUsername = 'jozef.dressel@latasna.com', validReaderPassword = '12345678';

let res, adminToken: string, readerToken: string;
let adminUser: User;

describe('User tests', () => {

    before(async () => {
        await seedUsers();
        res = await login(validUsername, validPassword);
        adminToken = res.body.token;
        adminUser = res.body.user;
        res = await login(validReaderUsername, validReaderPassword);
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
                        const {error} = userListTestOutput.validate(res.body);
                        expect(error).to.eq(undefined);
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
                        .get(`${baseUrl}/${adminUser.id}`)
                        .set("token", adminToken)
                        .then(res => {
                            expect(res.status).to.eq(200);
                            expect(res.type).to.eq(jsonType);
                            const {error} = userTestOutput.validate(res.body);
                            expect(error).to.eq(undefined);
                        });
                });
            });

            describe("Wrong userRole", () => {
                it("returns 403", () => {
                    return chai.request(app)
                        .get(`${baseUrl}/${adminUser.id}`)
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
            username: 'create.user@latasna.com',
            password: "12345678",
            userRole: userRole.employee
        }

        describe("All correct fields", () => {
            const createInput: any = {...inputBody};

            it("returns 201", () => {
                return chai.request(app)
                    .post(baseUrl)
                    .set("token", adminToken)
                    .send(createInput)
                    .then(res => {
                        expect(res.status).to.eq(201);
                        expect(res.type).to.eq(jsonType);
                        expect(res.body).to.be.an("object");
                        const {error} = userTestOutput.validate(res.body);
                        expect(error).to.eq(undefined);
                    });
            });
        });

        describe("Wrong userRole", () => {
            const createInput: any = {...inputBody, username: "create.user2@gmail.com"};

            it("returns 403", () => {
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

        describe("username is already in use", () => {
            const createInput: any = {...inputBody};

            it("returns 400", () => {
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

        describe("Wrong username field", () => {
            const createInput: any = {...inputBody, username: "jan.horvath1"};

            it("returns 400", () => {
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

        describe("Missing fields", () => {
            const createInput: any = randomFields({...inputBody});

            it("returns 400", () => {
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

    xdescribe("PUT Update User", () => {
        const inputBody = {
            username: 'user.toupdate@latasna.com',
            password: '12345678',
            isActive: true,
            userRole: userRole.employee
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
                    inputBody.username = "user.update@latasna.com";
                    delete inputBody.password;
                    const res = await
                        chai.request(app)
                            .put(`${baseUrl}/${userID}`)
                            .set("token", adminToken)
                            .send(inputBody);
                    expect(res.status).to.eq(200);
                    expect(res.type).to.eq(jsonType);
                    const {error} = userTestOutput.validate(res.body);
                    expect(error).to.eq(undefined);
                    return res;
                });
            });

            describe("Wrong ID in URL", () => {
                inputBody.username = "juro.horvath@latasna.com";
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
                    username: 'wrong.fields@latasna.com',
                    password: "12345678",
                    isActive: true,
                    userRole: userRole.employee
                };
                it("returns 400", async () => {
                    return chai.request(app)
                        .post(baseUrl)
                        .set('token', adminToken)
                        .send(inputBody)
                        .then(res => {
                            userID = res.body.id;
                            delete inputBody.password;
                            inputBody.username = 'knovak.com';
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
                inputBody.username = "wrong.userrole@latasna.com";
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

    xdescribe("PATCH Change Password", () => {
        const inputBody = {
            username: 'user.pass@latasna.com',
            password: "12345678",
            userRole: userRole.admin
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

    xdescribe("PATCH Activate User", () => {
        const inputBody = {
            username: 'activate.user@latasna.com',
            password: "12345678",
            isActive: false,
            userRole: userRole.admin
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
                    const {error} = activeUserTestOutput.validate(res.body);
                    expect(error).to.eq(undefined);
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

    xdescribe("PATCH Deactivate User", () => {
        const inputBody = {
            username: 'deactivate.user@latasna.com',
            password: "12345678",
            isActive: true,
            userRole: userRole.admin
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
                    const {error} = userTestOutput.validate(res.body);
                    expect(error).to.eq(undefined);
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

    xdescribe("DELETE user", () => {
        const inputBody = {
            username: 'user.toremove@latasna.com',
            password: "12345678",
            isActive: true,
            isRemoved: false,
            userRole: userRole.employee
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
                inputBody.isActive = false;
                inputBody.isRemoved = true;
                const res = await
                    chai.request(app)
                        .patch(`${baseUrl}/${userID}/remove`)
                        .set("token", adminToken);
                expect(res.status).to.eq(200);
                expect(res.type).to.eq(jsonType);
                const {error} = removedUserTestOutput.validate(res.body);
                expect(error).to.eq(undefined);
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
