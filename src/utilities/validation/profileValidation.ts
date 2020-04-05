import * as Joi from '@hapi/joi'
import { activityOutput } from "./activityValidation";

export const profileCreateInputValidation = Joi.object({
    user: Joi.string().required(),
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    title: Joi.string(),
});

export const profileTestOutput = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    title: Joi.string(),
    user: Joi.string().required(),
    skills: Joi.array().items({
        level: Joi.number().min(1).max(10).integer().required(),
        skill: {
            id: Joi.string().required(),
            name: Joi.string().min(3).max(30).required(),
        }
    }),
    activities: Joi.array().items(activityOutput),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
});

export const profileUpdateInputValidation = Joi.object({
    firstName: Joi.string().min(3).max(30),
    lastName: Joi.string().min(3).max(30),
    title: Joi.string(),
});

export const updateUserSkillsValidation = Joi.array().items(
    Joi.object({
        id: Joi.string().required(),
        level: Joi.number().min(1).max(10).integer().required(),
    })
);

export const profileListTestOutput = Joi.array().items(profileTestOutput);
