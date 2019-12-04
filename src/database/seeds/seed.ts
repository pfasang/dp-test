import {seedProfiles} from "./seedFunctions";

const main = async () => {
    await seedProfiles();
};

main().catch((e) => console.error(e));

