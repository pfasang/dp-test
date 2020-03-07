const {profiles} = require("./dev/profiles");
const {skills} = require("./dev/skills");
const {ownerSkills} = require("./dev/ownerSkills");
const {activitySkills} = require("./dev/activitySkills");
const {activities} = require("./dev/activities");
const {projects} = require("./dev/projects");
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

const seedActivitySkills = async () => {
    await prisma.deleteManyActivitySkills();
    for (const item of activitySkills) {
        await prisma.createActivitySkill(item);
    }
};

const seedActivities = async () => {
    await prisma.deleteManyActivities();
    for (const item of activities) {
        await prisma.createActivity(item);
    }
};
const seedProjects = async () => {
    await prisma.deleteManyProjects();
    for (const item of projects) {
        await prisma.createProject(item);
    }
};

export {seedProfiles, seedSkills, seedOwnerSkills, seedActivitySkills, seedActivities, seedProjects};
