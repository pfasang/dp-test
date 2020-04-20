export const activityFragment = {
    project: {
        select: {
            name: true
        }
    },
    skills: {
        select: {
            level: true,
            skill: {
                select: {
                    id: true,
                    name: true,
                }
            }
        }
    }
};

export const projectFragment = `
fragment DetailProject on Project {
  id
  name
  description
  startDate
  endDate
  manager {
    user
    firstName
    lastName
  }
  activities {
    id
    name
    user {
      user
      firstName
      lastName
    }
    startDate
    endDate
    skills {
      level
      skill {
        id
        name
      }
    }
  }
}`;

export const allProjectsFragment = `
fragment AllProjects on Project {
  id
  name
  description
  startDate
  endDate
  manager {
    user
    firstName
    lastName
  }
}`;

export const profileFragment = {
    skills: {
        select: {
            level: true,
            skill: {
                select: {
                    id: true,
                    name: true,
                }
            }
        }
    },
    activities: {
        include: activityFragment
    }
};
// TODO profile fragment
