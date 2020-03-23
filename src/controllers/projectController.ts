import {Project, prisma} from "../generated/prisma-client";
import {projectInputValidation, projectUpdateInputValidation} from "../utilities/validation/projectValidation";
import {allProjectsFragment, projectFragment} from "../database/fragments";

const Joi = require('@hapi/joi');


export const getProjects = async (req, res) => {
    //get all activities
    const projects: Project[] = await prisma.projects().$fragment(allProjectsFragment);
    if (!projects) {
        return res.status(404).send({error: "Projects not found."});
    }
    res.status(200).send(projects);
};

export const getProject = async (req, res) => {
    //get user id number from url
    const entityID = req.params.id;

    const project: Project = await prisma.project({id: entityID}).$fragment(projectFragment);
    if (!project) {
        return res.status(404).send({error: "User Project not found."});
    }
    res.status(200).send(project);
};

export const createProject = async (req, res) => {
    //Validate user input
    const validatedBody = projectInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }

    try {
        let {manager, ...data} = req.body;
        const entity: Project = await prisma.createProject({
            ...data,
            manager: {
                connect: {user: manager}
            }
        });
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
        let {manager, ...data} = req.body;
        if (!manager) {
            let temp = await prisma.project({id: id}).manager();
            manager = temp.user;
        }
        const entity: Project = await prisma.updateProject({
            data: {
                ...data,
                manager: {
                    connect: {user: manager}
                }
            },
            where: {id: id}
        });
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

