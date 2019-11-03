const Joi = require('@hapi/joi');
import {userRole} from "../utilities/enums";
import {userCreateInputValidation, userEditInputValidation} from '../utilities/validation/userValidation';

/***
 * Function to get all users from table users
 * @param res
 * @returns {Promise<void>} Returns all users information in array of JSON's
 */
export const allUsersbyAdmin = async (req, res) => {
    //check if user is admin
    const inputUserRole = req.user.userRole;
    if(inputUserRole!=userRole.admin) {
        return res.status(403).json();
    }

    //get all users from database
    const users = undefined;
    //const users = await new User().where({isRemoved:false}).fetchAll();
    if(!users) {
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
export const detailofUser = async (req, res) => {
    //check if user is admin
    const inputUserRole = req.user.userRole;
    if(inputUserRole!=userRole.admin) {
        return res.status(403).json();
    }

    //get id number from url
    const userID = req.params.id;

    //get user with given ID
    const user = undefined;
    //const user = await new User().where({id : userID}).fetch();
    if(!user) {
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
    //check if user is admin
    /*const inputUserRole = req.user.userRole;
    if(inputUserRole!=userRole.admin) {
        return res.status(403).json();
    }
    //Validate user input
    const validatedBody = Joi.validate(req.body, userCreateInputValidation);
    if (validatedBody.error) {
        return res.status(400).json();
    }

    //check if is email in use
    const inputEmail = req.body.email;
    //const user = await new User().where({email : inputEmail}).fetch();
    if(user) {
        return res.status(400).json();
    }

    //add user to database
    const newUser = await Bookshelf.transaction(async (trx) => {
        req.body.password = await User.hashPassword(req.body.password);
        const newUser = await new User(req.body).save(null, {transacting:trx, returning: "*"});
        return newUser;
    });
    res.status(201).json(newUser);*/
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
    const validatedBody = Joi.validate(req.body, userEditInputValidation);
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

export const changePass = async (req,res) => {
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
