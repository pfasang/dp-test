import {prisma, User} from "../generated/prisma-client";

const Joi = require('@hapi/joi');
import {userRole} from "../utilities/enums";
import {userCreateInputValidation, userEditInputValidation} from '../utilities/validation/userValidation';
import {userFragments} from "../database/fragments/fragments";
import {hashPassword} from "../middlewares/jwtHelper";


/***
 * Function to get all users from table users
 * @param res
 * @returns {Promise<void>} Returns all users information in array of JSON's
 */
export const allUsersByAdmin = async (req, res) => {
    //get all users from database
    const users: User[] = await prisma.users({where: {isRemoved: false}}).$fragment(userFragments);

    if (!users) {
        return res.status(404).json();
    }
    res.status(200).send(users);
};

/**
 *  Function to get detail of user with given ID from database
 * @param req
 * @param res
 * @returns {Promise<void>} Returns user information in JSON
 */
export const detailOfUser = async (req, res) => {
    //get id number from url
    const userID = req.params.id;

    //get user with given ID
    const user: User = await prisma.user({id: userID}).$fragment(userFragments);
    if (!user) {
        return res.status(404).json();
    }
    res.status(200).send(user);
};

/**
 * Function to create new user in table users
 * @param req
 * @param res
 * @returns {Promise<void>} Returns user information in JSON object
 */
export const createUser = async (req, res) => {
    //Validate user input
    const validatedBody = userCreateInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).json();
    }

    try {
        req.body.password = await hashPassword(req.body.password);
        const user: User = await prisma.createUser(req.body).$fragment(userFragments);
        res.status(201).json(user);
    } catch (e) {
        return res.status(400).json();
    }
};

/**
 * Function to update user in table users
 * @param req
 * @param res
 * @returns {Promise<void>} Returns updated user information in JSON object
 */
export const updateUser = async (req, res) => {
    //get id number from url
    const userID = req.params.id;

    //Validate user input
    const {error} = userEditInputValidation.validate(req.body);
    if (error) {
        return res.status(400).json();
    }

    try {
        const updatedUser: User = await prisma.updateUser({
            data: req.body,
            where: {id: userID}
        }).$fragment(userFragments);
        res.status(200).json(updatedUser);
    } catch (e) {
        return res.status(404).json();
    }
};

export const changePass = async (req, res) => {
    //get id number from url
    const userID = req.params.id;

    if (!req.body.password) {
        return res.status(400).json();
    }

    try {
        req.body.password = await hashPassword(req.body.password);
        await prisma.updateUser({
            data: {password: req.body.password},
            where: {id: userID}
        }).$fragment(userFragments);
        return res.status(202).json();
    } catch (e) {
        return res.status(404).json();
    }

};

/**
 * Function to activate user
 * @param req
 * @param res
 */
export const activateUser = async (req, res) => {
    userActivation(req, res, true);
};

/**
 * Function to deactivate user
 * @param req
 * @param res
 */
export const deactivateUser = async (req, res) => {
    userActivation(req, res, false);
};

/**
 * Function do activate or deactivate user
 * @param req
 * @param res
 * @param {boolean} state - activation flag
 * @returns {Promise<void>} Returns status code 200 in case of success and user info in JSON
 */
export const userActivation = async (req, res, state: boolean) => {
    //get id number from url
    const userID = req.params.id;

    try {
        const updatedUser: User = await prisma.updateUser({
            data: {isActive: state},
            where: {id: userID}
        }).$fragment(userFragments);
        res.status(200).json(updatedUser);
    } catch (e) {
        return res.status(404).json();
    }
};

/**
 * Function to delete user from table users
 * @param req
 * @param res
 * @returns {Promise<void>} Returns status code 204 in case of success
 */
export const deleteUser = async (req, res) => {
    //get id number from url
    const userID = req.params.id;

    try {
        const deletedUser: User = await prisma.updateUser({
            data: {isActive: false, isRemoved: true},
            where: {id: userID}
        });
        delete deletedUser["password"];
        res.status(200).json(deletedUser);
    } catch (e) {
        return res.status(404).json();
    }
};
