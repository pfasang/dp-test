import {seedProfiles, seedSkills, seedOwnerSkills} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
    await seedSkills();
    await seedOwnerSkills();
};

main().catch((e) => console.error(e));

