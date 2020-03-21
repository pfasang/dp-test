// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type Activity {
  id: ID!
  name: String!
  project: Project!
  user: Profile!
  startDate: DateTime!
  endDate: DateTime
  skills(where: ActivitySkillWhereInput, orderBy: ActivitySkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySkill!]
}

type ActivityConnection {
  pageInfo: PageInfo!
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutActivitiesInput!
  user: ProfileCreateOneWithoutActivitiesInput!
  startDate: DateTime!
  endDate: DateTime
  skills: ActivitySkillCreateManyWithoutOwnerInput
}

input ActivityCreateManyWithoutProjectInput {
  create: [ActivityCreateWithoutProjectInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateManyWithoutUserInput {
  create: [ActivityCreateWithoutUserInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateOneWithoutSkillsInput {
  create: ActivityCreateWithoutSkillsInput
  connect: ActivityWhereUniqueInput
}

input ActivityCreateWithoutProjectInput {
  id: ID
  name: String!
  user: ProfileCreateOneWithoutActivitiesInput!
  startDate: DateTime!
  endDate: DateTime
  skills: ActivitySkillCreateManyWithoutOwnerInput
}

input ActivityCreateWithoutSkillsInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutActivitiesInput!
  user: ProfileCreateOneWithoutActivitiesInput!
  startDate: DateTime!
  endDate: DateTime
}

input ActivityCreateWithoutUserInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutActivitiesInput!
  startDate: DateTime!
  endDate: DateTime
  skills: ActivitySkillCreateManyWithoutOwnerInput
}

type ActivityEdge {
  node: Activity!
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
}

type ActivityPreviousValues {
  id: ID!
  name: String!
  startDate: DateTime!
  endDate: DateTime
}

input ActivityScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  AND: [ActivityScalarWhereInput!]
  OR: [ActivityScalarWhereInput!]
  NOT: [ActivityScalarWhereInput!]
}

type ActivitySkill {
  id: ID!
  level: Int!
  skill: Skill!
  owner: Activity!
}

type ActivitySkillConnection {
  pageInfo: PageInfo!
  edges: [ActivitySkillEdge]!
  aggregate: AggregateActivitySkill!
}

input ActivitySkillCreateInput {
  id: ID
  level: Int!
  skill: SkillCreateOneInput!
  owner: ActivityCreateOneWithoutSkillsInput!
}

input ActivitySkillCreateManyWithoutOwnerInput {
  create: [ActivitySkillCreateWithoutOwnerInput!]
  connect: [ActivitySkillWhereUniqueInput!]
}

input ActivitySkillCreateWithoutOwnerInput {
  id: ID
  level: Int!
  skill: SkillCreateOneInput!
}

type ActivitySkillEdge {
  node: ActivitySkill!
  cursor: String!
}

enum ActivitySkillOrderByInput {
  id_ASC
  id_DESC
  level_ASC
  level_DESC
}

type ActivitySkillPreviousValues {
  id: ID!
  level: Int!
}

input ActivitySkillScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  AND: [ActivitySkillScalarWhereInput!]
  OR: [ActivitySkillScalarWhereInput!]
  NOT: [ActivitySkillScalarWhereInput!]
}

type ActivitySkillSubscriptionPayload {
  mutation: MutationType!
  node: ActivitySkill
  updatedFields: [String!]
  previousValues: ActivitySkillPreviousValues
}

input ActivitySkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivitySkillWhereInput
  AND: [ActivitySkillSubscriptionWhereInput!]
  OR: [ActivitySkillSubscriptionWhereInput!]
  NOT: [ActivitySkillSubscriptionWhereInput!]
}

input ActivitySkillUpdateInput {
  level: Int
  skill: SkillUpdateOneRequiredInput
  owner: ActivityUpdateOneRequiredWithoutSkillsInput
}

input ActivitySkillUpdateManyDataInput {
  level: Int
}

input ActivitySkillUpdateManyMutationInput {
  level: Int
}

input ActivitySkillUpdateManyWithoutOwnerInput {
  create: [ActivitySkillCreateWithoutOwnerInput!]
  delete: [ActivitySkillWhereUniqueInput!]
  connect: [ActivitySkillWhereUniqueInput!]
  set: [ActivitySkillWhereUniqueInput!]
  disconnect: [ActivitySkillWhereUniqueInput!]
  update: [ActivitySkillUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ActivitySkillUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ActivitySkillScalarWhereInput!]
  updateMany: [ActivitySkillUpdateManyWithWhereNestedInput!]
}

