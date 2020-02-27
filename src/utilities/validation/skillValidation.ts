import * as Joi from '@hapi/joi'

export const skillCreateInputValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    level: Joi.number().min(1).max(10).integer().required(),
});

export const skillUpdateInputValidation = Joi.object({
    name: Joi.string().min(3).max(30),
    level: Joi.number().min(1).max(10).integer(),
});

export const skillTestOutput = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    level: Joi.number().min(1).max(10).integer().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const ownerSkillCreate = Joi.object({
    skillId: Joi.string().required(),
    userId: Joi.string().required(),
});

export const activitySkillCreate = Joi.object({
    skillId: Joi.string().required(),
    activityId: Joi.string().required(),
});

export const ownerSkillOutput = Joi.object({
    id: Joi.string().required(),
    skillId: Joi.string().required(),
    userId: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const activitySkillOutput = Joi.object({
    id: Joi.string().required(),
    skillId: Joi.string().required(),
    activityId: Joi.string().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const skillListTestOutput = Joi.array().items(skillTestOutput);
