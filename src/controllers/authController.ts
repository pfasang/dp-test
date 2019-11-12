import * as jwt from 'jsonwebtoken';
import {prisma, User} from "../generated/prisma-client";
import * as bcrypt from 'bcrypt';

const secret = 'MySecret';
/**
 * Authorization function
 * @param req - request
 * @param res - result
 * @returns {Promise<void>} Returns admin object and token, in case of error returns 401 status and empty json.
 */
export const auth = async (req, res) => {
    const inputUsername = req.body.username;
    const inputPassword = req.body.password;
    //check if username and password are set
    if (!inputUsername || !inputPassword) {
        return res.status(401).json();
    }
    //check if user exists
    const user: User = await prisma.user({username: inputUsername});
    if (!user || !user.isActive) {
        return res.status(401).json();

    }
    //check if password is correct
    const isCorrectPassword = await bcrypt.compare(inputPassword, user.password);
    if (!isCorrectPassword) {
        return res.status(401).json();
    }
    delete user['password'];
    delete user['isRemoved'];
    res.status(200).send({
        token: jwt.sign({id: user.id, userRole: user.userRole}, secret),
        user: user
    });
};
