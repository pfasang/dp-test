import * as express from "express";
import {assignSkill, createSkill, getSkills, updateSkill} from "../controllers/skillController";

const router = express.Router();

router.get("/skills", getSkills);
router.post("/skills/", createSkill);
router.post("/skills/assign", assignSkill);
router.patch("/skills/:id", updateSkill);

export default router;
