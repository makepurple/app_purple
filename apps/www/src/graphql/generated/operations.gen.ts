import type { TypedDocumentNode as DocumentNode } from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: Json;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type AcceptFriendshipPayload = MutationPayload & {
  readonly __typename: 'AcceptFriendshipPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Friendship>;
  readonly viewer?: Maybe<User>;
};

export type AddDesiredSkillMutationPayload = MutationPayload & {
  readonly __typename: 'AddDesiredSkillMutationPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Skill>;
  readonly viewer?: Maybe<User>;
};

export type AddSkillMutationPayload = MutationPayload & {
  readonly __typename: 'AddSkillMutationPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Skill>;
  readonly viewer?: Maybe<User>;
};

export type Chat = Node & {
  readonly __typename: 'Chat';
  readonly id: Scalars['ID'];
  readonly messages: ChatMessageConnection;
  readonly updatedAt: Scalars['DateTime'];
  readonly users: UserConnection;
};


export type ChatMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ChatUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ChatConnection = Connection & {
  readonly __typename: 'ChatConnection';
  readonly edges: ReadonlyArray<ChatEdge>;
  readonly nodes: ReadonlyArray<Chat>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type ChatEdge = ConnectionEdge & {
  readonly __typename: 'ChatEdge';
  readonly cursor: Scalars['String'];
  readonly node: Chat;
};

export type ChatMessage = Node & {
  readonly __typename: 'ChatMessage';
  readonly chat: Chat;
  readonly chatId: Scalars['String'];
  readonly content: ReadonlyArray<Scalars['Json']>;
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly sender: User;
  readonly senderId: Scalars['String'];
};

export type ChatMessageConnection = Connection & {
  readonly __typename: 'ChatMessageConnection';
  readonly edges: ReadonlyArray<ChatMessageEdge>;
  readonly nodes: ReadonlyArray<ChatMessage>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type ChatMessageCreateInput = {
  readonly content: ReadonlyArray<Scalars['Json']>;
};

export type ChatMessageEdge = ConnectionEdge & {
  readonly __typename: 'ChatMessageEdge';
  readonly cursor: Scalars['String'];
  readonly node: ChatMessage;
};

export type ChatMessageWhereInput = {
  readonly chatId: Scalars['String'];
  readonly id?: InputMaybe<StringNullableFilter>;
};

export type ChatWhereInput = {
  readonly id?: InputMaybe<StringNullableFilter>;
  readonly user?: InputMaybe<UserWhereInput>;
};

export type ChatWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
};

export type CodeExample = Node & {
  readonly __typename: 'CodeExample';
  readonly author: User;
  readonly authorName: Scalars['String'];
  readonly comments: CommentConnection;
  readonly content: Scalars['String'];
  readonly createdAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly language: CodeLanguage;
  readonly languageColor: Scalars['String'];
  readonly primarySkill: Skill;
  readonly primarySkillId: Scalars['String'];
  readonly skills: SkillConnection;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly upvoters: UserConnection;
  readonly upvotes: Scalars['Int'];
  readonly urlSlug: Scalars['String'];
  /**
   * How the viwer has voted on this code exmaple.
   *
   * true: upvoted
   * false: downvoted
   * null: didn't vote
   */
  readonly viewerUpvote?: Maybe<Scalars['Boolean']>;
};


export type CodeExampleCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  where?: InputMaybe<CommentWhereInput>;
};


export type CodeExampleSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SkillOrderByInput>;
  where?: InputMaybe<SkillWhereInput>;
};


export type CodeExampleUpvotersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type CodeExampleAuthorNameUrlSlugCompoundUniqueInput = {
  readonly authorName: Scalars['String'];
  readonly urlSlug: Scalars['String'];
};

export type CodeExampleConnection = Connection & {
  readonly __typename: 'CodeExampleConnection';
  readonly edges: ReadonlyArray<CodeExampleEdge>;
  readonly nodes: ReadonlyArray<CodeExample>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type CodeExampleCreateInput = {
  readonly content: Scalars['String'];
  readonly description?: InputMaybe<Scalars['String']>;
  readonly language: CodeLanguage;
  readonly primarySkill?: InputMaybe<SkillWhereUniqueInput>;
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
  readonly title: Scalars['String'];
};

export type CodeExampleEdge = ConnectionEdge & {
  readonly __typename: 'CodeExampleEdge';
  readonly cursor: Scalars['String'];
  readonly node: CodeExample;
};

export type CodeExampleOrderByInput = {
  readonly authorName?: InputMaybe<SortOrder>;
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly language?: InputMaybe<SortOrder>;
  readonly title?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
};

export type CodeExampleTitleTakenError = MutationError & {
  readonly __typename: 'CodeExampleTitleTakenError';
  readonly message: Scalars['String'];
  readonly path: ReadonlyArray<Scalars['String']>;
};

export type CodeExampleUpdateInput = {
  readonly content?: InputMaybe<Scalars['String']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly language?: InputMaybe<CodeLanguage>;
  readonly primarySkill?: InputMaybe<SkillWhereUniqueInput>;
  readonly skills?: InputMaybe<ReadonlyArray<SkillWhereUniqueInput>>;
};

export type CodeExampleWhereInput = {
  readonly authorName?: InputMaybe<StringNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeNullableFilter>;
  readonly language?: InputMaybe<CodeLanguageNullableFilter>;
  readonly title?: InputMaybe<StringNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeNullableFilter>;
  readonly urlSlug?: InputMaybe<StringNullableFilter>;
};

export type CodeExampleWhereUniqueInput = {
  readonly authorName_urlSlug?: InputMaybe<CodeExampleAuthorNameUrlSlugCompoundUniqueInput>;
  readonly id?: InputMaybe<Scalars['String']>;
};

export enum CodeLanguage {
  Go = 'Go',
  GraphQl = 'GraphQL',
  Html = 'HTML',
  JavaScript = 'JavaScript',
  Python = 'Python',
  Scss = 'SCSS',
  Sql = 'SQL',
  TypeScript = 'TypeScript',
  Yaml = 'YAML'
}

export type CodeLanguageNullableFilter = {
  readonly equals?: InputMaybe<CodeLanguage>;
  readonly in?: InputMaybe<ReadonlyArray<CodeLanguage>>;
  readonly not?: InputMaybe<CodeLanguageNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<CodeLanguage>>;
};

export type Comment = Node & {
  readonly __typename: 'Comment';
  readonly author: User;
  readonly authorId: Scalars['String'];
  readonly codeExample?: Maybe<CodeExample>;
  readonly codeExampleId?: Maybe<Scalars['String']>;
  readonly content: ReadonlyArray<Scalars['Json']>;
  readonly createdAt: Scalars['DateTime'];
  readonly downvoters: UserConnection;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Comment>;
  readonly parentId?: Maybe<Scalars['String']>;
  readonly post?: Maybe<Post>;
  readonly postId?: Maybe<Scalars['String']>;
  readonly replies: CommentConnection;
  readonly updatedAt: Scalars['DateTime'];
  readonly upvoters: UserConnection;
  readonly upvotes: Scalars['Int'];
  /**
   * How the viewer has voted on this comment.
   *
   * true: upvoted
   * false: downvoted
   * null: didn't vote
   */
  readonly viewerUpvote?: Maybe<Scalars['Boolean']>;
};


export type CommentDownvotersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  where?: InputMaybe<CommentWhereInput>;
};


export type CommentUpvotersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type CommentCodeExampleInput = {
  readonly codeExample: CodeExampleWhereUniqueInput;
  readonly content: ReadonlyArray<Scalars['Json']>;
  readonly parent?: InputMaybe<CommentWhereUniqueInput>;
};

