import type { FileUpload } from "@apollographql/graphql-upload-8-fork";

import type { ServerContext as ctx } from "./../../context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
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
  ChatMessageCreateInput: { // input type
    content: NexusGenScalars['Json']; // Json!
  }
  ChatMessageWhereInput: { // input type
    chatId: string; // String!
    id?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
  }
  ChatWhereInput: { // input type
    id?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  ChatWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  CommentCreateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
    parent?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
    post?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
  }
  CommentOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CommentUpdateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
  }
  CommentWhereInput: { // input type
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    authorId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    createdAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    post?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    postId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    updatedAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
  }
  CommentWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  CreateChatInput: { // input type
    message?: NexusGenScalars['Json'] | null; // Json
    users: NexusGenInputs['UserWhereInput']; // UserWhereInput!
  }
  DateTimeNullableFilter: { // input type
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
  }
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
    positionName: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
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
    id: string; // String!
  }
  FollowWhereInput: { // input type
    skill?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    type?: NexusGenEnums['FollowingType'] | null; // FollowingType
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  FollowWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  FriendshipWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  GitHubUserTotalCommitsWhereInput: { // input type
    createdAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
  }
  InviteToChatInput: { // input type
    users: NexusGenInputs['UserWhereInput']; // UserWhereInput!
  }
  NotificationsWhereInput: { // input type
    opened?: boolean | null; // Boolean
  }
  OrderByRelationAggregateInput: { // input type
    _count?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  PostAuthorNameUrlSlugCompoundUniqueInput: { // input type
    authorName: string; // String!
    urlSlug: string; // String!
  }
  PostDraftUpdateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
    description?: string | null; // String
    skills?: NexusGenInputs['SkillWhereUniqueInput'][] | null; // [SkillWhereUniqueInput!]
    thumbnailUrl?: string | null; // String
    title?: string | null; // String
  }
  PostPublishInput: { // input type
    content: NexusGenScalars['Json']; // Json!
    description: string; // String!
    readTime?: number | null; // Int
    skills: NexusGenInputs['SkillWhereUniqueInput'][]; // [SkillWhereUniqueInput!]!
    thumbnailUrl: string; // String!
    title: string; // String!
  }
  PostUpdateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
    description?: string | null; // String
    readTime?: number | null; // Int
    skills?: NexusGenInputs['SkillWhereUniqueInput'][] | null; // [SkillWhereUniqueInput!]
    thumbnailUrl?: string | null; // String
  }
  PostWhereInput: { // input type
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    authorName?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    urlSlug?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
  }
  PostWhereUniqueInput: { // input type
    authorName_urlSlug?: NexusGenInputs['PostAuthorNameUrlSlugCompoundUniqueInput'] | null; // PostAuthorNameUrlSlugCompoundUniqueInput
    id?: string | null; // String
  }
  RepositoryCreateInput: { // input type
    name: string; // String!
  }
  RepositoryNameOwnerCompoundUniqueInput: { // input type
    name: string; // String!
    owner: string; // String!
  }
  RepositoryUpdateInput: { // input type
    skills?: NexusGenInputs['SkillWhereUniqueInput'][] | null; // [SkillWhereUniqueInput!]
  }
  RepositoryWhereInput: { // input type
    name?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    owner?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  RepositoryWhereUniqueInput: { // input type
    id?: string | null; // String
    name_owner?: NexusGenInputs['RepositoryNameOwnerCompoundUniqueInput'] | null; // RepositoryNameOwnerCompoundUniqueInput
  }
  SkillNameOwnerCompoundUniqueInput: { // input type
    name: string; // String!
    owner: string; // String!
  }
  SkillOrderByInput: { // input type
    desiringUsers?: NexusGenInputs['OrderByRelationAggregateInput'] | null; // OrderByRelationAggregateInput
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    owner?: NexusGenEnums['SortOrder'] | null; // SortOrder
    users?: NexusGenInputs['OrderByRelationAggregateInput'] | null; // OrderByRelationAggregateInput
  }
  SkillWhereInput: { // input type
    AND?: NexusGenInputs['SkillWhereInput'][] | null; // [SkillWhereInput!]
    NOT?: NexusGenInputs['SkillWhereInput'][] | null; // [SkillWhereInput!]
    name?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    owner?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
  }
  SkillWhereUniqueInput: { // input type
    id?: string | null; // String
    name_owner?: NexusGenInputs['SkillNameOwnerCompoundUniqueInput'] | null; // SkillNameOwnerCompoundUniqueInput
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    in?: string[] | null; // [String!]
    not?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  SuggestExperiencesWhereInput: { // input type
    name: string; // String!
  }
  SuggestFriendsWeightsInput: { // input type
    desiredSkillsOverlap: number | null; // Float
    skillsOverlap: number | null; // Float
  }
  SuggestFriendsWhereInput: { // input type
    desiredSkillsThreshold?: number | null; // Float
    jitter: number | null; // Float
    jitterSeed?: NexusGenScalars['DateTime'] | null; // DateTime
    skills?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    skillsThreshold?: number | null; // Float
    weights: NexusGenInputs['SuggestFriendsWeightsInput'] | null; // SuggestFriendsWeightsInput
  }
  SuggestRepositoriesWhereInput: { // input type
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
  UpvoteCommentInput: { // input type
    upvote?: boolean | null; // Boolean
  }
  UserActivityWhereInput: { // input type
    type?: NexusGenEnums['UserActivityType'] | null; // UserActivityType
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UserWhereInput: { // input type
    id?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
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
  FollowingType: "Skill" | "User"
  NotificationType: "ChatMessageReceived" | "FriendshipAccepted" | "PostCommented"
  SortOrder: "asc" | "desc"
  UserActivityType: "CommentPost" | "FollowSkill" | "FollowUser" | "FriendAcceptUser" | "Joined" | "PublishPost" | "UpvotePost"
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
  AcceptFriendshipPayload: { // root type
    record: NexusGenRootTypes['Friendship']; // Friendship!
  }
  AddDesiredSkillMutationPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  AddSkillMutationPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  Chat: { // root type
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  ChatConnection: { // root type
    edges: NexusGenRootTypes['ChatEdge'][]; // [ChatEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ChatEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Chat']; // Chat!
  }
  ChatMessage: { // root type
    chatId: string; // String!
    content: NexusGenScalars['Json']; // Json!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    senderId: string; // String!
  }
  ChatMessageConnection: { // root type
    edges: NexusGenRootTypes['ChatMessageEdge'][]; // [ChatMessageEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ChatMessageEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['ChatMessage']; // ChatMessage!
  }
  Comment: { // root type
    authorId: string; // String!
    content?: NexusGenScalars['Json'] | null; // Json
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    parentId?: string | null; // String
    postId?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  CommentConnection: { // root type
    edges: NexusGenRootTypes['CommentEdge'][]; // [CommentEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  CommentEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Comment']; // Comment!
  }
  CreateChatPayload: { // root type
    record: NexusGenRootTypes['Chat']; // Chat!
  }
  CreateCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  CreateExperiencePayload: { // root type
    record: NexusGenRootTypes['Experience']; // Experience!
  }
  CreatePostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  CreateRepositoryPayload: { // root type
    record: NexusGenRootTypes['Repository']; // Repository!
  }
  DeleteCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  DeleteExperiencePayload: { // root type
    record: NexusGenRootTypes['Experience']; // Experience!
  }
  DeleteFriendshipPayload: { // root type
    record: NexusGenRootTypes['Friendship']; // Friendship!
  }
  DeletePostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  DownvoteCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  Experience: { // root type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    highlights: string[]; // [String!]!
    id: string; // ID!
    location?: string | null; // String
    organizationName: string; // String!
    positionName: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
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
  Follow: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
  }
  FollowConnection: { // root type
    edges: NexusGenRootTypes['FollowEdge'][]; // [FollowEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  FollowEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Follow']; // Follow!
  }
  FollowSkillPayload: { // root type
    record: NexusGenRootTypes['Follow']; // Follow!
  }
  FollowUserPayload: { // root type
    record: NexusGenRootTypes['Follow']; // Follow!
  }
  Friendship: { // root type
    frienderId: string; // String!
    friendingId: string; // String!
    id: string; // ID!
    rejectedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  GitHubLanguage: { // root type
    color?: string | null; // String
    id: string; // String!
    name: string; // String!
  }
  GitHubLicense: { // root type
    description?: string | null; // String
    id: string; // String!
    name: string; // String!
    nickname?: string | null; // String
    spdxId?: string | null; // String
    url?: NexusGenScalars['URL'] | null; // URL
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
    forkCount: number; // Int!
    id: string; // String!
    licenseInfo?: NexusGenRootTypes['GitHubLicense'] | null; // GitHubLicense
    name: string; // String!
    owner: NexusGenRootTypes['GitHubRepositoryOwner']; // GitHubRepositoryOwner!
    primaryLanguage?: NexusGenRootTypes['GitHubLanguage'] | null; // GitHubLanguage
    pushedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    stargazerCount: number; // Int!
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
  InviteToChatPayload: { // root type
    record: NexusGenRootTypes['Chat']; // Chat!
  }
  LeaveChatPayload: { // root type
    record: NexusGenRootTypes['Chat']; // Chat!
  }
  Mutation: {};
  NotificationChatMessageReceived: { // root type
    chat: NexusGenRootTypes['Chat']; // Chat!
    chatId: string; // String!
    id: string; // ID!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  NotificationConnection: { // root type
    edges: NexusGenRootTypes['NotificationEdge'][]; // [NotificationEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  NotificationEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Notification']; // Notification!
  }
  NotificationFriendshipAccepted: { // root type
    friendship: NexusGenRootTypes['Friendship']; // Friendship!
    friendshipId: string; // String!
    id: string; // ID!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  NotificationPostCommented: { // root type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  OpenNotificationsPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  Organization: { // root type
    id: string; // ID!
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
    id: string; // ID!
    publishedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    readTime?: number | null; // Int
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
    postId: string; // String!
    url: string; // String!
  }
  PublishPostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  Query: {};
  RejectFriendshipPayload: { // root type
    record: NexusGenRootTypes['Friendship']; // Friendship!
  }
  RemoveDesiredSkillMutationPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  RemovePostThumbnailPayload: { // root type
    record?: NexusGenRootTypes['Post'] | null; // Post
  }
  RemoveSkillMutationPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  Repository: { // root type
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
  }
  RepositoryConnection: { // root type
    edges: NexusGenRootTypes['RepositoryEdge'][]; // [RepositoryEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  RepositoryEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Repository']; // Repository!
  }
  RequestFriendshipPayload: { // root type
    record: NexusGenRootTypes['Friendship']; // Friendship!
  }
  SendChatMessagePayload: { // root type
    record: NexusGenRootTypes['ChatMessage']; // ChatMessage!
  }
  Skill: { // root type
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
  }
  SkillConnection: { // root type
    edges: NexusGenRootTypes['SkillEdge'][]; // [SkillEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  SkillEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Skill']; // Skill!
  }
  SuggestExperiences: { // root type
    nodes: NexusGenRootTypes['GitHubOrganization'][]; // [GitHubOrganization!]!
    totalCount: number; // Int!
  }
  SuggestRepositories: { // root type
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
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
  UnfollowSkillPayload: { // root type
    record: NexusGenRootTypes['Follow']; // Follow!
  }
  UnfollowUserPayload: { // root type
    record: NexusGenRootTypes['Follow']; // Follow!
  }
  UnvoteCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  UpdateCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  UpdateDesiredSkillsPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  UpdateExperiencePayload: { // root type
    record: NexusGenRootTypes['Experience']; // Experience!
  }
  UpdatePostDraftPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  UpdatePostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  UpdateRepositoryPayload: { // root type
    record: NexusGenRootTypes['Repository']; // Repository!
  }
  UpdateSkillsPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  UpdateUserFromGitHubPayload: { // root type
    record: NexusGenRootTypes['User']; // User!
  }
  UploadPostImagePayload: { // root type
    record: NexusGenRootTypes['PostImage']; // PostImage!
  }
  UpvoteCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  UpvotePostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    email: string; // String!
    id: string; // ID!
    image?: string | null; // String
    name: string; // String!
    notificationsLastOpenedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  UserActivityCommentPost: { // root type
    comment: NexusGenRootTypes['Comment']; // Comment!
    commentId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserActivityConnection: { // root type
    edges: NexusGenRootTypes['UserActivityEdge'][]; // [UserActivityEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  UserActivityEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['UserActivity']; // UserActivity!
  }
  UserActivityFollowSkill: { // root type
    follow: NexusGenRootTypes['Follow']; // Follow!
    followId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserActivityFollowUser: { // root type
    follow: NexusGenRootTypes['Follow']; // Follow!
    followId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserActivityFriendAcceptUser: { // root type
    friendship: NexusGenRootTypes['Friendship']; // Friendship!
    friendshipId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserActivityJoined: { // root type
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserActivityPublishPost: { // root type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserActivityUpvotePost: { // root type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  UserTrophies: { // root type
    id: string; // ID!
  }
  ViewPostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
}

export interface NexusGenInterfaces {
  Connection: core.Discriminate<'ChatConnection', 'required'> | core.Discriminate<'ChatMessageConnection', 'required'> | core.Discriminate<'CommentConnection', 'required'> | core.Discriminate<'ExperienceConnection', 'required'> | core.Discriminate<'FollowConnection', 'required'> | core.Discriminate<'NotificationConnection', 'required'> | core.Discriminate<'PostConnection', 'required'> | core.Discriminate<'RepositoryConnection', 'required'> | core.Discriminate<'SkillConnection', 'required'> | core.Discriminate<'UserActivityConnection', 'required'> | core.Discriminate<'UserConnection', 'required'>;
  ConnectionEdge: core.Discriminate<'ChatEdge', 'required'> | core.Discriminate<'ChatMessageEdge', 'required'> | core.Discriminate<'CommentEdge', 'required'> | core.Discriminate<'ExperienceEdge', 'required'> | core.Discriminate<'FollowEdge', 'required'> | core.Discriminate<'NotificationEdge', 'required'> | core.Discriminate<'PostEdge', 'required'> | core.Discriminate<'RepositoryEdge', 'required'> | core.Discriminate<'SkillEdge', 'required'> | core.Discriminate<'UserActivityEdge', 'required'> | core.Discriminate<'UserEdge', 'required'>;
  Followable: core.Discriminate<'Skill', 'required'> | core.Discriminate<'User', 'required'>;
  GitHubRepositoryOwner: core.Discriminate<'GitHubOrganization', 'required'> | core.Discriminate<'GitHubUser', 'required'>;
  MutationPayload: core.Discriminate<'AcceptFriendshipPayload', 'required'> | core.Discriminate<'AddDesiredSkillMutationPayload', 'required'> | core.Discriminate<'AddSkillMutationPayload', 'required'> | core.Discriminate<'CreateChatPayload', 'required'> | core.Discriminate<'CreateCommentPayload', 'required'> | core.Discriminate<'CreateExperiencePayload', 'required'> | core.Discriminate<'CreatePostPayload', 'required'> | core.Discriminate<'CreateRepositoryPayload', 'required'> | core.Discriminate<'DeleteCommentPayload', 'required'> | core.Discriminate<'DeleteExperiencePayload', 'required'> | core.Discriminate<'DeleteFriendshipPayload', 'required'> | core.Discriminate<'DeletePostPayload', 'required'> | core.Discriminate<'DownvoteCommentPayload', 'required'> | core.Discriminate<'FollowSkillPayload', 'required'> | core.Discriminate<'FollowUserPayload', 'required'> | core.Discriminate<'InviteToChatPayload', 'required'> | core.Discriminate<'LeaveChatPayload', 'required'> | core.Discriminate<'OpenNotificationsPayload', 'required'> | core.Discriminate<'PublishPostPayload', 'required'> | core.Discriminate<'RejectFriendshipPayload', 'required'> | core.Discriminate<'RemoveDesiredSkillMutationPayload', 'required'> | core.Discriminate<'RemovePostThumbnailPayload', 'required'> | core.Discriminate<'RemoveSkillMutationPayload', 'required'> | core.Discriminate<'RequestFriendshipPayload', 'required'> | core.Discriminate<'SendChatMessagePayload', 'required'> | core.Discriminate<'UnfollowSkillPayload', 'required'> | core.Discriminate<'UnfollowUserPayload', 'required'> | core.Discriminate<'UnvoteCommentPayload', 'required'> | core.Discriminate<'UpdateCommentPayload', 'required'> | core.Discriminate<'UpdateDesiredSkillsPayload', 'required'> | core.Discriminate<'UpdateExperiencePayload', 'required'> | core.Discriminate<'UpdatePostDraftPayload', 'required'> | core.Discriminate<'UpdatePostPayload', 'required'> | core.Discriminate<'UpdateRepositoryPayload', 'required'> | core.Discriminate<'UpdateSkillsPayload', 'required'> | core.Discriminate<'UpdateUserFromGitHubPayload', 'required'> | core.Discriminate<'UploadPostImagePayload', 'required'> | core.Discriminate<'UpvoteCommentPayload', 'required'> | core.Discriminate<'UpvotePostPayload', 'required'> | core.Discriminate<'ViewPostPayload', 'required'>;
  Notification: core.Discriminate<'NotificationChatMessageReceived', 'required'> | core.Discriminate<'NotificationFriendshipAccepted', 'required'> | core.Discriminate<'NotificationPostCommented', 'required'>;
  UserActivity: core.Discriminate<'UserActivityCommentPost', 'required'> | core.Discriminate<'UserActivityFollowSkill', 'required'> | core.Discriminate<'UserActivityFollowUser', 'required'> | core.Discriminate<'UserActivityFriendAcceptUser', 'required'> | core.Discriminate<'UserActivityJoined', 'required'> | core.Discriminate<'UserActivityPublishPost', 'required'> | core.Discriminate<'UserActivityUpvotePost', 'required'>;
  WithGitHubRepository: core.Discriminate<'Repository', 'required'> | core.Discriminate<'Skill', 'required'>;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AcceptFriendshipPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Friendship']; // Friendship!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  AddDesiredSkillMutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  AddSkillMutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Chat: { // field return type
    id: string; // ID!
    messages: NexusGenRootTypes['ChatMessageConnection']; // ChatMessageConnection!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    users: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  ChatConnection: { // field return type
    edges: NexusGenRootTypes['ChatEdge'][]; // [ChatEdge!]!
    nodes: NexusGenRootTypes['Chat'][]; // [Chat!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ChatEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Chat']; // Chat!
  }
  ChatMessage: { // field return type
    chat: NexusGenRootTypes['Chat']; // Chat!
    chatId: string; // String!
    content: NexusGenScalars['Json']; // Json!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    sender: NexusGenRootTypes['User']; // User!
    senderId: string; // String!
  }
  ChatMessageConnection: { // field return type
    edges: NexusGenRootTypes['ChatMessageEdge'][]; // [ChatMessageEdge!]!
    nodes: NexusGenRootTypes['ChatMessage'][]; // [ChatMessage!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ChatMessageEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['ChatMessage']; // ChatMessage!
  }
  Comment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    authorId: string; // String!
    content: NexusGenScalars['Json'] | null; // Json
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    downvoters: NexusGenRootTypes['UserConnection']; // UserConnection!
    id: string; // ID!
    parent: NexusGenRootTypes['Comment'] | null; // Comment
    parentId: string | null; // String
    post: NexusGenRootTypes['Post'] | null; // Post
    postId: string | null; // String
    replies: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    upvoters: NexusGenRootTypes['UserConnection']; // UserConnection!
    upvotes: number; // Int!
    viewerUpvote: boolean | null; // Boolean
  }
  CommentConnection: { // field return type
    edges: NexusGenRootTypes['CommentEdge'][]; // [CommentEdge!]!
    nodes: NexusGenRootTypes['Comment'][]; // [Comment!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  CommentEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Comment']; // Comment!
  }
  CreateChatPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Chat']; // Chat!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  CreateCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  CreateExperiencePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Experience']; // Experience!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  CreatePostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  CreateRepositoryPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Repository']; // Repository!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  DeleteCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  DeleteExperiencePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Experience']; // Experience!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  DeleteFriendshipPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Friendship']; // Friendship!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  DeletePostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  DownvoteCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Experience: { // field return type
    endDate: NexusGenScalars['DateTime'] | null; // DateTime
    highlights: string[]; // [String!]!
    id: string; // ID!
    location: string | null; // String
    organization: NexusGenRootTypes['Organization']; // Organization!
    organizationName: string; // String!
    positionName: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
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
  Follow: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    follower: NexusGenRootTypes['User']; // User!
    following: NexusGenRootTypes['Followable']; // Followable!
    id: string; // ID!
  }
  FollowConnection: { // field return type
    edges: NexusGenRootTypes['FollowEdge'][]; // [FollowEdge!]!
    nodes: NexusGenRootTypes['Follow'][]; // [Follow!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  FollowEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Follow']; // Follow!
  }
  FollowSkillPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Follow']; // Follow!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  FollowUserPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Follow']; // Follow!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Friendship: { // field return type
    friender: NexusGenRootTypes['User']; // User!
    frienderId: string; // String!
    friending: NexusGenRootTypes['User']; // User!
    friendingId: string; // String!
    id: string; // ID!
    rejected: boolean; // Boolean!
    rejectedAt: NexusGenScalars['DateTime'] | null; // DateTime
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  GitHubLanguage: { // field return type
    color: string | null; // String
    id: string; // String!
    name: string; // String!
  }
  GitHubLicense: { // field return type
    description: string | null; // String
    id: string; // String!
    name: string; // String!
    nickname: string | null; // String
    spdxId: string | null; // String
    url: NexusGenScalars['URL'] | null; // URL
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
    forkCount: number; // Int!
    id: string; // String!
    issueCount: number; // Int!
    licenseInfo: NexusGenRootTypes['GitHubLicense'] | null; // GitHubLicense
    name: string; // String!
    owner: NexusGenRootTypes['GitHubRepositoryOwner']; // GitHubRepositoryOwner!
    primaryLanguage: NexusGenRootTypes['GitHubLanguage'] | null; // GitHubLanguage
    pullRequestCount: number; // Int!
    pushedAt: NexusGenScalars['DateTime'] | null; // DateTime
    repository: NexusGenRootTypes['Repository'] | null; // Repository
    stargazerCount: number; // Int!
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
    totalCommits: number; // Int!
    twitterUsername: string | null; // String
    url: NexusGenScalars['URL']; // URL!
    user: NexusGenRootTypes['User']; // User!
    websiteUrl: string | null; // String
  }
  InviteToChatPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Chat']; // Chat!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  LeaveChatPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Chat']; // Chat!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    acceptFriendship: NexusGenRootTypes['AcceptFriendshipPayload']; // AcceptFriendshipPayload!
    addDesiredSkill: NexusGenRootTypes['AddDesiredSkillMutationPayload']; // AddDesiredSkillMutationPayload!
    addSkill: NexusGenRootTypes['AddSkillMutationPayload']; // AddSkillMutationPayload!
    createChat: NexusGenRootTypes['CreateChatPayload']; // CreateChatPayload!
    createComment: NexusGenRootTypes['CreateCommentPayload']; // CreateCommentPayload!
    createExperience: NexusGenRootTypes['CreateExperiencePayload']; // CreateExperiencePayload!
    createPost: NexusGenRootTypes['CreatePostPayload']; // CreatePostPayload!
    createRepository: NexusGenRootTypes['CreateRepositoryPayload']; // CreateRepositoryPayload!
    deleteComment: NexusGenRootTypes['DeleteCommentPayload']; // DeleteCommentPayload!
    deleteExperience: NexusGenRootTypes['DeleteExperiencePayload']; // DeleteExperiencePayload!
    deleteFriendship: NexusGenRootTypes['DeleteFriendshipPayload']; // DeleteFriendshipPayload!
    deletePost: NexusGenRootTypes['DeletePostPayload']; // DeletePostPayload!
    followSkill: NexusGenRootTypes['FollowUserPayload']; // FollowUserPayload!
    followUser: NexusGenRootTypes['FollowUserPayload']; // FollowUserPayload!
    inviteToChat: NexusGenRootTypes['InviteToChatPayload']; // InviteToChatPayload!
    leaveChat: NexusGenRootTypes['LeaveChatPayload']; // LeaveChatPayload!
    ok: boolean; // Boolean!
    openNotifications: NexusGenRootTypes['OpenNotificationsPayload']; // OpenNotificationsPayload!
    publishPost: NexusGenRootTypes['PublishPostPayload']; // PublishPostPayload!
    rejectFriendship: NexusGenRootTypes['RejectFriendshipPayload']; // RejectFriendshipPayload!
    removeDesiredSkill: NexusGenRootTypes['RemoveDesiredSkillMutationPayload']; // RemoveDesiredSkillMutationPayload!
    removePostThumbnail: NexusGenRootTypes['RemovePostThumbnailPayload']; // RemovePostThumbnailPayload!
    removeSkill: NexusGenRootTypes['RemoveSkillMutationPayload']; // RemoveSkillMutationPayload!
    requestFriendship: NexusGenRootTypes['RequestFriendshipPayload']; // RequestFriendshipPayload!
    sendChatMessage: NexusGenRootTypes['SendChatMessagePayload']; // SendChatMessagePayload!
    unfollowSkill: NexusGenRootTypes['UnfollowSkillPayload']; // UnfollowSkillPayload!
    unfollowUser: NexusGenRootTypes['UnfollowUserPayload']; // UnfollowUserPayload!
    unvoteComment: NexusGenRootTypes['UnvoteCommentPayload']; // UnvoteCommentPayload!
    updateComment: NexusGenRootTypes['UpdateCommentPayload']; // UpdateCommentPayload!
    updateDesiredSkills: NexusGenRootTypes['UpdateDesiredSkillsPayload']; // UpdateDesiredSkillsPayload!
    updateExperience: NexusGenRootTypes['UpdateExperiencePayload']; // UpdateExperiencePayload!
    updatePost: NexusGenRootTypes['UpdatePostPayload']; // UpdatePostPayload!
    updatePostDraft: NexusGenRootTypes['UpdatePostDraftPayload']; // UpdatePostDraftPayload!
    updateRepository: NexusGenRootTypes['UpdateRepositoryPayload']; // UpdateRepositoryPayload!
    updateSkills: NexusGenRootTypes['UpdateSkillsPayload']; // UpdateSkillsPayload!
    updateUserFromGitHub: NexusGenRootTypes['UpdateUserFromGitHubPayload']; // UpdateUserFromGitHubPayload!
    uploadPostImage: NexusGenRootTypes['UploadPostImagePayload']; // UploadPostImagePayload!
    upvoteComment: NexusGenRootTypes['UpvoteCommentPayload']; // UpvoteCommentPayload!
    upvotePost: NexusGenRootTypes['UpvotePostPayload']; // UpvotePostPayload!
    viewPost: NexusGenRootTypes['ViewPostPayload']; // ViewPostPayload!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  NotificationChatMessageReceived: { // field return type
    chat: NexusGenRootTypes['Chat']; // Chat!
    chatId: string; // String!
    id: string; // ID!
    opened: boolean; // Boolean!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  NotificationConnection: { // field return type
    edges: NexusGenRootTypes['NotificationEdge'][]; // [NotificationEdge!]!
    nodes: NexusGenRootTypes['Notification'][]; // [Notification!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  NotificationEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Notification']; // Notification!
  }
  NotificationFriendshipAccepted: { // field return type
    friendship: NexusGenRootTypes['Friendship']; // Friendship!
    friendshipId: string; // String!
    id: string; // ID!
    opened: boolean; // Boolean!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  NotificationPostCommented: { // field return type
    id: string; // ID!
    opened: boolean; // Boolean!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  OpenNotificationsPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Organization: { // field return type
    experiences: NexusGenRootTypes['Experience'][]; // [Experience!]!
    github: NexusGenRootTypes['GitHubOrganization']; // GitHubOrganization!
    id: string; // ID!
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
    comments: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    content: NexusGenScalars['Json'] | null; // Json
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    downvoters: NexusGenRootTypes['UserConnection']; // UserConnection!
    id: string; // ID!
    images: NexusGenRootTypes['PostImage'][]; // [PostImage!]!
    publishedAt: NexusGenScalars['DateTime'] | null; // DateTime
    readTime: number | null; // Int
    skills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    thumbnailUrl: string | null; // String
    title: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    upvoters: NexusGenRootTypes['UserConnection']; // UserConnection!
    upvotes: number; // Int!
    urlSlug: string; // String!
    viewerUpvote: boolean | null; // Boolean
    viewers: NexusGenRootTypes['UserConnection']; // UserConnection!
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
    postId: string; // String!
    url: string; // String!
  }
  PublishPostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    activityFeed: NexusGenRootTypes['UserActivityConnection']; // UserActivityConnection!
    chat: NexusGenRootTypes['Chat'] | null; // Chat
    chatMessages: NexusGenRootTypes['ChatMessage'][]; // [ChatMessage!]!
    comment: NexusGenRootTypes['Comment'] | null; // Comment
    comments: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    experiences: NexusGenRootTypes['ExperienceConnection']; // ExperienceConnection!
    followableSkills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    ok: boolean; // Boolean!
    post: NexusGenRootTypes['Post'] | null; // Post
    postDraft: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
    repositories: NexusGenRootTypes['RepositoryConnection']; // RepositoryConnection!
    skill: NexusGenRootTypes['Skill'] | null; // Skill
    skills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    suggestExperiences: NexusGenRootTypes['SuggestExperiences']; // SuggestExperiences!
    suggestFriends: NexusGenRootTypes['UserConnection']; // UserConnection!
    suggestRepositories: NexusGenRootTypes['SuggestRepositories']; // SuggestRepositories!
    suggestSkills: NexusGenRootTypes['SuggestSkills']; // SuggestSkills!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['UserConnection']; // UserConnection!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  RejectFriendshipPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Friendship']; // Friendship!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  RemoveDesiredSkillMutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  RemovePostThumbnailPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post'] | null; // Post
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  RemoveSkillMutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Repository: { // field return type
    github: NexusGenRootTypes['GitHubRepository']; // GitHubRepository!
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    skills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    user: NexusGenRootTypes['User']; // User!
  }
  RepositoryConnection: { // field return type
    edges: NexusGenRootTypes['RepositoryEdge'][]; // [RepositoryEdge!]!
    nodes: NexusGenRootTypes['Repository'][]; // [Repository!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  RepositoryEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Repository']; // Repository!
  }
  RequestFriendshipPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Friendship']; // Friendship!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  SendChatMessagePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['ChatMessage']; // ChatMessage!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Skill: { // field return type
    desiringUsers: NexusGenRootTypes['UserConnection']; // UserConnection!
    github: NexusGenRootTypes['GitHubRepository']; // GitHubRepository!
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
    users: NexusGenRootTypes['UserConnection']; // UserConnection!
    viewerFollowing: boolean; // Boolean!
  }
  SkillConnection: { // field return type
    edges: NexusGenRootTypes['SkillEdge'][]; // [SkillEdge!]!
    nodes: NexusGenRootTypes['Skill'][]; // [Skill!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  SkillEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Skill']; // Skill!
  }
  SuggestExperiences: { // field return type
    nodes: NexusGenRootTypes['GitHubOrganization'][]; // [GitHubOrganization!]!
    totalCount: number; // Int!
  }
  SuggestRepositories: { // field return type
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
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
  UnfollowSkillPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Follow']; // Follow!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UnfollowUserPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Follow']; // Follow!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UnvoteCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateDesiredSkillsPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateExperiencePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Experience']; // Experience!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdatePostDraftPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdatePostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateRepositoryPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Repository']; // Repository!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateSkillsPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateUserFromGitHubPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['User']; // User!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UploadPostImagePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['PostImage']; // PostImage!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpvoteCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpvotePostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    activities: NexusGenRootTypes['UserActivityConnection']; // UserActivityConnection!
    activityFeed: NexusGenRootTypes['UserActivityConnection']; // UserActivityConnection!
    chats: NexusGenRootTypes['ChatConnection']; // ChatConnection!
    commentUpvotes: number; // Int!
    comments: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    desiredSkills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    email: string; // String!
    experiences: NexusGenRootTypes['ExperienceConnection']; // ExperienceConnection!
    followers: NexusGenRootTypes['UserConnection']; // UserConnection!
    following: NexusGenRootTypes['FollowConnection']; // FollowConnection!
    friendRequestsReceived: NexusGenRootTypes['UserConnection']; // UserConnection!
    friendRequestsSent: NexusGenRootTypes['UserConnection']; // UserConnection!
    friends: NexusGenRootTypes['UserConnection']; // UserConnection!
    github: NexusGenRootTypes['GitHubUser']; // GitHubUser!
    githubUrl: NexusGenScalars['URL']; // URL!
    id: string; // ID!
    image: string | null; // String
    name: string; // String!
    notifications: NexusGenRootTypes['NotificationConnection']; // NotificationConnection!
    notificationsLastOpenedAt: NexusGenScalars['DateTime']; // DateTime!
    postUpvotes: number; // Int!
    postViews: number; // Int!
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
    repositories: NexusGenRootTypes['RepositoryConnection']; // RepositoryConnection!
    skills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    trophies: NexusGenRootTypes['UserTrophies']; // UserTrophies!
    upvotedPosts: NexusGenRootTypes['PostConnection']; // PostConnection!
    viewerCanFriend: boolean; // Boolean!
    viewerFollowing: boolean; // Boolean!
    viewerFriended: boolean; // Boolean!
    viewerIsFriend: boolean; // Boolean!
  }
  UserActivityCommentPost: { // field return type
    comment: NexusGenRootTypes['Comment']; // Comment!
    commentId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivityConnection: { // field return type
    edges: NexusGenRootTypes['UserActivityEdge'][]; // [UserActivityEdge!]!
    nodes: NexusGenRootTypes['UserActivity'][]; // [UserActivity!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  UserActivityEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['UserActivity']; // UserActivity!
  }
  UserActivityFollowSkill: { // field return type
    follow: NexusGenRootTypes['Follow']; // Follow!
    followId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivityFollowUser: { // field return type
    follow: NexusGenRootTypes['Follow']; // Follow!
    followId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivityFriendAcceptUser: { // field return type
    friendship: NexusGenRootTypes['Friendship']; // Friendship!
    friendshipId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivityJoined: { // field return type
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivityPublishPost: { // field return type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivityUpvotePost: { // field return type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserConnection: { // field return type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    nodes: NexusGenRootTypes['User'][]; // [User!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  UserTrophies: { // field return type
    id: string; // ID!
    totalFollowers: number; // Int!
    totalPostViews: number; // Int!
    totalSkills: number; // Int!
    totalUpvotes: number; // Int!
    totalYearlyCommits: number; // Int!
    totalYearlyPosts: number; // Int!
  }
  ViewPostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Connection: { // field return type
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  ConnectionEdge: { // field return type
    cursor: string; // String!
  }
  Followable: { // field return type
    viewerFollowing: boolean; // Boolean!
  }
  GitHubRepositoryOwner: { // field return type
    avatarUrl: NexusGenScalars['URL']; // URL!
    id: string; // String!
    login: string; // String!
    url: NexusGenScalars['URL']; // URL!
  }
  MutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Notification: { // field return type
    id: string; // ID!
    opened: boolean; // Boolean!
    type: NexusGenEnums['NotificationType']; // NotificationType!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  UserActivity: { // field return type
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  WithGitHubRepository: { // field return type
    github: NexusGenRootTypes['GitHubRepository']; // GitHubRepository!
    name: string; // String!
    owner: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AcceptFriendshipPayload: { // field return type name
    query: 'Query'
    record: 'Friendship'
    viewer: 'User'
  }
  AddDesiredSkillMutationPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  AddSkillMutationPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  Chat: { // field return type name
    id: 'ID'
    messages: 'ChatMessageConnection'
    updatedAt: 'DateTime'
    users: 'UserConnection'
  }
  ChatConnection: { // field return type name
    edges: 'ChatEdge'
    nodes: 'Chat'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  ChatEdge: { // field return type name
    cursor: 'String'
    node: 'Chat'
  }
  ChatMessage: { // field return type name
    chat: 'Chat'
    chatId: 'String'
    content: 'Json'
    createdAt: 'DateTime'
    id: 'ID'
    sender: 'User'
    senderId: 'String'
  }
  ChatMessageConnection: { // field return type name
    edges: 'ChatMessageEdge'
    nodes: 'ChatMessage'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  ChatMessageEdge: { // field return type name
    cursor: 'String'
    node: 'ChatMessage'
  }
  Comment: { // field return type name
    author: 'User'
    authorId: 'String'
    content: 'Json'
    createdAt: 'DateTime'
    downvoters: 'UserConnection'
    id: 'ID'
    parent: 'Comment'
    parentId: 'String'
    post: 'Post'
    postId: 'String'
    replies: 'CommentConnection'
    updatedAt: 'DateTime'
    upvoters: 'UserConnection'
    upvotes: 'Int'
    viewerUpvote: 'Boolean'
  }
  CommentConnection: { // field return type name
    edges: 'CommentEdge'
    nodes: 'Comment'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  CommentEdge: { // field return type name
    cursor: 'String'
    node: 'Comment'
  }
  CreateChatPayload: { // field return type name
    query: 'Query'
    record: 'Chat'
    viewer: 'User'
  }
  CreateCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  CreateExperiencePayload: { // field return type name
    query: 'Query'
    record: 'Experience'
    viewer: 'User'
  }
  CreatePostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  CreateRepositoryPayload: { // field return type name
    query: 'Query'
    record: 'Repository'
    viewer: 'User'
  }
  DeleteCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  DeleteExperiencePayload: { // field return type name
    query: 'Query'
    record: 'Experience'
    viewer: 'User'
  }
  DeleteFriendshipPayload: { // field return type name
    query: 'Query'
    record: 'Friendship'
    viewer: 'User'
  }
  DeletePostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  DownvoteCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  Experience: { // field return type name
    endDate: 'DateTime'
    highlights: 'String'
    id: 'ID'
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
  Follow: { // field return type name
    createdAt: 'DateTime'
    follower: 'User'
    following: 'Followable'
    id: 'ID'
  }
  FollowConnection: { // field return type name
    edges: 'FollowEdge'
    nodes: 'Follow'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  FollowEdge: { // field return type name
    cursor: 'String'
    node: 'Follow'
  }
  FollowSkillPayload: { // field return type name
    query: 'Query'
    record: 'Follow'
    viewer: 'User'
  }
  FollowUserPayload: { // field return type name
    query: 'Query'
    record: 'Follow'
    viewer: 'User'
  }
  Friendship: { // field return type name
    friender: 'User'
    frienderId: 'String'
    friending: 'User'
    friendingId: 'String'
    id: 'ID'
    rejected: 'Boolean'
    rejectedAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  GitHubLanguage: { // field return type name
    color: 'String'
    id: 'String'
    name: 'String'
  }
  GitHubLicense: { // field return type name
    description: 'String'
    id: 'String'
    name: 'String'
    nickname: 'String'
    spdxId: 'String'
    url: 'URL'
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
    forkCount: 'Int'
    id: 'String'
    issueCount: 'Int'
    licenseInfo: 'GitHubLicense'
    name: 'String'
    owner: 'GitHubRepositoryOwner'
    primaryLanguage: 'GitHubLanguage'
    pullRequestCount: 'Int'
    pushedAt: 'DateTime'
    repository: 'Repository'
    stargazerCount: 'Int'
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
    totalCommits: 'Int'
    twitterUsername: 'String'
    url: 'URL'
    user: 'User'
    websiteUrl: 'String'
  }
  InviteToChatPayload: { // field return type name
    query: 'Query'
    record: 'Chat'
    viewer: 'User'
  }
  LeaveChatPayload: { // field return type name
    query: 'Query'
    record: 'Chat'
    viewer: 'User'
  }
  Mutation: { // field return type name
    acceptFriendship: 'AcceptFriendshipPayload'
    addDesiredSkill: 'AddDesiredSkillMutationPayload'
    addSkill: 'AddSkillMutationPayload'
    createChat: 'CreateChatPayload'
    createComment: 'CreateCommentPayload'
    createExperience: 'CreateExperiencePayload'
    createPost: 'CreatePostPayload'
    createRepository: 'CreateRepositoryPayload'
    deleteComment: 'DeleteCommentPayload'
    deleteExperience: 'DeleteExperiencePayload'
    deleteFriendship: 'DeleteFriendshipPayload'
    deletePost: 'DeletePostPayload'
    followSkill: 'FollowUserPayload'
    followUser: 'FollowUserPayload'
    inviteToChat: 'InviteToChatPayload'
    leaveChat: 'LeaveChatPayload'
    ok: 'Boolean'
    openNotifications: 'OpenNotificationsPayload'
    publishPost: 'PublishPostPayload'
    rejectFriendship: 'RejectFriendshipPayload'
    removeDesiredSkill: 'RemoveDesiredSkillMutationPayload'
    removePostThumbnail: 'RemovePostThumbnailPayload'
    removeSkill: 'RemoveSkillMutationPayload'
    requestFriendship: 'RequestFriendshipPayload'
    sendChatMessage: 'SendChatMessagePayload'
    unfollowSkill: 'UnfollowSkillPayload'
    unfollowUser: 'UnfollowUserPayload'
    unvoteComment: 'UnvoteCommentPayload'
    updateComment: 'UpdateCommentPayload'
    updateDesiredSkills: 'UpdateDesiredSkillsPayload'
    updateExperience: 'UpdateExperiencePayload'
    updatePost: 'UpdatePostPayload'
    updatePostDraft: 'UpdatePostDraftPayload'
    updateRepository: 'UpdateRepositoryPayload'
    updateSkills: 'UpdateSkillsPayload'
    updateUserFromGitHub: 'UpdateUserFromGitHubPayload'
    uploadPostImage: 'UploadPostImagePayload'
    upvoteComment: 'UpvoteCommentPayload'
    upvotePost: 'UpvotePostPayload'
    viewPost: 'ViewPostPayload'
    viewer: 'User'
  }
  NotificationChatMessageReceived: { // field return type name
    chat: 'Chat'
    chatId: 'String'
    id: 'ID'
    opened: 'Boolean'
    type: 'NotificationType'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  NotificationConnection: { // field return type name
    edges: 'NotificationEdge'
    nodes: 'Notification'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  NotificationEdge: { // field return type name
    cursor: 'String'
    node: 'Notification'
  }
  NotificationFriendshipAccepted: { // field return type name
    friendship: 'Friendship'
    friendshipId: 'String'
    id: 'ID'
    opened: 'Boolean'
    type: 'NotificationType'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  NotificationPostCommented: { // field return type name
    id: 'ID'
    opened: 'Boolean'
    post: 'Post'
    postId: 'String'
    type: 'NotificationType'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  OpenNotificationsPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  Organization: { // field return type name
    experiences: 'Experience'
    github: 'GitHubOrganization'
    id: 'ID'
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
    comments: 'CommentConnection'
    content: 'Json'
    createdAt: 'DateTime'
    description: 'String'
    downvoters: 'UserConnection'
    id: 'ID'
    images: 'PostImage'
    publishedAt: 'DateTime'
    readTime: 'Int'
    skills: 'SkillConnection'
    thumbnailUrl: 'String'
    title: 'String'
    updatedAt: 'DateTime'
    upvoters: 'UserConnection'
    upvotes: 'Int'
    urlSlug: 'String'
    viewerUpvote: 'Boolean'
    viewers: 'UserConnection'
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
    postId: 'String'
    url: 'String'
  }
  PublishPostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  Query: { // field return type name
    activityFeed: 'UserActivityConnection'
    chat: 'Chat'
    chatMessages: 'ChatMessage'
    comment: 'Comment'
    comments: 'CommentConnection'
    experiences: 'ExperienceConnection'
    followableSkills: 'SkillConnection'
    ok: 'Boolean'
    post: 'Post'
    postDraft: 'Post'
    posts: 'PostConnection'
    repositories: 'RepositoryConnection'
    skill: 'Skill'
    skills: 'SkillConnection'
    suggestExperiences: 'SuggestExperiences'
    suggestFriends: 'UserConnection'
    suggestRepositories: 'SuggestRepositories'
    suggestSkills: 'SuggestSkills'
    user: 'User'
    users: 'UserConnection'
    viewer: 'User'
  }
  RejectFriendshipPayload: { // field return type name
    query: 'Query'
    record: 'Friendship'
    viewer: 'User'
  }
  RemoveDesiredSkillMutationPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  RemovePostThumbnailPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  RemoveSkillMutationPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  Repository: { // field return type name
    github: 'GitHubRepository'
    id: 'ID'
    name: 'String'
    owner: 'String'
    skills: 'Skill'
    user: 'User'
  }
  RepositoryConnection: { // field return type name
    edges: 'RepositoryEdge'
    nodes: 'Repository'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  RepositoryEdge: { // field return type name
    cursor: 'String'
    node: 'Repository'
  }
  RequestFriendshipPayload: { // field return type name
    query: 'Query'
    record: 'Friendship'
    viewer: 'User'
  }
  SendChatMessagePayload: { // field return type name
    query: 'Query'
    record: 'ChatMessage'
    viewer: 'User'
  }
  Skill: { // field return type name
    desiringUsers: 'UserConnection'
    github: 'GitHubRepository'
    id: 'ID'
    name: 'String'
    owner: 'String'
    posts: 'PostConnection'
    users: 'UserConnection'
    viewerFollowing: 'Boolean'
  }
  SkillConnection: { // field return type name
    edges: 'SkillEdge'
    nodes: 'Skill'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  SkillEdge: { // field return type name
    cursor: 'String'
    node: 'Skill'
  }
  SuggestExperiences: { // field return type name
    nodes: 'GitHubOrganization'
    totalCount: 'Int'
  }
  SuggestRepositories: { // field return type name
    nodes: 'GitHubRepository'
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
  UnfollowSkillPayload: { // field return type name
    query: 'Query'
    record: 'Follow'
    viewer: 'User'
  }
  UnfollowUserPayload: { // field return type name
    query: 'Query'
    record: 'Follow'
    viewer: 'User'
  }
  UnvoteCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  UpdateCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  UpdateDesiredSkillsPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  UpdateExperiencePayload: { // field return type name
    query: 'Query'
    record: 'Experience'
    viewer: 'User'
  }
  UpdatePostDraftPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  UpdatePostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  UpdateRepositoryPayload: { // field return type name
    query: 'Query'
    record: 'Repository'
    viewer: 'User'
  }
  UpdateSkillsPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  UpdateUserFromGitHubPayload: { // field return type name
    query: 'Query'
    record: 'User'
    viewer: 'User'
  }
  UploadPostImagePayload: { // field return type name
    query: 'Query'
    record: 'PostImage'
    viewer: 'User'
  }
  UpvoteCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  UpvotePostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  User: { // field return type name
    activities: 'UserActivityConnection'
    activityFeed: 'UserActivityConnection'
    chats: 'ChatConnection'
    commentUpvotes: 'Int'
    comments: 'CommentConnection'
    createdAt: 'DateTime'
    description: 'String'
    desiredSkills: 'SkillConnection'
    email: 'String'
    experiences: 'ExperienceConnection'
    followers: 'UserConnection'
    following: 'FollowConnection'
    friendRequestsReceived: 'UserConnection'
    friendRequestsSent: 'UserConnection'
    friends: 'UserConnection'
    github: 'GitHubUser'
    githubUrl: 'URL'
    id: 'ID'
    image: 'String'
    name: 'String'
    notifications: 'NotificationConnection'
    notificationsLastOpenedAt: 'DateTime'
    postUpvotes: 'Int'
    postViews: 'Int'
    posts: 'PostConnection'
    repositories: 'RepositoryConnection'
    skills: 'SkillConnection'
    trophies: 'UserTrophies'
    upvotedPosts: 'PostConnection'
    viewerCanFriend: 'Boolean'
    viewerFollowing: 'Boolean'
    viewerFriended: 'Boolean'
    viewerIsFriend: 'Boolean'
  }
  UserActivityCommentPost: { // field return type name
    comment: 'Comment'
    commentId: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivityConnection: { // field return type name
    edges: 'UserActivityEdge'
    nodes: 'UserActivity'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  UserActivityEdge: { // field return type name
    cursor: 'String'
    node: 'UserActivity'
  }
  UserActivityFollowSkill: { // field return type name
    follow: 'Follow'
    followId: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivityFollowUser: { // field return type name
    follow: 'Follow'
    followId: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivityFriendAcceptUser: { // field return type name
    friendship: 'Friendship'
    friendshipId: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivityJoined: { // field return type name
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivityPublishPost: { // field return type name
    id: 'ID'
    post: 'Post'
    postId: 'String'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivityUpvotePost: { // field return type name
    id: 'ID'
    post: 'Post'
    postId: 'String'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserConnection: { // field return type name
    edges: 'UserEdge'
    nodes: 'User'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  UserEdge: { // field return type name
    cursor: 'String'
    node: 'User'
  }
  UserTrophies: { // field return type name
    id: 'ID'
    totalFollowers: 'Int'
    totalPostViews: 'Int'
    totalSkills: 'Int'
    totalUpvotes: 'Int'
    totalYearlyCommits: 'Int'
    totalYearlyPosts: 'Int'
  }
  ViewPostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  Connection: { // field return type name
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  ConnectionEdge: { // field return type name
    cursor: 'String'
  }
  Followable: { // field return type name
    viewerFollowing: 'Boolean'
  }
  GitHubRepositoryOwner: { // field return type name
    avatarUrl: 'URL'
    id: 'String'
    login: 'String'
    url: 'URL'
  }
  MutationPayload: { // field return type name
    query: 'Query'
    viewer: 'User'
  }
  Notification: { // field return type name
    id: 'ID'
    opened: 'Boolean'
    type: 'NotificationType'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  UserActivity: { // field return type name
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  WithGitHubRepository: { // field return type name
    github: 'GitHubRepository'
    name: 'String'
    owner: 'String'
  }
}

export interface NexusGenArgTypes {
  Chat: {
    messages: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      offset?: number | null; // Int
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Comment: {
    downvoters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    replies: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CommentOrderByInput'] | null; // CommentOrderByInput
      where?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    }
    upvoters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  GitHubUser: {
    totalCommits: { // args
      where?: NexusGenInputs['GitHubUserTotalCommitsWhereInput'] | null; // GitHubUserTotalCommitsWhereInput
    }
  }
  Mutation: {
    acceptFriendship: { // args
      where: NexusGenInputs['FriendshipWhereUniqueInput']; // FriendshipWhereUniqueInput!
    }
    addDesiredSkill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    addSkill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    createChat: { // args
      data: NexusGenInputs['CreateChatInput']; // CreateChatInput!
    }
    createComment: { // args
      data: NexusGenInputs['CommentCreateInput']; // CommentCreateInput!
    }
    createExperience: { // args
      data: NexusGenInputs['ExperienceCreateInput']; // ExperienceCreateInput!
    }
    createRepository: { // args
      data: NexusGenInputs['RepositoryCreateInput']; // RepositoryCreateInput!
    }
    deleteComment: { // args
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    deleteExperience: { // args
      where: NexusGenInputs['ExperienceWhereUniqueInput']; // ExperienceWhereUniqueInput!
    }
    deleteFriendship: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    deletePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    followSkill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    followUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    inviteToChat: { // args
      data: NexusGenInputs['InviteToChatInput']; // InviteToChatInput!
      where: NexusGenInputs['ChatWhereUniqueInput']; // ChatWhereUniqueInput!
    }
    leaveChat: { // args
      where: NexusGenInputs['ChatWhereUniqueInput']; // ChatWhereUniqueInput!
    }
    publishPost: { // args
      data: NexusGenInputs['PostPublishInput']; // PostPublishInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    rejectFriendship: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    removeDesiredSkill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    removePostThumbnail: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    removeSkill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    requestFriendship: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    sendChatMessage: { // args
      data: NexusGenInputs['ChatMessageCreateInput']; // ChatMessageCreateInput!
      where: NexusGenInputs['ChatWhereUniqueInput']; // ChatWhereUniqueInput!
    }
    unfollowSkill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    unfollowUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    unvoteComment: { // args
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    updateComment: { // args
      data: NexusGenInputs['CommentUpdateInput']; // CommentUpdateInput!
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
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
    updateRepository: { // args
      data: NexusGenInputs['RepositoryUpdateInput']; // RepositoryUpdateInput!
      where: NexusGenInputs['RepositoryWhereUniqueInput']; // RepositoryWhereUniqueInput!
    }
    updateSkills: { // args
      data: NexusGenInputs['UpdateSkillsInput']; // UpdateSkillsInput!
    }
    uploadPostImage: { // args
      data: NexusGenInputs['UploadPostImageInput']; // UploadPostImageInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    upvoteComment: { // args
      data: NexusGenInputs['UpvoteCommentInput']; // UpvoteCommentInput!
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    upvotePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    viewPost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
  }
  Post: {
    comments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CommentOrderByInput'] | null; // CommentOrderByInput
      where?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    }
    downvoters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    skills: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    }
    upvoters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    viewers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Query: {
    activityFeed: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserActivityWhereInput'] | null; // UserActivityWhereInput
    }
    chat: { // args
      where: NexusGenInputs['ChatWhereUniqueInput']; // ChatWhereUniqueInput!
    }
    chatMessages: { // args
      where: NexusGenInputs['ChatMessageWhereInput']; // ChatMessageWhereInput!
    }
    comment: { // args
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    comments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CommentOrderByInput'] | null; // CommentOrderByInput
      where?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    }
    experiences: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['ExperienceOrderByInput'][] | null; // [ExperienceOrderByInput!]
      where?: NexusGenInputs['ExperienceWhereInput'] | null; // ExperienceWhereInput
    }
    followableSkills: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['SkillOrderByInput'][] | null; // [SkillOrderByInput!]
      where?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
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
    repositories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['RepositoryWhereInput'] | null; // RepositoryWhereInput
    }
    skill: { // args
      where: NexusGenInputs['SkillWhereUniqueInput']; // SkillWhereUniqueInput!
    }
    skills: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['SkillOrderByInput'][] | null; // [SkillOrderByInput!]
      where?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    }
    suggestExperiences: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestExperiencesWhereInput']; // SuggestExperiencesWhereInput!
    }
    suggestFriends: { // args
      after?: string | null; // String
      first?: number | null; // Int
      where: NexusGenInputs['SuggestFriendsWhereInput']; // SuggestFriendsWhereInput!
    }
    suggestRepositories: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestRepositoriesWhereInput']; // SuggestRepositoriesWhereInput!
    }
    suggestSkills: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestSkillsWhereInput']; // SuggestSkillsWhereInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserOrderByInput'][] | null; // [UserOrderByInput!]
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Skill: {
    desiringUsers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  User: {
    activities: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserActivityWhereInput'] | null; // UserActivityWhereInput
    }
    activityFeed: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserActivityWhereInput'] | null; // UserActivityWhereInput
    }
    chats: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['ChatWhereInput'] | null; // ChatWhereInput
    }
    comments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CommentOrderByInput'] | null; // CommentOrderByInput
      where?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    }
    desiredSkills: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['SkillOrderByInput'][] | null; // [SkillOrderByInput!]
      where?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    }
    experiences: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['ExperienceOrderByInput'] | null; // ExperienceOrderByInput
      where?: NexusGenInputs['ExperienceWhereInput'] | null; // ExperienceWhereInput
    }
    followers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    following: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['FollowWhereInput'] | null; // FollowWhereInput
    }
    friendRequestsReceived: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    friendRequestsSent: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    friends: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    notifications: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['NotificationsWhereInput'] | null; // NotificationsWhereInput
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    repositories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['RepositoryWhereInput'] | null; // RepositoryWhereInput
    }
    skills: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['SkillOrderByInput'][] | null; // [SkillOrderByInput!]
      where?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    }
    upvotedPosts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Connection: "ChatConnection" | "ChatMessageConnection" | "CommentConnection" | "ExperienceConnection" | "FollowConnection" | "NotificationConnection" | "PostConnection" | "RepositoryConnection" | "SkillConnection" | "UserActivityConnection" | "UserConnection"
  ConnectionEdge: "ChatEdge" | "ChatMessageEdge" | "CommentEdge" | "ExperienceEdge" | "FollowEdge" | "NotificationEdge" | "PostEdge" | "RepositoryEdge" | "SkillEdge" | "UserActivityEdge" | "UserEdge"
  Followable: "Skill" | "User"
  GitHubRepositoryOwner: "GitHubOrganization" | "GitHubUser"
  MutationPayload: "AcceptFriendshipPayload" | "AddDesiredSkillMutationPayload" | "AddSkillMutationPayload" | "CreateChatPayload" | "CreateCommentPayload" | "CreateExperiencePayload" | "CreatePostPayload" | "CreateRepositoryPayload" | "DeleteCommentPayload" | "DeleteExperiencePayload" | "DeleteFriendshipPayload" | "DeletePostPayload" | "DownvoteCommentPayload" | "FollowSkillPayload" | "FollowUserPayload" | "InviteToChatPayload" | "LeaveChatPayload" | "OpenNotificationsPayload" | "PublishPostPayload" | "RejectFriendshipPayload" | "RemoveDesiredSkillMutationPayload" | "RemovePostThumbnailPayload" | "RemoveSkillMutationPayload" | "RequestFriendshipPayload" | "SendChatMessagePayload" | "UnfollowSkillPayload" | "UnfollowUserPayload" | "UnvoteCommentPayload" | "UpdateCommentPayload" | "UpdateDesiredSkillsPayload" | "UpdateExperiencePayload" | "UpdatePostDraftPayload" | "UpdatePostPayload" | "UpdateRepositoryPayload" | "UpdateSkillsPayload" | "UpdateUserFromGitHubPayload" | "UploadPostImagePayload" | "UpvoteCommentPayload" | "UpvotePostPayload" | "ViewPostPayload"
  Notification: "NotificationChatMessageReceived" | "NotificationFriendshipAccepted" | "NotificationPostCommented"
  UserActivity: "UserActivityCommentPost" | "UserActivityFollowSkill" | "UserActivityFollowUser" | "UserActivityFriendAcceptUser" | "UserActivityJoined" | "UserActivityPublishPost" | "UserActivityUpvotePost"
  WithGitHubRepository: "Repository" | "Skill"
}

export interface NexusGenTypeInterfaces {
  AcceptFriendshipPayload: "MutationPayload"
  AddDesiredSkillMutationPayload: "MutationPayload"
  AddSkillMutationPayload: "MutationPayload"
  ChatConnection: "Connection"
  ChatEdge: "ConnectionEdge"
  ChatMessageConnection: "Connection"
  ChatMessageEdge: "ConnectionEdge"
  CommentConnection: "Connection"
  CommentEdge: "ConnectionEdge"
  CreateChatPayload: "MutationPayload"
  CreateCommentPayload: "MutationPayload"
  CreateExperiencePayload: "MutationPayload"
  CreatePostPayload: "MutationPayload"
  CreateRepositoryPayload: "MutationPayload"
  DeleteCommentPayload: "MutationPayload"
  DeleteExperiencePayload: "MutationPayload"
  DeleteFriendshipPayload: "MutationPayload"
  DeletePostPayload: "MutationPayload"
  DownvoteCommentPayload: "MutationPayload"
  ExperienceConnection: "Connection"
  ExperienceEdge: "ConnectionEdge"
  FollowConnection: "Connection"
  FollowEdge: "ConnectionEdge"
  FollowSkillPayload: "MutationPayload"
  FollowUserPayload: "MutationPayload"
  GitHubOrganization: "GitHubRepositoryOwner"
  GitHubUser: "GitHubRepositoryOwner"
  InviteToChatPayload: "MutationPayload"
  LeaveChatPayload: "MutationPayload"
  NotificationChatMessageReceived: "Notification"
  NotificationConnection: "Connection"
  NotificationEdge: "ConnectionEdge"
  NotificationFriendshipAccepted: "Notification"
  NotificationPostCommented: "Notification"
  OpenNotificationsPayload: "MutationPayload"
  PostConnection: "Connection"
  PostEdge: "ConnectionEdge"
  PublishPostPayload: "MutationPayload"
  RejectFriendshipPayload: "MutationPayload"
  RemoveDesiredSkillMutationPayload: "MutationPayload"
  RemovePostThumbnailPayload: "MutationPayload"
  RemoveSkillMutationPayload: "MutationPayload"
  Repository: "WithGitHubRepository"
  RepositoryConnection: "Connection"
  RepositoryEdge: "ConnectionEdge"
  RequestFriendshipPayload: "MutationPayload"
  SendChatMessagePayload: "MutationPayload"
  Skill: "Followable" | "WithGitHubRepository"
  SkillConnection: "Connection"
  SkillEdge: "ConnectionEdge"
  UnfollowSkillPayload: "MutationPayload"
  UnfollowUserPayload: "MutationPayload"
  UnvoteCommentPayload: "MutationPayload"
  UpdateCommentPayload: "MutationPayload"
  UpdateDesiredSkillsPayload: "MutationPayload"
  UpdateExperiencePayload: "MutationPayload"
  UpdatePostDraftPayload: "MutationPayload"
  UpdatePostPayload: "MutationPayload"
  UpdateRepositoryPayload: "MutationPayload"
  UpdateSkillsPayload: "MutationPayload"
  UpdateUserFromGitHubPayload: "MutationPayload"
  UploadPostImagePayload: "MutationPayload"
  UpvoteCommentPayload: "MutationPayload"
  UpvotePostPayload: "MutationPayload"
  User: "Followable"
  UserActivityCommentPost: "UserActivity"
  UserActivityConnection: "Connection"
  UserActivityEdge: "ConnectionEdge"
  UserActivityFollowSkill: "UserActivity"
  UserActivityFollowUser: "UserActivity"
  UserActivityFriendAcceptUser: "UserActivity"
  UserActivityJoined: "UserActivity"
  UserActivityPublishPost: "UserActivity"
  UserActivityUpvotePost: "UserActivity"
  UserConnection: "Connection"
  UserEdge: "ConnectionEdge"
  ViewPostPayload: "MutationPayload"
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
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}