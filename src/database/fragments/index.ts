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
