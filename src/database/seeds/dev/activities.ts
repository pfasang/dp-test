const activities = [
    {
        id: '1',
        name: 'activityA',
        project: {
            connect: {id: '2'}
        },
        userId: '1',
        startDate: "2015-11-22",
        endDate: "2015-12-20",
        skills: {
            connect: [{id: '5'}]
        }
    },
    {
        id: '2',
        name: 'activityB',
        project: {
            connect: {id: '6'}
        },
        userId: '2',
        startDate: "2018-01-07",
        skills: {
            connect: [{id: '4'}]
        }
    },
    {
        id: '3',
        name: 'activityC',
        project: {
            connect: {id: '1'}
        },
        userId: '5',
        startDate: "2020-02-15",
        endDate: "2020-03-02",
        skills: {
            connect: [
                {id: '1'},
                {id: '2'},
                {id: '9'},
            ]
        }
    },
    {
        id: '4',
        name: 'activityD',
        project: {
            connect: {id: '3'}
        },
        userId: '4',
        startDate: "2019-09-27",
        skills: {
            connect: [{id: '5'}]
        }
    },
    {
        id: '5',
        name: 'activityE',
        project: {
            connect: {id: '6'}
        },
        userId: '2',
        startDate: "2020-01-05",
        skills: {
            connect: [{id: '3'}]
        }
    },
    {
        id: '6',
        name: 'activityF',
        project: {
            connect: {id: '2'}
        },
        userId: '3',
        startDate: "2017-11-22",
        endDate: "2019-07-16",
        skills: {
            connect: [
                {id: '6'},
                {id: '7'},
                {id: '8'}
            ]
        }
    },
];

module.exports = {
    activities
};
