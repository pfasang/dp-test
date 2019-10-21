import * as Joi from '@hapi/joi'

export const userCreateInputValidation = Joi.object().keys({
    firstName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    lastName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9_-]{6,30}$/).required(),
    isActive: Joi.boolean(),
    isRemoved: Joi.boolean(),
    userRole: Joi.number().integer().min(1).max(3).required()
});

export const userEditInputValidation = Joi.object().keys({
    firstName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/),
    lastName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/),
    email: Joi.string().email(),
    isActive: Joi.boolean(),
    isRemoved: Joi.boolean(),
    userRole: Joi.number().integer().min(1).max(3)
});

export const userTestOutput = Joi.object().keys({
    id: Joi.number().integer().required(),
    firstName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    lastName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    email: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.string().required(),
    modifiedAt: Joi.string().required()
});

export const userListTestOutput = Joi.array().items(userTestOutput);

export const activeUserTestOutput = Joi.object().keys({
    id: Joi.number().integer().required(),
    firstName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    lastName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    email: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().valid(true).required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.string().required(),
    modifiedAt: Joi.string().required()
});

export const activeUserListTestOutput = Joi.array().items(activeUserTestOutput);

export const removedUserTestOutput = Joi.object().keys({
    id: Joi.number().integer().required(),
    firstName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    lastName: Joi.string().regex(/[^\p{L}'_-]{1,255}$/).required(),
    email: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().valid(false).required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.string().required(),
    modifiedAt: Joi.string().required()
});