export type CommentCodeExamplePayload = MutationPayload & {
  readonly __typename: 'CommentCodeExamplePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

/** Relay-style connection for Comment types. */
export type CommentConnection = Connection & {
  readonly __typename: 'CommentConnection';
  readonly edges: ReadonlyArray<CommentEdge>;
  readonly nodes: ReadonlyArray<Comment>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

/** Relay-style edge for Comment types. */
export type CommentEdge = ConnectionEdge & {
  readonly __typename: 'CommentEdge';
  readonly cursor: Scalars['String'];
  readonly node: Comment;
};

export type CommentOrderByInput = {
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
};

export type CommentPostInput = {
  readonly content: ReadonlyArray<Scalars['Json']>;
  readonly parent?: InputMaybe<CommentWhereUniqueInput>;
  readonly post: PostWhereUniqueInput;
};

export type CommentPostPayload = MutationPayload & {
  readonly __typename: 'CommentPostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

export type CommentUpdateInput = {
  readonly content?: InputMaybe<ReadonlyArray<Scalars['Json']>>;
};

export type CommentWhereInput = {
  readonly author?: InputMaybe<UserWhereInput>;
  readonly authorId?: InputMaybe<StringNullableFilter>;
  readonly codeExample?: InputMaybe<CodeExampleWhereInput>;
  readonly codeExampleId?: InputMaybe<StringNullableFilter>;
  readonly createdAt?: InputMaybe<DateTimeNullableFilter>;
  readonly post?: InputMaybe<PostWhereInput>;
  readonly postId?: InputMaybe<StringNullableFilter>;
  readonly updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CommentWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
};

export type Connection = {
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type ConnectionEdge = {
  readonly cursor: Scalars['String'];
};

export type CreateChatInput = {
  readonly message?: InputMaybe<Scalars['Json']>;
  readonly users: UserWhereInput;
};

export type CreateChatPayload = MutationPayload & {
  readonly __typename: 'CreateChatPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Chat>;
  readonly viewer?: Maybe<User>;
};

export type CreateCodeExamplePayload = MutationPayload & {
  readonly __typename: 'CreateCodeExamplePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<CodeExample>;
  readonly viewer?: Maybe<User>;
};

export type CreateExperiencePayload = MutationPayload & {
  readonly __typename: 'CreateExperiencePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Experience>;
  readonly viewer?: Maybe<User>;
};

export type CreatePostPayload = MutationPayload & {
  readonly __typename: 'CreatePostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type CreateRepositoryPayload = MutationPayload & {
  readonly __typename: 'CreateRepositoryPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Repository>;
  readonly viewer?: Maybe<User>;
};

export type DateTimeNullableFilter = {
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
};

export type DeleteCodeExamplePayload = MutationPayload & {
  readonly __typename: 'DeleteCodeExamplePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<CodeExample>;
  readonly viewer?: Maybe<User>;
};

export type DeleteCommentPayload = MutationPayload & {
  readonly __typename: 'DeleteCommentPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

export type DeleteExperiencePayload = MutationPayload & {
  readonly __typename: 'DeleteExperiencePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Experience>;
  readonly viewer?: Maybe<User>;
};

export type DeleteFriendshipPayload = MutationPayload & {
  readonly __typename: 'DeleteFriendshipPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Friendship>;
  readonly viewer?: Maybe<User>;
};

export type DeletePostPayload = MutationPayload & {
  readonly __typename: 'DeletePostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type DeleteRepositoryPayload = MutationPayload & {
  readonly __typename: 'DeleteRepositoryPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Repository>;
  readonly viewer?: Maybe<User>;
};

export type DeleteUserPayload = MutationPayload & {
  readonly __typename: 'DeleteUserPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};

export type DownvoteCommentPayload = MutationPayload & {
  readonly __typename: 'DownvoteCommentPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

export type EnumExperienceTypeNullableFilter = {
  readonly equals?: InputMaybe<ExperienceType>;
  readonly in?: InputMaybe<ReadonlyArray<ExperienceType>>;
  readonly notIn?: InputMaybe<ReadonlyArray<ExperienceType>>;
};

export type Experience = Node & {
  readonly __typename: 'Experience';
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly highlights: ReadonlyArray<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly location?: Maybe<Scalars['String']>;
  readonly organization: Organization;
  readonly organizationName: Scalars['String'];
  readonly positionName: Scalars['String'];
  readonly startDate: Scalars['DateTime'];
  readonly type?: Maybe<ExperienceType>;
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** Relay-style connection for Experience types. */
export type ExperienceConnection = Connection & {
  readonly __typename: 'ExperienceConnection';
  readonly edges: ReadonlyArray<ExperienceEdge>;
  readonly nodes: ReadonlyArray<Experience>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type ExperienceCreateInput = {
  readonly endDate?: InputMaybe<Scalars['DateTime']>;
  readonly highlights?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly organizationName: Scalars['String'];
  readonly positionName: Scalars['String'];
  readonly startDate: Scalars['DateTime'];
  readonly type?: InputMaybe<ExperienceType>;
};

/** Relay-style edge for Experience types. */
export type ExperienceEdge = ConnectionEdge & {
  readonly __typename: 'ExperienceEdge';
  readonly cursor: Scalars['String'];
  readonly node: Experience;
};

export type ExperienceOrderByInput = {
  readonly endDate?: InputMaybe<SortOrder>;
  readonly startDate?: InputMaybe<SortOrder>;
};

export enum ExperienceType {
  Contract = 'Contract',
  FullTime = 'FullTime',
  Intern = 'Intern',
  OpenSource = 'OpenSource',
  PartTime = 'PartTime'
}

export type ExperienceUpdateInput = {
  readonly endDate?: InputMaybe<Scalars['DateTime']>;
  readonly highlights?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly organizationName?: InputMaybe<Scalars['String']>;
  readonly positionName?: InputMaybe<Scalars['String']>;
  readonly startDate?: InputMaybe<Scalars['DateTime']>;
  readonly type?: InputMaybe<ExperienceType>;
};

export type ExperienceWhereInput = {
  readonly organizationName?: InputMaybe<StringNullableFilter>;
  readonly positionName?: InputMaybe<StringNullableFilter>;
  readonly type?: InputMaybe<EnumExperienceTypeNullableFilter>;
  readonly user?: InputMaybe<UserWhereInput>;
  readonly userId?: InputMaybe<Scalars['String']>;
};

export type ExperienceWhereUniqueInput = {
  readonly id: Scalars['String'];
};

export type Follow = Node & {
  readonly __typename: 'Follow';
  readonly createdAt: Scalars['DateTime'];
  readonly follower: User;
  readonly following: Followable;
  readonly id: Scalars['ID'];
  readonly type: FollowType;
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type FollowConnection = Connection & {
  readonly __typename: 'FollowConnection';
  readonly edges: ReadonlyArray<FollowEdge>;
  readonly nodes: ReadonlyArray<Follow>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type FollowEdge = ConnectionEdge & {
  readonly __typename: 'FollowEdge';
  readonly cursor: Scalars['String'];
  readonly node: Follow;
};

export type FollowOrderByInput = {
  readonly type?: InputMaybe<SortOrder>;
};

export type FollowSkillPayload = MutationPayload & {
  readonly __typename: 'FollowSkillPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Follow>;
  readonly viewer?: Maybe<User>;
};

export enum FollowType {
  Skill = 'Skill',
  User = 'User'
}

export type FollowUserPayload = MutationPayload & {
  readonly __typename: 'FollowUserPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Follow>;
  readonly viewer?: Maybe<User>;
};

export type FollowWhereInput = {
  readonly skill?: InputMaybe<SkillWhereInput>;
  readonly type?: InputMaybe<FollowType>;
  readonly user?: InputMaybe<UserWhereInput>;
};

export type FollowWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
};

export type Followable = {
  readonly viewerFollowing: Scalars['Boolean'];
};

export type Friendship = Node & {
  readonly __typename: 'Friendship';
  readonly friender: User;
  readonly frienderId: Scalars['String'];
  readonly friending: User;
  readonly friendingId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly rejected: Scalars['Boolean'];
  readonly rejectedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt: Scalars['DateTime'];
};

export type FriendshipWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
};

export type GitHub = {
  readonly __typename: 'GitHub';
  readonly repository?: Maybe<GitHubRepository>;
  readonly repositoryOwner?: Maybe<GitHubRepositoryOwner>;
  readonly viewer?: Maybe<GitHubUser>;
};


export type GitHubRepositoryArgs = {
  where: GitHubRepositoryWhereUniqueInput;
};


export type GitHubRepositoryOwnerArgs = {
  where: GitHubRepositoryOwnerWhereUniqueInput;
};

export type GitHubLanguage = {
  readonly __typename: 'GitHubLanguage';
  readonly color?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
};

export type GitHubLicense = {
  readonly __typename: 'GitHubLicense';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly nickname?: Maybe<Scalars['String']>;
  readonly spdxId?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['URL']>;
};

export type GitHubOrganization = GitHubRepositoryOwner & {
  readonly __typename: 'GitHubOrganization';
  readonly avatarUrl: Scalars['URL'];
  readonly description?: Maybe<Scalars['String']>;
  readonly experiencers: UserConnection;
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly organization: Organization;
  readonly repositories: GitHubRepositoryConnection;
  readonly twitterUsername?: Maybe<Scalars['String']>;
  readonly url: Scalars['URL'];
  readonly websiteUrl?: Maybe<Scalars['String']>;
};


export type GitHubOrganizationExperiencersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type GitHubOrganizationRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type GitHubRepository = {
  readonly __typename: 'GitHubRepository';
  readonly description?: Maybe<Scalars['String']>;
  readonly forkCount: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly issueCount: Scalars['Int'];
  readonly licenseInfo?: Maybe<GitHubLicense>;
  readonly name: Scalars['String'];
  readonly owner: GitHubRepositoryOwner;
  readonly primaryLanguage?: Maybe<GitHubLanguage>;
  readonly pullRequestCount: Scalars['Int'];
  readonly pushedAt?: Maybe<Scalars['DateTime']>;
  readonly repository?: Maybe<Repository>;
  readonly skill?: Maybe<Skill>;
  readonly stargazerCount: Scalars['Int'];
  readonly url: Scalars['URL'];
};

export type GitHubRepositoryConnection = Connection & {
  readonly __typename: 'GitHubRepositoryConnection';
  readonly edges: ReadonlyArray<GitHubRepositoryEdge>;
  readonly nodes: ReadonlyArray<GitHubRepository>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type GitHubRepositoryEdge = ConnectionEdge & {
  readonly __typename: 'GitHubRepositoryEdge';
  readonly cursor: Scalars['String'];
  readonly node: GitHubRepository;
};

export type GitHubRepositoryOwner = {
  readonly avatarUrl: Scalars['URL'];
  readonly experiencers: UserConnection;
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly repositories: GitHubRepositoryConnection;
  readonly url: Scalars['URL'];
};


export type GitHubRepositoryOwnerExperiencersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type GitHubRepositoryOwnerRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type GitHubRepositoryOwnerWhereUniqueInput = {
  readonly login: Scalars['String'];
};

export type GitHubRepositoryWhereUniqueInput = {
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

/** Data for a user from that user's connected GitHub account. */
export type GitHubUser = GitHubRepositoryOwner & {
  readonly __typename: 'GitHubUser';
  readonly avatarUrl: Scalars['URL'];
  readonly bio?: Maybe<Scalars['String']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly contributionCalendar: GitHubUserContributionCalendar;
  readonly experiencers: UserConnection;
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly repositories: GitHubRepositoryConnection;
  readonly topLanguages: TopLanguages;
  readonly totalCommits: Scalars['Int'];
  readonly twitterUsername?: Maybe<Scalars['String']>;
  readonly url: Scalars['URL'];
  readonly user: User;
  readonly websiteUrl?: Maybe<Scalars['String']>;
};


/** Data for a user from that user's connected GitHub account. */
export type GitHubUserExperiencersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


/** Data for a user from that user's connected GitHub account. */
export type GitHubUserRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Data for a user from that user's connected GitHub account. */
export type GitHubUserTotalCommitsArgs = {
  where?: InputMaybe<GitHubUserTotalCommitsWhereInput>;
};

export type GitHubUserContributionCalendar = {
  readonly __typename: 'GitHubUserContributionCalendar';
  readonly totalContributions: Scalars['Int'];
  readonly weeks: ReadonlyArray<GitHubUserContributionCalendarWeek>;
};

export type GitHubUserContributionCalendarDay = {
  readonly __typename: 'GitHubUserContributionCalendarDay';
  readonly contributionCount: Scalars['Int'];
  readonly contributionLevel: GitHubUserContributionLevel;
  readonly date: Scalars['DateTime'];
  readonly weekday: Scalars['Int'];
};

export type GitHubUserContributionCalendarWeek = {
  readonly __typename: 'GitHubUserContributionCalendarWeek';
  readonly contributionDays: ReadonlyArray<GitHubUserContributionCalendarDay>;
  readonly firstDay: Scalars['DateTime'];
};

export enum GitHubUserContributionLevel {
  FirstQuartile = 'FirstQuartile',
  FourthQuartile = 'FourthQuartile',
  None = 'None',
  SecondQuartile = 'SecondQuartile',
  ThirdQuartile = 'ThirdQuartile'
}

export type GitHubUserTotalCommitsWhereInput = {
  readonly createdAt?: InputMaybe<DateTimeNullableFilter>;
};

export type InvalidSkillError = MutationError & {
  readonly __typename: 'InvalidSkillError';
  readonly message: Scalars['String'];
  readonly path: ReadonlyArray<Scalars['String']>;
};

export type InviteToChatInput = {
  readonly users: UserWhereInput;
};

export type InviteToChatPayload = MutationPayload & {
  readonly __typename: 'InviteToChatPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Chat>;
  readonly viewer?: Maybe<User>;
};

export type LeaveChatPayload = MutationPayload & {
  readonly __typename: 'LeaveChatPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Chat>;
  readonly viewer?: Maybe<User>;
};

/** Root mutation type */
export type Mutation = {
  readonly __typename: 'Mutation';
  readonly acceptFriendship: AcceptFriendshipPayload;
  readonly addDesiredSkill: AddDesiredSkillMutationPayload;
  readonly addSkill: AddSkillMutationPayload;
  readonly commentCodeExample: CommentCodeExamplePayload;
  readonly commentPost: CommentPostPayload;
  readonly createChat: CreateChatPayload;
  readonly createCodeExample: CreateCodeExamplePayload;
  readonly createExperience: CreateExperiencePayload;
  /** Creates a new draft if the user doesn't have a draft pending to be published already */
  readonly createPost: CreatePostPayload;
  readonly createRepository: CreateRepositoryPayload;
  readonly deleteCodeExample: DeleteCodeExamplePayload;
  readonly deleteComment: DeleteCommentPayload;
  /** Users can delete their own experiences. */
  readonly deleteExperience: DeleteExperiencePayload;
  readonly deleteFriendship: DeleteFriendshipPayload;
  /** Users can delete their own posts. */
  readonly deletePost: DeletePostPayload;
  readonly deleteRepository: DeleteRepositoryPayload;
  readonly deleteUser: DeleteUserPayload;
  readonly followSkill: FollowUserPayload;
  readonly followUser: FollowUserPayload;
  readonly inviteToChat: InviteToChatPayload;
  readonly leaveChat: LeaveChatPayload;
  readonly ok: Scalars['Boolean'];
  readonly openNotifications: OpenNotificationsPayload;
  readonly publishPost: PublishPostPayload;
  readonly rejectFriendship: RejectFriendshipPayload;
  readonly removeDesiredSkill: RemoveDesiredSkillMutationPayload;
  readonly removePostThumbnail: RemovePostThumbnailPayload;
  readonly removeSkill: RemoveSkillMutationPayload;
  readonly requestFriendship: RequestFriendshipPayload;
  readonly sendChatMessage: SendChatMessagePayload;
  readonly unfollowSkill: UnfollowSkillPayload;
  readonly unfollowUser: UnfollowUserPayload;
  readonly unvoteCodeExample: UnvoteCodeExamplePayload;
  readonly unvoteComment: UnvoteCommentPayload;
  readonly unvotePost: UnvotePostPayload;
  readonly updateCodeExample: UpdateCodeExamplePayload;
  readonly updateComment: UpdateCommentPayload;
  readonly updateDesiredSkills: UpdateDesiredSkillsPayload;
  readonly updateExperience: UpdateExperiencePayload;
  readonly updatePost: UpdatePostPayload;
  readonly updatePostDraft: UpdatePostDraftPayload;
  readonly updateRepository: UpdateRepositoryPayload;
  readonly updateSkills: UpdateSkillsPayload;
  readonly updateUserFromGitHub: UpdateUserFromGitHubPayload;
  readonly uploadPostImage: UploadPostImagePayload;
  readonly upvoteCodeExample: UpvoteCodeExamplePayload;
  readonly upvoteComment: UpvoteCommentPayload;
  readonly upvotePost: UpvotePostPayload;
  readonly viewPost: ViewPostPayload;
  readonly viewer?: Maybe<User>;
};


/** Root mutation type */
export type MutationAcceptFriendshipArgs = {
  where: FriendshipWhereUniqueInput;
};


/** Root mutation type */
export type MutationAddDesiredSkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root mutation type */
export type MutationAddSkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root mutation type */
export type MutationCommentCodeExampleArgs = {
  data: CommentCodeExampleInput;
};


/** Root mutation type */
export type MutationCommentPostArgs = {
  data: CommentPostInput;
};


/** Root mutation type */
export type MutationCreateChatArgs = {
  data: CreateChatInput;
};


/** Root mutation type */
export type MutationCreateCodeExampleArgs = {
  data: CodeExampleCreateInput;
};


/** Root mutation type */
export type MutationCreateExperienceArgs = {
  data: ExperienceCreateInput;
};


/** Root mutation type */
export type MutationCreateRepositoryArgs = {
  data: RepositoryCreateInput;
};


/** Root mutation type */
export type MutationDeleteCodeExampleArgs = {
  where: CodeExampleWhereUniqueInput;
};


/** Root mutation type */
export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


/** Root mutation type */
export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


/** Root mutation type */
export type MutationDeleteFriendshipArgs = {
  where: UserWhereUniqueInput;
};


/** Root mutation type */
export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationDeleteRepositoryArgs = {
  where: RepositoryWhereUniqueInput;
};


/** Root mutation type */
export type MutationFollowSkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root mutation type */
export type MutationFollowUserArgs = {
  where: UserWhereUniqueInput;
};


/** Root mutation type */
export type MutationInviteToChatArgs = {
  data: InviteToChatInput;
  where: ChatWhereUniqueInput;
};


/** Root mutation type */
export type MutationLeaveChatArgs = {
  where: ChatWhereUniqueInput;
};


/** Root mutation type */
export type MutationPublishPostArgs = {
  data: PostPublishInput;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationRejectFriendshipArgs = {
  where: UserWhereUniqueInput;
};


/** Root mutation type */
export type MutationRemoveDesiredSkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root mutation type */
export type MutationRemovePostThumbnailArgs = {
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationRemoveSkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root mutation type */
export type MutationRequestFriendshipArgs = {
  where: UserWhereUniqueInput;
};


/** Root mutation type */
export type MutationSendChatMessageArgs = {
  data: ChatMessageCreateInput;
  where: ChatWhereUniqueInput;
};


/** Root mutation type */
export type MutationUnfollowSkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root mutation type */
export type MutationUnfollowUserArgs = {
  where: UserWhereUniqueInput;
};


/** Root mutation type */
export type MutationUnvoteCodeExampleArgs = {
  where: CodeExampleWhereUniqueInput;
};


/** Root mutation type */
export type MutationUnvoteCommentArgs = {
  where: CommentWhereUniqueInput;
};


/** Root mutation type */
export type MutationUnvotePostArgs = {
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdateCodeExampleArgs = {
  data: CodeExampleUpdateInput;
  where: CodeExampleWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdateDesiredSkillsArgs = {
  data: UpdateDesiredSkillsInput;
};


/** Root mutation type */
export type MutationUpdateExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdatePostDraftArgs = {
  data: PostDraftUpdateInput;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdateRepositoryArgs = {
  data: RepositoryUpdateInput;
  where: RepositoryWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpdateSkillsArgs = {
  data: UpdateSkillsInput;
};


/** Root mutation type */
export type MutationUploadPostImageArgs = {
  data: UploadPostImageInput;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpvoteCodeExampleArgs = {
  data?: InputMaybe<UpvoteCodeExampleInput>;
  where: CodeExampleWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpvoteCommentArgs = {
  data?: InputMaybe<UpvoteCommentInput>;
  where: CommentWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpvotePostArgs = {
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationViewPostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationError = {
  readonly message: Scalars['String'];
  readonly path: ReadonlyArray<Scalars['String']>;
};

export type MutationPayload = {
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Node>;
  readonly viewer?: Maybe<User>;
};

export type Node = {
  readonly id: Scalars['ID'];
};

export type Notification = {
  readonly id: Scalars['ID'];
  readonly opened: Scalars['Boolean'];
  readonly type: NotificationType;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type NotificationChatMessageReceived = Node & Notification & {
  readonly __typename: 'NotificationChatMessageReceived';
  readonly chat: Chat;
  readonly chatId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly opened: Scalars['Boolean'];
  readonly type: NotificationType;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type NotificationCodeExampleCommented = Node & Notification & {
  readonly __typename: 'NotificationCodeExampleCommented';
  readonly codeExample: CodeExample;
  readonly codeExampleId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly opened: Scalars['Boolean'];
  readonly type: NotificationType;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type NotificationConnection = Connection & {
  readonly __typename: 'NotificationConnection';
  readonly edges: ReadonlyArray<NotificationEdge>;
  readonly nodes: ReadonlyArray<Notification>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type NotificationEdge = ConnectionEdge & {
  readonly __typename: 'NotificationEdge';
  readonly cursor: Scalars['String'];
  readonly node: Notification;
};

export type NotificationFriendshipAccepted = Node & Notification & {
  readonly __typename: 'NotificationFriendshipAccepted';
  readonly friendship: Friendship;
  readonly friendshipId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly opened: Scalars['Boolean'];
  readonly type: NotificationType;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type NotificationPostCommented = Node & Notification & {
  readonly __typename: 'NotificationPostCommented';
  readonly id: Scalars['ID'];
  readonly opened: Scalars['Boolean'];
  readonly post: Post;
  readonly postId: Scalars['String'];
  readonly type: NotificationType;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export enum NotificationType {
  ChatMessageReceived = 'ChatMessageReceived',
  CodeExampleCommented = 'CodeExampleCommented',
  FriendshipAccepted = 'FriendshipAccepted',
  PostCommented = 'PostCommented'
}

export type NotificationsWhereInput = {
  readonly opened?: InputMaybe<Scalars['Boolean']>;
  readonly type?: InputMaybe<ReadonlyArray<NotificationType>>;
};

export type OpenNotificationsPayload = MutationPayload & {
  readonly __typename: 'OpenNotificationsPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};

export type OrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type Organization = Node & {
  readonly __typename: 'Organization';
  readonly experiences: ReadonlyArray<Experience>;
  readonly github: GitHubOrganization;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
};

/** Page info for relay-style pagination connections. */
export type PageInfo = {
  readonly __typename: 'PageInfo';
  readonly endCursor?: Maybe<Scalars['String']>;
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly startCursor?: Maybe<Scalars['String']>;
};

export type Post = Node & {
  readonly __typename: 'Post';
  readonly author: User;
  readonly authorName: Scalars['String'];
  readonly comments: CommentConnection;
  readonly content: ReadonlyArray<Scalars['Json']>;
  readonly createdAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  readonly downvoters: UserConnection;
  readonly id: Scalars['ID'];
  readonly images: ReadonlyArray<PostImage>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** Estimated time in minutes it will take to read this post. Minimum 1 minute. */
  readonly readTime: Scalars['Int'];
  readonly skills: SkillConnection;
  readonly thumbnailUrl?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly upvoters: UserConnection;
  readonly upvotes: Scalars['Int'];
  readonly urlSlug: Scalars['String'];
  /**
   * How the viewer has voted on this post.
   *
   * true: upvoted
   * false: downvoted
   * null: didn't vote
   */
  readonly viewerUpvote?: Maybe<Scalars['Boolean']>;
  readonly viewers: UserConnection;
};


export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  where?: InputMaybe<CommentWhereInput>;
};


export type PostDownvotersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type PostSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SkillWhereInput>;
};


export type PostUpvotersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type PostViewersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type PostAuthorNameUrlSlugCompoundUniqueInput = {
  readonly authorName: Scalars['String'];
  readonly urlSlug: Scalars['String'];
};

/** Relay-style connection for Post types. */
export type PostConnection = Connection & {
  readonly __typename: 'PostConnection';
  readonly edges: ReadonlyArray<PostEdge>;
  readonly nodes: ReadonlyArray<Post>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type PostDraftUpdateInput = {
  readonly content?: InputMaybe<ReadonlyArray<Scalars['Json']>>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly skills?: InputMaybe<ReadonlyArray<SkillWhereUniqueInput>>;
  readonly thumbnailUrl?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

/** Relay-style edge for Post types. */
export type PostEdge = ConnectionEdge & {
  readonly __typename: 'PostEdge';
  readonly cursor: Scalars['String'];
  readonly node: Post;
};

export type PostImage = Node & {
  readonly __typename: 'PostImage';
  readonly id: Scalars['ID'];
  readonly post: Post;
  readonly postId: Scalars['String'];
  readonly url: Scalars['String'];
};

export type PostOrderByInput = {
  readonly publishedAt?: InputMaybe<SortOrder>;
  readonly upvoters?: InputMaybe<OrderByRelationAggregateInput>;
};

export type PostPublishInput = {
  readonly content: ReadonlyArray<Scalars['Json']>;
  readonly description: Scalars['String'];
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
  readonly thumbnailUrl?: InputMaybe<Scalars['String']>;
  readonly title: Scalars['String'];
};

export type PostUpdateInput = {
  readonly content?: InputMaybe<ReadonlyArray<Scalars['Json']>>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly skills?: InputMaybe<ReadonlyArray<SkillWhereUniqueInput>>;
  readonly thumbnailUrl?: InputMaybe<Scalars['String']>;
};

export type PostWhereInput = {
  readonly author?: InputMaybe<UserWhereInput>;
  readonly authorName?: InputMaybe<StringNullableFilter>;
  readonly publishedAt?: InputMaybe<DateTimeNullableFilter>;
  readonly skills?: InputMaybe<SkillListRelationFilter>;
  readonly urlSlug?: InputMaybe<StringNullableFilter>;
};

export type PostWhereUniqueInput = {
  readonly authorName_urlSlug?: InputMaybe<PostAuthorNameUrlSlugCompoundUniqueInput>;
  readonly id?: InputMaybe<Scalars['String']>;
};

export type PublishPostPayload = MutationPayload & {
  readonly __typename: 'PublishPostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

/** Root query type */
export type Query = {
  readonly __typename: 'Query';
  readonly activityFeed: UserActivityConnection;
  readonly chat?: Maybe<Chat>;
  /** This is to update a subscribed chat with new messages when received. */
  readonly chatMessages: ReadonlyArray<ChatMessage>;
  readonly codeExample?: Maybe<CodeExample>;
  readonly codeExamples: CodeExampleConnection;
  readonly comment?: Maybe<Comment>;
  readonly comments: CommentConnection;
  readonly experiences: ExperienceConnection;
  /** Relay-style connection on Skill types. */
  readonly followableSkills: SkillConnection;
  readonly github: GitHub;
  readonly ok: Scalars['Boolean'];
  /** A user-created post. */
  readonly post?: Maybe<Post>;
  readonly postDraft?: Maybe<Post>;
  /** Relay-style connection on Post types. */
  readonly posts: PostConnection;
  readonly repositories: RepositoryConnection;
  readonly skill?: Maybe<Skill>;
  /** Relay-style connection on Skill types. */
  readonly skills: SkillConnection;
  readonly suggestFriends: UserConnection;
  readonly suggestOrganizations: SuggestOrganizations;
  readonly suggestRepositories: SuggestRepositories;
  readonly suggestSkillOwners: SuggestSkillOwners;
  readonly suggestSkills: SuggestSkills;
  readonly user?: Maybe<User>;
  readonly users: UserConnection;
  readonly viewer?: Maybe<User>;
};


/** Root query type */
export type QueryActivityFeedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


/** Root query type */
export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};


/** Root query type */
export type QueryChatMessagesArgs = {
  where: ChatMessageWhereInput;
};


/** Root query type */
export type QueryCodeExampleArgs = {
  where: CodeExampleWhereUniqueInput;
};


/** Root query type */
export type QueryCodeExamplesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<CodeExampleOrderByInput>>;
  where: CodeExampleWhereInput;
};


/** Root query type */
export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


/** Root query type */
export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  where?: InputMaybe<CommentWhereInput>;
};


/** Root query type */
export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<ExperienceOrderByInput>>;
  where?: InputMaybe<ExperienceWhereInput>;
};


/** Root query type */
export type QueryFollowableSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput>>;
  where?: InputMaybe<SkillWhereInput>;
};


/** Root query type */
export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


/** Root query type */
export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PostOrderByInput>>;
  where?: InputMaybe<PostWhereInput>;
};


/** Root query type */
export type QueryRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RepositoryWhereInput>;
};


/** Root query type */
export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};


/** Root query type */
export type QuerySkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput>>;
  where?: InputMaybe<SkillWhereInput>;
};


/** Root query type */
export type QuerySuggestFriendsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestFriendsWhereInput;
};


/** Root query type */
export type QuerySuggestOrganizationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestOrganizationsWhereInput;
};


/** Root query type */
export type QuerySuggestRepositoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestRepositoriesWhereInput;
};


/** Root query type */
export type QuerySuggestSkillOwnersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestSkillOwnersWhereInput;
};


/** Root query type */
export type QuerySuggestSkillsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestSkillsWhereInput;
};


/** Root query type */
export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


/** Root query type */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByInput>>;
  where?: InputMaybe<UserWhereInput>;
};

export type RejectFriendshipPayload = MutationPayload & {
  readonly __typename: 'RejectFriendshipPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Friendship>;
  readonly viewer?: Maybe<User>;
};

export type RemoveDesiredSkillMutationPayload = MutationPayload & {
  readonly __typename: 'RemoveDesiredSkillMutationPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Skill>;
  readonly viewer?: Maybe<User>;
};

export type RemovePostThumbnailPayload = MutationPayload & {
  readonly __typename: 'RemovePostThumbnailPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type RemoveSkillMutationPayload = MutationPayload & {
  readonly __typename: 'RemoveSkillMutationPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Skill>;
  readonly viewer?: Maybe<User>;
};

export type Repository = Node & WithGitHubRepository & {
  readonly __typename: 'Repository';
  readonly github: GitHubRepository;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly skills: ReadonlyArray<Skill>;
  readonly user: User;
};

/** Relay-style connection for Repository types. */
export type RepositoryConnection = Connection & {
  readonly __typename: 'RepositoryConnection';
  readonly edges: ReadonlyArray<RepositoryEdge>;
  readonly nodes: ReadonlyArray<Repository>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type RepositoryCreateInput = {
  readonly name: Scalars['String'];
};

/** Relay-style edge for Repository type */
export type RepositoryEdge = ConnectionEdge & {
  readonly __typename: 'RepositoryEdge';
  readonly cursor: Scalars['String'];
  readonly node: Repository;
};

export type RepositoryNameOwnerCompoundUniqueInput = {
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type RepositoryUpdateInput = {
  readonly skills?: InputMaybe<ReadonlyArray<SkillWhereUniqueInput>>;
};

export type RepositoryWhereInput = {
  readonly name?: InputMaybe<StringNullableFilter>;
  readonly owner?: InputMaybe<StringNullableFilter>;
  readonly user?: InputMaybe<UserWhereInput>;
};

export type RepositoryWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly name_owner?: InputMaybe<RepositoryNameOwnerCompoundUniqueInput>;
};

export type RequestFriendshipPayload = MutationPayload & {
  readonly __typename: 'RequestFriendshipPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Friendship>;
  readonly viewer?: Maybe<User>;
};

export type SendChatMessagePayload = MutationPayload & {
  readonly __typename: 'SendChatMessagePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<ChatMessage>;
  readonly viewer?: Maybe<User>;
};

export type Skill = Followable & Node & WithGitHubRepository & {
  readonly __typename: 'Skill';
  readonly codeExamples: CodeExampleConnection;
  readonly desiringUsers: UserConnection;
  readonly followers: UserConnection;
  readonly github: GitHubRepository;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly posts: PostConnection;
  readonly users: UserConnection;
  readonly viewerDesiredSkill: Scalars['Boolean'];
  readonly viewerFollowing: Scalars['Boolean'];
  readonly viewerSkill: Scalars['Boolean'];
};


export type SkillCodeExamplesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<CodeExampleOrderByInput>>;
  where?: InputMaybe<CodeExampleWhereInput>;
};


export type SkillDesiringUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type SkillFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type SkillPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type SkillUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type SkillConnection = Connection & {
  readonly __typename: 'SkillConnection';
  readonly edges: ReadonlyArray<SkillEdge>;
  readonly nodes: ReadonlyArray<Skill>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type SkillEdge = ConnectionEdge & {
  readonly __typename: 'SkillEdge';
  readonly cursor: Scalars['String'];
  readonly node: Skill;
};

export type SkillListRelationFilter = {
  readonly every?: InputMaybe<SkillWhereInput>;
  readonly none?: InputMaybe<SkillWhereInput>;
  readonly some?: InputMaybe<SkillWhereInput>;
};

export type SkillNameOwnerCompoundUniqueInput = {
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type SkillOrderByInput = {
  readonly desiringUsers?: InputMaybe<OrderByRelationAggregateInput>;
  readonly name?: InputMaybe<SortOrder>;
  readonly owner?: InputMaybe<SortOrder>;
  readonly users?: InputMaybe<OrderByRelationAggregateInput>;
};

export type SkillWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<SkillWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<SkillWhereInput>>;
  readonly name?: InputMaybe<StringNullableFilter>;
  readonly owner?: InputMaybe<StringNullableFilter>;
};

export type SkillWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly name_owner?: InputMaybe<SkillNameOwnerCompoundUniqueInput>;
};

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type StringNullableFilter = {
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly equals?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly not?: InputMaybe<StringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
};

export type SuggestFriendsWeightsInput = {
  readonly desiredSkillsOverlap?: InputMaybe<Scalars['Float']>;
  readonly skillsOverlap?: InputMaybe<Scalars['Float']>;
};

export type SuggestFriendsWhereInput = {
  /**
   * The min % overlap of suggested users' skills to the viewer's desired-skills.
   *
   * This is clamped to [0, 1], and is 0 by default.
   */
  readonly desiredSkillsThreshold?: InputMaybe<Scalars['Float']>;
  /**
   * Each suggested user's scoring metric (for ordering), can be randomly reduced by a % which is the jitter. The larger the jitter, the more random the results can be.
   *
   * This is clamped to [0, 1], and is 0.15 by default.
   */
  readonly jitter?: InputMaybe<Scalars['Float']>;
  /**
   * Seeds the jitter, so that pagination will be deterministic on the same seed.
   *
   * If not provided, the results will be non-deterministically random.
   */
  readonly jitterSeed?: InputMaybe<Scalars['DateTime']>;
  /** Filters suggested users by their known skills. */
  readonly skills?: InputMaybe<SkillWhereInput>;
  /**
   * The min % overlap of suggested users' skills to the viewer's skills.
   *
   * This is clamped to [0, 1], and is 0 by default.
   */
  readonly skillsThreshold?: InputMaybe<Scalars['Float']>;
  readonly weights?: InputMaybe<SuggestFriendsWeightsInput>;
};

export type SuggestOrganizations = {
  readonly __typename: 'SuggestOrganizations';
  readonly nodes: ReadonlyArray<GitHubOrganization>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestOrganizationsWhereInput = {
  readonly name: Scalars['String'];
};

export type SuggestRepositories = {
  readonly __typename: 'SuggestRepositories';
  readonly nodes: ReadonlyArray<GitHubRepository>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestRepositoriesWhereInput = {
  readonly name: Scalars['String'];
};

export type SuggestSkillOwners = {
  readonly __typename: 'SuggestSkillOwners';
  readonly nodes: ReadonlyArray<GitHubRepositoryOwner>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestSkillOwnersWhereInput = {
  readonly name: Scalars['String'];
};

export type SuggestSkills = {
  readonly __typename: 'SuggestSkills';
  readonly nodes: ReadonlyArray<GitHubRepository>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestSkillsWhereInput = {
  readonly name: Scalars['String'];
  readonly owner?: InputMaybe<Scalars['String']>;
};

/** One of the most used languages by a user */
export type TopLanguage = {
  readonly __typename: 'TopLanguage';
  /** The color of the language, defined by GitHub */
  readonly color: Scalars['String'];
  /** The name of the language. */
  readonly name: Scalars['String'];
  /** The sum of number of bytes written across all owned repositories in this language. */
  readonly size: Scalars['Int'];
};

/** The most used languages by a user, determined by number of bytes written to repositories owned by the user on GitHub. */
export type TopLanguages = {
  readonly __typename: 'TopLanguages';
  readonly nodes: ReadonlyArray<TopLanguage>;
  /** The total number of languages across all owned repositories. */
  readonly totalCount: Scalars['Int'];
  /** The total number of bytes written across all owned repositories across all languages. */
  readonly totalSize: Scalars['Int'];
};

export type UnfollowSkillPayload = MutationPayload & {
  readonly __typename: 'UnfollowSkillPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Follow>;
  readonly viewer?: Maybe<User>;
};

export type UnfollowUserPayload = MutationPayload & {
  readonly __typename: 'UnfollowUserPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Follow>;
  readonly viewer?: Maybe<User>;
};

export type UnvoteCodeExamplePayload = MutationPayload & {
  readonly __typename: 'UnvoteCodeExamplePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<CodeExample>;
  readonly viewer?: Maybe<User>;
};

export type UnvoteCommentPayload = MutationPayload & {
  readonly __typename: 'UnvoteCommentPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

export type UnvotePostPayload = MutationPayload & {
  readonly __typename: 'UnvotePostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type UpdateCodeExamplePayload = MutationPayload & {
  readonly __typename: 'UpdateCodeExamplePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<CodeExample>;
  readonly viewer?: Maybe<User>;
};

export type UpdateCommentPayload = MutationPayload & {
  readonly __typename: 'UpdateCommentPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

export type UpdateDesiredSkillsInput = {
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
};

export type UpdateDesiredSkillsPayload = MutationPayload & {
  readonly __typename: 'UpdateDesiredSkillsPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};

export type UpdateExperiencePayload = MutationPayload & {
  readonly __typename: 'UpdateExperiencePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Experience>;
  readonly viewer?: Maybe<User>;
};

export type UpdatePostDraftPayload = MutationPayload & {
  readonly __typename: 'UpdatePostDraftPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type UpdatePostPayload = MutationPayload & {
  readonly __typename: 'UpdatePostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type UpdateRepositoryPayload = MutationPayload & {
  readonly __typename: 'UpdateRepositoryPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Repository>;
  readonly viewer?: Maybe<User>;
};

export type UpdateSkillsInput = {
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
};

export type UpdateSkillsPayload = MutationPayload & {
  readonly __typename: 'UpdateSkillsPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};

export type UpdateUserFromGitHubPayload = MutationPayload & {
  readonly __typename: 'UpdateUserFromGitHubPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};

export type UploadPostImageInput = {
  /** The file of the image to be uploaded */
  readonly image: Scalars['Upload'];
};

export type UploadPostImagePayload = MutationPayload & {
  readonly __typename: 'UploadPostImagePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<PostImage>;
  readonly viewer?: Maybe<User>;
};

export type UpvoteCodeExampleInput = {
  readonly upvote?: InputMaybe<Scalars['Boolean']>;
};

export type UpvoteCodeExamplePayload = MutationPayload & {
  readonly __typename: 'UpvoteCodeExamplePayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<CodeExample>;
  readonly viewer?: Maybe<User>;
};

export type UpvoteCommentInput = {
  readonly upvote?: InputMaybe<Scalars['Boolean']>;
};

export type UpvoteCommentPayload = MutationPayload & {
  readonly __typename: 'UpvoteCommentPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Comment>;
  readonly viewer?: Maybe<User>;
};

export type UpvotePostPayload = MutationPayload & {
  readonly __typename: 'UpvotePostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type User = Followable & Node & {
  readonly __typename: 'User';
  readonly activities: UserActivityConnection;
  readonly activityFeed: UserActivityConnection;
  readonly chats: ChatConnection;
  readonly codeExamples: CodeExampleConnection;
  readonly commentUpvotes: Scalars['Int'];
  readonly comments: CommentConnection;
  readonly createdAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  readonly desiredSkills: SkillConnection;
  readonly email: Scalars['String'];
  readonly experiences: ExperienceConnection;
  readonly followers: UserConnection;
  readonly following: FollowConnection;
  readonly friendRequestsReceived: UserConnection;
  readonly friendRequestsSent: UserConnection;
  readonly friends: UserConnection;
  readonly github: GitHubUser;
  readonly githubUrl: Scalars['URL'];
  readonly id: Scalars['ID'];
  readonly image?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly notifications: NotificationConnection;
  readonly notificationsLastOpenedAt: Scalars['DateTime'];
  readonly postUpvotes: Scalars['Int'];
  readonly postViews: Scalars['Int'];
  readonly posts: PostConnection;
  readonly repositories: RepositoryConnection;
  readonly skills: SkillConnection;
  readonly trophies: UserTrophies;
  /** Code examples this user has upvoted */
  readonly upvotedCodeExamples: CodeExampleConnection;
  /** Posts this user has upvoted */
  readonly upvotedPosts: PostConnection;
  readonly viewerCanFriend: Scalars['Boolean'];
  readonly viewerFollowing: Scalars['Boolean'];
  readonly viewerFriended: Scalars['Boolean'];
  readonly viewerIsFriend: Scalars['Boolean'];
};


export type UserActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type UserActivityFeedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserActivityWhereInput>;
};


export type UserChatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type UserCodeExamplesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<CodeExampleOrderByInput>>;
  where?: InputMaybe<CodeExampleWhereInput>;
};


export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  where?: InputMaybe<CommentWhereInput>;
};


export type UserDesiredSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput>>;
  where?: InputMaybe<SkillWhereInput>;
};


export type UserExperiencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type UserFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FollowOrderByInput>;
  where?: InputMaybe<FollowWhereInput>;
};


export type UserFriendRequestsReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type UserFriendRequestsSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type UserFriendsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type UserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationsWhereInput>;
};


export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type UserRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RepositoryWhereInput>;
};


export type UserSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput>>;
  where?: InputMaybe<SkillWhereInput>;
};


export type UserUpvotedCodeExamplesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<CodeExampleOrderByInput>>;
  where?: InputMaybe<CodeExampleWhereInput>;
};


export type UserUpvotedPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};

export type UserActivity = {
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityCommentCodeExample = Node & UserActivity & {
  readonly __typename: 'UserActivityCommentCodeExample';
  readonly comment: Comment;
  readonly commentId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityCommentPost = Node & UserActivity & {
  readonly __typename: 'UserActivityCommentPost';
  readonly comment: Comment;
  readonly commentId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityConnection = Connection & {
  readonly __typename: 'UserActivityConnection';
  readonly edges: ReadonlyArray<UserActivityEdge>;
  readonly nodes: ReadonlyArray<UserActivity>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type UserActivityCreateCodeExample = Node & UserActivity & {
  readonly __typename: 'UserActivityCreateCodeExample';
  readonly codeExample: CodeExample;
  readonly codeExampleId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityEdge = ConnectionEdge & {
  readonly __typename: 'UserActivityEdge';
  readonly cursor: Scalars['String'];
  readonly node: UserActivity;
};

export type UserActivityFollowSkill = Node & UserActivity & {
  readonly __typename: 'UserActivityFollowSkill';
  readonly follow: Follow;
  readonly followId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityFollowUser = Node & UserActivity & {
  readonly __typename: 'UserActivityFollowUser';
  readonly follow: Follow;
  readonly followId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityFriendAcceptUser = Node & UserActivity & {
  readonly __typename: 'UserActivityFriendAcceptUser';
  readonly friendship: Friendship;
  readonly friendshipId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityJoined = Node & UserActivity & {
  readonly __typename: 'UserActivityJoined';
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityPublishPost = Node & UserActivity & {
  readonly __typename: 'UserActivityPublishPost';
  readonly id: Scalars['ID'];
  readonly post: Post;
  readonly postId: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export enum UserActivityType {
  CommentCodeExample = 'CommentCodeExample',
  CommentPost = 'CommentPost',
  CreateCodeExample = 'CreateCodeExample',
  FollowSkill = 'FollowSkill',
  FollowUser = 'FollowUser',
  FriendAcceptUser = 'FriendAcceptUser',
  Joined = 'Joined',
  PublishPost = 'PublishPost',
  UpvoteCodeExample = 'UpvoteCodeExample',
  UpvotePost = 'UpvotePost'
}

export type UserActivityUpvoteCodeExample = Node & UserActivity & {
  readonly __typename: 'UserActivityUpvoteCodeExample';
  readonly codeExample: CodeExample;
  readonly codeExampleId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityUpvotePost = Node & UserActivity & {
  readonly __typename: 'UserActivityUpvotePost';
  readonly id: Scalars['ID'];
  readonly post: Post;
  readonly postId: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityWhereInput = {
  readonly type?: InputMaybe<UserActivityType>;
  readonly user?: InputMaybe<UserWhereInput>;
};

/** Relay-style connection for User types. */
export type UserConnection = Connection & {
  readonly __typename: 'UserConnection';
  readonly edges: ReadonlyArray<UserEdge>;
  readonly nodes: ReadonlyArray<User>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

/** Relay-style edge for User types. */
export type UserEdge = ConnectionEdge & {
  readonly __typename: 'UserEdge';
  readonly cursor: Scalars['String'];
  readonly node: User;
};

export type UserOrderByInput = {
  readonly createdAt?: InputMaybe<SortOrder>;
  readonly updatedAt?: InputMaybe<SortOrder>;
};

export type UserTrophies = {
  readonly __typename: 'UserTrophies';
  /** The id of the user who these trophies belong to */
  readonly id: Scalars['ID'];
  readonly totalFollowers: Scalars['Int'];
  readonly totalPostViews: Scalars['Int'];
  readonly totalSkills: Scalars['Int'];
  readonly totalUpvotes: Scalars['Int'];
  readonly totalYearlyCommits: Scalars['Int'];
  readonly totalYearlyPosts: Scalars['Int'];
};

export type UserWhereInput = {
  readonly id?: InputMaybe<StringNullableFilter>;
  readonly name?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type ViewPostPayload = MutationPayload & {
  readonly __typename: 'ViewPostPayload';
  readonly errors?: Maybe<ReadonlyArray<MutationError>>;
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type WithGitHubRepository = {
  readonly github: GitHubRepository;
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type ActivityFeedFollowableSkillCardSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string } }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number } };

export type ChatCardChatFragment = { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } };

export type ChatRoomInviteFormChatFragment = { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly name: string }> } };

export type ChatRoomMessageChatMessageFragment = { readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type CodeExampleCardCodeExampleFragment = { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type CommentCardCommentFragment = { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number } };

export type CreateRepositoryFormOptionGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly repository?: { readonly __typename: 'Repository', readonly id: string } | null };

export type ExperienceCardExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null, readonly url: string } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } };

type NotificationCardNotification_NotificationChatMessageReceived_Fragment = { readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } };

type NotificationCardNotification_NotificationCodeExampleCommented_Fragment = { readonly __typename: 'NotificationCodeExampleCommented', readonly id: string, readonly codeExampleId: string, readonly opened: boolean, readonly updatedAt: Date, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } } } };

type NotificationCardNotification_NotificationFriendshipAccepted_Fragment = { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } };

type NotificationCardNotification_NotificationPostCommented_Fragment = { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string } };

export type NotificationCardNotificationFragment = NotificationCardNotification_NotificationChatMessageReceived_Fragment | NotificationCardNotification_NotificationCodeExampleCommented_Fragment | NotificationCardNotification_NotificationFriendshipAccepted_Fragment | NotificationCardNotification_NotificationPostCommented_Fragment;

export type NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment = { readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } };

export type NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment = { readonly __typename: 'NotificationCodeExampleCommented', readonly codeExampleId: string, readonly id: string, readonly opened: boolean, readonly updatedAt: Date, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } } } };

export type NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment = { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } };

export type NotificationCardPostCommentedNotificationPostCommentedFragment = { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string } };

export type OrganizationSearchResultGitHubOrganizationFragment = { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly description?: string | null, readonly id: string, readonly login: string, readonly name?: string | null };

export type PageInfoFragmentFragment = { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null };

export type PostCardPostFragment = { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } };

export type RepositoryCardRepositoryFragment = { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> };

export type RepositorySearchResultGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly description?: string | null, readonly forkCount: number, readonly id: string, readonly name: string, readonly stargazerCount: number, readonly owner: { readonly __typename: 'GitHubOrganization', readonly name?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly name?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null };

type SiteWideSideDrawerFollowable_Skill_Fragment = { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string } | { readonly __typename: 'GitHubUser', readonly avatarUrl: string, readonly id: string } } };

type SiteWideSideDrawerFollowable_User_Fragment = { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly id: string, readonly image?: string | null, readonly name: string };

export type SiteWideSideDrawerFollowableFragment = SiteWideSideDrawerFollowable_Skill_Fragment | SiteWideSideDrawerFollowable_User_Fragment;

export type SiteWideSideDrawerSkillFollowLinkSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string } | { readonly __typename: 'GitHubUser', readonly avatarUrl: string, readonly id: string } } };

export type SiteWideSideDrawerUserFollowLinkUserFragment = { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string };

export type SkillCardSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } };

