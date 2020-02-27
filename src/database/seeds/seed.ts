import {seedProfiles, seedSkills, seedOwnerSkills, seedActivitySkills} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
    await seedSkills();
    await seedOwnerSkills();
    await seedActivitySkills();
};

main().catch((e) => console.error(e));

