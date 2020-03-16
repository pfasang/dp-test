import * as express from "express";
import {
    createProfile,
    getUserProfile,
    updateProfile,
} from "../controllers/profileController";

const router = express.Router();

router.get("/profile/:user", getUserProfile);
router.post("/profile/:user", createProfile);
router.patch("/profile/:user", updateProfile);

export default router;