export type SkillFollowCardSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } };

export type SkillInfoSideBarGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string } | { readonly __typename: 'GitHubUser', readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerDesiredSkill: boolean, readonly viewerFollowing: boolean, readonly viewerSkill: boolean, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number } } | null };

type SkillOwnerInfoSideBarGitHubRepositoryOwner_GitHubOrganization_Fragment = { readonly __typename: 'GitHubOrganization', readonly description?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string };

type SkillOwnerInfoSideBarGitHubRepositoryOwner_GitHubUser_Fragment = { readonly __typename: 'GitHubUser', readonly bio?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string };

export type SkillOwnerInfoSideBarGitHubRepositoryOwnerFragment = SkillOwnerInfoSideBarGitHubRepositoryOwner_GitHubOrganization_Fragment | SkillOwnerInfoSideBarGitHubRepositoryOwner_GitHubUser_Fragment;

export type SkillOwnerRepositoryCardGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly name: string, readonly stargazerCount: number, readonly url: string, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean, readonly viewerSkill: boolean } | null };

type SuggestSkillOwnersGitHubRepositoryOwner_GitHubOrganization_Fragment = { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly description?: string | null, readonly login: string, readonly name?: string | null };

type SuggestSkillOwnersGitHubRepositoryOwner_GitHubUser_Fragment = { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly bio?: string | null, readonly login: string, readonly name?: string | null };

