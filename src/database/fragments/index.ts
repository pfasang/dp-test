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
    user
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

// TODO profile fragment
