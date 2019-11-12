import * as jwt from 'jsonwebtoken';
import {prisma} from "../generated/prisma-client";

interface IToken {
    id: number,
    userRole: number,
}

/**
 * Verification of user - Function to verify user
 * @param req - request
 * @param res - result
 * @param next - next() function
 * @returns {Promise<Response | ChaiHttp.Request | void | boolean>}
 */
export const verifyUser = async (req, res, next) => {
    let uToken: IToken;
    //get token from request
    let token = req.body.token || req.query.token || req.headers['token'];
    if (!token) {
        return res.status(401).json();
    }
    try {
        //jsonwebtoken function to verify token
        uToken = <IToken> jwt.verify(token, 'MySecret');
    }
    catch(err) {
        return res.status(401).send(err);
    }

    //get user from database
    const user = await prisma.user({id: uToken.id});
    if (!user) {
        return res.status(401).json();
    }

    //save user object to request
    user.userRole = uToken.userRole;
    req.user = user;
    next();
};
