const ownerSkills = [
    {
        id: '1',
        skill: {
            connect: {id: '2'}
        },
        userId: '1',
        level: 1,
    },
    {
        id: '2',
        skill: {
            connect: {id: '3'}
        },
        userId: '2',
        level: 1,
    },
    {
        id: '3',
        skill: {
            connect: {id: '5'}
        },
        userId: '3',
        level: 3,
    },
    {
        id: '4',
        skill: {
            connect: {id: '5'}
        },
        userId: '4',
        level: 1,
    },
    {
        id: '5',
        skill: {
            connect: {id: '1'}
        },
        userId: '5',
        level: 1,
    },
    {
        id: '6',
        skill: {
            connect: {id: '1'}
        },
        userId: '6',
        level: 3,
    },
    {
        id: '7',
        skill: {
            connect: {id: '2'}
        },
        userId: '7',
        level: 2,
    },
    {
        id: '8',
        skill: {
            connect: {id: '4'}
        },
        userId: '8',
        level: 2,
    },
    {
        id: '9',
        skill: {
            connect: {id: '4'}
        },
        userId: '9',
        level: 1,
    },
    {
        id: '10',
        skill: {
            connect: {id: '1'}
        },
        userId: '10',
        level: 1,
    }
];

module.exports = {
    ownerSkills
};
