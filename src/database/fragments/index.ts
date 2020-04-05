export const activityFragment = `
fragment UserActivities on Activity {
  id
  name
  startDate
  endDate
  project {
    name
  }
  skills {
    level
    skill {
      id
      name
    }
  }
}`;

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

export const profileFragment = `
fragment Profile on Profile {
  firstName
  lastName
  user
  title
  skills {
    level
    skill {
      id
      name
    }
  }
  activities {
    id
    name
    startDate
    endDate
    project {
      name
    }
    skills {
      level
      skill {
        id
        name
      }
    }
  }
  createdAt
  updatedAt
}`;
// TODO profile fragment
