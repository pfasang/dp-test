const activitySkills = [
    {
        id: '1',
        level: 1,
        skill: {
            connect: {id: '2'}
        },
        owner: {
            connect: {id: '3'}
        }
    },
    {
        id: '2',
        level: 3,
        skill: {
            connect: {id: '3'}
        },
        owner: {
            connect: {id: '3'}
        }
    },
    {
        id: '3',
        level: 2,
        skill: {
            connect: {id: '5'}
        },
        owner: {
            connect: {id: '5'}
        }
    },
    {
        id: '4',
        level: 1,
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {id: '2'}
        }
    },
    {
        id: '5',
        level: 2,
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {id: '4'}
        }
    },
    {
        id: '6',
        level: 2,
        skill: {
            connect: {id: '2'}
        },
        owner: {
            connect: {id: '6'}
        }
    },
    {
        id: '7',
        level: 3,
        skill: {
            connect: {id: '4'}
        },
        owner: {
            connect: {id: '6'}
        }
    },
    {
        id: '8',
        level: 3,
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {id: '6'}
        }
    },
    {
        id: '9',
        level: 1,
        skill: {
            connect: {id: '1'}
        },
        owner: {
            connect: {id: '3'}
        }
    },
    {
        id: '10',
        level: 2,
        skill: {
            connect: {id: '4'}
        },
        owner: {
            connect: {id: '1'}
        }
    },
    {
        id: '11',
        level: 1,
        skill: {
            connect: {id: '6'}
        },
        owner: {
            connect: {id: '1'}
        }
    }
];

module.exports = {
    activitySkills
};
