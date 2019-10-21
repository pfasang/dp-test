export default {
    dbOwner: 'wikiDevUser',

    tables: {
        user: {
            name: 'users',
            params: {
                id: 'id',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                password: 'password',
                userRole: 'userRole',
                isActive: 'isActive',
                isRemoved: 'isRemoved'
            }
        },
    },

    timestamps: {
        created: 'createdAt',
        modified: 'modifiedAt'
    },
}
