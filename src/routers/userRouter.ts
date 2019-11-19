import * as express from "express";
import {
    allUsersByAdmin,
    detailOfUser,
    createUser,
    updateUser,
    deleteUser,
    activateUser,
    deactivateUser,
    changePass,
} from "../controllers/userController";
import {
    adminPermission, authorPermission
} from "../middlewares/permissionMiddleware";

const router = express.Router();

router.get("/users", adminPermission, allUsersByAdmin);
router.get("/users/:id", authorPermission, detailOfUser);
router.post("/users", adminPermission, createUser);
router.patch("/users/:id", adminPermission, updateUser);
router.patch("/users/:id/password",authorPermission, changePass);
router.patch("/users/:id/activate",adminPermission, activateUser);
router.patch("/users/:id/deactivate",adminPermission, deactivateUser);
router.patch("/users/:id/remove",adminPermission, deleteUser);

export default router;
