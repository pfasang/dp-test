import * as express from "express";
import {
    getUserProfile,
} from "../controllers/profileController";

import {
    adminPermission,
    authorPermission
} from "../middlewares/permissionMiddleware";

const router = express.Router();

router.get("/profile/:id", getUserProfile);

export default router;
