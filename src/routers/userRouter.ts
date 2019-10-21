import * as express from "express";
import {
    allUsersbyAdmin,
    detailofUser,
    createUser,
    updateUser,
    deleteUser,
    activateUser,
    deactivateUser,
    changePass
} from "../controllers/userController";

const router = express.Router();

router.get("/users", allUsersbyAdmin);
router.get("/users/:id", detailofUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.patch("/users/:id/password", changePass);
router.patch("/users/:id/activate", activateUser);
router.patch("/users/:id/deactivate", deactivateUser);
router.patch("/users/:id/remove", deleteUser);

export default router;