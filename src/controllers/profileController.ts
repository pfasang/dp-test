import {prisma, Profile} from "../generated/prisma-client";

const Joi = require('@hapi/joi');

/***
 * Function to get all users from table users
 * @param res
 * @returns {Promise<void>} Returns all users information in array of JSON's
 */
export const getUserProfile = async (req, res) => {
    //get id number from url
    const userID = req.params.id;
    //get user with given ID
    const userProfile: Profile = await prisma.profile({userId: userID});
    if (!userProfile) {
        return res.status(404).send({error: "User Profile not found."});
    }
    res.status(200).send(userProfile);
};
