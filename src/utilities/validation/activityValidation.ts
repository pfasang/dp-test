import * as Joi from '@hapi/joi'

export const activityInputValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    projectId: Joi.string().required(),
    userId: Joi.string().required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso()
});

export const activityUpdateInputValidation = Joi.object({
    name: Joi.string().min(3).max(30),
    projectId: Joi.string(),
    userId: Joi.string(),
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso()
});

export const activityTestOutput = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    projectId: Joi.string().required(),
    userId: Joi.string().required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().allow(null)
});

export const activityListTestOutput = Joi.array().items(activityTestOutput);
