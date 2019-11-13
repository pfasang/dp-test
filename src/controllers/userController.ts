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
    }
    catch (e) {
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
    //check if user is admin
    /*const inputUserRole = req.user.userRole;
    if(inputUserRole!=userRole.admin) {
        return res.status(403).json();
    }

    //get id number from url
    const userID = req.params.id;

    //get user with given ID
    const user = await new User().where({id : userID}).fetch();
    if(!user) {
        return res.status(404).json();
    }

    //Validate user input
    const validatedBody = userEditInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).json();
    }

    //update user in database
    const updatedUser = await Bookshelf.transaction(async (trx) => {
        const updatedUser = await user.save(req.body, {method:"update", transacting:trx,  patch: true});
        return updatedUser;
    });
    res.status(200).json(updatedUser);*/
};

export const changePass = async (req, res) => {
    /* //check if user is admin
     const inputUserRole = req.user.userRole;
     if(inputUserRole!=userRole.admin) {
         return res.status(403).json();
     }

     if (!req.body.password) {
         return res.status(400).json();
     }

     //get id number from url
     const userID = req.params.id;

     //get user with given ID
     const user = await new User().where({id : userID}).fetch();
     if(!user) {
         return res.status(404).json();
     }
     //update user in database
     const passUser = await Bookshelf.transaction(async (trx) => {
         req.body.password = await User.hashPassword(req.body.password);
         const updatedUser = await user.save(req.body, {method:"update", transacting:trx,  patch: true});
         return updatedUser;
     });
     return res.status(202).json();*/
}

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
    /*    //check if user is admin
        const inputUserRole = req.user.userRole;
        if(inputUserRole!=userRole.admin) {
            return res.status(403).json();
        }

        //get id number from url
        const userID = req.params.id;

        //get user with given ID
        const user = await new User().where({id : userID}).fetch();
        if(!user) {
            return res.status(404).json();
        }

        //activate/deactivate user
        const activationUser = await Bookshelf.transaction(async (trx) => {
            return await user.save({isActive: state}, {method:"update", transacting:trx, patch: true});
        });
        res.status(200).json(activationUser);*/
};

/**
 * Function to delete user from table users
 * @param req
 * @param res
 * @returns {Promise<void>} Returns status code 204 in case of success
 */
export const deleteUser = async (req, res) => {
    /*    //check if user is admin
        const inputUserRole = req.user.userRole;
        if(inputUserRole!=userRole.admin) {
            return res.status(403).json();
        }

        //get id number from url
        const userID = req.params.id;

        //get user with given ID
        const user = await new User().where({id : userID}).fetch();
        if(!user) {
            return res.status(404).json();
        }

        //deactivate and set delete flag for user
        const deleteUser = await Bookshelf.transaction(async (trx) => {
            return await user.save({isActive: false, isRemoved: true}, {method:"update", transacting:trx, patch: true});
        });
        res.status(200).json(deleteUser);*/
};
