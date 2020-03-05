import * as express from "express";
import {createActivity, deleteActivity, getActivities, updateActivity} from "../controllers/activityController";

const router = express.Router();

router.get("/activities", getActivities);
router.post("/activities", createActivity);
router.patch("/activities/:id", updateActivity);
router.delete("/activities/:id", deleteActivity);

export default router;
