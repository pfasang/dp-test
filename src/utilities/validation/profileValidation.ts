import * as Joi from '@hapi/joi'

export const profileCreateInputValidation = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    title: Joi.string(),
});

export const profileTestOutput = Joi.object({
    id: Joi.string().required(),
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    title: Joi.string(),
    userId: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const profileUpdateInputValidation = Joi.object({
    firstName: Joi.string().min(3).max(30),
    lastName: Joi.string().min(3).max(30),
    title: Joi.string(),
});

export const profileListTestOutput = Joi.array().items(profileTestOutput);