export type SuggestSkillOwnersGitHubRepositoryOwnerFragment = SuggestSkillOwnersGitHubRepositoryOwner_GitHubOrganization_Fragment | SuggestSkillOwnersGitHubRepositoryOwner_GitHubUser_Fragment;

export type SuggestedFriendCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly posts: { readonly __typename: 'PostConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type TopLanguagesFragment = { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> };

export type UpdateExperienceFormExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null };

export type UpdateUserInfoSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string };

type UserActivityCardUserActivity_UserActivityCommentCodeExample_Fragment = { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityCommentPost_Fragment = { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityCreateCodeExample_Fragment = { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityFollowSkill_Fragment = { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityFollowUser_Fragment = { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityFriendAcceptUser_Fragment = { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly friendshipId: string, readonly updatedAt: Date, readonly userId: string, readonly friendship: { readonly __typename: 'Friendship', readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityJoined_Fragment = { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityPublishPost_Fragment = { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityUpvoteCodeExample_Fragment = { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardUserActivity_UserActivityUpvotePost_Fragment = { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardUserActivityFragment = UserActivityCardUserActivity_UserActivityCommentCodeExample_Fragment | UserActivityCardUserActivity_UserActivityCommentPost_Fragment | UserActivityCardUserActivity_UserActivityCreateCodeExample_Fragment | UserActivityCardUserActivity_UserActivityFollowSkill_Fragment | UserActivityCardUserActivity_UserActivityFollowUser_Fragment | UserActivityCardUserActivity_UserActivityFriendAcceptUser_Fragment | UserActivityCardUserActivity_UserActivityJoined_Fragment | UserActivityCardUserActivity_UserActivityPublishPost_Fragment | UserActivityCardUserActivity_UserActivityUpvoteCodeExample_Fragment | UserActivityCardUserActivity_UserActivityUpvotePost_Fragment;

export type UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment = { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardCommentPostUserActivityCommentPostFragment = { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment = { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardFollowSkillUserActivityFollowSkillFragment = { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardFollowUserUserActivityFollowUserFragment = { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment = { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly friendshipId: string, readonly updatedAt: Date, readonly userId: string, readonly friendship: { readonly __typename: 'Friendship', readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityCommentCodeExample_Fragment = { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityCommentPost_Fragment = { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityCreateCodeExample_Fragment = { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityFollowSkill_Fragment = { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityFollowUser_Fragment = { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityFriendAcceptUser_Fragment = { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityJoined_Fragment = { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityPublishPost_Fragment = { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityUpvoteCodeExample_Fragment = { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

type UserActivityCardHeaderUserActivity_UserActivityUpvotePost_Fragment = { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardHeaderUserActivityFragment = UserActivityCardHeaderUserActivity_UserActivityCommentCodeExample_Fragment | UserActivityCardHeaderUserActivity_UserActivityCommentPost_Fragment | UserActivityCardHeaderUserActivity_UserActivityCreateCodeExample_Fragment | UserActivityCardHeaderUserActivity_UserActivityFollowSkill_Fragment | UserActivityCardHeaderUserActivity_UserActivityFollowUser_Fragment | UserActivityCardHeaderUserActivity_UserActivityFriendAcceptUser_Fragment | UserActivityCardHeaderUserActivity_UserActivityJoined_Fragment | UserActivityCardHeaderUserActivity_UserActivityPublishPost_Fragment | UserActivityCardHeaderUserActivity_UserActivityUpvoteCodeExample_Fragment | UserActivityCardHeaderUserActivity_UserActivityUpvotePost_Fragment;

export type UserActivityCardJoinedUserActivityJoinedFragment = { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardPublishPostUserActivityPublishPostFragment = { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment = { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardUpvotePostUserActivityUpvotePostFragment = { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserAvatarUserFragment = { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null };

export type UserFollowCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserFriendCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserFriendRequestCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserGitHubContributionHeatmapGitHubUserContributionCalendarFragment = { readonly __typename: 'GitHubUserContributionCalendar', readonly totalContributions: number, readonly weeks: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarWeek', readonly contributionDays: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarDay', readonly contributionCount: number, readonly contributionLevel: GitHubUserContributionLevel, readonly date: Date, readonly weekday: number }> }> };

export type UserInfoSideBarUserFragment = { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFollowing: boolean, readonly viewerIsFriend: boolean, readonly image?: string | null, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number }, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null, readonly company?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly url: string, readonly websiteUrl?: string | null, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserOverviewExperienceCardExperienceFragment = { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly name?: string | null } } };

export type UserOverviewRepositoryCardRepositoryFragment = { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly name: string, readonly pushedAt?: Date | null, readonly url: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> };

export type UserSearchResultGitHubUserFragment = { readonly __typename: 'GitHubUser', readonly avatarUrl: string, readonly bio?: string | null, readonly id: string, readonly login: string, readonly name?: string | null };

export type AddDesiredSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type AddDesiredSkillMutation = { readonly __typename: 'Mutation', readonly addDesiredSkill: { readonly __typename: 'AddDesiredSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record?: { readonly __typename: 'Skill', readonly viewerSkill: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | null } };

export type AddSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type AddSkillMutation = { readonly __typename: 'Mutation', readonly addSkill: { readonly __typename: 'AddSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record?: { readonly __typename: 'Skill', readonly viewerSkill: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | null } };

export type CommentCodeExampleMutationVariables = Exact<{
  data: CommentCodeExampleInput;
}>;


export type CommentCodeExampleMutation = { readonly __typename: 'Mutation', readonly commentCodeExample: { readonly __typename: 'CommentCodeExamplePayload', readonly record?: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly authorId: string, readonly parentId?: string | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type CommentPostMutationVariables = Exact<{
  data: CommentPostInput;
}>;


export type CommentPostMutation = { readonly __typename: 'Mutation', readonly commentPost: { readonly __typename: 'CommentPostPayload', readonly record?: { readonly __typename: 'Comment', readonly id: string, readonly authorId: string, readonly parentId?: string | null, readonly postId?: string | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type CreateChatMutationVariables = Exact<{
  data: CreateChatInput;
}>;


export type CreateChatMutation = { readonly __typename: 'Mutation', readonly createChat: { readonly __typename: 'CreateChatPayload', readonly record?: { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json> }> }, readonly users: { readonly __typename: 'UserConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } | null, readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly chats: { readonly __typename: 'ChatConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Chat', readonly id: string }> } } | null } } };

export type CreateCodeExampleMutationVariables = Exact<{
  data: CodeExampleCreateInput;
}>;


export type CreateCodeExampleMutation = { readonly __typename: 'Mutation', readonly createCodeExample: { readonly __typename: 'CreateCodeExamplePayload', readonly errors?: ReadonlyArray<{ readonly __typename: 'CodeExampleTitleTakenError', readonly message: string } | { readonly __typename: 'InvalidSkillError', readonly message: string }> | null, readonly record?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type CreateExperienceFragmentFragment = { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null, readonly name?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } };

export type CreateExperienceMutationVariables = Exact<{
  data: ExperienceCreateInput;
}>;


export type CreateExperienceMutation = { readonly __typename: 'Mutation', readonly createExperience: { readonly __typename: 'CreateExperiencePayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null, readonly name?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } } | null } };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { readonly __typename: 'Mutation', readonly createPost: { readonly __typename: 'CreatePostPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null } };

export type CreateRepositoryMutationVariables = Exact<{
  data: RepositoryCreateInput;
}>;


export type CreateRepositoryMutation = { readonly __typename: 'Mutation', readonly createRepository: { readonly __typename: 'CreateRepositoryPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } | null } };

export type DeleteCodeExampleMutationVariables = Exact<{
  where: CodeExampleWhereUniqueInput;
}>;


export type DeleteCodeExampleMutation = { readonly __typename: 'Mutation', readonly deleteCodeExample: { readonly __typename: 'DeleteCodeExamplePayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'CodeExample', readonly authorName: string, readonly id: string, readonly title: string, readonly urlSlug: string } | null } };

export type DeleteExperienceMutationVariables = Exact<{
  where: ExperienceWhereUniqueInput;
}>;


export type DeleteExperienceMutation = { readonly __typename: 'Mutation', readonly deleteExperience: { readonly __typename: 'DeleteExperiencePayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Experience', readonly id: string } | null } };

export type DeleteFriendshipMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteFriendshipMutation = { readonly __typename: 'Mutation', readonly deleteFriendship: { readonly __typename: 'DeleteFriendshipPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record?: { readonly __typename: 'Friendship', readonly id: string, readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly id: string } } | null } };

export type DeletePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type DeletePostMutation = { readonly __typename: 'Mutation', readonly deletePost: { readonly __typename: 'DeletePostPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string } | null } };

export type DeleteRepositoryMutationVariables = Exact<{
  where: RepositoryWhereUniqueInput;
}>;


export type DeleteRepositoryMutation = { readonly __typename: 'Mutation', readonly deleteRepository: { readonly __typename: 'DeleteRepositoryPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record?: { readonly __typename: 'Repository', readonly id: string } | null } };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { readonly __typename: 'Mutation', readonly deleteUser: { readonly __typename: 'DeleteUserPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type FollowSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type FollowSkillMutation = { readonly __typename: 'Mutation', readonly followSkill: { readonly __typename: 'FollowUserPayload', readonly record?: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean } | { readonly __typename: 'User' } } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type FollowUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FollowUserMutation = { readonly __typename: 'Mutation', readonly followUser: { readonly __typename: 'FollowUserPayload', readonly record?: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill' } | { readonly __typename: 'User', readonly id: string, readonly viewerFollowing: boolean } } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type FriendRequestUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FriendRequestUserMutation = { readonly __typename: 'Mutation', readonly requestFriendship: { readonly __typename: 'RequestFriendshipPayload', readonly record?: { readonly __typename: 'Friendship', readonly id: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly viewerFriended: boolean } } | null } };

export type InviteToChatMutationVariables = Exact<{
  data: InviteToChatInput;
  where: ChatWhereUniqueInput;
}>;


export type InviteToChatMutation = { readonly __typename: 'Mutation', readonly inviteToChat: { readonly __typename: 'InviteToChatPayload', readonly record?: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } | null } };

export type LeaveChatMutationVariables = Exact<{
  chatId: Scalars['String'];
}>;


export type LeaveChatMutation = { readonly __typename: 'Mutation', readonly leaveChat: { readonly __typename: 'LeaveChatPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record?: { readonly __typename: 'Chat', readonly id: string } | null } };

export type OpenNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type OpenNotificationsMutation = { readonly __typename: 'Mutation', readonly openNotifications: { readonly __typename: 'OpenNotificationsPayload', readonly record?: { readonly __typename: 'User', readonly id: string, readonly notifications: { readonly __typename: 'NotificationConnection', readonly totalCount: number } } | null } };

export type PublishPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostPublishInput;
}>;


export type PublishPostMutation = { readonly __typename: 'Mutation', readonly publishPost: { readonly __typename: 'PublishPostPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly content: ReadonlyArray<Json>, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title: string, readonly urlSlug: string } | null } };

export type RejectFriendshipMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type RejectFriendshipMutation = { readonly __typename: 'Mutation', readonly rejectFriendship: { readonly __typename: 'RejectFriendshipPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record?: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string } } | null } };

export type RemoveDesiredSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type RemoveDesiredSkillMutation = { readonly __typename: 'Mutation', readonly removeDesiredSkill: { readonly __typename: 'RemoveDesiredSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Skill', readonly id: string, readonly viewerDesiredSkill: boolean, readonly viewerSkill: boolean } | null } };

export type RemovePostThumbnailMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type RemovePostThumbnailMutation = { readonly __typename: 'Mutation', readonly removePostThumbnail: { readonly __typename: 'RemovePostThumbnailPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly thumbnailUrl?: string | null } | null } };

export type RemoveSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type RemoveSkillMutation = { readonly __typename: 'Mutation', readonly removeSkill: { readonly __typename: 'RemoveSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record?: { readonly __typename: 'Skill', readonly id: string, readonly viewerDesiredSkill: boolean, readonly viewerSkill: boolean } | null } };

export type SendChatMessageMutationVariables = Exact<{
  data: ChatMessageCreateInput;
  where: ChatWhereUniqueInput;
}>;


export type SendChatMessageMutation = { readonly __typename: 'Mutation', readonly sendChatMessage: { readonly __typename: 'SendChatMessagePayload', readonly record?: { readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | null } };

export type UnfollowSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type UnfollowSkillMutation = { readonly __typename: 'Mutation', readonly unfollowSkill: { readonly __typename: 'UnfollowSkillPayload', readonly record?: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean } | { readonly __typename: 'User' } } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UnfollowUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UnfollowUserMutation = { readonly __typename: 'Mutation', readonly unfollowUser: { readonly __typename: 'UnfollowUserPayload', readonly record?: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill' } | { readonly __typename: 'User', readonly id: string, readonly viewerFollowing: boolean } } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UnfriendUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UnfriendUserMutation = { readonly __typename: 'Mutation', readonly deleteFriendship: { readonly __typename: 'DeleteFriendshipPayload', readonly record?: { readonly __typename: 'Friendship', readonly id: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFriended: boolean, readonly viewerIsFriend: boolean }, readonly friending: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFriended: boolean, readonly viewerIsFriend: boolean } } | null } };

export type UnvoteCodeExampleMutationVariables = Exact<{
  where: CodeExampleWhereUniqueInput;
}>;


export type UnvoteCodeExampleMutation = { readonly __typename: 'Mutation', readonly unvoteCodeExample: { readonly __typename: 'UnvoteCodeExamplePayload', readonly record?: { readonly __typename: 'CodeExample', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UnvoteCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type UnvoteCommentMutation = { readonly __typename: 'Mutation', readonly unvoteComment: { readonly __typename: 'UnvoteCommentPayload', readonly record?: { readonly __typename: 'Comment', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UnvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UnvotePostMutation = { readonly __typename: 'Mutation', readonly unvotePost: { readonly __typename: 'UnvotePostPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UpdateCodeExampleMutationVariables = Exact<{
  data: CodeExampleUpdateInput;
  where: CodeExampleWhereUniqueInput;
}>;


export type UpdateCodeExampleMutation = { readonly __typename: 'Mutation', readonly updateCodeExample: { readonly __typename: 'UpdateCodeExamplePayload', readonly record?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null } };

export type UpdateExperienceMutationVariables = Exact<{
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
}>;


export type UpdateExperienceMutation = { readonly __typename: 'Mutation', readonly updateExperience: { readonly __typename: 'UpdateExperiencePayload', readonly record?: { readonly __typename: 'Experience', readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organizationName: string, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null, readonly url: string, readonly description?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } } | null } };

export type UpdatePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { readonly __typename: 'Mutation', readonly updatePost: { readonly __typename: 'UpdatePostPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly content: ReadonlyArray<Json>, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null } };

export type UpdatePostDraftMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostDraftUpdateInput;
}>;


export type UpdatePostDraftMutation = { readonly __typename: 'Mutation', readonly updatePostDraft: { readonly __typename: 'UpdatePostDraftPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly content: ReadonlyArray<Json>, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null } };

export type UpdateRepositoryMutationVariables = Exact<{
  data: RepositoryUpdateInput;
  where: RepositoryWhereUniqueInput;
}>;


export type UpdateRepositoryMutation = { readonly __typename: 'Mutation', readonly updateRepository: { readonly __typename: 'UpdateRepositoryPayload', readonly record?: { readonly __typename: 'Repository', readonly id: string, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } | null } };

export type UpdateUserFromGitHubMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateUserFromGitHubMutation = { readonly __typename: 'Mutation', readonly updateUserFromGitHub: { readonly __typename: 'UpdateUserFromGitHubPayload', readonly record?: { readonly __typename: 'User', readonly id: string, readonly description?: string | null, readonly image?: string | null, readonly name: string } | null } };

export type UpdateUserInfoMutationVariables = Exact<{
  skills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
  desiredSkills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
}>;


export type UpdateUserInfoMutation = { readonly __typename: 'Mutation', readonly updateSkills: { readonly __typename: 'UpdateSkillsPayload', readonly record?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly updateDesiredSkills: { readonly __typename: 'UpdateDesiredSkillsPayload', readonly record?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null } };

export type UploadPostImageMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: UploadPostImageInput;
}>;


export type UploadPostImageMutation = { readonly __typename: 'Mutation', readonly uploadPostImage: { readonly __typename: 'UploadPostImagePayload', readonly record?: { readonly __typename: 'PostImage', readonly id: string, readonly url: string } | null } };

export type UpvoteCodeExampleMutationVariables = Exact<{
  where: CodeExampleWhereUniqueInput;
}>;


export type UpvoteCodeExampleMutation = { readonly __typename: 'Mutation', readonly upvoteCodeExample: { readonly __typename: 'UpvoteCodeExamplePayload', readonly record?: { readonly __typename: 'CodeExample', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UpvoteCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type UpvoteCommentMutation = { readonly __typename: 'Mutation', readonly upvoteComment: { readonly __typename: 'UpvoteCommentPayload', readonly record?: { readonly __typename: 'Comment', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type UpvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UpvotePostMutation = { readonly __typename: 'Mutation', readonly upvotePost: { readonly __typename: 'UpvotePostPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null } | null, readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null } };

export type ViewPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type ViewPostMutation = { readonly __typename: 'Mutation', readonly viewPost: { readonly __typename: 'ViewPostPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly viewers: { readonly __typename: 'UserConnection', readonly totalCount: number } } | null } };

export type GetActivityFeedQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetActivityFeedQuery = { readonly __typename: 'Query', readonly activityFeed: { readonly __typename: 'UserActivityConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserActivityEdge', readonly cursor: string, readonly node: { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string } | { readonly __typename: 'UserActivityCommentPost', readonly id: string } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string } | { readonly __typename: 'UserActivityFollowUser', readonly id: string } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string } | { readonly __typename: 'UserActivityJoined', readonly id: string } | { readonly __typename: 'UserActivityPublishPost', readonly id: string } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly friendshipId: string, readonly updatedAt: Date, readonly userId: string, readonly friendship: { readonly __typename: 'Friendship', readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> } };

export type GetChatQueryVariables = Exact<{
  where: ChatWhereUniqueInput;
  messageLimit?: InputMaybe<Scalars['Int']>;
  messageOffset?: InputMaybe<Scalars['Int']>;
}>;


export type GetChatQuery = { readonly __typename: 'Query', readonly chat?: { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ChatMessageEdge', readonly cursor: string, readonly node: { readonly __typename: 'ChatMessage', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } | null };

export type GetChatMessagesQueryVariables = Exact<{
  where: ChatMessageWhereInput;
}>;


export type GetChatMessagesQuery = { readonly __typename: 'Query', readonly chatMessages: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> };

export type GetChatsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
}>;


export type GetChatsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly chats: { readonly __typename: 'ChatConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'ChatEdge', readonly cursor: string, readonly node: { readonly __typename: 'Chat', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } }> } } | null };

export type GetCodeExampleQueryVariables = Exact<{
  authorName: Scalars['String'];
  urlSlug: Scalars['String'];
}>;


export type GetCodeExampleQuery = { readonly __typename: 'Query', readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly content: string, readonly description?: string | null, readonly language: CodeLanguage, readonly title: string, readonly updatedAt: Date, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly description?: string | null, readonly forkCount: number, readonly id: string, readonly name: string, readonly stargazerCount: number, readonly owner: { readonly __typename: 'GitHubOrganization', readonly name?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly name?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null };

export type GetCodeExampleCommentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  codeExampleTitle: Scalars['String'];
  userName: Scalars['String'];
}>;


export type GetCodeExampleCommentsQuery = { readonly __typename: 'Query', readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly comments: { readonly __typename: 'CommentConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null };

export type GetCommentRepliesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  where: CommentWhereUniqueInput;
}>;


export type GetCommentRepliesQuery = { readonly __typename: 'Query', readonly comment?: { readonly __typename: 'Comment', readonly id: string, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null };

export type GetFollowableSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFollowableSkillsQuery = { readonly __typename: 'Query', readonly followableSkills: { readonly __typename: 'SkillConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string } }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number } }> } };

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null } | null };

export type GetNotificationCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationCountsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly friendRequestsReceived: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly messages: { readonly __typename: 'NotificationConnection', readonly totalCount: number }, readonly notifications: { readonly __typename: 'NotificationConnection', readonly totalCount: number } } | null };

export type GetNotificationsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetNotificationsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly notifications: { readonly __typename: 'NotificationConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'NotificationEdge', readonly cursor: string, readonly node: { readonly __typename: 'NotificationChatMessageReceived', readonly id: string } | { readonly __typename: 'NotificationCodeExampleCommented', readonly id: string } | { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string } | { readonly __typename: 'NotificationPostCommented', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } } | { readonly __typename: 'NotificationCodeExampleCommented', readonly id: string, readonly codeExampleId: string, readonly opened: boolean, readonly updatedAt: Date, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } } } } | { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } } | { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string } }> } } | null };

export type GetPostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetPostQuery = { readonly __typename: 'Query', readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly content: ReadonlyArray<Json>, readonly description?: string | null, readonly publishedAt?: Date | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly thumbnailUrl?: string | null, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null };

export type GetPostCommentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  postTitle: Scalars['String'];
  userName: Scalars['String'];
}>;


export type GetPostCommentsQuery = { readonly __typename: 'Query', readonly post?: { readonly __typename: 'Post', readonly id: string, readonly comments: { readonly __typename: 'CommentConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content: ReadonlyArray<Json>, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null };

export type GetPostDraftQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostDraftQuery = { readonly __typename: 'Query', readonly postDraft?: { readonly __typename: 'Post', readonly id: string, readonly content: ReadonlyArray<Json>, readonly description?: string | null, readonly title: string, readonly thumbnailUrl?: string | null } | null };

export type GetPostsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PostOrderByInput> | PostOrderByInput>;
  where: PostWhereInput;
}>;


export type GetPostsQuery = { readonly __typename: 'Query', readonly posts: { readonly __typename: 'PostConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } };

export type GetSiteWideSideDrawerQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetSiteWideSideDrawerQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'FollowEdge', readonly cursor: string, readonly node: { readonly __typename: 'Follow', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Follow', readonly id: string, readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string } | { readonly __typename: 'GitHubUser', readonly avatarUrl: string, readonly id: string } } } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly id: string, readonly image?: string | null, readonly name: string } }> } } | null };

export type GetSkillCodeExamplesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type GetSkillCodeExamplesQuery = { readonly __typename: 'Query', readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly codeExamples: { readonly __typename: 'CodeExampleConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'CodeExampleEdge', readonly cursor: string, readonly node: { readonly __typename: 'CodeExample', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

export type GetSkillFollowersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type GetSkillFollowersQuery = { readonly __typename: 'Query', readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

export type GetSkillInfoSideBarQueryVariables = Exact<{
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type GetSkillInfoSideBarQuery = { readonly __typename: 'Query', readonly github: { readonly __typename: 'GitHub', readonly repository?: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string } | { readonly __typename: 'GitHubUser', readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerDesiredSkill: boolean, readonly viewerFollowing: boolean, readonly viewerSkill: boolean, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number } } | null } | null } };

export type GetSkillOwnerExperiencersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
  skillOwner: Scalars['String'];
}>;


export type GetSkillOwnerExperiencersQuery = { readonly __typename: 'Query', readonly github: { readonly __typename: 'GitHub', readonly repositoryOwner?: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly experiencers: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | { readonly __typename: 'GitHubUser', readonly id: string, readonly experiencers: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null } };

export type GetSkillOwnerInfoSideBarQueryVariables = Exact<{
  owner: Scalars['String'];
}>;


export type GetSkillOwnerInfoSideBarQuery = { readonly __typename: 'Query', readonly github: { readonly __typename: 'GitHub', readonly repositoryOwner?: { readonly __typename: 'GitHubOrganization', readonly description?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string } | { readonly __typename: 'GitHubUser', readonly bio?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly websiteUrl?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string, readonly url: string } | null } };

export type GetSkillOwnerRepositoriesQueryVariables = Exact<{
  skillOwner: Scalars['String'];
}>;


export type GetSkillOwnerRepositoriesQuery = { readonly __typename: 'Query', readonly github: { readonly __typename: 'GitHub', readonly repositoryOwner?: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly repositories: { readonly __typename: 'GitHubRepositoryConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'GitHubRepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'GitHubRepository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly name: string, readonly stargazerCount: number, readonly url: string, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean, readonly viewerSkill: boolean } | null }> } } | { readonly __typename: 'GitHubUser', readonly id: string, readonly repositories: { readonly __typename: 'GitHubRepositoryConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'GitHubRepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'GitHubRepository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly name: string, readonly stargazerCount: number, readonly url: string, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean, readonly viewerSkill: boolean } | null }> } } | null } };

export type GetSkillsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput> | SkillOrderByInput>;
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type GetSkillsQuery = { readonly __typename: 'Query', readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } };

export type GetUserActivitiesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserActivitiesQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly activities: { readonly __typename: 'UserActivityConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserActivityEdge', readonly cursor: string, readonly node: { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string } | { readonly __typename: 'UserActivityCommentPost', readonly id: string } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string } | { readonly __typename: 'UserActivityFollowUser', readonly id: string } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string } | { readonly __typename: 'UserActivityJoined', readonly id: string } | { readonly __typename: 'UserActivityPublishPost', readonly id: string } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly friendshipId: string, readonly updatedAt: Date, readonly userId: string, readonly friendship: { readonly __typename: 'Friendship', readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> } } | null };

export type GetUserCodeExamplesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserCodeExamplesQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly codeExamples: { readonly __typename: 'CodeExampleConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'CodeExampleEdge', readonly cursor: string, readonly node: { readonly __typename: 'CodeExample', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

export type GetUserExperiencesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserExperiencesQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly experiences: { readonly __typename: 'ExperienceConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ExperienceEdge', readonly cursor: string, readonly node: { readonly __typename: 'Experience', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organizationName: string, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null, readonly url: string, readonly description?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null };

export type GetUserFollowersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserFollowersQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

export type GetUserFollowingQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserFollowingQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'FollowEdge', readonly cursor: string, readonly node: { readonly __typename: 'Follow', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Follow', readonly id: string, readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }> } } | null };

export type GetUserFriendRequestCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFriendRequestCountQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly friendRequestsReceived: { readonly __typename: 'UserConnection', readonly totalCount: number } } | null };

export type GetUserFriendRequestsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserFriendRequestsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly friendRequestsReceived: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

export type GetUserFriendsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserFriendsQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

export type GetUserInfoSideBarQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserInfoSideBarQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFollowing: boolean, readonly viewerIsFriend: boolean, readonly image?: string | null, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number }, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null, readonly company?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly url: string, readonly websiteUrl?: string | null, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null };

export type GetUserOverviewQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserOverviewQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly createdAt: Date, readonly githubUrl: string, readonly name: string, readonly codeExamples: { readonly __typename: 'CodeExampleConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CodeExampleEdge', readonly cursor: string, readonly node: { readonly __typename: 'CodeExample', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> }, readonly experiences: { readonly __typename: 'ExperienceConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'ExperienceEdge', readonly cursor: string, readonly node: { readonly __typename: 'Experience', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly name?: string | null } } }> }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly contributionCalendar: { readonly __typename: 'GitHubUserContributionCalendar', readonly totalContributions: number, readonly weeks: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarWeek', readonly contributionDays: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarDay', readonly contributionCount: number, readonly contributionLevel: GitHubUserContributionLevel, readonly date: Date, readonly weekday: number }> }> } }, readonly posts: { readonly __typename: 'PostConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly readTime: number, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } }> } }> }, readonly repositories: { readonly __typename: 'RepositoryConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'RepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'Repository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly name: string, readonly pushedAt?: Date | null, readonly url: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }> }, readonly trophies: { readonly __typename: 'UserTrophies', readonly id: string, readonly totalFollowers: number, readonly totalPostViews: number, readonly totalSkills: number, readonly totalUpvotes: number, readonly totalYearlyCommits: number, readonly totalYearlyPosts: number } } | null };

export type GetUserRepositoriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserRepositoriesQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly repositories: { readonly __typename: 'RepositoryConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'RepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'Repository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename: 'Query', readonly ok: boolean };

export type SuggestFriendsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestFriendsWhereInput;
}>;


export type SuggestFriendsQuery = { readonly __typename: 'Query', readonly suggestFriends: { readonly __typename: 'UserConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly posts: { readonly __typename: 'PostConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title: string, readonly upvotes: number, readonly urlSlug: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } };

export type SuggestOrganizationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestOrganizationsWhereInput;
}>;


export type SuggestOrganizationsQuery = { readonly __typename: 'Query', readonly suggestOrganizations: { readonly __typename: 'SuggestOrganizations', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly description?: string | null, readonly id: string, readonly login: string, readonly name?: string | null }> } };

export type SuggestRepositoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestRepositoriesWhereInput;
}>;


export type SuggestRepositoriesQuery = { readonly __typename: 'Query', readonly suggestRepositories: { readonly __typename: 'SuggestRepositories', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly repository?: { readonly __typename: 'Repository', readonly id: string } | null }> } };

export type SuggestSkillOwnersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestSkillOwnersWhereInput;
}>;


export type SuggestSkillOwnersQuery = { readonly __typename: 'Query', readonly suggestSkillOwners: { readonly __typename: 'SuggestSkillOwners', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly description?: string | null, readonly login: string, readonly name?: string | null } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly bio?: string | null, readonly login: string, readonly name?: string | null }> } };

export type SuggestSkillsQueryVariables = Exact<{
  where: SuggestSkillsWhereInput;
}>;


export type SuggestSkillsQuery = { readonly __typename: 'Query', readonly suggestSkills: { readonly __typename: 'SuggestSkills', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly description?: string | null, readonly forkCount: number, readonly id: string, readonly name: string, readonly stargazerCount: number, readonly owner: { readonly __typename: 'GitHubOrganization', readonly name?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly name?: string | null, readonly avatarUrl: string, readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }> } };

export type SuggestViewerFriendsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SuggestViewerFriendsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly friends: { readonly __typename: 'UserConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly name: string }> } } | null };

export const ActivityFeedFollowableSkillCardSkillFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActivityFeedFollowableSkillCardSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]} as unknown as DocumentNode<ActivityFeedFollowableSkillCardSkillFragment, unknown>;
export const ChatCardChatFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatCardChat"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Chat"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ChatCardChatFragment, unknown>;
export const ChatRoomInviteFormChatFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatRoomInviteFormChat"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Chat"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ChatRoomInviteFormChatFragment, unknown>;
export const ChatRoomMessageChatMessageFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatRoomMessageChatMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChatMessage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<ChatRoomMessageChatMessageFragment, unknown>;
export const CommentCardCommentFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentCardComment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeExampleId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}}]} as unknown as DocumentNode<CommentCardCommentFragment, unknown>;
export const CreateRepositoryFormOptionGitHubRepositoryFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreateRepositoryFormOptionGitHubRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issueCount"}},{"kind":"Field","name":{"kind":"Name","value":"licenseInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"spdxId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestCount"}},{"kind":"Field","name":{"kind":"Name","value":"pushedAt"}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]} as unknown as DocumentNode<CreateRepositoryFormOptionGitHubRepositoryFragment, unknown>;
export const ExperienceCardExperienceFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceCardExperience"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"positionName"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ExperienceCardExperienceFragment, unknown>;
export const NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCardChatMessageReceivedNotificationChatMessageReceived"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationChatMessageReceived"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","name":{"kind":"Name","value":"opened"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment, unknown>;
export const NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCardCodeExampleCommentedNotificationCodeExampleCommented"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCodeExampleCommented"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeExample"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"primarySkill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeExampleId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"opened"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment, unknown>;
export const NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCardFriendshipAcceptedNotificationFriendshipAccepted"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationFriendshipAccepted"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"opened"}},{"kind":"Field","name":{"kind":"Name","value":"friendship"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"frienderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendshipId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment, unknown>;
export const NotificationCardPostCommentedNotificationPostCommentedFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCardPostCommentedNotificationPostCommented"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationPostCommented"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"opened"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NotificationCardPostCommentedNotificationPostCommentedFragment, unknown>;
export const NotificationCardNotificationFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCardNotification"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Notification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationChatMessageReceived"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCardChatMessageReceivedNotificationChatMessageReceived"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCodeExampleCommented"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCardCodeExampleCommentedNotificationCodeExampleCommented"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationFriendshipAccepted"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCardFriendshipAcceptedNotificationFriendshipAccepted"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationPostCommented"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCardPostCommentedNotificationPostCommented"}}]}}]}}]} as unknown as DocumentNode<NotificationCardNotificationFragment, unknown>;
export const RepositoryCardRepositoryFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RepositoryCardRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issueCount"}},{"kind":"Field","name":{"kind":"Name","value":"licenseInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"spdxId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestCount"}},{"kind":"Field","name":{"kind":"Name","value":"pushedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}}]} as unknown as DocumentNode<RepositoryCardRepositoryFragment, unknown>;
export const RepositorySearchResultGitHubRepositoryFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RepositorySearchResultGitHubRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubOrganization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]} as unknown as DocumentNode<RepositorySearchResultGitHubRepositoryFragment, unknown>;
export const SiteWideSideDrawerSkillFollowLinkSkillFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteWideSideDrawerSkillFollowLinkSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]} as unknown as DocumentNode<SiteWideSideDrawerSkillFollowLinkSkillFragment, unknown>;
export const SiteWideSideDrawerUserFollowLinkUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteWideSideDrawerUserFollowLinkUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<SiteWideSideDrawerUserFollowLinkUserFragment, unknown>;
export const SiteWideSideDrawerFollowableFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteWideSideDrawerFollowable"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Followable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteWideSideDrawerSkillFollowLinkSkill"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteWideSideDrawerUserFollowLinkUser"}}]}}]}}]} as unknown as DocumentNode<SiteWideSideDrawerFollowableFragment, unknown>;
export const SkillInfoSideBarGitHubRepositoryFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillInfoSideBarGitHubRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issueCount"}},{"kind":"Field","name":{"kind":"Name","value":"licenseInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"spdxId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubOrganization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestCount"}},{"kind":"Field","name":{"kind":"Name","value":"pushedAt"}},{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"viewerDesiredSkill"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSkill"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<SkillInfoSideBarGitHubRepositoryFragment, unknown>;
export const SkillOwnerInfoSideBarGitHubRepositoryOwnerFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillOwnerInfoSideBarGitHubRepositoryOwner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepositoryOwner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubOrganization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}}]}}]} as unknown as DocumentNode<SkillOwnerInfoSideBarGitHubRepositoryOwnerFragment, unknown>;
export const SkillOwnerRepositoryCardGitHubRepositoryFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillOwnerRepositoryCardGitHubRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSkill"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<SkillOwnerRepositoryCardGitHubRepositoryFragment, unknown>;
export const OrganizationSearchResultGitHubOrganizationFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationSearchResultGitHubOrganization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubOrganization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<OrganizationSearchResultGitHubOrganizationFragment, unknown>;
export const UserSearchResultGitHubUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSearchResultGitHubUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<UserSearchResultGitHubUserFragment, unknown>;
export const SuggestSkillOwnersGitHubRepositoryOwnerFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SuggestSkillOwnersGitHubRepositoryOwner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubRepositoryOwner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubOrganization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationSearchResultGitHubOrganization"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSearchResultGitHubUser"}}]}}]}}]} as unknown as DocumentNode<SuggestSkillOwnersGitHubRepositoryOwnerFragment, unknown>;
export const SuggestedFriendCardUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SuggestedFriendCardUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"desiredSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}}]}}]} as unknown as DocumentNode<SuggestedFriendCardUserFragment, unknown>;
export const UpdateExperienceFormExperienceFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateExperienceFormExperience"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"positionName"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<UpdateExperienceFormExperienceFragment, unknown>;
export const UpdateUserInfoSkillFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateUserInfoSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]} as unknown as DocumentNode<UpdateUserInfoSkillFragment, unknown>;
export const UserActivityCardHeaderUserActivityFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<UserActivityCardHeaderUserActivityFragment, unknown>;
export const CodeExampleCardCodeExampleFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CodeExampleCardCodeExample"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"languageColor"}},{"kind":"Field","name":{"kind":"Name","value":"primarySkill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}}]} as unknown as DocumentNode<CodeExampleCardCodeExampleFragment, unknown>;
export const UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardCommentCodeExampleUserActivityCommentCodeExample"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityCommentCodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExample"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}},{"kind":"Field","name":{"kind":"Name","value":"codeExampleId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment, unknown>;
export const SkillCardSkillFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillCardSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issueCount"}},{"kind":"Field","name":{"kind":"Name","value":"licenseInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"spdxId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestCount"}},{"kind":"Field","name":{"kind":"Name","value":"pushedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]} as unknown as DocumentNode<SkillCardSkillFragment, unknown>;
export const PostCardPostFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCardPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readTime"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCardSkill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}}]} as unknown as DocumentNode<PostCardPostFragment, unknown>;
export const UserActivityCardCommentPostUserActivityCommentPostFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardCommentPostUserActivityCommentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityCommentPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardCommentPostUserActivityCommentPostFragment, unknown>;
export const UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardCreateCodeExampleUserActivityCreateCodeExample"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityCreateCodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExample"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment, unknown>;
export const SkillFollowCardSkillFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillFollowCardSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issueCount"}},{"kind":"Field","name":{"kind":"Name","value":"licenseInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"spdxId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestCount"}},{"kind":"Field","name":{"kind":"Name","value":"pushedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]} as unknown as DocumentNode<SkillFollowCardSkillFragment, unknown>;
export const UserActivityCardFollowSkillUserActivityFollowSkillFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardFollowSkillUserActivityFollowSkill"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityFollowSkill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"follow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillFollowCardSkill"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardFollowSkillUserActivityFollowSkillFragment, unknown>;
export const PageInfoFragmentFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]} as unknown as DocumentNode<PageInfoFragmentFragment, unknown>;
export const UserFollowCardUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFollowCardUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"desiredSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]} as unknown as DocumentNode<UserFollowCardUserFragment, unknown>;
export const UserActivityCardFollowUserUserActivityFollowUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardFollowUserUserActivityFollowUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityFollowUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"follow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFollowCardUser"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardFollowUserUserActivityFollowUserFragment, unknown>;
export const UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardFriendAcceptUserUserActivityFriendAcceptUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityFriendAcceptUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friendship"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"friending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFollowCardUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendingId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendshipId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment, unknown>;
export const UserActivityCardJoinedUserActivityJoinedFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardJoinedUserActivityJoined"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityJoined"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardJoinedUserActivityJoinedFragment, unknown>;
export const UserActivityCardPublishPostUserActivityPublishPostFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardPublishPostUserActivityPublishPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityPublishPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardPublishPostUserActivityPublishPostFragment, unknown>;
export const UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExample"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityUpvoteCodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExample"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment, unknown>;
export const UserActivityCardUpvotePostUserActivityUpvotePostFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardUpvotePostUserActivityUpvotePost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityUpvotePost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}}]}}]} as unknown as DocumentNode<UserActivityCardUpvotePostUserActivityUpvotePostFragment, unknown>;
export const UserActivityCardUserActivityFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActivityCardUserActivity"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardHeaderUserActivity"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityCommentCodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardCommentCodeExampleUserActivityCommentCodeExample"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityCommentPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardCommentPostUserActivityCommentPost"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityCreateCodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardCreateCodeExampleUserActivityCreateCodeExample"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityFollowSkill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardFollowSkillUserActivityFollowSkill"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityFollowUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardFollowUserUserActivityFollowUser"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityFriendAcceptUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardFriendAcceptUserUserActivityFriendAcceptUser"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityJoined"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardJoinedUserActivityJoined"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityPublishPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardPublishPostUserActivityPublishPost"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityUpvoteCodeExample"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExample"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivityUpvotePost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardUpvotePostUserActivityUpvotePost"}}]}}]}}]} as unknown as DocumentNode<UserActivityCardUserActivityFragment, unknown>;
export const UserFriendCardUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFriendCardUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"desiredSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewerIsFriend"}}]}}]} as unknown as DocumentNode<UserFriendCardUserFragment, unknown>;
export const UserFriendRequestCardUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFriendRequestCardUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"desiredSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewerIsFriend"}}]}}]} as unknown as DocumentNode<UserFriendRequestCardUserFragment, unknown>;
export const UserGitHubContributionHeatmapGitHubUserContributionCalendarFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserGitHubContributionHeatmapGitHubUserContributionCalendar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GitHubUserContributionCalendar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalContributions"}},{"kind":"Field","name":{"kind":"Name","value":"weeks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributionDays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributionCount"}},{"kind":"Field","name":{"kind":"Name","value":"contributionLevel"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"weekday"}}]}}]}}]}}]} as unknown as DocumentNode<UserGitHubContributionHeatmapGitHubUserContributionCalendarFragment, unknown>;
export const TopLanguagesFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopLanguages"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopLanguages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSize"}}]}}]} as unknown as DocumentNode<TopLanguagesFragment, unknown>;
export const UserAvatarUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatarUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<UserAvatarUserFragment, unknown>;
export const UserInfoSideBarUserFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfoSideBarUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"desiredSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"topLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopLanguages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanFriend"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"Field","name":{"kind":"Name","value":"viewerIsFriend"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatarUser"}}]}}]} as unknown as DocumentNode<UserInfoSideBarUserFragment, unknown>;
export const UserOverviewExperienceCardExperienceFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserOverviewExperienceCardExperience"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"positionName"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<UserOverviewExperienceCardExperienceFragment, unknown>;
export const UserOverviewRepositoryCardRepositoryFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserOverviewRepositoryCardRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pushedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}}]} as unknown as DocumentNode<UserOverviewRepositoryCardRepositoryFragment, unknown>;
export const CreateExperienceFragmentFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreateExperienceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"positionName"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateExperienceFragmentFragment, unknown>;
export const AddDesiredSkillDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDesiredSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDesiredSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillFollowCardSkill"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSkill"}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...SkillFollowCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<AddDesiredSkillMutation, AddDesiredSkillMutationVariables>;
export const AddSkillDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillFollowCardSkill"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSkill"}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...SkillFollowCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<AddSkillMutation, AddSkillMutationVariables>;
export const CommentCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CommentCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentCodeExampleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentCodeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExampleId"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CommentCodeExampleMutation, CommentCodeExampleMutationVariables>;
export const CommentPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CommentPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentPostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CommentPostMutation, CommentPostMutationVariables>;
export const CreateChatDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateChatMutation, CreateChatMutationVariables>;
export const CreateCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExampleCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCodeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},...CodeExampleCardCodeExampleFragmentDoc.definitions]} as unknown as DocumentNode<CreateCodeExampleMutation, CreateCodeExampleMutationVariables>;
export const CreateExperienceDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateExperience"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExperienceCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreateExperienceFragment"}}]}}]}}]}},...CreateExperienceFragmentFragmentDoc.definitions]} as unknown as DocumentNode<CreateExperienceMutation, CreateExperienceMutationVariables>;
export const CreatePostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}}]}}]}},...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateRepositoryDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RepositoryCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RepositoryCardRepository"}}]}}]}}]}},...RepositoryCardRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<CreateRepositoryMutation, CreateRepositoryMutationVariables>;
export const DeleteCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExampleWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCodeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCodeExampleMutation, DeleteCodeExampleMutationVariables>;
export const DeleteExperienceDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteExperience"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExperienceWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteExperienceMutation, DeleteExperienceMutationVariables>;
export const DeleteFriendshipDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFriendship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFriendship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendingId"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteFriendshipMutation, DeleteFriendshipMutationVariables>;
export const DeletePostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}}]}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const DeleteRepositoryDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RepositoryWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteRepositoryMutation, DeleteRepositoryMutationVariables>;
export const DeleteUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const FollowSkillDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FollowSkillMutation, FollowSkillMutationVariables>;
export const FollowUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FollowUserMutation, FollowUserMutationVariables>;
export const FriendRequestUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FriendRequestUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestFriendship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFriended"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FriendRequestUserMutation, FriendRequestUserMutationVariables>;
export const InviteToChatDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InviteToChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InviteToChatInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteToChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"11"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InviteToChatMutation, InviteToChatMutationVariables>;
export const LeaveChatDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LeaveChatMutation, LeaveChatMutationVariables>;
export const OpenNotificationsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"openNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"opened"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OpenNotificationsMutation, OpenNotificationsMutationVariables>;
export const PublishPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostPublishInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}}]}}]}}]}}]} as unknown as DocumentNode<PublishPostMutation, PublishPostMutationVariables>;
export const RejectFriendshipDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RejectFriendship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectFriendship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"frienderId"}}]}}]}}]}}]} as unknown as DocumentNode<RejectFriendshipMutation, RejectFriendshipMutationVariables>;
export const RemoveDesiredSkillDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveDesiredSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeDesiredSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerDesiredSkill"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSkill"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveDesiredSkillMutation, RemoveDesiredSkillMutationVariables>;
export const RemovePostThumbnailDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemovePostThumbnail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePostThumbnail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]}}]} as unknown as DocumentNode<RemovePostThumbnailMutation, RemovePostThumbnailMutationVariables>;
export const RemoveSkillDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerDesiredSkill"}},{"kind":"Field","name":{"kind":"Name","value":"viewerSkill"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveSkillMutation, RemoveSkillMutationVariables>;
export const SendChatMessageDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatMessageCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatRoomMessageChatMessage"}}]}}]}}]}},...ChatRoomMessageChatMessageFragmentDoc.definitions]} as unknown as DocumentNode<SendChatMessageMutation, SendChatMessageMutationVariables>;
export const UnfollowSkillDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfollowSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollowSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UnfollowSkillMutation, UnfollowSkillMutationVariables>;
export const UnfollowUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollowUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const UnfriendUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfriendUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFriendship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanFriend"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFriended"}},{"kind":"Field","name":{"kind":"Name","value":"viewerIsFriend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanFriend"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFriended"}},{"kind":"Field","name":{"kind":"Name","value":"viewerIsFriend"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UnfriendUserMutation, UnfriendUserMutationVariables>;
export const UnvoteCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnvoteCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExampleWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unvoteCodeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UnvoteCodeExampleMutation, UnvoteCodeExampleMutationVariables>;
export const UnvoteCommentDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnvoteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unvoteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UnvoteCommentMutation, UnvoteCommentMutationVariables>;
export const UnvotePostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnvotePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unvotePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UnvotePostMutation, UnvotePostMutationVariables>;
export const UpdateCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExampleUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExampleWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCodeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}}]}}]}},...CodeExampleCardCodeExampleFragmentDoc.definitions]} as unknown as DocumentNode<UpdateCodeExampleMutation, UpdateCodeExampleMutationVariables>;
export const UpdateExperienceDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateExperience"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExperienceUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExperienceWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceCardExperience"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreateExperienceFragment"}}]}}]}}]}},...ExperienceCardExperienceFragmentDoc.definitions,...CreateExperienceFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UpdateExperienceMutation, UpdateExperienceMutationVariables>;
export const UpdatePostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}}]}}]}},...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const UpdatePostDraftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostDraftUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}}]}}]}},...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostDraftMutation, UpdatePostDraftMutationVariables>;
export const UpdateRepositoryDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RepositoryUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RepositoryWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateRepositoryMutation, UpdateRepositoryMutationVariables>;
export const UpdateUserFromGitHubDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserFromGitHub"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserFromGitHub"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserFromGitHubMutation, UpdateUserFromGitHubMutationVariables>;
export const UpdateUserInfoDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skills"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desiredSkills"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillWhereUniqueInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"skills"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skills"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateUserInfoSkill"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updateDesiredSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"skills"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desiredSkills"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UpdateUserInfoSkill"}}]}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UpdateUserInfoSkillFragmentDoc.definitions]} as unknown as DocumentNode<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;
export const UploadPostImageDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadPostImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadPostImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadPostImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<UploadPostImageMutation, UploadPostImageMutationVariables>;
export const UpvoteCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpvoteCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CodeExampleWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvoteCodeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpvoteCodeExampleMutation, UpvoteCodeExampleMutationVariables>;
export const UpvoteCommentDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpvoteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvoteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpvoteCommentMutation, UpvoteCommentMutationVariables>;
export const UpvotePostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpvotePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpvotePostMutation, UpvotePostMutationVariables>;
export const ViewPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ViewPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"viewers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ViewPostMutation, ViewPostMutationVariables>;
export const GetActivityFeedDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActivityFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activityFeed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardUserActivity"}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserActivityCardUserActivityFragmentDoc.definitions,...UserActivityCardHeaderUserActivityFragmentDoc.definitions,...UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragmentDoc.definitions,...CodeExampleCardCodeExampleFragmentDoc.definitions,...UserActivityCardCommentPostUserActivityCommentPostFragmentDoc.definitions,...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions,...UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragmentDoc.definitions,...UserActivityCardFollowSkillUserActivityFollowSkillFragmentDoc.definitions,...SkillFollowCardSkillFragmentDoc.definitions,...UserActivityCardFollowUserUserActivityFollowUserFragmentDoc.definitions,...UserFollowCardUserFragmentDoc.definitions,...UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragmentDoc.definitions,...UserActivityCardJoinedUserActivityJoinedFragmentDoc.definitions,...UserActivityCardPublishPostUserActivityPublishPostFragmentDoc.definitions,...UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragmentDoc.definitions,...UserActivityCardUpvotePostUserActivityUpvotePostFragmentDoc.definitions]} as unknown as DocumentNode<GetActivityFeedQuery, GetActivityFeedQueryVariables>;
export const GetChatDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageOffset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatRoomMessageChatMessage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"11"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},...ChatRoomMessageChatMessageFragmentDoc.definitions]} as unknown as DocumentNode<GetChatQuery, GetChatQueryVariables>;
export const GetChatMessagesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatMessageWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatRoomMessageChatMessage"}}]}}]}},...ChatRoomMessageChatMessageFragmentDoc.definitions]} as unknown as DocumentNode<GetChatMessagesQuery, GetChatMessagesQueryVariables>;
export const GetChatsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatCardChat"}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...ChatCardChatFragmentDoc.definitions]} as unknown as DocumentNode<GetChatsQuery, GetChatsQueryVariables>;
export const GetCodeExampleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCodeExample"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorName_urlSlug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"urlSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlSlug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"primarySkill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RepositorySearchResultGitHubRepository"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}}]}},...RepositorySearchResultGitHubRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<GetCodeExampleQuery, GetCodeExampleQueryVariables>;
export const GetCodeExampleCommentsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCodeExampleComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentOrderByInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"codeExampleTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeExample"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorName_urlSlug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"urlSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"codeExampleTitle"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentCardComment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}}]}},...CommentCardCommentFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCodeExampleCommentsQuery, GetCodeExampleCommentsQueryVariables>;
export const GetCommentRepliesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentReplies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentOrderByInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentCardComment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...CommentCardCommentFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCommentRepliesQuery, GetCommentRepliesQueryVariables>;
export const GetFollowableSkillsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFollowableSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followableSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_count"},"value":{"kind":"EnumValue","value":"Desc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"EnumValue","value":"Desc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"Desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActivityFeedFollowableSkillCardSkill"}}]}}]}}]}},...ActivityFeedFollowableSkillCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<GetFollowableSkillsQuery, GetFollowableSkillsQueryVariables>;
export const GetMyUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetMyUserQuery, GetMyUserQueryVariables>;
export const GetNotificationCountsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotificationCounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friendRequestsReceived"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"messages"},"name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"opened"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"ChatMessageReceived"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"opened"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetNotificationCountsQuery, GetNotificationCountsQueryVariables>;
export const GetNotificationsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCardNotification"}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...NotificationCardNotificationFragmentDoc.definitions,...NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragmentDoc.definitions,...NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragmentDoc.definitions,...NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragmentDoc.definitions,...NotificationCardPostCommentedNotificationPostCommentedFragmentDoc.definitions]} as unknown as DocumentNode<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const GetPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"urlSlug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"viewerUpvote"}}]}}]}},...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const GetPostCommentsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentOrderByInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorName_urlSlug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"urlSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postTitle"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentCardComment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}}]}},...CommentCardCommentFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPostCommentsQuery, GetPostCommentsQueryVariables>;
export const GetPostDraftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostDraft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postDraft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<GetPostDraftQuery, GetPostDraftQueryVariables>;
export const GetPostsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostOrderByInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}},...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetSiteWideSideDrawerDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSiteWideSideDrawer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"Desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteWideSideDrawerFollowable"}}]}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...SiteWideSideDrawerFollowableFragmentDoc.definitions,...SiteWideSideDrawerSkillFollowLinkSkillFragmentDoc.definitions,...SiteWideSideDrawerUserFollowLinkUserFragmentDoc.definitions]} as unknown as DocumentNode<GetSiteWideSideDrawerQuery, GetSiteWideSideDrawerQueryVariables>;
export const GetSkillCodeExamplesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillCodeExamples"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name_owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExamples"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...CodeExampleCardCodeExampleFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillCodeExamplesQuery, GetSkillCodeExamplesQueryVariables>;
export const GetSkillFollowersDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillFollowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name_owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFollowCardUser"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserFollowCardUserFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillFollowersQuery, GetSkillFollowersQueryVariables>;
export const GetSkillInfoSideBarDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillInfoSideBar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillInfoSideBarGitHubRepository"}}]}}]}}]}},...SkillInfoSideBarGitHubRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillInfoSideBarQuery, GetSkillInfoSideBarQueryVariables>;
export const GetSkillOwnerExperiencersDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillOwnerExperiencers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillOwner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositoryOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillOwner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"experiencers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFollowCardUser"}}]}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserFollowCardUserFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillOwnerExperiencersQuery, GetSkillOwnerExperiencersQueryVariables>;
export const GetSkillOwnerInfoSideBarDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillOwnerInfoSideBar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositoryOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillOwnerInfoSideBarGitHubRepositoryOwner"}}]}}]}}]}},...SkillOwnerInfoSideBarGitHubRepositoryOwnerFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillOwnerInfoSideBarQuery, GetSkillOwnerInfoSideBarQueryVariables>;
export const GetSkillOwnerRepositoriesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillOwnerRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillOwner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositoryOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillOwner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillOwnerRepositoryCardGitHubRepository"}}]}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...SkillOwnerRepositoryCardGitHubRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillOwnerRepositoriesQuery, GetSkillOwnerRepositoriesQueryVariables>;
export const GetSkillsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SkillOrderByInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name_owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCardSkill"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"NOT"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillCardSkill"}}]}}]}}]}},...SkillCardSkillFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetUserActivitiesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserActivities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActivityCardUserActivity"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserActivityCardUserActivityFragmentDoc.definitions,...UserActivityCardHeaderUserActivityFragmentDoc.definitions,...UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragmentDoc.definitions,...CodeExampleCardCodeExampleFragmentDoc.definitions,...UserActivityCardCommentPostUserActivityCommentPostFragmentDoc.definitions,...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions,...UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragmentDoc.definitions,...UserActivityCardFollowSkillUserActivityFollowSkillFragmentDoc.definitions,...SkillFollowCardSkillFragmentDoc.definitions,...UserActivityCardFollowUserUserActivityFollowUserFragmentDoc.definitions,...UserFollowCardUserFragmentDoc.definitions,...UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragmentDoc.definitions,...UserActivityCardJoinedUserActivityJoinedFragmentDoc.definitions,...UserActivityCardPublishPostUserActivityPublishPostFragmentDoc.definitions,...UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragmentDoc.definitions,...UserActivityCardUpvotePostUserActivityUpvotePostFragmentDoc.definitions]} as unknown as DocumentNode<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>;
export const GetUserCodeExamplesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCodeExamples"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExamples"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...CodeExampleCardCodeExampleFragmentDoc.definitions]} as unknown as DocumentNode<GetUserCodeExamplesQuery, GetUserCodeExamplesQueryVariables>;
export const GetUserExperiencesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserExperiences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"experiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startDate"},"value":{"kind":"EnumValue","value":"Desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceCardExperience"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreateExperienceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}}]}},...ExperienceCardExperienceFragmentDoc.definitions,...CreateExperienceFragmentFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetUserExperiencesQuery, GetUserExperiencesQueryVariables>;
export const GetUserFollowersDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFollowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFollowCardUser"}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserFollowCardUserFragmentDoc.definitions]} as unknown as DocumentNode<GetUserFollowersQuery, GetUserFollowersQueryVariables>;
export const GetUserFollowingDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFollowing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewerFollowing"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillFollowCardSkill"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFollowCardUser"}}]}}]}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...SkillFollowCardSkillFragmentDoc.definitions,...UserFollowCardUserFragmentDoc.definitions]} as unknown as DocumentNode<GetUserFollowingQuery, GetUserFollowingQueryVariables>;
export const GetUserFriendRequestCountDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFriendRequestCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friendRequestsReceived"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserFriendRequestCountQuery, GetUserFriendRequestCountQueryVariables>;
export const GetUserFriendRequestsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFriendRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"friendRequestsReceived"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFriendCardUser"}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserFriendCardUserFragmentDoc.definitions]} as unknown as DocumentNode<GetUserFriendRequestsQuery, GetUserFriendRequestsQueryVariables>;
export const GetUserFriendsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFriendCardUser"}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...UserFriendCardUserFragmentDoc.definitions]} as unknown as DocumentNode<GetUserFriendsQuery, GetUserFriendsQueryVariables>;
export const GetUserInfoSideBarDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserInfoSideBar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfoSideBarUser"}}]}}]}},...UserInfoSideBarUserFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions,...TopLanguagesFragmentDoc.definitions,...UserAvatarUserFragmentDoc.definitions]} as unknown as DocumentNode<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>;
export const GetUserOverviewDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeExamples"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CodeExampleCardCodeExample"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"experiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserOverviewExperienceCardExperience"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contributionCalendar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalContributions"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserGitHubContributionHeatmapGitHubUserContributionCalendar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"githubUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCardPost"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserOverviewRepositoryCardRepository"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trophies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"totalPostViews"}},{"kind":"Field","name":{"kind":"Name","value":"totalSkills"}},{"kind":"Field","name":{"kind":"Name","value":"totalUpvotes"}},{"kind":"Field","name":{"kind":"Name","value":"totalYearlyCommits"}},{"kind":"Field","name":{"kind":"Name","value":"totalYearlyPosts"}}]}}]}}]}},...CodeExampleCardCodeExampleFragmentDoc.definitions,...UserOverviewExperienceCardExperienceFragmentDoc.definitions,...UserGitHubContributionHeatmapGitHubUserContributionCalendarFragmentDoc.definitions,...PostCardPostFragmentDoc.definitions,...SkillCardSkillFragmentDoc.definitions,...UserOverviewRepositoryCardRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<GetUserOverviewQuery, GetUserOverviewQueryVariables>;
export const GetUserRepositoriesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RepositoryCardRepository"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}}]}}]}}]}},...RepositoryCardRepositoryFragmentDoc.definitions,...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetUserRepositoriesQuery, GetUserRepositoriesQueryVariables>;
export const OkDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]} as unknown as DocumentNode<OkQuery, OkQueryVariables>;
export const SuggestFriendsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestFriendsWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SuggestedFriendCardUser"}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions,...SuggestedFriendCardUserFragmentDoc.definitions]} as unknown as DocumentNode<SuggestFriendsQuery, SuggestFriendsQueryVariables>;
export const SuggestOrganizationsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestOrganizationsWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestOrganizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationSearchResultGitHubOrganization"}}]}}]}}]}},...OrganizationSearchResultGitHubOrganizationFragmentDoc.definitions]} as unknown as DocumentNode<SuggestOrganizationsQuery, SuggestOrganizationsQueryVariables>;
export const SuggestRepositoriesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestRepositoriesWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreateRepositoryFormOptionGitHubRepository"}}]}}]}}]}},...CreateRepositoryFormOptionGitHubRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<SuggestRepositoriesQuery, SuggestRepositoriesQueryVariables>;
export const SuggestSkillOwnersDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestSkillOwners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestSkillOwnersWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestSkillOwners"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SuggestSkillOwnersGitHubRepositoryOwner"}}]}}]}}]}},...SuggestSkillOwnersGitHubRepositoryOwnerFragmentDoc.definitions,...OrganizationSearchResultGitHubOrganizationFragmentDoc.definitions,...UserSearchResultGitHubUserFragmentDoc.definitions]} as unknown as DocumentNode<SuggestSkillOwnersQuery, SuggestSkillOwnersQueryVariables>;
export const SuggestSkillsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestSkillsWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RepositorySearchResultGitHubRepository"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...RepositorySearchResultGitHubRepositoryFragmentDoc.definitions]} as unknown as DocumentNode<SuggestSkillsQuery, SuggestSkillsQueryVariables>;
export const SuggestViewerFriendsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestViewerFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},...PageInfoFragmentFragmentDoc.definitions]} as unknown as DocumentNode<SuggestViewerFriendsQuery, SuggestViewerFriendsQueryVariables>;