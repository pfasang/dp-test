const {profiles} = require("./dev/profiles");
const {skills} = require("./dev/skills");
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

export {seedProfiles, seedSkills};
