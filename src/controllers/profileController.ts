import {prisma, Profile} from "../generated/prisma-client";
import {userRole} from "../utilities/enums";
import {profileCreateInputValidation, profileUpdateInputValidation} from "../utilities/validation/profileValidation";
import {profileFragment} from "../database/fragments";

const Joi = require('@hapi/joi');


export const getUserProfile = async (req, res) => {
    //get user id number from url
    const userID = req.params.user;
    //get user profile with given ID
    const userProfile: Profile = await prisma.profile({user: userID}).$fragment(profileFragment);
    if (!userProfile) {
        return res.status(404).send({error: "User Profile not found."});
    }
    res.status(200).send(userProfile);
};

export const createProfile = async (req, res) => {
    //get user id number from url
    const userID = req.params.user;
    const userProfile: Profile = await prisma.profile({user: userID});
    if (userProfile) {
        return res.status(404).send({error: "Profile of selected user already exists."});
    }
    //Validate user input
    const validatedBody = profileCreateInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }
    req.body.user = userID;
    try {
        const newProfile: Profile = await prisma.createProfile(req.body).$fragment(profileFragment);
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
        const profile: Profile = await prisma.updateProfile({data: req.body, where: {user: userID}}).$fragment(profileFragment);
        res.status(200).json(profile);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const authorPermission = async (req, res, next) => {
    //get user id number from url
    const userID = req.params.user;

    const user = req.user;
    if (user.userRole != userRole.admin) {
        if (user.id != userID) {
            return res.status(403).send({error: 'User doesn\'t have permission.'});
        }
    }
    next();
};
