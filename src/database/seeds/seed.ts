const { users } = require("./dev/users");
import { prisma } from '../../generated/prisma-client'

async function main() {
    users.forEach(async (item) => {
        const newUser = await prisma.createUser(item);
    });
}

main().catch((e) => console.error(e));
