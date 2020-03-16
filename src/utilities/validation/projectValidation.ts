import * as Joi from '@hapi/joi'

export const projectInputValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).required(),
    manager: Joi.string().required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso()
});

export const projectUpdateInputValidation = Joi.object({
    name: Joi.string().min(3).max(30),
    description: Joi.string().min(3),
    manager: Joi.string(),
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso()
});

export const projectTestOutput = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).required(),
    manager: Joi.string().required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().allow(null)
});

export const projectListTestOutput = Joi.array().items(projectTestOutput);