input ActivitySkillUpdateManyWithWhereNestedInput {
  where: ActivitySkillScalarWhereInput!
  data: ActivitySkillUpdateManyDataInput!
}

input ActivitySkillUpdateWithoutOwnerDataInput {
  level: Int
  skill: SkillUpdateOneRequiredInput
}

input ActivitySkillUpdateWithWhereUniqueWithoutOwnerInput {
  where: ActivitySkillWhereUniqueInput!
  data: ActivitySkillUpdateWithoutOwnerDataInput!
}

input ActivitySkillUpsertWithWhereUniqueWithoutOwnerInput {
  where: ActivitySkillWhereUniqueInput!
  update: ActivitySkillUpdateWithoutOwnerDataInput!
  create: ActivitySkillCreateWithoutOwnerInput!
}

input ActivitySkillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  skill: SkillWhereInput
  owner: ActivityWhereInput
  AND: [ActivitySkillWhereInput!]
  OR: [ActivitySkillWhereInput!]
  NOT: [ActivitySkillWhereInput!]
}

input ActivitySkillWhereUniqueInput {
  id: ID
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
  AND: [ActivitySubscriptionWhereInput!]
  OR: [ActivitySubscriptionWhereInput!]
  NOT: [ActivitySubscriptionWhereInput!]
}

input ActivityUpdateInput {
  name: String
  project: ProjectUpdateOneRequiredWithoutActivitiesInput
  user: ProfileUpdateOneRequiredWithoutActivitiesInput
  startDate: DateTime
  endDate: DateTime
  skills: ActivitySkillUpdateManyWithoutOwnerInput
}

input ActivityUpdateManyDataInput {
  name: String
  startDate: DateTime
  endDate: DateTime
}

input ActivityUpdateManyMutationInput {
  name: String
  startDate: DateTime
  endDate: DateTime
}

input ActivityUpdateManyWithoutProjectInput {
  create: [ActivityCreateWithoutProjectInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  set: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [ActivityUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [ActivityScalarWhereInput!]
  updateMany: [ActivityUpdateManyWithWhereNestedInput!]
}

input ActivityUpdateManyWithoutUserInput {
  create: [ActivityCreateWithoutUserInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  set: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ActivityUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ActivityScalarWhereInput!]
  updateMany: [ActivityUpdateManyWithWhereNestedInput!]
}

input ActivityUpdateManyWithWhereNestedInput {
  where: ActivityScalarWhereInput!
  data: ActivityUpdateManyDataInput!
}

input ActivityUpdateOneRequiredWithoutSkillsInput {
  create: ActivityCreateWithoutSkillsInput
  update: ActivityUpdateWithoutSkillsDataInput
  upsert: ActivityUpsertWithoutSkillsInput
  connect: ActivityWhereUniqueInput
}

input ActivityUpdateWithoutProjectDataInput {
  name: String
  user: ProfileUpdateOneRequiredWithoutActivitiesInput
  startDate: DateTime
  endDate: DateTime
  skills: ActivitySkillUpdateManyWithoutOwnerInput
}

input ActivityUpdateWithoutSkillsDataInput {
  name: String
  project: ProjectUpdateOneRequiredWithoutActivitiesInput
  user: ProfileUpdateOneRequiredWithoutActivitiesInput
  startDate: DateTime
  endDate: DateTime
}

input ActivityUpdateWithoutUserDataInput {
  name: String
  project: ProjectUpdateOneRequiredWithoutActivitiesInput
  startDate: DateTime
  endDate: DateTime
  skills: ActivitySkillUpdateManyWithoutOwnerInput
}

input ActivityUpdateWithWhereUniqueWithoutProjectInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateWithoutProjectDataInput!
}

input ActivityUpdateWithWhereUniqueWithoutUserInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateWithoutUserDataInput!
}

input ActivityUpsertWithoutSkillsInput {
  update: ActivityUpdateWithoutSkillsDataInput!
  create: ActivityCreateWithoutSkillsInput!
}

input ActivityUpsertWithWhereUniqueWithoutProjectInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateWithoutProjectDataInput!
  create: ActivityCreateWithoutProjectInput!
}

