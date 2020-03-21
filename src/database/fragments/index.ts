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
  manager
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
        name
      }
    }
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
        name
      }
    }
  }
  createdAt
  updatedAt
}`;
// TODO profile fragment
