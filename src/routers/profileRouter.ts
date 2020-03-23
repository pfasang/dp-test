import * as express from "express";
import {
    createProfile,
    getAllProfiles,
    getUserProfile,
    updateProfile,
} from "../controllers/profileController";
import {getUserSkills} from "../controllers/skillController";

const router = express.Router();

router.get("/profiles", getAllProfiles);
router.get("/profiles/:user", getUserProfile);
router.post("/profiles/:user", createProfile);
router.patch("/profiles/:user", updateProfile);
//router.get("/profiles/:user/skills", getUserSkills);

export default router;
