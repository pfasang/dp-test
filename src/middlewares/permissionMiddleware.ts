import {userRole} from "../utilities/enums";

export const adminPermission = async (req, res, next) => {
    const user = req.user;
    if (user.userRole != userRole.admin) {
        return res.status(403).json();
    }
    next();
};

export const authorPermission = async (req, res, next) => {
    const userID = req.params.id;
    const user = req.user;
    if (user.userRole != userRole.admin) {
        if (user.id != userID) {
            return res.status(403).json();
        }
    }
    next();
};

