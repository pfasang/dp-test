import * as express from "express";
import {createProject, deleteProject, getProjects, updateProject} from "../controllers/projectController";

const router = express.Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.patch("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
