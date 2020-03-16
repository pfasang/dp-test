const userSkills = [
    {
        id: '1',
        skill: {
            connect: {id: '2'}
        },
        owner: '1',
        level: 1,
    },
    {
        id: '2',
        skill: {
            connect: {id: '3'}
        },
        owner: '2',
        level: 1,
    },
    {
        id: '3',
        skill: {
            connect: {id: '5'}
        },
        owner: '3',
        level: 3,
    },
    {
        id: '4',
        skill: {
            connect: {id: '5'}
        },
        owner: '4',
        level: 1,
    },
    {
        id: '5',
        skill: {
            connect: {id: '1'}
        },
        owner: '5',
        level: 1,
    },
    {
        id: '6',
        skill: {
            connect: {id: '1'}
        },
        owner: '6',
        level: 3,
    },
    {
        id: '7',
        skill: {
            connect: {id: '2'}
        },
        owner: '7',
        level: 2,
    },
    {
        id: '8',
        skill: {
            connect: {id: '4'}
        },
        owner: '8',
        level: 2,
    },
    {
        id: '9',
        skill: {
            connect: {id: '4'}
        },
        owner: '9',
        level: 1,
    },
    {
        id: '10',
        skill: {
            connect: {id: '1'}
        },
        owner: '10',
        level: 1,
    }
];

module.exports = {
    ownerSkills: userSkills
};
