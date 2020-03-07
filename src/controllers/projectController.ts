import {Project, prisma} from "../generated/prisma-client";
import {projectInputValidation, projectUpdateInputValidation} from "../utilities/validation/projectValidation";

const Joi = require('@hapi/joi');


export const getProjects = async (req, res) => {
    //get all activities
    const projects: Project[] = await prisma.projects();
    if (!projects) {
        return res.status(404).send({error: "Projects not found."});
    }
    res.status(200).send(projects);
};

export const createProject = async (req, res) => {
    //Validate user input
    const validatedBody = projectInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }

    try {
        const entity: Project = await prisma.createProject(req.body);
        res.status(201).json(entity);
    } catch (e) {
        return res.status(400).send({error: e});
    }
};

export const updateProject = async (req, res) => {
    //get ID number from url
    const id = req.params.id;
    //Validate user input
    const validatedBody = projectUpdateInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: validatedBody.error.details});
    }
    try {
        const entity: Project = await prisma.updateProject({data: req.body, where: {id: id}});
        res.status(200).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const deleteProject = async (req, res) => {
    //get  ID number from url
    const id = req.params.id;
    try {
        const entity: Project = await prisma.deleteProject({id: id});
        res.status(204).json(entity);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

