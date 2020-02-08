import * as express from "express";
import {
    createProfile,
    getUserProfile,
    updateProfile,
} from "../controllers/profileController";

const router = express.Router();

router.get("/profile/:userId", getUserProfile);
router.post("/profile/:userId", createProfile);
router.patch("/profile/:userId", updateProfile);

export default router;
