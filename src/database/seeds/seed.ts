import {seedProfiles, seedSkills, seedOwnerSkills, seedActivitySkills, seedActivities} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
    await seedSkills();
    await seedOwnerSkills();
    await seedActivitySkills();
    await seedActivities();
};

main().catch((e) => console.error(e));

