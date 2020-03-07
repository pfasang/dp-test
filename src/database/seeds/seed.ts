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
    await seedSkills();
    await seedOwnerSkills();
    await seedActivitySkills();
    await seedActivities();
    await seedProjects();
};

main().catch((e) => console.error(e));

