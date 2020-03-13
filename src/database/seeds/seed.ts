import {
    seedProfiles,
    seedSkills,
    seedOwnerSkills,
    seedActivitySkills,
    seedActivities,
    seedProjects
} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
    await seedProjects();
    await seedSkills();
    await seedOwnerSkills();
    await seedActivitySkills();
    await seedActivities();
};

main().catch((e) => console.error(e));

