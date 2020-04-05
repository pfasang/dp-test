import * as Joi from '@hapi/joi'

export const skillInputValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
});

export const skillTestOutput = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const ownerSkillCreate = Joi.object({
    skill: Joi.string().required(),
    owner: Joi.string().required(),
    level: Joi.number().min(1).max(10).integer().required(),
});

export const ownerSkillOutput = Joi.object({
    id: Joi.string().required(),
    skill: Joi.string().required(),
    owner: Joi.string().required(),
});

export const skillListTestOutput = Joi.array().items(skillTestOutput);
