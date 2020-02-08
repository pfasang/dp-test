const {profiles} = require("./dev/profiles");
const {skills} = require("./dev/skills");
const {ownerSkills} = require("./dev/ownerSkills");
import {prisma} from '../../generated/prisma-client'

const seedProfiles = async () => {
    await prisma.deleteManyProfiles();
    for (const item of profiles) {
        await prisma.createProfile(item);
    }
};

const seedSkills = async () => {
    await prisma.deleteManySkills();
    for (const item of skills) {
        await prisma.createSkill(item);
    }
};

const seedOwnerSkills = async () => {
    await prisma.deleteManyOwnerSkills();
    for (const item of ownerSkills) {
        await prisma.createOwnerSkill(item);
    }
};

export {seedProfiles, seedSkills, seedOwnerSkills};
