import {userRole} from "../../../utilities/enums";

const users = [
    {
        username: 'michael.uder@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.admin,
        isActive: true,
        isRemoved: false
    },
    {
        username: 'peter.lahky@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isActive: true,
    },
    {
        username: 'martin.tazky@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isActive: false,
        isRemoved: true
    },
    {
        username: 'jozef.dressel@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isRemoved: false
    },
    {
        username: 'anna.vojovska@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
    },
    {
        username: 'robert.landl@latasna.de',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isActive: true,
        isRemoved: false
    },
    {
        username: 'petra.slavikova@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isActive: true,
        isRemoved: false
    },
    {
        username: 'oliver.ladovy@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isActive: false,
        isRemoved: false
    },
    {
        username: 'marcel.dvorak@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.employee,
        isActive: true,
        isRemoved: false
    },
    {
        username: 'john.doe@latasna.com',
        password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
        userRole: userRole.admin,
        isActive: true,
        isRemoved: false
    }
];

module.exports = {
    users
};
