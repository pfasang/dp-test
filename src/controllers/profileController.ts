import { userRole } from "../utilities/enums";
import {
    profileCreateInputValidation,
    profileUpdateInputValidation,
    updateUserSkillsValidation
} from "../utilities/validation/profileValidation";
import { activityFragment, profileFragment } from "../database/fragments";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const Joi = require('@hapi/joi');


export const getAllProfiles = async (req, res) => {

    const entities = await prisma.profile.findMany();
    if (!entities) {
        return res.status(404).send({error: "Profiles not found."});
    }
    res.status(200).send(entities);
};

export const getUserProfile = async (req, res) => {
    //get user id number from url
    const userID = req.params.user;
    //get user profile with given ID
    const userProfile = await prisma.profile.findOne({
        where: {user: userID},
        include: profileFragment
    });
    if (!userProfile) {
        return res.status(404).send({error: "User Profile not found."});
    }
    res.status(200).send(userProfile);
};

export const createProfile = async (req, res) => {
    //get user id number from url
    const userID = req.body.user;
    const userProfile = await prisma.profile.findOne({where: {user: userID}});
    if (userProfile) {
        return res.status(404).send({error: "Profile of selected user already exists."});
    }
    //Validate user input
    const validatedBody = profileCreateInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: `Validation error: ${validatedBody.error}`});
    }
    try {
        const newProfile = await prisma.profile.create({
            data: {...req.body},
            include: profileFragment
        });
        res.status(201).json(newProfile);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const updateProfile = async (req, res) => {
    //get user id number from url
    const userID = req.params.user;
    //Validate user input
    const validatedBody = profileUpdateInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: validatedBody.error.details});
    }
    try {
        const profile = await prisma.profile.update({
            data: req.body,
            where: {user: userID},
            include: profileFragment
        });
        res.status(200).json(profile);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const updateUserSkills = async (req, res) => {
    //get user id number from url
    const userID = req.params.user;
    //Validate user input
    const validatedBody = updateUserSkillsValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: validatedBody.error.details});
    }
    try {
        await prisma.userSkill.deleteMany({
            where: {
                owner: {user: userID}
            }
        });
        for (let skill of req.body) {
            await prisma.userSkill.create({
                data: {
                    skill: {
                        connect: {id: skill.id}
                    },
                    owner: {
                        connect: {user: userID}
                    },
                    level: skill.level,
                }
            });
        }
        res.status(200).json();
    } catch (e) {
        console.log(e);
        return res.status(404).send({error: e});
    }
};

