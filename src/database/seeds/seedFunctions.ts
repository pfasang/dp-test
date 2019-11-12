const {users} = require("./dev/users");
import {prisma} from '../../generated/prisma-client'

const seedUsers = async () => {
    await prisma.deleteManyUsers();
    for (const item of users) {
        await prisma.createUser(item);
    }
};

export {seedUsers};
