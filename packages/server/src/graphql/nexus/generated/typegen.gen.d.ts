import type { FileUpload } from "@apollographql/graphql-upload-8-fork";

import type { ServerContext as ctx } from "./../../context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
import type { FieldRateLimitResolver } from "../../nexus/plugins/rate-limit.plugin"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Json";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    upload<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
    /**
     * A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.
     */
    url<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "URL";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Json";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
    /**
     * A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.
     */
    url<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "URL";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  EnumExperienceTypeNullableFilter: { // input type
    equals?: NexusGenEnums['ExperienceType'] | null; // ExperienceType
    in?: NexusGenEnums['ExperienceType'][] | null; // [ExperienceType!]
    notIn?: NexusGenEnums['ExperienceType'][] | null; // [ExperienceType!]
  }
  ExperienceCreateInput: { // input type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    highlights?: string[] | null; // [String!]
    location?: string | null; // String
    organizationName: string; // String!
    positionName?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
    type?: NexusGenEnums['ExperienceType'] | null; // ExperienceType
  }
  ExperienceOrderByInput: { // input type
    endDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
    startDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  ExperienceUpdateInput: { // input type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    highlights?: string[] | null; // [String!]
    location?: string | null; // String
    organizationName?: string | null; // String
    positionName?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
    type?: NexusGenEnums['ExperienceType'] | null; // ExperienceType
  }
  ExperienceWhereInput: { // input type
    organizationName?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    positionName?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    type?: NexusGenInputs['EnumExperienceTypeNullableFilter'] | null; // EnumExperienceTypeNullableFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: string | null; // String
  }
  ExperienceWhereUniqueInput: { // input type
    id: number; // Int!
  }
  PostAuthorNameUrlSlugCompoundUniqueInput: { // input type
    authorName: string; // String!
    urlSlug: string; // String!
  }
  PostDraftUpdateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
    description?: string | null; // String
    thumbnailUrl?: string | null; // String
    title?: string | null; // String
  }
  PostPublishInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
    description?: string | null; // String
    thumbnailUrl?: string | null; // String
    title?: string | null; // String
  }
  PostUpdateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
    description?: string | null; // String
    thumbnailUrl?: string | null; // String
  }
  PostWhereInput: { // input type
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  PostWhereUniqueInput: { // input type
    authorName_urlSlug?: NexusGenInputs['PostAuthorNameUrlSlugCompoundUniqueInput'] | null; // PostAuthorNameUrlSlugCompoundUniqueInput
    id?: number | null; // Int
  }
  SkillNameOwnerCompoundUniqueInput: { // input type
    name: string; // String!
    owner: string; // String!
  }
  SkillWhereUniqueInput: { // input type
    id?: number | null; // Int
    name_owner?: NexusGenInputs['SkillNameOwnerCompoundUniqueInput'] | null; // SkillNameOwnerCompoundUniqueInput
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    in?: string[] | null; // [String!]
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  SuggestExperiencesWhereInput: { // input type
    name: string; // String!
  }
  SuggestSkillsWhereInput: { // input type
    name: string; // String!
    owner: string; // String!
  }
  UpdateDesiredSkillsInput: { // input type
    skills: NexusGenInputs['SkillWhereUniqueInput'][]; // [SkillWhereUniqueInput!]!
  }
  UpdateSkillsInput: { // input type
    skills: NexusGenInputs['SkillWhereUniqueInput'][]; // [SkillWhereUniqueInput!]!
  }
  UploadPostImageInput: { // input type
    image: NexusGenScalars['Upload']; // Upload!
  }
  UserWhereInput: { // input type
    name?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
}

export interface NexusGenEnums {
  ExperienceType: "Contract" | "FullTime" | "Intern" | "OpenSource" | "PartTime"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  BigInt: any
  Bytes: any
  DateTime: Date
  Decimal: any
  Json: any
  URL: string
  Upload: Promise<FileUpload>
}

export interface NexusGenObjects {
  Comment: { // root type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Experience: { // root type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    highlights: string[]; // [String!]!
    id: number; // Int!
    location?: string | null; // String
    organizationName: string; // String!
    positionName?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
    type?: NexusGenEnums['ExperienceType'] | null; // ExperienceType
  }
  ExperienceConnection: { // root type
    edges: NexusGenRootTypes['ExperienceEdge'][]; // [ExperienceEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ExperienceEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Experience']; // Experience!
  }
  GitHubOrganization: { // root type
    avatarUrl: NexusGenScalars['URL']; // URL!
    description?: string | null; // String
    id: string; // String!
    login: string; // String!
    name?: string | null; // String
    url: NexusGenScalars['URL']; // URL!
  }
  GitHubRepository: { // root type
    description?: string | null; // String
    id: string; // String!
    name: string; // String!
    owner: NexusGenRootTypes['GitHubRepositoryOwner']; // GitHubRepositoryOwner!
    url: NexusGenScalars['URL']; // URL!
  }
  GitHubUser: { // root type
    avatarUrl: NexusGenScalars['URL']; // URL!
    bio?: string | null; // String
    company?: string | null; // String
    id: string; // String!
    login: string; // String!
    name?: string | null; // String
    twitterUsername?: string | null; // String
    url: NexusGenScalars['URL']; // URL!
    websiteUrl?: string | null; // String
  }
  Mutation: {};
  Organization: { // root type
    id: number; // Int!
    name: string; // String!
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Post: { // root type
    authorName: string; // String!
    content?: NexusGenScalars['Json'] | null; // Json
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: number; // Int!
    publishedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    thumbnailUrl?: string | null; // String
    title?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    urlSlug: string; // String!
  }
  PostConnection: { // root type
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  PostEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  PostImage: { // root type
    id: string; // ID!
    postId: number; // Int!
    url: string; // String!
  }
  Query: {};
  Skill: { // root type
    id: number; // Int!
    name: string; // String!
    owner: string; // String!
  }
  SuggestExperiences: { // root type
    nodes: NexusGenRootTypes['GitHubOrganization'][]; // [GitHubOrganization!]!
    totalCount: number; // Int!
  }
  SuggestSkills: { // root type
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
    totalCount: number; // Int!
  }
  TopLanguage: { // root type
    color: string; // String!
    name: string; // String!
    size: number; // Int!
  }
  TopLanguages: { // root type
    nodes: NexusGenRootTypes['TopLanguage'][]; // [TopLanguage!]!
  }
  User: { // root type
    description?: string | null; // String
    email: string; // String!
    id: string; // ID!
    image?: string | null; // String
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
  GitHubRepositoryOwner: core.Discriminate<'GitHubOrganization', 'required'> | core.Discriminate<'GitHubUser', 'required'>;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Comment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Experience: { // field return type
    endDate: NexusGenScalars['DateTime'] | null; // DateTime
    highlights: string[]; // [String!]!
    id: number; // Int!
    location: string | null; // String
    organization: NexusGenRootTypes['Organization']; // Organization!
    organizationName: string; // String!
    positionName: string | null; // String
    startDate: NexusGenScalars['DateTime'] | null; // DateTime
    type: NexusGenEnums['ExperienceType'] | null; // ExperienceType
    user: NexusGenRootTypes['User']; // User!
  }
  ExperienceConnection: { // field return type
    edges: NexusGenRootTypes['ExperienceEdge'][]; // [ExperienceEdge!]!
    nodes: NexusGenRootTypes['Experience'][]; // [Experience!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ExperienceEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Experience']; // Experience!
  }
  GitHubOrganization: { // field return type
    avatarUrl: NexusGenScalars['URL']; // URL!
    description: string | null; // String
    id: string; // String!
    login: string; // String!
    name: string | null; // String
    organization: NexusGenRootTypes['Organization']; // Organization!
    url: NexusGenScalars['URL']; // URL!
  }
  GitHubRepository: { // field return type
    description: string | null; // String
    id: string; // String!
    name: string; // String!
    owner: NexusGenRootTypes['GitHubRepositoryOwner']; // GitHubRepositoryOwner!
    url: NexusGenScalars['URL']; // URL!
  }
  GitHubUser: { // field return type
    avatarUrl: NexusGenScalars['URL']; // URL!
    bio: string | null; // String
    company: string | null; // String
    id: string; // String!
    login: string; // String!
    name: string | null; // String
    topLanguages: NexusGenRootTypes['TopLanguages']; // TopLanguages!
    twitterUsername: string | null; // String
    url: NexusGenScalars['URL']; // URL!
    user: NexusGenRootTypes['User']; // User!
    websiteUrl: string | null; // String
  }
  Mutation: { // field return type
    createExperience: NexusGenRootTypes['Experience']; // Experience!
    createPost: NexusGenRootTypes['Post']; // Post!
    deleteExperience: NexusGenRootTypes['Experience']; // Experience!
    deletePost: NexusGenRootTypes['Post']; // Post!
    ok: boolean; // Boolean!
    publishPost: NexusGenRootTypes['Post']; // Post!
    removePostThumbnail: NexusGenRootTypes['Post'] | null; // Post
    updateDesiredSkills: NexusGenRootTypes['User'] | null; // User
    updateExperience: NexusGenRootTypes['Experience'] | null; // Experience
    updatePost: NexusGenRootTypes['Post'] | null; // Post
    updatePostDraft: NexusGenRootTypes['Post'] | null; // Post
    updateSkills: NexusGenRootTypes['User'] | null; // User
    uploadPostImage: NexusGenRootTypes['PostImage']; // PostImage!
    upvotePost: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Organization: { // field return type
    experiences: NexusGenRootTypes['Experience'][]; // [Experience!]!
    github: NexusGenRootTypes['GitHubOrganization']; // GitHubOrganization!
    id: number; // Int!
    name: string; // String!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    authorName: string; // String!
    content: NexusGenScalars['Json'] | null; // Json
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: number; // Int!
    images: NexusGenRootTypes['PostImage'][]; // [PostImage!]!
    publishedAt: NexusGenScalars['DateTime'] | null; // DateTime
    thumbnailUrl: string | null; // String
    title: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    upvoteCount: number; // Int!
    upvotingUsers: NexusGenRootTypes['User'][]; // [User!]!
    urlSlug: string; // String!
    viewerUpvoted: boolean; // Boolean!
  }
  PostConnection: { // field return type
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    nodes: NexusGenRootTypes['Post'][]; // [Post!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  PostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  PostImage: { // field return type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    postId: number; // Int!
    url: string; // String!
  }
  Query: { // field return type
    experiences: NexusGenRootTypes['ExperienceConnection']; // ExperienceConnection!
    ok: boolean; // Boolean!
    post: NexusGenRootTypes['Post'] | null; // Post
    postDraft: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
    suggestExperiences: NexusGenRootTypes['SuggestExperiences']; // SuggestExperiences!
    suggestSkills: NexusGenRootTypes['SuggestSkills']; // SuggestSkills!
    user: NexusGenRootTypes['User'] | null; // User
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Skill: { // field return type
    desiringUsers: NexusGenRootTypes['User'][]; // [User!]!
    id: number; // Int!
    name: string; // String!
    owner: string; // String!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  SuggestExperiences: { // field return type
    nodes: NexusGenRootTypes['GitHubOrganization'][]; // [GitHubOrganization!]!
    totalCount: number; // Int!
  }
  SuggestSkills: { // field return type
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
    totalCount: number; // Int!
  }
  TopLanguage: { // field return type
    color: string; // String!
    name: string; // String!
    size: number; // Int!
  }
  TopLanguages: { // field return type
    nodes: NexusGenRootTypes['TopLanguage'][]; // [TopLanguage!]!
    totalCount: number; // Int!
    totalSize: number; // Int!
  }
  User: { // field return type
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    description: string | null; // String
    desiredSkills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    email: string; // String!
    github: NexusGenRootTypes['GitHubUser']; // GitHubUser!
    githubUrl: NexusGenScalars['URL']; // URL!
    id: string; // ID!
    image: string | null; // String
    name: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    skills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    upvotedPosts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
  GitHubRepositoryOwner: { // field return type
    avatarUrl: NexusGenScalars['URL']; // URL!
    id: string; // String!
    login: string; // String!
    url: NexusGenScalars['URL']; // URL!
  }
}

export interface NexusGenFieldTypeNames {
  Comment: { // field return type name
    author: 'User'
    content: 'String'
    createdAt: 'DateTime'
    id: 'Int'
    updatedAt: 'DateTime'
  }
  Experience: { // field return type name
    endDate: 'DateTime'
    highlights: 'String'
    id: 'Int'
    location: 'String'
    organization: 'Organization'
    organizationName: 'String'
    positionName: 'String'
    startDate: 'DateTime'
    type: 'ExperienceType'
    user: 'User'
  }
  ExperienceConnection: { // field return type name
    edges: 'ExperienceEdge'
    nodes: 'Experience'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  ExperienceEdge: { // field return type name
    cursor: 'String'
    node: 'Experience'
  }
  GitHubOrganization: { // field return type name
    avatarUrl: 'URL'
    description: 'String'
    id: 'String'
    login: 'String'
    name: 'String'
    organization: 'Organization'
    url: 'URL'
  }
  GitHubRepository: { // field return type name
    description: 'String'
    id: 'String'
    name: 'String'
    owner: 'GitHubRepositoryOwner'
    url: 'URL'
  }
  GitHubUser: { // field return type name
    avatarUrl: 'URL'
    bio: 'String'
    company: 'String'
    id: 'String'
    login: 'String'
    name: 'String'
    topLanguages: 'TopLanguages'
    twitterUsername: 'String'
    url: 'URL'
    user: 'User'
    websiteUrl: 'String'
  }
  Mutation: { // field return type name
    createExperience: 'Experience'
    createPost: 'Post'
    deleteExperience: 'Experience'
    deletePost: 'Post'
    ok: 'Boolean'
    publishPost: 'Post'
    removePostThumbnail: 'Post'
    updateDesiredSkills: 'User'
    updateExperience: 'Experience'
    updatePost: 'Post'
    updatePostDraft: 'Post'
    updateSkills: 'User'
    uploadPostImage: 'PostImage'
    upvotePost: 'Post'
    viewer: 'User'
  }
  Organization: { // field return type name
    experiences: 'Experience'
    github: 'GitHubOrganization'
    id: 'Int'
    name: 'String'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Post: { // field return type name
    author: 'User'
    authorName: 'String'
    content: 'Json'
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    images: 'PostImage'
    publishedAt: 'DateTime'
    thumbnailUrl: 'String'
    title: 'String'
    updatedAt: 'DateTime'
    upvoteCount: 'Int'
    upvotingUsers: 'User'
    urlSlug: 'String'
    viewerUpvoted: 'Boolean'
  }
  PostConnection: { // field return type name
    edges: 'PostEdge'
    nodes: 'Post'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  PostEdge: { // field return type name
    cursor: 'String'
    node: 'Post'
  }
  PostImage: { // field return type name
    id: 'ID'
    post: 'Post'
    postId: 'Int'
    url: 'String'
  }
  Query: { // field return type name
    experiences: 'ExperienceConnection'
    ok: 'Boolean'
    post: 'Post'
    postDraft: 'Post'
    posts: 'PostConnection'
    suggestExperiences: 'SuggestExperiences'
    suggestSkills: 'SuggestSkills'
    user: 'User'
    viewer: 'User'
  }
  Skill: { // field return type name
    desiringUsers: 'User'
    id: 'Int'
    name: 'String'
    owner: 'String'
    users: 'User'
  }
  SuggestExperiences: { // field return type name
    nodes: 'GitHubOrganization'
    totalCount: 'Int'
  }
  SuggestSkills: { // field return type name
    nodes: 'GitHubRepository'
    totalCount: 'Int'
  }
  TopLanguage: { // field return type name
    color: 'String'
    name: 'String'
    size: 'Int'
  }
  TopLanguages: { // field return type name
    nodes: 'TopLanguage'
    totalCount: 'Int'
    totalSize: 'Int'
  }
  User: { // field return type name
    comments: 'Comment'
    description: 'String'
    desiredSkills: 'Skill'
    email: 'String'
    github: 'GitHubUser'
    githubUrl: 'URL'
    id: 'ID'
    image: 'String'
    name: 'String'
    posts: 'Post'
    skills: 'Skill'
    upvotedPosts: 'Post'
  }
  GitHubRepositoryOwner: { // field return type name
    avatarUrl: 'URL'
    id: 'String'
    login: 'String'
    url: 'URL'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createExperience: { // args
      data: NexusGenInputs['ExperienceCreateInput']; // ExperienceCreateInput!
    }
    deleteExperience: { // args
      where: NexusGenInputs['ExperienceWhereUniqueInput']; // ExperienceWhereUniqueInput!
    }
    deletePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    publishPost: { // args
      data?: NexusGenInputs['PostPublishInput'] | null; // PostPublishInput
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    removePostThumbnail: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    updateDesiredSkills: { // args
      data: NexusGenInputs['UpdateDesiredSkillsInput']; // UpdateDesiredSkillsInput!
    }
    updateExperience: { // args
      data: NexusGenInputs['ExperienceUpdateInput']; // ExperienceUpdateInput!
      where: NexusGenInputs['ExperienceWhereUniqueInput']; // ExperienceWhereUniqueInput!
    }
    updatePost: { // args
      data: NexusGenInputs['PostUpdateInput']; // PostUpdateInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    updatePostDraft: { // args
      data: NexusGenInputs['PostDraftUpdateInput']; // PostDraftUpdateInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    updateSkills: { // args
      data: NexusGenInputs['UpdateSkillsInput']; // UpdateSkillsInput!
    }
    uploadPostImage: { // args
      data: NexusGenInputs['UploadPostImageInput']; // UploadPostImageInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    upvotePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
  }
  Post: {
    upvotingUsers: { // args
      skip?: number | null; // Int
      take: number | null; // Int
    }
  }
  Query: {
    experiences: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      orderBy?: NexusGenInputs['ExperienceOrderByInput'] | null; // ExperienceOrderByInput
      where: NexusGenInputs['ExperienceWhereInput']; // ExperienceWhereInput!
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    suggestExperiences: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestExperiencesWhereInput']; // SuggestExperiencesWhereInput!
    }
    suggestSkills: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestSkillsWhereInput']; // SuggestSkillsWhereInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  GitHubRepositoryOwner: "GitHubOrganization" | "GitHubUser"
}

export interface NexusGenTypeInterfaces {
  GitHubOrganization: "GitHubRepositoryOwner"
  GitHubUser: "GitHubRepositoryOwner"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: false
    isTypeOf: false
    __typename: true
  }
}

export interface NexusGenTypes {
  context: ctx;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    /**
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
    /**
     * Rate limit plugin for an individual field. Uses the same directive args as `graphql-rate-limit`.
     */
    rateLimit?: FieldRateLimitResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}