import * as Joi from '@hapi/joi'

export const activityInputValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    project: Joi.string().required(),
    user: Joi.string().required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso()
});

export const activityUpdateInputValidation = Joi.object({
    name: Joi.string().min(3).max(30),
    user: Joi.string(),
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso()
});


export const activityOutput = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().allow(null),
    project: {
        name: Joi.string().required()
    },
    skills: Joi.array().items({
        level: Joi.number().min(1).max(10).integer().required(),
        skill: {
            name: Joi.string().min(3).max(30).required(),
        }
    })
});

export const activityListOutput = Joi.array().items(activityOutput);
