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
router.put("/users/:id", updateUser);
router.patch("/users/:id/password", changePass);
router.patch("/users/:id/activate", activateUser);
router.patch("/users/:id/deactivate", deactivateUser);
router.patch("/users/:id/remove", deleteUser);

export default router;
