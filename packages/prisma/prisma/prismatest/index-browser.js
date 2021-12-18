
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.6.0
 * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
 */
Prisma.prismaVersion = {
  client: "3.6.0",
  engine: "dc520b92b1ebb2d28dc3161f9f82e875bd35d727"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  access_token: 'access_token',
  expires_at: 'expires_at',
  id: 'id',
  id_token: 'id_token',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  oauth_token: 'oauth_token',
  oauth_token_secret: 'oauth_token_secret',
  refresh_token: 'refresh_token',
  scope: 'scope',
  session_state: 'session_state',
  token_type: 'token_type',
  type: 'type',
  userId: 'userId'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  expires: 'expires',
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  createdAt: 'createdAt',
  description: 'description',
  email: 'email',
  emailVerified: 'emailVerified',
  id: 'id',
  image: 'image',
  name: 'name',
  updatedAt: 'updatedAt'
});

exports.Prisma.VerificationTokenScalarFieldEnum = makeEnum({
  expires: 'expires',
  identifier: 'identifier',
  token: 'token'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  authorName: 'authorName',
  content: 'content',
  createdAt: 'createdAt',
  description: 'description',
  id: 'id',
  publishedAt: 'publishedAt',
  title: 'title',
  thumbnailUrl: 'thumbnailUrl',
  updatedAt: 'updatedAt',
  urlSlug: 'urlSlug'
});

exports.Prisma.PostUpvoterScalarFieldEnum = makeEnum({
  postId: 'postId',
  userId: 'userId'
});

exports.Prisma.PostImageScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  url: 'url',
  createdAt: 'createdAt'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  authorId: 'authorId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SkillScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  owner: 'owner'
});

exports.Prisma.SkillsOnUsersScalarFieldEnum = makeEnum({
  skillId: 'skillId',
  userId: 'userId'
});

exports.Prisma.DesiredSkillsOnUsersScalarFieldEnum = makeEnum({
  skillId: 'skillId',
  userId: 'userId'
});

exports.Prisma.OrganizationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ExperienceScalarFieldEnum = makeEnum({
  id: 'id',
  endDate: 'endDate',
  highlights: 'highlights',
  location: 'location',
  organizationName: 'organizationName',
  positionName: 'positionName',
  startDate: 'startDate',
  type: 'type',
  userId: 'userId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});
exports.ExperienceType = makeEnum({
  FullTime: 'FullTime',
  PartTime: 'PartTime',
  Contract: 'Contract',
  Intern: 'Intern',
  OpenSource: 'OpenSource'
});

exports.Prisma.ModelName = makeEnum({
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  Post: 'Post',
  PostUpvoter: 'PostUpvoter',
  PostImage: 'PostImage',
  Comment: 'Comment',
  Skill: 'Skill',
  SkillsOnUsers: 'SkillsOnUsers',
  DesiredSkillsOnUsers: 'DesiredSkillsOnUsers',
  Organization: 'Organization',
  Experience: 'Experience'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
