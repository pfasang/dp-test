import * as Knex from "knex";
import dbConfig from "../../dbConfig";
import {userRole} from "../../../utilities/enums";

exports.seed = (knex: Knex) => {
    return knex(dbConfig.tables.user.name).del()
        .then(() => {
            return knex(dbConfig.tables.user.name).insert([
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.writer,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Michael',
                    lastName: 'Uder',
                    email: 'michael.uder@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.reader,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Peter',
                    lastName: 'Lahky',
                    email: 'peter.lahky@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.reader,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Martin',
                    lastName: 'Tazky',
                    email: 'martin.tazky@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.writer,
                    isActive: false,
                    isRemoved: true
                },
                {
                    firstName: 'Anna',
                    lastName: 'Vojovska',
                    email: 'anna.vojovska@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.reader,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Jozef',
                    lastName: 'Dressel',
                    email: 'jozef.dressel@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.reader,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Robert',
                    lastName: 'Landl',
                    email: 'robert.landl@latasna.de',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.writer,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Petra',
                    lastName: 'Slavikova',
                    email: 'petra.slavikova@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.writer,
                    isActive: true,
                    isRemoved: false
                },
                {
                    firstName: 'Oliver',
                    lastName: 'Ladovy',
                    email: 'oliver.ladovy@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.reader,
                    isActive: false,
                    isRemoved: false
                },
                {
                    firstName: 'Marcel',
                    lastName: 'Dvorak',
                    email: 'marcel.dvorak@latasna.com',
                    password: '$2a$10$y/eo3/gCQtGxZ7BAaFZQnOh8qRzX19Y5wXDFzTnGIQNSfmfeP7LNu',
                    userRole: userRole.admin,
                    isActive: true,
                    isRemoved: false
                }
            ])
        })
}
