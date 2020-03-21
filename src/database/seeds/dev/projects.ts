const projects = [
    {
        id: '1',
        name: 'projectA',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '2'}
        },
        startDate: "2015-11-22",
        endDate: "2015-12-20",
    },
    {
        id: '2',
        name: 'projectB',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '6'}
        },
        startDate: "2018-01-07",
    },
    {
        id: '3',
        name: 'projectC',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '1'}
        },
        startDate: "2019-02-15",
        endDate: "2019-05-02",
    },
    {
        id: '4',
        name: 'projectD',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '3'}
        },
        startDate: "2019-09-27",
    },
    {
        id: '5',
        name: 'projectE',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '6'}
        },
        startDate: "2020-01-05",
    },
    {
        id: '6',
        name: 'projectF',
        description: 'Lorem Ipsum dolor sit amet',
        manager: {
            connect: {user: '2'}
        },
        startDate: "2016-11-22",
        endDate: "2018-07-16",
    },
];

module.exports = {
    projects
};
