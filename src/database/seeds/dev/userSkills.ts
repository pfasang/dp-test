const userSkills = [
    {
        id: '1',
        skill: {
            connect: {id: '2'}
        },
        owner: {
            connect: {user: '1'}
        },
        level: 1,
    },
    {
        id: '2',
        skill: {
            connect: {id: '3'}
        },
        owner: {
            connect: {user: '2'}
        },
        level: 1,
    },
    {
        id: '3',
        skill: {
            connect: {id: '5'}
        },
        owner: {
            connect: {user: '3'}
        },
        level: 3,
    },
    {
        id: '4',
        skill: {
            connect: {id: '5'}
        },
        owner: {
            connect: {user: '4'}
        },
        level: 1,
    },
    {
        id: '5',
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {user: '5'}
        },
        level: 1,
    },
    {
        id: '6',
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {user: '6'}
        },
        level: 3,
    },
    {
        id: '7',
        skill: {
            connect: {id: '2'}
        },
        owner: {
            connect: {user: '7'}
        },
        level: 2,
    },
    {
        id: '8',
        skill: {
            connect: {id: '4'}
        },
        owner: {
            connect: {user: '8'}
        },
        level: 2,
    },
    {
        id: '9',
        skill: {
            connect: {id: '4'}
        },
        owner: {
            connect: {user: '9'}
        },
        level: 1,
    },
    {
        id: '10',
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {user: '10'}
        } ,
        level: 1,
    }
];

module.exports = {
    ownerSkills: userSkills
};
