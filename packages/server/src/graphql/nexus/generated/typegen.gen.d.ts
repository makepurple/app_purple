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
  CodeExampleAuthorNameUrlSlugCompoundUniqueInput: { // input type
    authorName: string; // String!
    urlSlug: string; // String!
  }
  CodeExampleCreateInput: { // input type
    content: string; // String!
    description?: string | null; // String
    language: NexusGenEnums['CodeLanguage']; // CodeLanguage!
    primarySkill?: NexusGenInputs['SkillWhereUniqueInput'] | null; // SkillWhereUniqueInput
    skills: NexusGenInputs['SkillWhereUniqueInput'][]; // [SkillWhereUniqueInput!]!
    title: string; // String!
  }
  CodeExampleOrderByInput: { // input type
    authorName?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    language?: NexusGenEnums['SortOrder'] | null; // SortOrder
    title?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CodeExampleUpdateInput: { // input type
    content?: string | null; // String
    description?: string | null; // String
    language?: NexusGenEnums['CodeLanguage'] | null; // CodeLanguage
    primarySkill?: NexusGenInputs['SkillWhereUniqueInput'] | null; // SkillWhereUniqueInput
    skills?: NexusGenInputs['SkillWhereUniqueInput'][] | null; // [SkillWhereUniqueInput!]
    title?: string | null; // String
  }
  CodeExampleWhereInput: { // input type
    authorName?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    createdAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    language?: NexusGenInputs['CodeLanguageNullableFilter'] | null; // CodeLanguageNullableFilter
    title?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    updatedAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    urlSlug?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
  }
  CodeExampleWhereUniqueInput: { // input type
    authorName_urlSlug?: NexusGenInputs['CodeExampleAuthorNameUrlSlugCompoundUniqueInput'] | null; // CodeExampleAuthorNameUrlSlugCompoundUniqueInput
    id?: string | null; // String
  }
  CodeLanguageNullableFilter: { // input type
    equals?: NexusGenEnums['CodeLanguage'] | null; // CodeLanguage
    in?: NexusGenEnums['CodeLanguage'][] | null; // [CodeLanguage!]
    not?: NexusGenInputs['CodeLanguageNullableFilter'] | null; // CodeLanguageNullableFilter
    notIn?: NexusGenEnums['CodeLanguage'][] | null; // [CodeLanguage!]
  }
  CommentCodeExampleInput: { // input type
    codeExample: NexusGenInputs['CodeExampleWhereUniqueInput']; // CodeExampleWhereUniqueInput!
    content: NexusGenScalars['Json']; // Json!
    parent?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
  }
  CommentOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CommentPostInput: { // input type
    content: NexusGenScalars['Json']; // Json!
    parent?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
    post: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  CommentUpdateInput: { // input type
    content?: NexusGenScalars['Json'] | null; // Json
  }
  CommentWhereInput: { // input type
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    authorId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    codeExample?: NexusGenInputs['CodeExampleWhereInput'] | null; // CodeExampleWhereInput
    codeExampleId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
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
  FollowOrderByInput: { // input type
    type?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  FollowWhereInput: { // input type
    skill?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    type?: NexusGenEnums['FollowType'] | null; // FollowType
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  FollowWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  FriendshipWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  GitHubRepositoryOwnerWhereUniqueInput: { // input type
    login: string; // String!
  }
  GitHubRepositoryWhereUniqueInput: { // input type
    name: string; // String!
    owner: string; // String!
  }
  GitHubUserTotalCommitsWhereInput: { // input type
    createdAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
  }
  InviteToChatInput: { // input type
    users: NexusGenInputs['UserWhereInput']; // UserWhereInput!
  }
  NotificationsWhereInput: { // input type
    opened?: boolean | null; // Boolean
    type?: NexusGenEnums['NotificationType'][] | null; // [NotificationType!]
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
  PostOrderByInput: { // input type
    publishedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    upvoters?: NexusGenInputs['OrderByRelationAggregateInput'] | null; // OrderByRelationAggregateInput
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
    publishedAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    skills?: NexusGenInputs['SkillListRelationFilter'] | null; // SkillListRelationFilter
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
  SkillListRelationFilter: { // input type
    every?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    none?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    some?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
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
  SuggestOrganizationsWhereInput: { // input type
    name: string; // String!
  }
  SuggestRepositoriesWhereInput: { // input type
    name: string; // String!
  }
  SuggestSkillOwnersWhereInput: { // input type
    name: string; // String!
  }
  SuggestSkillsWhereInput: { // input type
    name: string; // String!
    owner?: string | null; // String
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
  UpvoteCodeExampleInput: { // input type
    upvote?: boolean | null; // Boolean
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
  CodeLanguage: "Go" | "GraphQL" | "HTML" | "JavaScript" | "Python" | "SCSS" | "SQL" | "TypeScript" | "YAML"
  ExperienceType: "Contract" | "FullTime" | "Intern" | "OpenSource" | "PartTime"
  FollowType: "Skill" | "User"
  GitHubUserContributionLevel: "FIRST_QUARTILE" | "FOURTH_QUARTILE" | "NONE" | "SECOND_QUARTILE" | "THIRD_QUARTILE"
  NotificationType: "ChatMessageReceived" | "CodeExampleCommented" | "FriendshipAccepted" | "PostCommented"
  SortOrder: "asc" | "desc"
  UserActivityType: "CommentCodeExample" | "CommentPost" | "CreateCodeExample" | "FollowSkill" | "FollowUser" | "FriendAcceptUser" | "Joined" | "PublishPost" | "UpvoteCodeExample" | "UpvotePost"
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
    record: NexusGenRootTypes['Skill']; // Skill!
  }
  AddSkillMutationPayload: { // root type
    record: NexusGenRootTypes['Skill']; // Skill!
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
  CodeExample: { // root type
    authorName: string; // String!
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: string; // ID!
    language: NexusGenEnums['CodeLanguage']; // CodeLanguage!
    primarySkillId: string; // String!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    urlSlug: string; // String!
  }
  CodeExampleConnection: { // root type
    edges: NexusGenRootTypes['CodeExampleEdge'][]; // [CodeExampleEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  CodeExampleEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['CodeExample']; // CodeExample!
  }
  Comment: { // root type
    authorId: string; // String!
    codeExampleId?: string | null; // String
    content?: NexusGenScalars['Json'] | null; // Json
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    parentId?: string | null; // String
    postId?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  CommentCodeExamplePayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
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
  CommentPostPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  CreateChatPayload: { // root type
    record: NexusGenRootTypes['Chat']; // Chat!
  }
  CreateCodeExamplePayload: { // root type
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  DeleteCodeExamplePayload: { // root type
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  DeleteRepositoryPayload: { // root type
    record: NexusGenRootTypes['Repository']; // Repository!
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
    type: NexusGenEnums['FollowType']; // FollowType!
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
  GitHub: {};
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
    twitterUsername?: string | null; // String
    url: NexusGenScalars['URL']; // URL!
    websiteUrl?: string | null; // String
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
  GitHubRepositoryConnection: { // root type
    edges: NexusGenRootTypes['GitHubRepositoryEdge'][]; // [GitHubRepositoryEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  GitHubRepositoryEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['GitHubRepository']; // GitHubRepository!
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
  GitHubUserContributionCalendar: { // root type
    totalContributions: number; // Int!
    weeks: NexusGenRootTypes['GitHubUserContributionCalendarWeek'][]; // [GitHubUserContributionCalendarWeek!]!
  }
  GitHubUserContributionCalendarDay: { // root type
    contributionCount: number; // Int!
    contributionLevel: NexusGenEnums['GitHubUserContributionLevel']; // GitHubUserContributionLevel!
    weekday: number; // Int!
  }
  GitHubUserContributionCalendarWeek: { // root type
    contributionDays: NexusGenRootTypes['GitHubUserContributionCalendarDay'][]; // [GitHubUserContributionCalendarDay!]!
    firstDay: NexusGenScalars['DateTime']; // DateTime!
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
    record: NexusGenRootTypes['Skill']; // Skill!
  }
  RemovePostThumbnailPayload: { // root type
    record?: NexusGenRootTypes['Post'] | null; // Post
  }
  RemoveSkillMutationPayload: { // root type
    record: NexusGenRootTypes['Skill']; // Skill!
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
  SuggestOrganizations: { // root type
    nodes: NexusGenRootTypes['GitHubOrganization'][]; // [GitHubOrganization!]!
    totalCount: number; // Int!
  }
  SuggestRepositories: { // root type
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
    totalCount: number; // Int!
  }
  SuggestSkillOwners: { // root type
    nodes: NexusGenRootTypes['GitHubRepositoryOwner'][]; // [GitHubRepositoryOwner!]!
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
  UnvoteCodeExamplePayload: { // root type
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
  }
  UnvoteCommentPayload: { // root type
    record: NexusGenRootTypes['Comment']; // Comment!
  }
  UnvotePostPayload: { // root type
    record: NexusGenRootTypes['Post']; // Post!
  }
  UpdateCodeExamplePayload: { // root type
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  UpvoteCodeExamplePayload: { // root type
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  UserActivityCommentCodeExample: { // root type
    comment: NexusGenRootTypes['Comment']; // Comment!
    commentId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
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
  UserActivityCreateCodeExample: { // root type
    codeExample: NexusGenRootTypes['CodeExample']; // CodeExample!
    codeExampleId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
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
  UserActivityUpvoteCodeExample: { // root type
    codeExample: NexusGenRootTypes['CodeExample']; // CodeExample!
    codeExampleId: string; // String!
    id: string; // ID!
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
  Connection: core.Discriminate<'ChatConnection', 'required'> | core.Discriminate<'ChatMessageConnection', 'required'> | core.Discriminate<'CodeExampleConnection', 'required'> | core.Discriminate<'CommentConnection', 'required'> | core.Discriminate<'ExperienceConnection', 'required'> | core.Discriminate<'FollowConnection', 'required'> | core.Discriminate<'GitHubRepositoryConnection', 'required'> | core.Discriminate<'NotificationConnection', 'required'> | core.Discriminate<'PostConnection', 'required'> | core.Discriminate<'RepositoryConnection', 'required'> | core.Discriminate<'SkillConnection', 'required'> | core.Discriminate<'UserActivityConnection', 'required'> | core.Discriminate<'UserConnection', 'required'>;
  ConnectionEdge: core.Discriminate<'ChatEdge', 'required'> | core.Discriminate<'ChatMessageEdge', 'required'> | core.Discriminate<'CodeExampleEdge', 'required'> | core.Discriminate<'CommentEdge', 'required'> | core.Discriminate<'ExperienceEdge', 'required'> | core.Discriminate<'FollowEdge', 'required'> | core.Discriminate<'GitHubRepositoryEdge', 'required'> | core.Discriminate<'NotificationEdge', 'required'> | core.Discriminate<'PostEdge', 'required'> | core.Discriminate<'RepositoryEdge', 'required'> | core.Discriminate<'SkillEdge', 'required'> | core.Discriminate<'UserActivityEdge', 'required'> | core.Discriminate<'UserEdge', 'required'>;
  Followable: core.Discriminate<'Skill', 'required'> | core.Discriminate<'User', 'required'>;
  GitHubRepositoryOwner: core.Discriminate<'GitHubOrganization', 'required'> | core.Discriminate<'GitHubUser', 'required'>;
  MutationPayload: core.Discriminate<'AcceptFriendshipPayload', 'required'> | core.Discriminate<'AddDesiredSkillMutationPayload', 'required'> | core.Discriminate<'AddSkillMutationPayload', 'required'> | core.Discriminate<'CommentCodeExamplePayload', 'required'> | core.Discriminate<'CommentPostPayload', 'required'> | core.Discriminate<'CreateChatPayload', 'required'> | core.Discriminate<'CreateCodeExamplePayload', 'required'> | core.Discriminate<'CreateExperiencePayload', 'required'> | core.Discriminate<'CreatePostPayload', 'required'> | core.Discriminate<'CreateRepositoryPayload', 'required'> | core.Discriminate<'DeleteCodeExamplePayload', 'required'> | core.Discriminate<'DeleteCommentPayload', 'required'> | core.Discriminate<'DeleteExperiencePayload', 'required'> | core.Discriminate<'DeleteFriendshipPayload', 'required'> | core.Discriminate<'DeletePostPayload', 'required'> | core.Discriminate<'DeleteRepositoryPayload', 'required'> | core.Discriminate<'DownvoteCommentPayload', 'required'> | core.Discriminate<'FollowSkillPayload', 'required'> | core.Discriminate<'FollowUserPayload', 'required'> | core.Discriminate<'InviteToChatPayload', 'required'> | core.Discriminate<'LeaveChatPayload', 'required'> | core.Discriminate<'OpenNotificationsPayload', 'required'> | core.Discriminate<'PublishPostPayload', 'required'> | core.Discriminate<'RejectFriendshipPayload', 'required'> | core.Discriminate<'RemoveDesiredSkillMutationPayload', 'required'> | core.Discriminate<'RemovePostThumbnailPayload', 'required'> | core.Discriminate<'RemoveSkillMutationPayload', 'required'> | core.Discriminate<'RequestFriendshipPayload', 'required'> | core.Discriminate<'SendChatMessagePayload', 'required'> | core.Discriminate<'UnfollowSkillPayload', 'required'> | core.Discriminate<'UnfollowUserPayload', 'required'> | core.Discriminate<'UnvoteCodeExamplePayload', 'required'> | core.Discriminate<'UnvoteCommentPayload', 'required'> | core.Discriminate<'UnvotePostPayload', 'required'> | core.Discriminate<'UpdateCodeExamplePayload', 'required'> | core.Discriminate<'UpdateCommentPayload', 'required'> | core.Discriminate<'UpdateDesiredSkillsPayload', 'required'> | core.Discriminate<'UpdateExperiencePayload', 'required'> | core.Discriminate<'UpdatePostDraftPayload', 'required'> | core.Discriminate<'UpdatePostPayload', 'required'> | core.Discriminate<'UpdateRepositoryPayload', 'required'> | core.Discriminate<'UpdateSkillsPayload', 'required'> | core.Discriminate<'UpdateUserFromGitHubPayload', 'required'> | core.Discriminate<'UploadPostImagePayload', 'required'> | core.Discriminate<'UpvoteCodeExamplePayload', 'required'> | core.Discriminate<'UpvoteCommentPayload', 'required'> | core.Discriminate<'UpvotePostPayload', 'required'> | core.Discriminate<'ViewPostPayload', 'required'>;
  Notification: core.Discriminate<'NotificationChatMessageReceived', 'required'> | core.Discriminate<'NotificationFriendshipAccepted', 'required'> | core.Discriminate<'NotificationPostCommented', 'required'>;
  UserActivity: core.Discriminate<'UserActivityCommentCodeExample', 'required'> | core.Discriminate<'UserActivityCommentPost', 'required'> | core.Discriminate<'UserActivityCreateCodeExample', 'required'> | core.Discriminate<'UserActivityFollowSkill', 'required'> | core.Discriminate<'UserActivityFollowUser', 'required'> | core.Discriminate<'UserActivityFriendAcceptUser', 'required'> | core.Discriminate<'UserActivityJoined', 'required'> | core.Discriminate<'UserActivityPublishPost', 'required'> | core.Discriminate<'UserActivityUpvoteCodeExample', 'required'> | core.Discriminate<'UserActivityUpvotePost', 'required'>;
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
    record: NexusGenRootTypes['Skill']; // Skill!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  AddSkillMutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Skill']; // Skill!
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
  CodeExample: { // field return type
    author: NexusGenRootTypes['User']; // User!
    authorName: string; // String!
    comments: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: string; // ID!
    language: NexusGenEnums['CodeLanguage']; // CodeLanguage!
    languageColor: string; // String!
    primarySkill: NexusGenRootTypes['Skill']; // Skill!
    primarySkillId: string; // String!
    skills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    upvoters: NexusGenRootTypes['UserConnection']; // UserConnection!
    upvotes: number; // Int!
    urlSlug: string; // String!
    viewerUpvote: boolean | null; // Boolean
  }
  CodeExampleConnection: { // field return type
    edges: NexusGenRootTypes['CodeExampleEdge'][]; // [CodeExampleEdge!]!
    nodes: NexusGenRootTypes['CodeExample'][]; // [CodeExample!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  CodeExampleEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['CodeExample']; // CodeExample!
  }
  Comment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    authorId: string; // String!
    codeExample: NexusGenRootTypes['CodeExample'] | null; // CodeExample
    codeExampleId: string | null; // String
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
  CommentCodeExamplePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
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
  CommentPostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  CreateChatPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Chat']; // Chat!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  CreateCodeExamplePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  DeleteCodeExamplePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  DeleteRepositoryPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Repository']; // Repository!
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
    type: NexusGenEnums['FollowType']; // FollowType!
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
  GitHub: { // field return type
    repository: NexusGenRootTypes['GitHubRepository'] | null; // GitHubRepository
    repositoryOwner: NexusGenRootTypes['GitHubRepositoryOwner'] | null; // GitHubRepositoryOwner
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
    experiencers: NexusGenRootTypes['UserConnection']; // UserConnection!
    id: string; // String!
    login: string; // String!
    name: string | null; // String
    organization: NexusGenRootTypes['Organization']; // Organization!
    repositories: NexusGenRootTypes['GitHubRepositoryConnection']; // GitHubRepositoryConnection!
    twitterUsername: string | null; // String
    url: NexusGenScalars['URL']; // URL!
    websiteUrl: string | null; // String
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
    skill: NexusGenRootTypes['Skill'] | null; // Skill
    stargazerCount: number; // Int!
    url: NexusGenScalars['URL']; // URL!
  }
  GitHubRepositoryConnection: { // field return type
    edges: NexusGenRootTypes['GitHubRepositoryEdge'][]; // [GitHubRepositoryEdge!]!
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number; // Int!
  }
  GitHubRepositoryEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['GitHubRepository']; // GitHubRepository!
  }
  GitHubUser: { // field return type
    avatarUrl: NexusGenScalars['URL']; // URL!
    bio: string | null; // String
    company: string | null; // String
    contributionCalendar: NexusGenRootTypes['GitHubUserContributionCalendar']; // GitHubUserContributionCalendar!
    experiencers: NexusGenRootTypes['UserConnection']; // UserConnection!
    id: string; // String!
    login: string; // String!
    name: string | null; // String
    repositories: NexusGenRootTypes['GitHubRepositoryConnection']; // GitHubRepositoryConnection!
    topLanguages: NexusGenRootTypes['TopLanguages']; // TopLanguages!
    totalCommits: number; // Int!
    twitterUsername: string | null; // String
    url: NexusGenScalars['URL']; // URL!
    user: NexusGenRootTypes['User']; // User!
    websiteUrl: string | null; // String
  }
  GitHubUserContributionCalendar: { // field return type
    totalContributions: number; // Int!
    weeks: NexusGenRootTypes['GitHubUserContributionCalendarWeek'][]; // [GitHubUserContributionCalendarWeek!]!
  }
  GitHubUserContributionCalendarDay: { // field return type
    contributionCount: number; // Int!
    contributionLevel: NexusGenEnums['GitHubUserContributionLevel']; // GitHubUserContributionLevel!
    date: NexusGenScalars['DateTime']; // DateTime!
    weekday: number; // Int!
  }
  GitHubUserContributionCalendarWeek: { // field return type
    contributionDays: NexusGenRootTypes['GitHubUserContributionCalendarDay'][]; // [GitHubUserContributionCalendarDay!]!
    firstDay: NexusGenScalars['DateTime']; // DateTime!
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
    commentCodeExample: NexusGenRootTypes['CommentCodeExamplePayload']; // CommentCodeExamplePayload!
    commentPost: NexusGenRootTypes['CommentPostPayload']; // CommentPostPayload!
    createChat: NexusGenRootTypes['CreateChatPayload']; // CreateChatPayload!
    createCodeExample: NexusGenRootTypes['CreateCodeExamplePayload']; // CreateCodeExamplePayload!
    createExperience: NexusGenRootTypes['CreateExperiencePayload']; // CreateExperiencePayload!
    createPost: NexusGenRootTypes['CreatePostPayload']; // CreatePostPayload!
    createRepository: NexusGenRootTypes['CreateRepositoryPayload']; // CreateRepositoryPayload!
    deleteCodeExample: NexusGenRootTypes['DeleteCodeExamplePayload']; // DeleteCodeExamplePayload!
    deleteComment: NexusGenRootTypes['DeleteCommentPayload']; // DeleteCommentPayload!
    deleteExperience: NexusGenRootTypes['DeleteExperiencePayload']; // DeleteExperiencePayload!
    deleteFriendship: NexusGenRootTypes['DeleteFriendshipPayload']; // DeleteFriendshipPayload!
    deletePost: NexusGenRootTypes['DeletePostPayload']; // DeletePostPayload!
    deleteRepository: NexusGenRootTypes['DeleteRepositoryPayload']; // DeleteRepositoryPayload!
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
    unvoteCodeExample: NexusGenRootTypes['UnvoteCodeExamplePayload']; // UnvoteCodeExamplePayload!
    unvoteComment: NexusGenRootTypes['UnvoteCommentPayload']; // UnvoteCommentPayload!
    updateCodeExample: NexusGenRootTypes['UpdateCodeExamplePayload']; // UpdateCodeExamplePayload!
    updateComment: NexusGenRootTypes['UpdateCommentPayload']; // UpdateCommentPayload!
    updateDesiredSkills: NexusGenRootTypes['UpdateDesiredSkillsPayload']; // UpdateDesiredSkillsPayload!
    updateExperience: NexusGenRootTypes['UpdateExperiencePayload']; // UpdateExperiencePayload!
    updatePost: NexusGenRootTypes['UpdatePostPayload']; // UpdatePostPayload!
    updatePostDraft: NexusGenRootTypes['UpdatePostDraftPayload']; // UpdatePostDraftPayload!
    updateRepository: NexusGenRootTypes['UpdateRepositoryPayload']; // UpdateRepositoryPayload!
    updateSkills: NexusGenRootTypes['UpdateSkillsPayload']; // UpdateSkillsPayload!
    updateUserFromGitHub: NexusGenRootTypes['UpdateUserFromGitHubPayload']; // UpdateUserFromGitHubPayload!
    uploadPostImage: NexusGenRootTypes['UploadPostImagePayload']; // UploadPostImagePayload!
    upvoteCodeExample: NexusGenRootTypes['UpvoteCodeExamplePayload']; // UpvoteCodeExamplePayload!
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
    codeExample: NexusGenRootTypes['CodeExample'] | null; // CodeExample
    codeExamples: NexusGenRootTypes['CodeExampleConnection']; // CodeExampleConnection!
    comment: NexusGenRootTypes['Comment'] | null; // Comment
    comments: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    experiences: NexusGenRootTypes['ExperienceConnection']; // ExperienceConnection!
    followableSkills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    github: NexusGenRootTypes['GitHub']; // GitHub!
    ok: boolean; // Boolean!
    post: NexusGenRootTypes['Post'] | null; // Post
    postDraft: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
    repositories: NexusGenRootTypes['RepositoryConnection']; // RepositoryConnection!
    skill: NexusGenRootTypes['Skill'] | null; // Skill
    skills: NexusGenRootTypes['SkillConnection']; // SkillConnection!
    suggestFriends: NexusGenRootTypes['UserConnection']; // UserConnection!
    suggestOrganizations: NexusGenRootTypes['SuggestOrganizations']; // SuggestOrganizations!
    suggestRepositories: NexusGenRootTypes['SuggestRepositories']; // SuggestRepositories!
    suggestSkillOwners: NexusGenRootTypes['SuggestSkillOwners']; // SuggestSkillOwners!
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
    record: NexusGenRootTypes['Skill']; // Skill!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  RemovePostThumbnailPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post'] | null; // Post
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  RemoveSkillMutationPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Skill']; // Skill!
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
    codeExamples: NexusGenRootTypes['CodeExampleConnection']; // CodeExampleConnection!
    desiringUsers: NexusGenRootTypes['UserConnection']; // UserConnection!
    followers: NexusGenRootTypes['UserConnection']; // UserConnection!
    github: NexusGenRootTypes['GitHubRepository']; // GitHubRepository!
    id: string; // ID!
    name: string; // String!
    owner: string; // String!
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
    users: NexusGenRootTypes['UserConnection']; // UserConnection!
    viewerDesiredSkill: boolean; // Boolean!
    viewerFollowing: boolean; // Boolean!
    viewerSkill: boolean; // Boolean!
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
  SuggestOrganizations: { // field return type
    nodes: NexusGenRootTypes['GitHubOrganization'][]; // [GitHubOrganization!]!
    totalCount: number; // Int!
  }
  SuggestRepositories: { // field return type
    nodes: NexusGenRootTypes['GitHubRepository'][]; // [GitHubRepository!]!
    totalCount: number; // Int!
  }
  SuggestSkillOwners: { // field return type
    nodes: NexusGenRootTypes['GitHubRepositoryOwner'][]; // [GitHubRepositoryOwner!]!
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
  UnvoteCodeExamplePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UnvoteCommentPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Comment']; // Comment!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UnvotePostPayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['Post']; // Post!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  UpdateCodeExamplePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
  UpvoteCodeExamplePayload: { // field return type
    query: NexusGenRootTypes['Query']; // Query!
    record: NexusGenRootTypes['CodeExample']; // CodeExample!
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
    codeExamples: NexusGenRootTypes['CodeExampleConnection']; // CodeExampleConnection!
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
    upvotedCodeExamples: NexusGenRootTypes['CodeExampleConnection']; // CodeExampleConnection!
    upvotedPosts: NexusGenRootTypes['PostConnection']; // PostConnection!
    viewerCanFriend: boolean; // Boolean!
    viewerFollowing: boolean; // Boolean!
    viewerFriended: boolean; // Boolean!
    viewerIsFriend: boolean; // Boolean!
  }
  UserActivityCommentCodeExample: { // field return type
    comment: NexusGenRootTypes['Comment']; // Comment!
    commentId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
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
  UserActivityCreateCodeExample: { // field return type
    codeExample: NexusGenRootTypes['CodeExample']; // CodeExample!
    codeExampleId: string; // String!
    id: string; // ID!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
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
  UserActivityUpvoteCodeExample: { // field return type
    codeExample: NexusGenRootTypes['CodeExample']; // CodeExample!
    codeExampleId: string; // String!
    id: string; // ID!
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
    experiencers: NexusGenRootTypes['UserConnection']; // UserConnection!
    id: string; // String!
    login: string; // String!
    repositories: NexusGenRootTypes['GitHubRepositoryConnection']; // GitHubRepositoryConnection!
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
    record: 'Skill'
    viewer: 'User'
  }
  AddSkillMutationPayload: { // field return type name
    query: 'Query'
    record: 'Skill'
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
  CodeExample: { // field return type name
    author: 'User'
    authorName: 'String'
    comments: 'CommentConnection'
    content: 'String'
    createdAt: 'DateTime'
    description: 'String'
    id: 'ID'
    language: 'CodeLanguage'
    languageColor: 'String'
    primarySkill: 'Skill'
    primarySkillId: 'String'
    skills: 'SkillConnection'
    title: 'String'
    updatedAt: 'DateTime'
    upvoters: 'UserConnection'
    upvotes: 'Int'
    urlSlug: 'String'
    viewerUpvote: 'Boolean'
  }
  CodeExampleConnection: { // field return type name
    edges: 'CodeExampleEdge'
    nodes: 'CodeExample'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  CodeExampleEdge: { // field return type name
    cursor: 'String'
    node: 'CodeExample'
  }
  Comment: { // field return type name
    author: 'User'
    authorId: 'String'
    codeExample: 'CodeExample'
    codeExampleId: 'String'
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
  CommentCodeExamplePayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
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
  CommentPostPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  CreateChatPayload: { // field return type name
    query: 'Query'
    record: 'Chat'
    viewer: 'User'
  }
  CreateCodeExamplePayload: { // field return type name
    query: 'Query'
    record: 'CodeExample'
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
  DeleteCodeExamplePayload: { // field return type name
    query: 'Query'
    record: 'CodeExample'
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
  DeleteRepositoryPayload: { // field return type name
    query: 'Query'
    record: 'Repository'
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
    type: 'FollowType'
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
  GitHub: { // field return type name
    repository: 'GitHubRepository'
    repositoryOwner: 'GitHubRepositoryOwner'
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
    experiencers: 'UserConnection'
    id: 'String'
    login: 'String'
    name: 'String'
    organization: 'Organization'
    repositories: 'GitHubRepositoryConnection'
    twitterUsername: 'String'
    url: 'URL'
    websiteUrl: 'String'
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
    skill: 'Skill'
    stargazerCount: 'Int'
    url: 'URL'
  }
  GitHubRepositoryConnection: { // field return type name
    edges: 'GitHubRepositoryEdge'
    nodes: 'GitHubRepository'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  GitHubRepositoryEdge: { // field return type name
    cursor: 'String'
    node: 'GitHubRepository'
  }
  GitHubUser: { // field return type name
    avatarUrl: 'URL'
    bio: 'String'
    company: 'String'
    contributionCalendar: 'GitHubUserContributionCalendar'
    experiencers: 'UserConnection'
    id: 'String'
    login: 'String'
    name: 'String'
    repositories: 'GitHubRepositoryConnection'
    topLanguages: 'TopLanguages'
    totalCommits: 'Int'
    twitterUsername: 'String'
    url: 'URL'
    user: 'User'
    websiteUrl: 'String'
  }
  GitHubUserContributionCalendar: { // field return type name
    totalContributions: 'Int'
    weeks: 'GitHubUserContributionCalendarWeek'
  }
  GitHubUserContributionCalendarDay: { // field return type name
    contributionCount: 'Int'
    contributionLevel: 'GitHubUserContributionLevel'
    date: 'DateTime'
    weekday: 'Int'
  }
  GitHubUserContributionCalendarWeek: { // field return type name
    contributionDays: 'GitHubUserContributionCalendarDay'
    firstDay: 'DateTime'
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
    commentCodeExample: 'CommentCodeExamplePayload'
    commentPost: 'CommentPostPayload'
    createChat: 'CreateChatPayload'
    createCodeExample: 'CreateCodeExamplePayload'
    createExperience: 'CreateExperiencePayload'
    createPost: 'CreatePostPayload'
    createRepository: 'CreateRepositoryPayload'
    deleteCodeExample: 'DeleteCodeExamplePayload'
    deleteComment: 'DeleteCommentPayload'
    deleteExperience: 'DeleteExperiencePayload'
    deleteFriendship: 'DeleteFriendshipPayload'
    deletePost: 'DeletePostPayload'
    deleteRepository: 'DeleteRepositoryPayload'
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
    unvoteCodeExample: 'UnvoteCodeExamplePayload'
    unvoteComment: 'UnvoteCommentPayload'
    updateCodeExample: 'UpdateCodeExamplePayload'
    updateComment: 'UpdateCommentPayload'
    updateDesiredSkills: 'UpdateDesiredSkillsPayload'
    updateExperience: 'UpdateExperiencePayload'
    updatePost: 'UpdatePostPayload'
    updatePostDraft: 'UpdatePostDraftPayload'
    updateRepository: 'UpdateRepositoryPayload'
    updateSkills: 'UpdateSkillsPayload'
    updateUserFromGitHub: 'UpdateUserFromGitHubPayload'
    uploadPostImage: 'UploadPostImagePayload'
    upvoteCodeExample: 'UpvoteCodeExamplePayload'
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
    codeExample: 'CodeExample'
    codeExamples: 'CodeExampleConnection'
    comment: 'Comment'
    comments: 'CommentConnection'
    experiences: 'ExperienceConnection'
    followableSkills: 'SkillConnection'
    github: 'GitHub'
    ok: 'Boolean'
    post: 'Post'
    postDraft: 'Post'
    posts: 'PostConnection'
    repositories: 'RepositoryConnection'
    skill: 'Skill'
    skills: 'SkillConnection'
    suggestFriends: 'UserConnection'
    suggestOrganizations: 'SuggestOrganizations'
    suggestRepositories: 'SuggestRepositories'
    suggestSkillOwners: 'SuggestSkillOwners'
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
    record: 'Skill'
    viewer: 'User'
  }
  RemovePostThumbnailPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  RemoveSkillMutationPayload: { // field return type name
    query: 'Query'
    record: 'Skill'
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
    codeExamples: 'CodeExampleConnection'
    desiringUsers: 'UserConnection'
    followers: 'UserConnection'
    github: 'GitHubRepository'
    id: 'ID'
    name: 'String'
    owner: 'String'
    posts: 'PostConnection'
    users: 'UserConnection'
    viewerDesiredSkill: 'Boolean'
    viewerFollowing: 'Boolean'
    viewerSkill: 'Boolean'
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
  SuggestOrganizations: { // field return type name
    nodes: 'GitHubOrganization'
    totalCount: 'Int'
  }
  SuggestRepositories: { // field return type name
    nodes: 'GitHubRepository'
    totalCount: 'Int'
  }
  SuggestSkillOwners: { // field return type name
    nodes: 'GitHubRepositoryOwner'
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
  UnvoteCodeExamplePayload: { // field return type name
    query: 'Query'
    record: 'CodeExample'
    viewer: 'User'
  }
  UnvoteCommentPayload: { // field return type name
    query: 'Query'
    record: 'Comment'
    viewer: 'User'
  }
  UnvotePostPayload: { // field return type name
    query: 'Query'
    record: 'Post'
    viewer: 'User'
  }
  UpdateCodeExamplePayload: { // field return type name
    query: 'Query'
    record: 'CodeExample'
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
  UpvoteCodeExamplePayload: { // field return type name
    query: 'Query'
    record: 'CodeExample'
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
    codeExamples: 'CodeExampleConnection'
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
    upvotedCodeExamples: 'CodeExampleConnection'
    upvotedPosts: 'PostConnection'
    viewerCanFriend: 'Boolean'
    viewerFollowing: 'Boolean'
    viewerFriended: 'Boolean'
    viewerIsFriend: 'Boolean'
  }
  UserActivityCommentCodeExample: { // field return type name
    comment: 'Comment'
    commentId: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
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
  UserActivityCreateCodeExample: { // field return type name
    codeExample: 'CodeExample'
    codeExampleId: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
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
  UserActivityUpvoteCodeExample: { // field return type name
    codeExample: 'CodeExample'
    codeExampleId: 'String'
    id: 'ID'
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
    experiencers: 'UserConnection'
    id: 'String'
    login: 'String'
    repositories: 'GitHubRepositoryConnection'
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
  CodeExample: {
    comments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CommentOrderByInput'] | null; // CommentOrderByInput
      where?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    }
    skills: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['SkillOrderByInput'] | null; // SkillOrderByInput
      where?: NexusGenInputs['SkillWhereInput'] | null; // SkillWhereInput
    }
    upvoters: { // args
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
  GitHub: {
    repository: { // args
      where: NexusGenInputs['GitHubRepositoryWhereUniqueInput']; // GitHubRepositoryWhereUniqueInput!
    }
    repositoryOwner: { // args
      where: NexusGenInputs['GitHubRepositoryOwnerWhereUniqueInput']; // GitHubRepositoryOwnerWhereUniqueInput!
    }
  }
  GitHubOrganization: {
    experiencers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    repositories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  GitHubUser: {
    experiencers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    repositories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
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
    commentCodeExample: { // args
      data: NexusGenInputs['CommentCodeExampleInput']; // CommentCodeExampleInput!
    }
    commentPost: { // args
      data: NexusGenInputs['CommentPostInput']; // CommentPostInput!
    }
    createChat: { // args
      data: NexusGenInputs['CreateChatInput']; // CreateChatInput!
    }
    createCodeExample: { // args
      data: NexusGenInputs['CodeExampleCreateInput']; // CodeExampleCreateInput!
    }
    createExperience: { // args
      data: NexusGenInputs['ExperienceCreateInput']; // ExperienceCreateInput!
    }
    createRepository: { // args
      data: NexusGenInputs['RepositoryCreateInput']; // RepositoryCreateInput!
    }
    deleteCodeExample: { // args
      where: NexusGenInputs['CodeExampleWhereUniqueInput']; // CodeExampleWhereUniqueInput!
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
    deleteRepository: { // args
      where: NexusGenInputs['RepositoryWhereUniqueInput']; // RepositoryWhereUniqueInput!
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
    unvoteCodeExample: { // args
      where: NexusGenInputs['CodeExampleWhereUniqueInput']; // CodeExampleWhereUniqueInput!
    }
    unvoteComment: { // args
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    updateCodeExample: { // args
      data: NexusGenInputs['CodeExampleUpdateInput']; // CodeExampleUpdateInput!
      where: NexusGenInputs['CodeExampleWhereUniqueInput']; // CodeExampleWhereUniqueInput!
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
    upvoteCodeExample: { // args
      data?: NexusGenInputs['UpvoteCodeExampleInput'] | null; // UpvoteCodeExampleInput
      where: NexusGenInputs['CodeExampleWhereUniqueInput']; // CodeExampleWhereUniqueInput!
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
    codeExample: { // args
      where: NexusGenInputs['CodeExampleWhereUniqueInput']; // CodeExampleWhereUniqueInput!
    }
    codeExamples: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CodeExampleOrderByInput'][] | null; // [CodeExampleOrderByInput!]
      where: NexusGenInputs['CodeExampleWhereInput']; // CodeExampleWhereInput!
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
      orderBy?: NexusGenInputs['PostOrderByInput'][] | null; // [PostOrderByInput!]
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
    suggestFriends: { // args
      after?: string | null; // String
      first?: number | null; // Int
      where: NexusGenInputs['SuggestFriendsWhereInput']; // SuggestFriendsWhereInput!
    }
    suggestOrganizations: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestOrganizationsWhereInput']; // SuggestOrganizationsWhereInput!
    }
    suggestRepositories: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestRepositoriesWhereInput']; // SuggestRepositoriesWhereInput!
    }
    suggestSkillOwners: { // args
      first?: number | null; // Int
      where: NexusGenInputs['SuggestSkillOwnersWhereInput']; // SuggestSkillOwnersWhereInput!
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
    codeExamples: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CodeExampleOrderByInput'][] | null; // [CodeExampleOrderByInput!]
      where?: NexusGenInputs['CodeExampleWhereInput'] | null; // CodeExampleWhereInput
    }
    desiringUsers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    followers: { // args
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
    codeExamples: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CodeExampleOrderByInput'][] | null; // [CodeExampleOrderByInput!]
      where?: NexusGenInputs['CodeExampleWhereInput'] | null; // CodeExampleWhereInput
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
      orderBy?: NexusGenInputs['FollowOrderByInput'] | null; // FollowOrderByInput
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
    upvotedCodeExamples: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CodeExampleOrderByInput'][] | null; // [CodeExampleOrderByInput!]
      where?: NexusGenInputs['CodeExampleWhereInput'] | null; // CodeExampleWhereInput
    }
    upvotedPosts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
  GitHubRepositoryOwner: {
    experiencers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    repositories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Connection: "ChatConnection" | "ChatMessageConnection" | "CodeExampleConnection" | "CommentConnection" | "ExperienceConnection" | "FollowConnection" | "GitHubRepositoryConnection" | "NotificationConnection" | "PostConnection" | "RepositoryConnection" | "SkillConnection" | "UserActivityConnection" | "UserConnection"
  ConnectionEdge: "ChatEdge" | "ChatMessageEdge" | "CodeExampleEdge" | "CommentEdge" | "ExperienceEdge" | "FollowEdge" | "GitHubRepositoryEdge" | "NotificationEdge" | "PostEdge" | "RepositoryEdge" | "SkillEdge" | "UserActivityEdge" | "UserEdge"
  Followable: "Skill" | "User"
  GitHubRepositoryOwner: "GitHubOrganization" | "GitHubUser"
  MutationPayload: "AcceptFriendshipPayload" | "AddDesiredSkillMutationPayload" | "AddSkillMutationPayload" | "CommentCodeExamplePayload" | "CommentPostPayload" | "CreateChatPayload" | "CreateCodeExamplePayload" | "CreateExperiencePayload" | "CreatePostPayload" | "CreateRepositoryPayload" | "DeleteCodeExamplePayload" | "DeleteCommentPayload" | "DeleteExperiencePayload" | "DeleteFriendshipPayload" | "DeletePostPayload" | "DeleteRepositoryPayload" | "DownvoteCommentPayload" | "FollowSkillPayload" | "FollowUserPayload" | "InviteToChatPayload" | "LeaveChatPayload" | "OpenNotificationsPayload" | "PublishPostPayload" | "RejectFriendshipPayload" | "RemoveDesiredSkillMutationPayload" | "RemovePostThumbnailPayload" | "RemoveSkillMutationPayload" | "RequestFriendshipPayload" | "SendChatMessagePayload" | "UnfollowSkillPayload" | "UnfollowUserPayload" | "UnvoteCodeExamplePayload" | "UnvoteCommentPayload" | "UnvotePostPayload" | "UpdateCodeExamplePayload" | "UpdateCommentPayload" | "UpdateDesiredSkillsPayload" | "UpdateExperiencePayload" | "UpdatePostDraftPayload" | "UpdatePostPayload" | "UpdateRepositoryPayload" | "UpdateSkillsPayload" | "UpdateUserFromGitHubPayload" | "UploadPostImagePayload" | "UpvoteCodeExamplePayload" | "UpvoteCommentPayload" | "UpvotePostPayload" | "ViewPostPayload"
  Notification: "NotificationChatMessageReceived" | "NotificationFriendshipAccepted" | "NotificationPostCommented"
  UserActivity: "UserActivityCommentCodeExample" | "UserActivityCommentPost" | "UserActivityCreateCodeExample" | "UserActivityFollowSkill" | "UserActivityFollowUser" | "UserActivityFriendAcceptUser" | "UserActivityJoined" | "UserActivityPublishPost" | "UserActivityUpvoteCodeExample" | "UserActivityUpvotePost"
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
  CodeExampleConnection: "Connection"
  CodeExampleEdge: "ConnectionEdge"
  CommentCodeExamplePayload: "MutationPayload"
  CommentConnection: "Connection"
  CommentEdge: "ConnectionEdge"
  CommentPostPayload: "MutationPayload"
  CreateChatPayload: "MutationPayload"
  CreateCodeExamplePayload: "MutationPayload"
  CreateExperiencePayload: "MutationPayload"
  CreatePostPayload: "MutationPayload"
  CreateRepositoryPayload: "MutationPayload"
  DeleteCodeExamplePayload: "MutationPayload"
  DeleteCommentPayload: "MutationPayload"
  DeleteExperiencePayload: "MutationPayload"
  DeleteFriendshipPayload: "MutationPayload"
  DeletePostPayload: "MutationPayload"
  DeleteRepositoryPayload: "MutationPayload"
  DownvoteCommentPayload: "MutationPayload"
  ExperienceConnection: "Connection"
  ExperienceEdge: "ConnectionEdge"
  FollowConnection: "Connection"
  FollowEdge: "ConnectionEdge"
  FollowSkillPayload: "MutationPayload"
  FollowUserPayload: "MutationPayload"
  GitHubOrganization: "GitHubRepositoryOwner"
  GitHubRepositoryConnection: "Connection"
  GitHubRepositoryEdge: "ConnectionEdge"
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
  UnvoteCodeExamplePayload: "MutationPayload"
  UnvoteCommentPayload: "MutationPayload"
  UnvotePostPayload: "MutationPayload"
  UpdateCodeExamplePayload: "MutationPayload"
  UpdateCommentPayload: "MutationPayload"
  UpdateDesiredSkillsPayload: "MutationPayload"
  UpdateExperiencePayload: "MutationPayload"
  UpdatePostDraftPayload: "MutationPayload"
  UpdatePostPayload: "MutationPayload"
  UpdateRepositoryPayload: "MutationPayload"
  UpdateSkillsPayload: "MutationPayload"
  UpdateUserFromGitHubPayload: "MutationPayload"
  UploadPostImagePayload: "MutationPayload"
  UpvoteCodeExamplePayload: "MutationPayload"
  UpvoteCommentPayload: "MutationPayload"
  UpvotePostPayload: "MutationPayload"
  User: "Followable"
  UserActivityCommentCodeExample: "UserActivity"
  UserActivityCommentPost: "UserActivity"
  UserActivityConnection: "Connection"
  UserActivityCreateCodeExample: "UserActivity"
  UserActivityEdge: "ConnectionEdge"
  UserActivityFollowSkill: "UserActivity"
  UserActivityFollowUser: "UserActivity"
  UserActivityFriendAcceptUser: "UserActivity"
  UserActivityJoined: "UserActivity"
  UserActivityPublishPost: "UserActivity"
  UserActivityUpvoteCodeExample: "UserActivity"
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