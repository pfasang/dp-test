let knexx = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            database: 'linkedin_dev',
            user: 'postgres',
            password: 'admin',
            charset: 'utf8'
        },
        migrations: {
            directory: __dirname + '/migrations'
        },
        debug: false,
        seeds: {
            directory: __dirname + '/seeds/dev'
        }
    },
    test: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            database: 'linkedin_test',
            user: 'postgres',
            password: 'admin',
            charset: 'utf8'
        },
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds/test'
        }
    }
};
export = knexx;
