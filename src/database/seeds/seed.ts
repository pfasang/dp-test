import {seedUsers} from "./seedFunctions";

const main = async () => {
    await seedUsers();
};

main().catch((e) => console.error(e));

