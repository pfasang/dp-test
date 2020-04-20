const {profiles} = require("./dev/profiles");
const {skills} = require("./dev/skills");
const {ownerSkills} = require("./dev/userSkills");
const {activitySkills} = require("./dev/activitySkills");
const {activities} = require("./dev/activities");
const {projects} = require("./dev/projects");
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const seedProfiles = async () => {
    for (const item of profiles) {
        await prisma.profile.delete({where:{user:item.user}});
        await prisma.profile.create({data: item});
    }
};

const seedSkills = async () => {
    await prisma.skill.deleteMany({});
    for (const item of skills) {
        await prisma.skill.create({data: item});
    }
};

const seedUserSkills = async () => {
    await prisma.userSkill.deleteMany({});
    for (const item of ownerSkills) {
        await prisma.userSkill.create({data: item});
    }
};

const seedActivitySkills = async () => {
    await prisma.activitySkill.deleteMany({});
    for (const item of activitySkills) {
        await prisma.activitySkill.create({data: item});
    }
};

const seedActivities = async () => {
    await prisma.activity.deleteMany({});
    for (const item of activities) {
        await prisma.activity.create({data: item});
    }
};
const seedProjects = async () => {
    await prisma.project.deleteMany({});
    for (const item of projects) {
        await prisma.project.create({data: item});
    }
};

export {seedProfiles, seedSkills, seedUserSkills, seedActivitySkills, seedActivities, seedProjects};

// TODO change camelCase style of db attributes to bem like
