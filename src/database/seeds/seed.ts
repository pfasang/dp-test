import {
    seedProfiles,
    seedSkills,
    seedUserSkills,
    seedActivitySkills,
    seedActivities,
    seedProjects
} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
    await seedProjects();
    await seedSkills();
    await seedActivities();
    await seedUserSkills();
    await seedActivitySkills();
};

main().catch((e) => console.error(e));

