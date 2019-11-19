import * as Joi from '@hapi/joi'

export const userCreateInputValidation = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9_-]{6,30}$/).required(),
    isActive: Joi.boolean(),
    userRole: Joi.number().integer().min(1).max(3).required()
});

export const userEditInputValidation = Joi.object({
    username: Joi.string().email(),
    isActive: Joi.boolean(),
    isRemoved: Joi.boolean(),
    userRole: Joi.number().integer().min(1).max(3)
});

export const userTestOutput = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const userListTestOutput = Joi.array().items(userTestOutput);

export const activeUserTestOutput = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().valid(true).required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const deactiveUserTestOutput = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().valid(false).required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const activeUserListTestOutput = Joi.array().items(activeUserTestOutput);

export const removedUserTestOutput = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().email().max(255).required(),
    isActive: Joi.boolean().valid(false).required(),
    isRemoved: Joi.boolean().valid(true).required(),
    userRole: Joi.number().integer().min(1).max(3),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});
