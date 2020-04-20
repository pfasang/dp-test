import { activityInputValidation, activityUpdateInputValidation } from "../utilities/validation/activityValidation";
import { activityFragment } from "../database/fragments"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const Joi = require('@hapi/joi');


export const getActivities = async (req, res) => {
    //get all activities
    const activities = await prisma.activity.findMany({include: activityFragment});
    if (!activities) {
        return res.status(404).send({error: "Activities not found."});
    }
    res.status(200).send(activities);
};

export const getUserActivities = async (req, res) => {
    //get ID number from url
    const id = req.params.user;
    //get all activities

    const userActivities = await prisma.profile.findOne({where: {user: id}}).activities({include: activityFragment});
    if (!userActivities) {
        return res.status(404).send({error: "Error in getting user activities."});
    }
    res.status(200).send(userActivities);
};

export const createActivity = async (req, res) => {
    //Validate user input
    const validatedBody = activityInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }

    try {
        let {project, user, ...data} = req.body;
        const entity = await prisma.activity.create({
            data: {
                ...data,
                project: {
                    connect: {id: project}
                },
                user: {
                    connect: {user: user}
                }
            },
            include: activityFragment
        });
        res.status(201).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const updateActivity = async (req, res) => {
    //get activity ID number from url
    const activityID = req.params.id;
    //Validate user input
    const validatedBody = activityUpdateInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: validatedBody.error.details});
    }
    try {
        let {user, ...data} = req.body;
        if (!user) {
            let temp = await prisma.activity.findOne({
                where: {
                    id: activityID
                }
            }).user();
            // @ts-ignore
            user = temp.user;
        }
        const entity = await prisma.activity.update(
            {
                data: {
                    ...data,
                    user: {
                        connect: {user: user}
                    }
                },
                where: {id: activityID},
                include: activityFragment
            });
        return res.status(200).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const deleteActivity = async (req, res) => {
    //get activity ID number from url
    const activityID = req.params.id;
    try {
        const entity = await prisma.activity.delete({where:{id: activityID}});
        res.status(204).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

