import {prisma, Skill, UserSkill} from "../generated/prisma-client";
import {
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

export const getUserSkills = async (req, res) => {
    //get skill owner ID from url
    const ownerID = req.params.owner;
    //get all skills
    const skills: UserSkill[] = await prisma.userSkills({where: {owner: ownerID}});
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
        const skill: Skill = await prisma.updateSkill({
            data: req.body,
            where: {id: skillID}
        });
        res.status(200).json(skill);
    } catch (e) {
        return res.status(404).send({error: e});
    }
};

export const assignSkill = async (req, res) => {
    //Validate user input
    let validatedBody = ownerSkillCreate.validate(req.body);
    if (validatedBody.error) {
        return res.status(400).send({error: validatedBody.error});
    }

    try {
        const {skill, owner, ...data} = req.body;
        if (req.body.owner) {
            await prisma.createUserSkill({
                ...data,
                skill: {
                    connect: {id: skill}
                },
                owner: {
                    connect: {user: owner}
                }
            });
        } else {
            await prisma.createActivitySkill({
                ...data,
                skill: {
                    connect: {id: skill}
                },
                activity: {
                    connect: {id: owner}
                }
            });
        }
        return res.status(201).json();
    } catch (e) {
        return res.status(400).send({error: e});
    }
};

