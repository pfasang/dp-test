import * as express from "express";
import {
    createProfile,
    getUserProfile,
    updateProfile,
} from "../controllers/profileController";
import {getUserSkills} from "../controllers/skillController";

const router = express.Router();

router.get("/profile/:user", getUserProfile);
router.post("/profile/:user", createProfile);
router.patch("/profile/:user", updateProfile);
//router.get("/profile/:user/skills", getUserSkills);

export default router;
