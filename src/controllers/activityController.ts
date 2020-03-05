import {Activity, prisma} from "../generated/prisma-client";
import {activityInputValidation, activityUpdateInputValidation} from "../utilities/validation/activityValidation";


const Joi = require('@hapi/joi');


export const getActivities = async (req, res) => {
    //get all activities
    const activities: Activity[] = await prisma.activities();
    if (!activities) {
        return res.status(404).send({error: "Activities not found."});
    }
    res.status(200).send(activities);
};

export const createActivity = async (req, res) => {
    //Validate user input
    const validatedBody = activityInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }

    try {
        const entity: Activity = await prisma.createActivity(req.body);
        res.status(201).json(entity);
    } catch (e) {
        return res.status(400).send({error: e});
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
        const entity: Activity = await prisma.updateActivity({data: req.body, where: {id: activityID}});
        res.status(200).json(entity);
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

