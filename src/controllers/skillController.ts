import {prisma, Skill} from "../generated/prisma-client";
import {
    activitySkillCreate,
    ownerSkillCreate,
    skillInputValidation
} from "../utilities/validation/skillValidation";

const Joi = require('@hapi/joi');


export const getSkills = async (req, res) => {
    //get all skills
    const skills: Skill[] = await prisma.skills();
    if (!skills) {
        return res.status(404).send({error: "Skills not found."});
    }
    res.status(200).send(skills);
};

export const createSkill = async (req, res) => {
    //Validate user input
    const validatedBody = skillInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }

    try {
        const skill: Skill = await prisma.createSkill(req.body);
        res.status(201).json(skill);
    } catch (e) {
        return res.status(400).send({error: e});
    }
};


export const updateSkill = async (req, res) => {
    //get skill ID number from url
    const skillID = req.params.id;
    //Validate user input
    const validatedBody = skillInputValidation.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: validatedBody.error.details});
    }
    try {
        const skill: Skill = await prisma.updateSkill({data: req.body, where: {id: skillID}});
        res.status(200).json(skill);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const assignSkill = async (req, res) => {
    //Validate user input
    let validatedBody;
    if (req.body.userId) {
        validatedBody = ownerSkillCreate.validate(req.body);
    } else {
        validatedBody = activitySkillCreate.validate(req.body);
    }
    if (validatedBody.error) {
        return res.status(400).send({error: "Validation error."});
    }

    try {
        if (req.body.userId) {
            await prisma.createOwnerSkill(req.body);
        } else {
            await prisma.createActivitySkill(req.body);
        }
        return res.status(201).json();
    } catch (e) {
        return res.status(400).send({error: e});
    }
};

