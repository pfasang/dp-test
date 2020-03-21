const activities = [
    {
        id: '1',
        name: 'activityA',
        project: {
            connect: {id: '1'}
        },
        user: {
            connect: {user: '1'}
        },
        startDate: "2015-11-22",
        endDate: "2015-12-20",
    },
    {
        id: '2',
        name: 'activityB',
        project: {
            connect: {id: '6'}
        },
        user: {
            connect: {user: '2'}
        },
        startDate: "2018-01-07",
    },
    {
        id: '3',
        name: 'activityC',
        project: {
            connect: {id: '1'}
        },
        user: {
            connect: {user: '5'}
        },
        startDate: "2020-02-15",
        endDate: "2020-03-02",
    },
    {
        id: '4',
        name: 'activityD',
        project: {
            connect: {id: '3'}
        },
        user: {
            connect: {user: '4'}
        },
        startDate: "2019-09-27",
    },
    {
        id: '5',
        name: 'activityE',
        project: {
            connect: {id: '6'}
        },
        user: {
            connect: {user: '2'}
        },
        startDate: "2020-01-05",
    },
    {
        id: '6',
        name: 'activityF',
        project: {
            connect: {id: '2'}
        },
        user: {
            connect: {user: '3'}
        },
        startDate: "2017-11-22",
        endDate: "2019-07-16",
    },
];

module.exports = {
    activities
};
