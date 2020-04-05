import * as express from "express";
import {
    createProfile,
    getAllProfiles,
    getUserProfile,
    updateProfile, updateUserSkills,
} from "../controllers/profileController";

const router = express.Router();

router.get("/profiles", getAllProfiles);
router.get("/profiles/:user", getUserProfile);
router.post("/profiles/", createProfile);
router.patch("/profiles/:user", updateProfile);
router.patch("/profiles/:user/skills", updateUserSkills);
//router.get("/profiles/:user/skills", getUserSkills);

export default router;
