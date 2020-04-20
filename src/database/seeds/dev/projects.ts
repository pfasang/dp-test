const projects = [
    {
        id: '1',
        name: 'projectA',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '2'}
        },
        startDate: "2015-11-22T13:57:31.123Z",
        endDate: "2015-11-22T13:57:31.123Z",
    },
    {
        id: '2',
        name: 'projectB',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '6'}
        },
        startDate: "2018-01-07T00:00:00.123Z",
    },
    {
        id: '3',
        name: 'projectC',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '1'}
        },
        startDate: "2019-02-15T00:00:00.123Z",
        endDate: "2019-05-02T00:00:00.123Z",
    },
    {
        id: '4',
        name: 'projectD',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '3'}
        },
        startDate: "2019-09-27T00:00:00.123Z",
    },
    {
        id: '5',
        name: 'projectE',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '6'}
        },
        startDate: "2020-01-05T00:00:00.123Z",
    },
    {
        id: '6',
        name: 'projectF',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '2'}
        },
        startDate: "2016-11-22T00:00:00.123Z",
        endDate: "2018-07-16T00:00:00.123Z",
    },
];

module.exports = {
    projects
};
