// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type ActivitySkill {
  id: ID!
  skillId: ID!
  activityId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ActivitySkillConnection {
  pageInfo: PageInfo!
  edges: [ActivitySkillEdge]!
  aggregate: AggregateActivitySkill!
}

input ActivitySkillCreateInput {
  id: ID
  skillId: ID!
  activityId: ID!
}

type ActivitySkillEdge {
  node: ActivitySkill!
  cursor: String!
}

enum ActivitySkillOrderByInput {
  id_ASC
  id_DESC
  skillId_ASC
  skillId_DESC
  activityId_ASC
  activityId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivitySkillPreviousValues {
  id: ID!
  skillId: ID!
  activityId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  skillId: ID
  activityId: ID
}

input ActivitySkillUpdateManyMutationInput {
  skillId: ID
  activityId: ID
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
  skillId: ID
  skillId_not: ID
  skillId_in: [ID!]
  skillId_not_in: [ID!]
  skillId_lt: ID
  skillId_lte: ID
  skillId_gt: ID
  skillId_gte: ID
  skillId_contains: ID
  skillId_not_contains: ID
  skillId_starts_with: ID
  skillId_not_starts_with: ID
  skillId_ends_with: ID
  skillId_not_ends_with: ID
  activityId: ID
  activityId_not: ID
  activityId_in: [ID!]
  activityId_not_in: [ID!]
  activityId_lt: ID
  activityId_lte: ID
  activityId_gt: ID
  activityId_gte: ID
  activityId_contains: ID
  activityId_not_contains: ID
  activityId_starts_with: ID
  activityId_not_starts_with: ID
  activityId_ends_with: ID
  activityId_not_ends_with: ID
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
  AND: [ActivitySkillWhereInput!]
  OR: [ActivitySkillWhereInput!]
  NOT: [ActivitySkillWhereInput!]
}

input ActivitySkillWhereUniqueInput {
  id: ID
}

type AggregateActivitySkill {
  count: Int!
}

type AggregateOwnerSkill {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateSkill {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createActivitySkill(data: ActivitySkillCreateInput!): ActivitySkill!
  updateActivitySkill(data: ActivitySkillUpdateInput!, where: ActivitySkillWhereUniqueInput!): ActivitySkill
  updateManyActivitySkills(data: ActivitySkillUpdateManyMutationInput!, where: ActivitySkillWhereInput): BatchPayload!
  upsertActivitySkill(where: ActivitySkillWhereUniqueInput!, create: ActivitySkillCreateInput!, update: ActivitySkillUpdateInput!): ActivitySkill!
  deleteActivitySkill(where: ActivitySkillWhereUniqueInput!): ActivitySkill
  deleteManyActivitySkills(where: ActivitySkillWhereInput): BatchPayload!
  createOwnerSkill(data: OwnerSkillCreateInput!): OwnerSkill!
  updateOwnerSkill(data: OwnerSkillUpdateInput!, where: OwnerSkillWhereUniqueInput!): OwnerSkill
  updateManyOwnerSkills(data: OwnerSkillUpdateManyMutationInput!, where: OwnerSkillWhereInput): BatchPayload!
  upsertOwnerSkill(where: OwnerSkillWhereUniqueInput!, create: OwnerSkillCreateInput!, update: OwnerSkillUpdateInput!): OwnerSkill!
  deleteOwnerSkill(where: OwnerSkillWhereUniqueInput!): OwnerSkill
  deleteManyOwnerSkills(where: OwnerSkillWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createSkill(data: SkillCreateInput!): Skill!
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  deleteManySkills(where: SkillWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type OwnerSkill {
  id: ID!
  skillId: ID!
  userId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OwnerSkillConnection {
  pageInfo: PageInfo!
  edges: [OwnerSkillEdge]!
  aggregate: AggregateOwnerSkill!
}

input OwnerSkillCreateInput {
  id: ID
  skillId: ID!
  userId: ID!
}

type OwnerSkillEdge {
  node: OwnerSkill!
  cursor: String!
}

enum OwnerSkillOrderByInput {
  id_ASC
  id_DESC
  skillId_ASC
  skillId_DESC
  userId_ASC
  userId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OwnerSkillPreviousValues {
  id: ID!
  skillId: ID!
  userId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OwnerSkillSubscriptionPayload {
  mutation: MutationType!
  node: OwnerSkill
  updatedFields: [String!]
  previousValues: OwnerSkillPreviousValues
}

input OwnerSkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OwnerSkillWhereInput
  AND: [OwnerSkillSubscriptionWhereInput!]
  OR: [OwnerSkillSubscriptionWhereInput!]
  NOT: [OwnerSkillSubscriptionWhereInput!]
}

input OwnerSkillUpdateInput {
  skillId: ID
  userId: ID
}

input OwnerSkillUpdateManyMutationInput {
  skillId: ID
  userId: ID
}

input OwnerSkillWhereInput {
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
  skillId: ID
  skillId_not: ID
  skillId_in: [ID!]
  skillId_not_in: [ID!]
  skillId_lt: ID
  skillId_lte: ID
  skillId_gt: ID
  skillId_gte: ID
  skillId_contains: ID
  skillId_not_contains: ID
  skillId_starts_with: ID
  skillId_not_starts_with: ID
  skillId_ends_with: ID
  skillId_not_ends_with: ID
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
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
  AND: [OwnerSkillWhereInput!]
  OR: [OwnerSkillWhereInput!]
  NOT: [OwnerSkillWhereInput!]
}

input OwnerSkillWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  firstName: String!
  lastName: String!
  title: String
  userId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  id: ID
  firstName: String!
  lastName: String!
  title: String
  userId: ID!
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  title_ASC
  title_DESC
  userId_ASC
  userId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  title: String
  userId: ID!
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
  userId: ID
}

input ProfileUpdateManyMutationInput {
  firstName: String
  lastName: String
  title: String
  userId: ID
}

input ProfileWhereInput {
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
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
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
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
  userId: ID
}

type Query {
  activitySkill(where: ActivitySkillWhereUniqueInput!): ActivitySkill
  activitySkills(where: ActivitySkillWhereInput, orderBy: ActivitySkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySkill]!
  activitySkillsConnection(where: ActivitySkillWhereInput, orderBy: ActivitySkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivitySkillConnection!
  ownerSkill(where: OwnerSkillWhereUniqueInput!): OwnerSkill
  ownerSkills(where: OwnerSkillWhereInput, orderBy: OwnerSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OwnerSkill]!
  ownerSkillsConnection(where: OwnerSkillWhereInput, orderBy: OwnerSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OwnerSkillConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  skill(where: SkillWhereUniqueInput!): Skill
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!
  node(id: ID!): Node
}

type Skill {
  id: ID!
  name: String!
  level: Int!
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
  level: Int!
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
  level_ASC
  level_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  name: String!
  level: Int!
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

input SkillUpdateInput {
  name: String
  level: Int
}

input SkillUpdateManyMutationInput {
  name: String
  level: Int
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
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
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
  activitySkill(where: ActivitySkillSubscriptionWhereInput): ActivitySkillSubscriptionPayload
  ownerSkill(where: OwnerSkillSubscriptionWhereInput): OwnerSkillSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
}
`