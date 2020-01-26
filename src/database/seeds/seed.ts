import {seedProfiles, seedSkills} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
    await seedSkills();
};

main().catch((e) => console.error(e));