input ActivityUpsertWithWhereUniqueWithoutUserInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateWithoutUserDataInput!
  create: ActivityCreateWithoutUserInput!
}

input ActivityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  project: ProjectWhereInput
  user: ProfileWhereInput
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  skills_every: ActivitySkillWhereInput
  skills_some: ActivitySkillWhereInput
  skills_none: ActivitySkillWhereInput
  AND: [ActivityWhereInput!]
  OR: [ActivityWhereInput!]
  NOT: [ActivityWhereInput!]
}

input ActivityWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateActivitySkill {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateSkill {
  count: Int!
}

type AggregateUserSkill {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createActivity(data: ActivityCreateInput!): Activity!
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateManyActivities(data: ActivityUpdateManyMutationInput!, where: ActivityWhereInput): BatchPayload!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  createActivitySkill(data: ActivitySkillCreateInput!): ActivitySkill!
  updateActivitySkill(data: ActivitySkillUpdateInput!, where: ActivitySkillWhereUniqueInput!): ActivitySkill
  updateManyActivitySkills(data: ActivitySkillUpdateManyMutationInput!, where: ActivitySkillWhereInput): BatchPayload!
  upsertActivitySkill(where: ActivitySkillWhereUniqueInput!, create: ActivitySkillCreateInput!, update: ActivitySkillUpdateInput!): ActivitySkill!
  deleteActivitySkill(where: ActivitySkillWhereUniqueInput!): ActivitySkill
  deleteManyActivitySkills(where: ActivitySkillWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createSkill(data: SkillCreateInput!): Skill!
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  deleteManySkills(where: SkillWhereInput): BatchPayload!
  createUserSkill(data: UserSkillCreateInput!): UserSkill!
  updateUserSkill(data: UserSkillUpdateInput!, where: UserSkillWhereUniqueInput!): UserSkill
  updateManyUserSkills(data: UserSkillUpdateManyMutationInput!, where: UserSkillWhereInput): BatchPayload!
  upsertUserSkill(where: UserSkillWhereUniqueInput!, create: UserSkillCreateInput!, update: UserSkillUpdateInput!): UserSkill!
  deleteUserSkill(where: UserSkillWhereUniqueInput!): UserSkill
  deleteManyUserSkills(where: UserSkillWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  firstName: String!
  lastName: String!
  title: String
  user: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
  skills(where: UserSkillWhereInput, orderBy: UserSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserSkill!]
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  firstName: String!
  lastName: String!
  title: String
  user: ID
  activities: ActivityCreateManyWithoutUserInput
  skills: UserSkillCreateManyWithoutOwnerInput
}

input ProfileCreateOneWithoutActivitiesInput {
  create: ProfileCreateWithoutActivitiesInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutSkillsInput {
  create: ProfileCreateWithoutSkillsInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutActivitiesInput {
  firstName: String!
  lastName: String!
  title: String
  user: ID
  skills: UserSkillCreateManyWithoutOwnerInput
}

input ProfileCreateWithoutSkillsInput {
  firstName: String!
  lastName: String!
  title: String
  user: ID
  activities: ActivityCreateManyWithoutUserInput
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  title_ASC
  title_DESC
  user_ASC
  user_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  firstName: String!
  lastName: String!
  title: String
  user: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateInput {
  firstName: String
  lastName: String
  title: String
  activities: ActivityUpdateManyWithoutUserInput
  skills: UserSkillUpdateManyWithoutOwnerInput
}

input ProfileUpdateManyMutationInput {
  firstName: String
  lastName: String
  title: String
}

input ProfileUpdateOneRequiredWithoutActivitiesInput {
  create: ProfileCreateWithoutActivitiesInput
  update: ProfileUpdateWithoutActivitiesDataInput
  upsert: ProfileUpsertWithoutActivitiesInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateOneRequiredWithoutSkillsInput {
  create: ProfileCreateWithoutSkillsInput
  update: ProfileUpdateWithoutSkillsDataInput
  upsert: ProfileUpsertWithoutSkillsInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutActivitiesDataInput {
  firstName: String
  lastName: String
  title: String
  skills: UserSkillUpdateManyWithoutOwnerInput
}

input ProfileUpdateWithoutSkillsDataInput {
  firstName: String
  lastName: String
  title: String
  activities: ActivityUpdateManyWithoutUserInput
}

input ProfileUpsertWithoutActivitiesInput {
  update: ProfileUpdateWithoutActivitiesDataInput!
  create: ProfileCreateWithoutActivitiesInput!
}

input ProfileUpsertWithoutSkillsInput {
  update: ProfileUpdateWithoutSkillsDataInput!
  create: ProfileCreateWithoutSkillsInput!
}

input ProfileWhereInput {
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  user: ID
  user_not: ID
  user_in: [ID!]
  user_not_in: [ID!]
  user_lt: ID
  user_lte: ID
  user_gt: ID
  user_gte: ID
  user_contains: ID
  user_not_contains: ID
  user_starts_with: ID
  user_not_starts_with: ID
  user_ends_with: ID
  user_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  activities_every: ActivityWhereInput
  activities_some: ActivityWhereInput
  activities_none: ActivityWhereInput
  skills_every: UserSkillWhereInput
  skills_some: UserSkillWhereInput
  skills_none: UserSkillWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  user: ID
}

type Project {
  id: ID!
  name: String!
  description: String!
  manager: ID!
  startDate: DateTime!
  endDate: DateTime
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  name: String!
  description: String!
  manager: ID!
  startDate: DateTime!
  endDate: DateTime
  activities: ActivityCreateManyWithoutProjectInput
}

input ProjectCreateOneWithoutActivitiesInput {
  create: ProjectCreateWithoutActivitiesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutActivitiesInput {
  id: ID
  name: String!
  description: String!
  manager: ID!
  startDate: DateTime!
  endDate: DateTime
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  manager_ASC
  manager_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  description: String!
  manager: ID!
  startDate: DateTime!
  endDate: DateTime
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  description: String
  manager: ID
  startDate: DateTime
  endDate: DateTime
  activities: ActivityUpdateManyWithoutProjectInput
}

input ProjectUpdateManyMutationInput {
  name: String
  description: String
  manager: ID
  startDate: DateTime
  endDate: DateTime
}

input ProjectUpdateOneRequiredWithoutActivitiesInput {
  create: ProjectCreateWithoutActivitiesInput
  update: ProjectUpdateWithoutActivitiesDataInput
  upsert: ProjectUpsertWithoutActivitiesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutActivitiesDataInput {
  name: String
  description: String
  manager: ID
  startDate: DateTime
  endDate: DateTime
}

input ProjectUpsertWithoutActivitiesInput {
  update: ProjectUpdateWithoutActivitiesDataInput!
  create: ProjectCreateWithoutActivitiesInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  manager: ID
  manager_not: ID
  manager_in: [ID!]
  manager_not_in: [ID!]
  manager_lt: ID
  manager_lte: ID
  manager_gt: ID
  manager_gte: ID
  manager_contains: ID
  manager_not_contains: ID
  manager_starts_with: ID
  manager_not_starts_with: ID
  manager_ends_with: ID
  manager_not_ends_with: ID
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  activities_every: ActivityWhereInput
  activities_some: ActivityWhereInput
  activities_none: ActivityWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  activity(where: ActivityWhereUniqueInput!): Activity
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  activitySkill(where: ActivitySkillWhereUniqueInput!): ActivitySkill
  activitySkills(where: ActivitySkillWhereInput, orderBy: ActivitySkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySkill]!
  activitySkillsConnection(where: ActivitySkillWhereInput, orderBy: ActivitySkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivitySkillConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  skill(where: SkillWhereUniqueInput!): Skill
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!
  userSkill(where: UserSkillWhereUniqueInput!): UserSkill
  userSkills(where: UserSkillWhereInput, orderBy: UserSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserSkill]!
  userSkillsConnection(where: UserSkillWhereInput, orderBy: UserSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserSkillConnection!
  node(id: ID!): Node
}

type Skill {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SkillConnection {
  pageInfo: PageInfo!
  edges: [SkillEdge]!
  aggregate: AggregateSkill!
}

input SkillCreateInput {
  id: ID
  name: String!
}

input SkillCreateOneInput {
  create: SkillCreateInput
  connect: SkillWhereUniqueInput
}

type SkillEdge {
  node: Skill!
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SkillSubscriptionPayload {
  mutation: MutationType!
  node: Skill
  updatedFields: [String!]
  previousValues: SkillPreviousValues
}

input SkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillWhereInput
  AND: [SkillSubscriptionWhereInput!]
  OR: [SkillSubscriptionWhereInput!]
  NOT: [SkillSubscriptionWhereInput!]
}

input SkillUpdateDataInput {
  name: String
}

input SkillUpdateInput {
  name: String
}

input SkillUpdateManyMutationInput {
  name: String
}

input SkillUpdateOneRequiredInput {
  create: SkillCreateInput
  update: SkillUpdateDataInput
  upsert: SkillUpsertNestedInput
  connect: SkillWhereUniqueInput
}

input SkillUpsertNestedInput {
  update: SkillUpdateDataInput!
  create: SkillCreateInput!
}

input SkillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SkillWhereInput!]
  OR: [SkillWhereInput!]
  NOT: [SkillWhereInput!]
}

input SkillWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  activitySkill(where: ActivitySkillSubscriptionWhereInput): ActivitySkillSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
  userSkill(where: UserSkillSubscriptionWhereInput): UserSkillSubscriptionPayload
}

type UserSkill {
  id: ID!
  level: Int!
  skill: Skill!
  owner: Profile!
}

type UserSkillConnection {
  pageInfo: PageInfo!
  edges: [UserSkillEdge]!
  aggregate: AggregateUserSkill!
}

input UserSkillCreateInput {
  id: ID
  level: Int!
  skill: SkillCreateOneInput!
  owner: ProfileCreateOneWithoutSkillsInput!
}

input UserSkillCreateManyWithoutOwnerInput {
  create: [UserSkillCreateWithoutOwnerInput!]
  connect: [UserSkillWhereUniqueInput!]
}

input UserSkillCreateWithoutOwnerInput {
  id: ID
  level: Int!
  skill: SkillCreateOneInput!
}

type UserSkillEdge {
  node: UserSkill!
  cursor: String!
}

enum UserSkillOrderByInput {
  id_ASC
  id_DESC
  level_ASC
  level_DESC
}

type UserSkillPreviousValues {
  id: ID!
  level: Int!
}

input UserSkillScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  AND: [UserSkillScalarWhereInput!]
  OR: [UserSkillScalarWhereInput!]
  NOT: [UserSkillScalarWhereInput!]
}

type UserSkillSubscriptionPayload {
  mutation: MutationType!
  node: UserSkill
  updatedFields: [String!]
  previousValues: UserSkillPreviousValues
}

input UserSkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserSkillWhereInput
  AND: [UserSkillSubscriptionWhereInput!]
  OR: [UserSkillSubscriptionWhereInput!]
  NOT: [UserSkillSubscriptionWhereInput!]
}

input UserSkillUpdateInput {
  level: Int
  skill: SkillUpdateOneRequiredInput
  owner: ProfileUpdateOneRequiredWithoutSkillsInput
}

input UserSkillUpdateManyDataInput {
  level: Int
}

input UserSkillUpdateManyMutationInput {
  level: Int
}

input UserSkillUpdateManyWithoutOwnerInput {
  create: [UserSkillCreateWithoutOwnerInput!]
  delete: [UserSkillWhereUniqueInput!]
  connect: [UserSkillWhereUniqueInput!]
  set: [UserSkillWhereUniqueInput!]
  disconnect: [UserSkillWhereUniqueInput!]
  update: [UserSkillUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [UserSkillUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [UserSkillScalarWhereInput!]
  updateMany: [UserSkillUpdateManyWithWhereNestedInput!]
}

input UserSkillUpdateManyWithWhereNestedInput {
  where: UserSkillScalarWhereInput!
  data: UserSkillUpdateManyDataInput!
}

input UserSkillUpdateWithoutOwnerDataInput {
  level: Int
  skill: SkillUpdateOneRequiredInput
}

input UserSkillUpdateWithWhereUniqueWithoutOwnerInput {
  where: UserSkillWhereUniqueInput!
  data: UserSkillUpdateWithoutOwnerDataInput!
}

input UserSkillUpsertWithWhereUniqueWithoutOwnerInput {
  where: UserSkillWhereUniqueInput!
  update: UserSkillUpdateWithoutOwnerDataInput!
  create: UserSkillCreateWithoutOwnerInput!
}

input UserSkillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  skill: SkillWhereInput
  owner: ProfileWhereInput
  AND: [UserSkillWhereInput!]
  OR: [UserSkillWhereInput!]
  NOT: [UserSkillWhereInput!]
}

input UserSkillWhereUniqueInput {
  id: ID
}
`