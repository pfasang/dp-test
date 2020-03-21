import {Activity, prisma} from "../generated/prisma-client";
import {activityInputValidation, activityUpdateInputValidation} from "../utilities/validation/activityValidation";
import {activityFragment} from "../database/fragments"


const Joi = require('@hapi/joi');


export const getActivities = async (req, res) => {
    //get all activities
    const activities: Activity[] = await prisma.activities().$fragment(activityFragment);
    if (!activities) {
        return res.status(404).send({error: "Activities not found."});
    }
    res.status(200).send(activities);
};

export const getUserActivities = async (req, res) => {
    //get ID number from url
    const id = req.params.user;
    //get all activities

    const userActivities: Activity[] = await prisma.profile({user: id}).activities().$fragment(activityFragment);
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
        const entity: Activity = await prisma.createActivity(
            {
                ...data,
                project: {
                    connect: {id: project}
                },
                user: {
                    connect: {user: user}
                }
            }).$fragment(activityFragment);
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
            let temp = await prisma.activity({id: activityID}).user();
            user = temp.user;
        }
        const entity: Activity = await prisma.updateActivity(
            {
                data: {
                    ...data,
                    user: {
                        connect: {user: user}
                    }
                },
                where: {id: activityID}
            }).$fragment(activityFragment);
        return res.status(200).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const deleteActivity = async (req, res) => {
    //get activity ID number from url
    const activityID = req.params.id;
    try {
        const entity: Activity = await prisma.deleteActivity({id: activityID});
        res.status(204).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

