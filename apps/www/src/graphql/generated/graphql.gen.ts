import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: Json;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type AcceptFriendshipPayload = MutationPayload & {
  readonly __typename: 'AcceptFriendshipPayload';
  readonly query: Query;
  readonly record: Friendship;
  readonly viewer?: Maybe<User>;
};

export type AddDesiredSkillMutationPayload = MutationPayload & {
  readonly __typename: 'AddDesiredSkillMutationPayload';
  readonly query: Query;
  readonly record: Skill;
  readonly viewer?: Maybe<User>;
};

export type AddSkillMutationPayload = MutationPayload & {
  readonly __typename: 'AddSkillMutationPayload';
  readonly query: Query;
  readonly record: Skill;
  readonly viewer?: Maybe<User>;
};

export type Chat = {
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

export type ChatMessage = {
  readonly __typename: 'ChatMessage';
  readonly chat: Chat;
  readonly chatId: Scalars['String'];
  readonly content: Scalars['Json'];
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
  readonly content: Scalars['Json'];
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

export type CodeExample = {
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

export type CodeExampleUpdateInput = {
  readonly content?: InputMaybe<Scalars['String']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly language?: InputMaybe<CodeLanguage>;
  readonly primarySkill?: InputMaybe<SkillWhereUniqueInput>;
  readonly skills?: InputMaybe<ReadonlyArray<SkillWhereUniqueInput>>;
  readonly title?: InputMaybe<Scalars['String']>;
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

export type Comment = {
  readonly __typename: 'Comment';
  readonly author: User;
  readonly authorId: Scalars['String'];
  readonly codeExample?: Maybe<CodeExample>;
  readonly codeExampleId?: Maybe<Scalars['String']>;
  readonly content?: Maybe<Scalars['Json']>;
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
  readonly content: Scalars['Json'];
  readonly parent?: InputMaybe<CommentWhereUniqueInput>;
};

export type CommentCodeExamplePayload = MutationPayload & {
  readonly __typename: 'CommentCodeExamplePayload';
  readonly query: Query;
  readonly record: Comment;
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
  readonly content: Scalars['Json'];
  readonly parent?: InputMaybe<CommentWhereUniqueInput>;
  readonly post: PostWhereUniqueInput;
};

export type CommentPostPayload = MutationPayload & {
  readonly __typename: 'CommentPostPayload';
  readonly query: Query;
  readonly record: Comment;
  readonly viewer?: Maybe<User>;
};

export type CommentUpdateInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
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
  readonly query: Query;
  readonly record: Chat;
  readonly viewer?: Maybe<User>;
};

export type CreateCodeExamplePayload = MutationPayload & {
  readonly __typename: 'CreateCodeExamplePayload';
  readonly query: Query;
  readonly record: CodeExample;
  readonly viewer?: Maybe<User>;
};

export type CreateExperiencePayload = MutationPayload & {
  readonly __typename: 'CreateExperiencePayload';
  readonly query: Query;
  readonly record: Experience;
  readonly viewer?: Maybe<User>;
};

export type CreatePostPayload = MutationPayload & {
  readonly __typename: 'CreatePostPayload';
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type CreateRepositoryPayload = MutationPayload & {
  readonly __typename: 'CreateRepositoryPayload';
  readonly query: Query;
  readonly record: Repository;
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
  readonly query: Query;
  readonly record: CodeExample;
  readonly viewer?: Maybe<User>;
};

export type DeleteCommentPayload = MutationPayload & {
  readonly __typename: 'DeleteCommentPayload';
  readonly query: Query;
  readonly record: Comment;
  readonly viewer?: Maybe<User>;
};

export type DeleteExperiencePayload = MutationPayload & {
  readonly __typename: 'DeleteExperiencePayload';
  readonly query: Query;
  readonly record: Experience;
  readonly viewer?: Maybe<User>;
};

export type DeleteFriendshipPayload = MutationPayload & {
  readonly __typename: 'DeleteFriendshipPayload';
  readonly query: Query;
  readonly record: Friendship;
  readonly viewer?: Maybe<User>;
};

export type DeletePostPayload = MutationPayload & {
  readonly __typename: 'DeletePostPayload';
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type DeleteRepositoryPayload = MutationPayload & {
  readonly __typename: 'DeleteRepositoryPayload';
  readonly query: Query;
  readonly record: Repository;
  readonly viewer?: Maybe<User>;
};

export type DownvoteCommentPayload = MutationPayload & {
  readonly __typename: 'DownvoteCommentPayload';
  readonly query: Query;
  readonly record: Comment;
  readonly viewer?: Maybe<User>;
};

export type EnumExperienceTypeNullableFilter = {
  readonly equals?: InputMaybe<ExperienceType>;
  readonly in?: InputMaybe<ReadonlyArray<ExperienceType>>;
  readonly notIn?: InputMaybe<ReadonlyArray<ExperienceType>>;
};

export type Experience = {
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

export type Follow = {
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
  readonly query: Query;
  readonly record: Follow;
  readonly viewer?: Maybe<User>;
};

export enum FollowType {
  Skill = 'Skill',
  User = 'User'
}

export type FollowUserPayload = MutationPayload & {
  readonly __typename: 'FollowUserPayload';
  readonly query: Query;
  readonly record: Follow;
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

export type Friendship = {
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

export type InviteToChatInput = {
  readonly users: UserWhereInput;
};

export type InviteToChatPayload = MutationPayload & {
  readonly __typename: 'InviteToChatPayload';
  readonly query: Query;
  readonly record: Chat;
  readonly viewer?: Maybe<User>;
};

export type LeaveChatPayload = MutationPayload & {
  readonly __typename: 'LeaveChatPayload';
  readonly query: Query;
  readonly record: Chat;
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
  data: UpvoteCommentInput;
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

export type MutationPayload = {
  readonly query: Query;
  readonly viewer?: Maybe<User>;
};

export type Notification = {
  readonly id: Scalars['ID'];
  readonly opened: Scalars['Boolean'];
  readonly type: NotificationType;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type NotificationChatMessageReceived = Notification & {
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

export type NotificationCodeExampleCommented = Notification & {
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

export type NotificationFriendshipAccepted = Notification & {
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

export type NotificationPostCommented = Notification & {
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
  readonly query: Query;
  readonly record: User;
  readonly viewer?: Maybe<User>;
};

export type OrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type Organization = {
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

export type Post = {
  readonly __typename: 'Post';
  readonly author: User;
  readonly authorName: Scalars['String'];
  readonly comments: CommentConnection;
  readonly content?: Maybe<Scalars['Json']>;
  readonly createdAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  readonly downvoters: UserConnection;
  readonly id: Scalars['ID'];
  readonly images: ReadonlyArray<PostImage>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  readonly readTime?: Maybe<Scalars['Int']>;
  readonly skills: SkillConnection;
  readonly thumbnailUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
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
  readonly content?: InputMaybe<Scalars['Json']>;
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

export type PostImage = {
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
  readonly content: Scalars['Json'];
  readonly description: Scalars['String'];
  readonly readTime?: InputMaybe<Scalars['Int']>;
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
  readonly thumbnailUrl: Scalars['String'];
  readonly title: Scalars['String'];
};

export type PostUpdateInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly readTime?: InputMaybe<Scalars['Int']>;
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
  readonly query: Query;
  readonly record: Post;
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
  readonly query: Query;
  readonly record: Friendship;
  readonly viewer?: Maybe<User>;
};

export type RemoveDesiredSkillMutationPayload = MutationPayload & {
  readonly __typename: 'RemoveDesiredSkillMutationPayload';
  readonly query: Query;
  readonly record: Skill;
  readonly viewer?: Maybe<User>;
};

export type RemovePostThumbnailPayload = MutationPayload & {
  readonly __typename: 'RemovePostThumbnailPayload';
  readonly query: Query;
  readonly record?: Maybe<Post>;
  readonly viewer?: Maybe<User>;
};

export type RemoveSkillMutationPayload = MutationPayload & {
  readonly __typename: 'RemoveSkillMutationPayload';
  readonly query: Query;
  readonly record: Skill;
  readonly viewer?: Maybe<User>;
};

export type Repository = WithGitHubRepository & {
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
  readonly query: Query;
  readonly record: Friendship;
  readonly viewer?: Maybe<User>;
};

export type SendChatMessagePayload = MutationPayload & {
  readonly __typename: 'SendChatMessagePayload';
  readonly query: Query;
  readonly record: ChatMessage;
  readonly viewer?: Maybe<User>;
};

export type Skill = Followable & WithGitHubRepository & {
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
  readonly query: Query;
  readonly record: Follow;
  readonly viewer?: Maybe<User>;
};

export type UnfollowUserPayload = MutationPayload & {
  readonly __typename: 'UnfollowUserPayload';
  readonly query: Query;
  readonly record: Follow;
  readonly viewer?: Maybe<User>;
};

export type UnvoteCodeExamplePayload = MutationPayload & {
  readonly __typename: 'UnvoteCodeExamplePayload';
  readonly query: Query;
  readonly record: CodeExample;
  readonly viewer?: Maybe<User>;
};

export type UnvoteCommentPayload = MutationPayload & {
  readonly __typename: 'UnvoteCommentPayload';
  readonly query: Query;
  readonly record: Comment;
  readonly viewer?: Maybe<User>;
};

export type UnvotePostPayload = MutationPayload & {
  readonly __typename: 'UnvotePostPayload';
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type UpdateCodeExamplePayload = MutationPayload & {
  readonly __typename: 'UpdateCodeExamplePayload';
  readonly query: Query;
  readonly record: CodeExample;
  readonly viewer?: Maybe<User>;
};

export type UpdateCommentPayload = MutationPayload & {
  readonly __typename: 'UpdateCommentPayload';
  readonly query: Query;
  readonly record: Comment;
  readonly viewer?: Maybe<User>;
};

export type UpdateDesiredSkillsInput = {
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
};

export type UpdateDesiredSkillsPayload = MutationPayload & {
  readonly __typename: 'UpdateDesiredSkillsPayload';
  readonly query: Query;
  readonly record: User;
  readonly viewer?: Maybe<User>;
};

export type UpdateExperiencePayload = MutationPayload & {
  readonly __typename: 'UpdateExperiencePayload';
  readonly query: Query;
  readonly record: Experience;
  readonly viewer?: Maybe<User>;
};

export type UpdatePostDraftPayload = MutationPayload & {
  readonly __typename: 'UpdatePostDraftPayload';
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type UpdatePostPayload = MutationPayload & {
  readonly __typename: 'UpdatePostPayload';
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type UpdateRepositoryPayload = MutationPayload & {
  readonly __typename: 'UpdateRepositoryPayload';
  readonly query: Query;
  readonly record: Repository;
  readonly viewer?: Maybe<User>;
};

export type UpdateSkillsInput = {
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
};

export type UpdateSkillsPayload = MutationPayload & {
  readonly __typename: 'UpdateSkillsPayload';
  readonly query: Query;
  readonly record: User;
  readonly viewer?: Maybe<User>;
};

export type UpdateUserFromGitHubPayload = MutationPayload & {
  readonly __typename: 'UpdateUserFromGitHubPayload';
  readonly query: Query;
  readonly record: User;
  readonly viewer?: Maybe<User>;
};

export type UploadPostImageInput = {
  /** The file of the image to be uploaded */
  readonly image: Scalars['Upload'];
};

export type UploadPostImagePayload = MutationPayload & {
  readonly __typename: 'UploadPostImagePayload';
  readonly query: Query;
  readonly record: PostImage;
  readonly viewer?: Maybe<User>;
};

export type UpvoteCodeExampleInput = {
  readonly upvote?: InputMaybe<Scalars['Boolean']>;
};

export type UpvoteCodeExamplePayload = MutationPayload & {
  readonly __typename: 'UpvoteCodeExamplePayload';
  readonly query: Query;
  readonly record: CodeExample;
  readonly viewer?: Maybe<User>;
};

export type UpvoteCommentInput = {
  readonly upvote?: InputMaybe<Scalars['Boolean']>;
};

export type UpvoteCommentPayload = MutationPayload & {
  readonly __typename: 'UpvoteCommentPayload';
  readonly query: Query;
  readonly record: Comment;
  readonly viewer?: Maybe<User>;
};

export type UpvotePostPayload = MutationPayload & {
  readonly __typename: 'UpvotePostPayload';
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type User = Followable & {
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

export type UserActivityCommentCodeExample = UserActivity & {
  readonly __typename: 'UserActivityCommentCodeExample';
  readonly comment: Comment;
  readonly commentId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityCommentPost = UserActivity & {
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

export type UserActivityCreateCodeExample = UserActivity & {
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

export type UserActivityFollowSkill = UserActivity & {
  readonly __typename: 'UserActivityFollowSkill';
  readonly follow: Follow;
  readonly followId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityFollowUser = UserActivity & {
  readonly __typename: 'UserActivityFollowUser';
  readonly follow: Follow;
  readonly followId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityFriendAcceptUser = UserActivity & {
  readonly __typename: 'UserActivityFriendAcceptUser';
  readonly friendship: Friendship;
  readonly friendshipId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityJoined = UserActivity & {
  readonly __typename: 'UserActivityJoined';
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityPublishPost = UserActivity & {
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

export type UserActivityUpvoteCodeExample = UserActivity & {
  readonly __typename: 'UserActivityUpvoteCodeExample';
  readonly codeExample: CodeExample;
  readonly codeExampleId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
  readonly userId: Scalars['String'];
};

export type UserActivityUpvotePost = UserActivity & {
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
  readonly query: Query;
  readonly record: Post;
  readonly viewer?: Maybe<User>;
};

export type WithGitHubRepository = {
  readonly github: GitHubRepository;
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type ActivityFeedFollowableSkillCardSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string } }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number } };

export type ChatCardChatFragment = { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } };

export type ChatRoomInviteFormChatFragment = { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly name: string }> } };

export type ChatRoomMessageChatMessageFragment = { readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type CodeExampleCardCodeExampleFragment = { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type CommentCardCommentFragment = { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type CommentRepliesCommentConnectionFragment = { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } };

export type CreateRepositoryFormOptionGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null, readonly repository?: { readonly __typename: 'Repository', readonly id: string } | null };

export type ExperienceCardExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null, readonly url: string } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } };

export type NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment = { readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } };

export type NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment = { readonly __typename: 'NotificationCodeExampleCommented', readonly codeExampleId: string, readonly id: string, readonly opened: boolean, readonly updatedAt: Date, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } } } };

export type NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment = { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } };

export type NotificationCardPostCommentedNotificationPostCommentedFragment = { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title?: string | null, readonly urlSlug: string } };

export type OrganizationSearchResultGitHubOrganizationFragment = { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly description?: string | null, readonly id: string, readonly login: string, readonly name?: string | null };

export type PageInfoFragmentFragment = { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null };

export type PostCardPostFragment = { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string } };

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

export type SuggestedFriendCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly posts: { readonly __typename: 'PostConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type TopLanguagesFragment = { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> };

export type UpdateExperienceFormExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null };

export type UpdateUserInfoSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string };

export type UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment = { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardCommentPostUserActivityCommentPostFragment = { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment = { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardFollowSkillUserActivityFollowSkillFragment = { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardFollowUserUserActivityFollowUserFragment = { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

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

export type UserActivityCardPublishPostUserActivityPublishPostFragment = { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment = { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserActivityCardUpvotePostUserActivityUpvotePostFragment = { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } };

export type UserAvatarUserFragment = { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null };

export type UserFollowCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserFriendCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserFriendRequestCardUserFragment = { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserGitHubContributionHeatmapGitHubUserContributionCalendarFragment = { readonly __typename: 'GitHubUserContributionCalendar', readonly totalContributions: number, readonly weeks: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarWeek', readonly contributionDays: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarDay', readonly contributionCount: number, readonly contributionLevel: GitHubUserContributionLevel, readonly date: Date, readonly weekday: number }> }> };

export type UserInfoSideBarUserFragment = { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFollowing: boolean, readonly viewerIsFriend: boolean, readonly image?: string | null, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number }, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null, readonly company?: string | null, readonly name?: string | null, readonly twitterUsername?: string | null, readonly url: string, readonly websiteUrl?: string | null, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserOverviewExperienceCardExperienceFragment = { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly name?: string | null } } };

export type UserOverviewRepositoryCardRepositoryFragment = { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly name: string, readonly pushedAt?: Date | null, readonly url: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> };

export type UserSearchResultGitHubUserFragment = { readonly __typename: 'GitHubUser', readonly avatarUrl: string, readonly bio?: string | null, readonly id: string, readonly login: string, readonly name?: string | null };

export type AddDesiredSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type AddDesiredSkillMutation = { readonly __typename: 'Mutation', readonly addDesiredSkill: { readonly __typename: 'AddDesiredSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record: { readonly __typename: 'Skill', readonly viewerSkill: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } } };

export type AddSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type AddSkillMutation = { readonly __typename: 'Mutation', readonly addSkill: { readonly __typename: 'AddSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record: { readonly __typename: 'Skill', readonly viewerSkill: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } } };

export type CommentCodeExampleMutationVariables = Exact<{
  data: CommentCodeExampleInput;
}>;


export type CommentCodeExampleMutation = { readonly __typename: 'Mutation', readonly commentCodeExample: { readonly __typename: 'CommentCodeExamplePayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly authorId: string, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly comments: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly parent?: { readonly __typename: 'Comment', readonly id: string, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null } } };

export type CommentPostMutationVariables = Exact<{
  data: CommentPostInput;
}>;


export type CommentPostMutation = { readonly __typename: 'Mutation', readonly commentPost: { readonly __typename: 'CommentPostPayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null, readonly authorId: string, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly parent?: { readonly __typename: 'Comment', readonly id: string, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null, readonly post?: { readonly __typename: 'Post', readonly id: string, readonly comments: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null } } };

export type CreateChatMutationVariables = Exact<{
  data: CreateChatInput;
}>;


export type CreateChatMutation = { readonly __typename: 'Mutation', readonly createChat: { readonly __typename: 'CreateChatPayload', readonly record: { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json }> }, readonly users: { readonly __typename: 'UserConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } }, readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly chats: { readonly __typename: 'ChatConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Chat', readonly id: string }> } } | null } } };

export type CreateCodeExampleMutationVariables = Exact<{
  data: CodeExampleCreateInput;
}>;


export type CreateCodeExampleMutation = { readonly __typename: 'Mutation', readonly createCodeExample: { readonly __typename: 'CreateCodeExamplePayload', readonly record: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } } };

export type CreateExperienceFragmentFragment = { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null, readonly name?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } };

export type CreateExperienceMutationVariables = Exact<{
  data: ExperienceCreateInput;
}>;


export type CreateExperienceMutation = { readonly __typename: 'Mutation', readonly createExperience: { readonly __typename: 'CreateExperiencePayload', readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly experiences: { readonly __typename: 'ExperienceConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string }> } } | null }, readonly record: { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null, readonly name?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } } } };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { readonly __typename: 'Mutation', readonly createPost: { readonly __typename: 'CreatePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly urlSlug: string } } };

export type CreateRepositoryMutationVariables = Exact<{
  data: RepositoryCreateInput;
}>;


export type CreateRepositoryMutation = { readonly __typename: 'Mutation', readonly createRepository: { readonly __typename: 'CreateRepositoryPayload', readonly record: { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly repositories: { readonly __typename: 'RepositoryConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string }> } } | null } } };

export type DeleteCodeExampleMutationVariables = Exact<{
  where: CodeExampleWhereUniqueInput;
}>;


export type DeleteCodeExampleMutation = { readonly __typename: 'Mutation', readonly deleteCodeExample: { readonly __typename: 'DeleteCodeExamplePayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record: { readonly __typename: 'CodeExample', readonly authorName: string, readonly id: string, readonly title: string, readonly urlSlug: string } } };

export type DeleteExperienceMutationVariables = Exact<{
  where: ExperienceWhereUniqueInput;
}>;


export type DeleteExperienceMutation = { readonly __typename: 'Mutation', readonly deleteExperience: { readonly __typename: 'DeleteExperiencePayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record: { readonly __typename: 'Experience', readonly id: string } } };

export type DeleteFriendshipMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteFriendshipMutation = { readonly __typename: 'Mutation', readonly deleteFriendship: { readonly __typename: 'DeleteFriendshipPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record: { readonly __typename: 'Friendship', readonly id: string, readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly id: string } } } };

export type DeletePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type DeletePostMutation = { readonly __typename: 'Mutation', readonly deletePost: { readonly __typename: 'DeletePostPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string } | null, readonly record: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title?: string | null, readonly urlSlug: string } } };

export type DeleteRepositoryMutationVariables = Exact<{
  where: RepositoryWhereUniqueInput;
}>;


export type DeleteRepositoryMutation = { readonly __typename: 'Mutation', readonly deleteRepository: { readonly __typename: 'DeleteRepositoryPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record: { readonly __typename: 'Repository', readonly id: string } } };

export type FollowSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type FollowSkillMutation = { readonly __typename: 'Mutation', readonly followSkill: { readonly __typename: 'FollowUserPayload', readonly record: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean } | { readonly __typename: 'User' } } } };

export type FollowUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FollowUserMutation = { readonly __typename: 'Mutation', readonly followUser: { readonly __typename: 'FollowUserPayload', readonly record: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill' } | { readonly __typename: 'User', readonly id: string, readonly viewerFollowing: boolean } } } };

export type FriendRequestUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FriendRequestUserMutation = { readonly __typename: 'Mutation', readonly requestFriendship: { readonly __typename: 'RequestFriendshipPayload', readonly record: { readonly __typename: 'Friendship', readonly id: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly viewerFriended: boolean } } } };

export type InviteToChatMutationVariables = Exact<{
  data: InviteToChatInput;
  where: ChatWhereUniqueInput;
}>;


export type InviteToChatMutation = { readonly __typename: 'Mutation', readonly inviteToChat: { readonly __typename: 'InviteToChatPayload', readonly record: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } } };

export type LeaveChatMutationVariables = Exact<{
  chatId: Scalars['String'];
}>;


export type LeaveChatMutation = { readonly __typename: 'Mutation', readonly leaveChat: { readonly __typename: 'LeaveChatPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record: { readonly __typename: 'Chat', readonly id: string } } };

export type OpenNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type OpenNotificationsMutation = { readonly __typename: 'Mutation', readonly openNotifications: { readonly __typename: 'OpenNotificationsPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly notifications: { readonly __typename: 'NotificationConnection', readonly totalCount: number } } } };

export type PublishPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostPublishInput;
}>;


export type PublishPostMutation = { readonly __typename: 'Mutation', readonly publishPost: { readonly __typename: 'PublishPostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly content?: Json | null, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly urlSlug: string } } };

export type RejectFriendshipMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type RejectFriendshipMutation = { readonly __typename: 'Mutation', readonly rejectFriendship: { readonly __typename: 'RejectFriendshipPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null, readonly record: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string } } } };

export type RemoveBothSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type RemoveBothSkillMutation = { readonly __typename: 'Mutation', readonly removeDesiredSkill: { readonly __typename: 'RemoveDesiredSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } }, readonly removeSkill: { readonly __typename: 'RemoveSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } } };

export type RemovePostThumbnailMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type RemovePostThumbnailMutation = { readonly __typename: 'Mutation', readonly removePostThumbnail: { readonly __typename: 'RemovePostThumbnailPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly thumbnailUrl?: string | null } | null } };

export type RemoveSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type RemoveSkillMutation = { readonly __typename: 'Mutation', readonly removeSkill: { readonly __typename: 'RemoveSkillMutationPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string }> } } | null, readonly record: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } } };

export type SendChatMessageMutationVariables = Exact<{
  data: ChatMessageCreateInput;
  where: ChatWhereUniqueInput;
}>;


export type SendChatMessageMutation = { readonly __typename: 'Mutation', readonly sendChatMessage: { readonly __typename: 'SendChatMessagePayload', readonly record: { readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } } };

export type UnfollowSkillMutationVariables = Exact<{
  where: SkillWhereUniqueInput;
}>;


export type UnfollowSkillMutation = { readonly __typename: 'Mutation', readonly unfollowSkill: { readonly __typename: 'UnfollowSkillPayload', readonly record: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly viewerFollowing: boolean } | { readonly __typename: 'User' } } } };

export type UnfollowUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UnfollowUserMutation = { readonly __typename: 'Mutation', readonly unfollowUser: { readonly __typename: 'UnfollowUserPayload', readonly record: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill' } | { readonly __typename: 'User', readonly id: string, readonly viewerFollowing: boolean } } } };

export type UnfriendUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UnfriendUserMutation = { readonly __typename: 'Mutation', readonly deleteFriendship: { readonly __typename: 'DeleteFriendshipPayload', readonly record: { readonly __typename: 'Friendship', readonly id: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFriended: boolean, readonly viewerIsFriend: boolean }, readonly friending: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFriended: boolean, readonly viewerIsFriend: boolean } } } };

export type UnvoteCodeExampleMutationVariables = Exact<{
  where: CodeExampleWhereUniqueInput;
}>;


export type UnvoteCodeExampleMutation = { readonly __typename: 'Mutation', readonly unvoteCodeExample: { readonly __typename: 'UnvoteCodeExamplePayload', readonly record: { readonly __typename: 'CodeExample', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly upvoters: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string }> } } } };

export type UnvoteCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type UnvoteCommentMutation = { readonly __typename: 'Mutation', readonly unvoteComment: { readonly __typename: 'UnvoteCommentPayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } } };

export type UnvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UnvotePostMutation = { readonly __typename: 'Mutation', readonly unvotePost: { readonly __typename: 'UnvotePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly upvoters: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string }> } } } };

export type UpdateCodeExampleMutationVariables = Exact<{
  data: CodeExampleUpdateInput;
  where: CodeExampleWhereUniqueInput;
}>;


export type UpdateCodeExampleMutation = { readonly __typename: 'Mutation', readonly updateCodeExample: { readonly __typename: 'UpdateCodeExamplePayload', readonly record: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } } };

export type UpdateExperienceMutationVariables = Exact<{
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
}>;


export type UpdateExperienceMutation = { readonly __typename: 'Mutation', readonly updateExperience: { readonly __typename: 'UpdateExperiencePayload', readonly record: { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null, readonly name?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } } } };

export type UpdatePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { readonly __typename: 'Mutation', readonly updatePost: { readonly __typename: 'UpdatePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly content?: Json | null, readonly description?: string | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null } } };

export type UpdatePostDraftMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostDraftUpdateInput;
}>;


export type UpdatePostDraftMutation = { readonly __typename: 'Mutation', readonly updatePostDraft: { readonly __typename: 'UpdatePostDraftPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly content?: Json | null, readonly description?: string | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null } } };

export type UpdateRepositoryMutationVariables = Exact<{
  data: RepositoryUpdateInput;
  where: RepositoryWhereUniqueInput;
}>;


export type UpdateRepositoryMutation = { readonly __typename: 'Mutation', readonly updateRepository: { readonly __typename: 'UpdateRepositoryPayload', readonly record: { readonly __typename: 'Repository', readonly id: string, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } };

export type UpdateUserFromGitHubMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateUserFromGitHubMutation = { readonly __typename: 'Mutation', readonly updateUserFromGitHub: { readonly __typename: 'UpdateUserFromGitHubPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly description?: string | null, readonly image?: string | null, readonly name: string } } };

export type UpdateUserInfoMutationVariables = Exact<{
  skills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
  desiredSkills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
}>;


export type UpdateUserInfoMutation = { readonly __typename: 'Mutation', readonly updateSkills: { readonly __typename: 'UpdateSkillsPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly updateDesiredSkills: { readonly __typename: 'UpdateDesiredSkillsPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } } };

export type UploadPostImageMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: UploadPostImageInput;
}>;


export type UploadPostImageMutation = { readonly __typename: 'Mutation', readonly uploadPostImage: { readonly __typename: 'UploadPostImagePayload', readonly record: { readonly __typename: 'PostImage', readonly id: string, readonly url: string } } };

export type UpvoteCodeExampleMutationVariables = Exact<{
  where: CodeExampleWhereUniqueInput;
}>;


export type UpvoteCodeExampleMutation = { readonly __typename: 'Mutation', readonly upvoteCodeExample: { readonly __typename: 'UpvoteCodeExamplePayload', readonly record: { readonly __typename: 'CodeExample', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly upvoters: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string }> } } } };

export type UpvoteCommentMutationVariables = Exact<{
  data: UpvoteCommentInput;
  where: CommentWhereUniqueInput;
}>;


export type UpvoteCommentMutation = { readonly __typename: 'Mutation', readonly upvoteComment: { readonly __typename: 'UpvoteCommentPayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } } };

export type UpvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UpvotePostMutation = { readonly __typename: 'Mutation', readonly upvotePost: { readonly __typename: 'UpvotePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly upvoters: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string }> } } } };

export type ViewPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type ViewPostMutation = { readonly __typename: 'Mutation', readonly viewPost: { readonly __typename: 'ViewPostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly viewers: { readonly __typename: 'UserConnection', readonly totalCount: number } } } };

export type GetActivityFeedQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetActivityFeedQuery = { readonly __typename: 'Query', readonly activityFeed: { readonly __typename: 'UserActivityConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserActivityEdge', readonly cursor: string, readonly node: { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string } | { readonly __typename: 'UserActivityCommentPost', readonly id: string } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string } | { readonly __typename: 'UserActivityFollowUser', readonly id: string } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string } | { readonly __typename: 'UserActivityJoined', readonly id: string } | { readonly __typename: 'UserActivityPublishPost', readonly id: string } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly friendshipId: string, readonly updatedAt: Date, readonly userId: string, readonly friendship: { readonly __typename: 'Friendship', readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> } };

export type GetChatQueryVariables = Exact<{
  where: ChatWhereUniqueInput;
  messageLimit?: InputMaybe<Scalars['Int']>;
  messageOffset?: InputMaybe<Scalars['Int']>;
}>;


export type GetChatQuery = { readonly __typename: 'Query', readonly chat?: { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ChatMessageEdge', readonly cursor: string, readonly node: { readonly __typename: 'ChatMessage', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } | null };

export type GetChatMessagesQueryVariables = Exact<{
  where: ChatMessageWhereInput;
}>;


export type GetChatMessagesQuery = { readonly __typename: 'Query', readonly chatMessages: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> };

export type GetChatsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
}>;


export type GetChatsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly chats: { readonly __typename: 'ChatConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'ChatEdge', readonly cursor: string, readonly node: { readonly __typename: 'Chat', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } }> } } | null };

export type GetCodeExampleQueryVariables = Exact<{
  authorName: Scalars['String'];
  urlSlug: Scalars['String'];
}>;


export type GetCodeExampleQuery = { readonly __typename: 'Query', readonly codeExample?: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly content: string, readonly description?: string | null, readonly language: CodeLanguage, readonly title: string, readonly updatedAt: Date, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null };

export type GetCodeExampleCommentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  codeExampleTitle: Scalars['String'];
  userName: Scalars['String'];
}>;


export type GetCodeExampleCommentsQuery = { readonly __typename: 'Query', readonly comments: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } };

export type GetCommentRepliesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: CommentWhereUniqueInput;
}>;


export type GetCommentRepliesQuery = { readonly __typename: 'Query', readonly comment?: { readonly __typename: 'Comment', readonly id: string, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } } | null };

export type GetExperiencesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: ExperienceWhereInput;
}>;


export type GetExperiencesQuery = { readonly __typename: 'Query', readonly experiences: { readonly __typename: 'ExperienceConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ExperienceEdge', readonly cursor: string, readonly node: { readonly __typename: 'Experience', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly highlights: ReadonlyArray<string>, readonly location?: string | null, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organizationName: string, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null, readonly url: string, readonly description?: string | null } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } };

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


export type GetNotificationsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly notifications: { readonly __typename: 'NotificationConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'NotificationEdge', readonly cursor: string, readonly node: { readonly __typename: 'NotificationChatMessageReceived', readonly id: string } | { readonly __typename: 'NotificationCodeExampleCommented', readonly id: string } | { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string } | { readonly __typename: 'NotificationPostCommented', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }> } } } | { readonly __typename: 'NotificationCodeExampleCommented', readonly id: string, readonly codeExampleId: string, readonly opened: boolean, readonly updatedAt: Date, readonly codeExample: { readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly title: string, readonly urlSlug: string, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } } } } | { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } } | { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title?: string | null, readonly urlSlug: string } }> } } | null };

export type GetPostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetPostQuery = { readonly __typename: 'Query', readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly content?: Json | null, readonly description?: string | null, readonly publishedAt?: Date | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly thumbnailUrl?: string | null, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null };

export type GetPostCommentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  postTitle: Scalars['String'];
  userName: Scalars['String'];
}>;


export type GetPostCommentsQuery = { readonly __typename: 'Query', readonly comments: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly content?: Json | null, readonly createdAt: Date, readonly postId?: string | null, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } };

export type GetPostDraftQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostDraftQuery = { readonly __typename: 'Query', readonly postDraft?: { readonly __typename: 'Post', readonly id: string, readonly content?: Json | null, readonly description?: string | null, readonly title?: string | null, readonly thumbnailUrl?: string | null } | null };

export type GetPostsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<PostOrderByInput> | PostOrderByInput>;
  where: PostWhereInput;
}>;


export type GetPostsQuery = { readonly __typename: 'Query', readonly posts: { readonly __typename: 'PostConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } };

export type GetRepositoriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: RepositoryWhereInput;
}>;


export type GetRepositoriesQuery = { readonly __typename: 'Query', readonly repositories: { readonly __typename: 'RepositoryConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'RepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'Repository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null } } };

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


export type GetUserActivitiesQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly activities: { readonly __typename: 'UserActivityConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserActivityEdge', readonly cursor: string, readonly node: { readonly __typename: 'UserActivityCommentCodeExample', readonly id: string } | { readonly __typename: 'UserActivityCommentPost', readonly id: string } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string } | { readonly __typename: 'UserActivityFollowUser', readonly id: string } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string } | { readonly __typename: 'UserActivityJoined', readonly id: string } | { readonly __typename: 'UserActivityPublishPost', readonly id: string } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'UserActivityCommentCodeExample', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly codeExampleId?: string | null, readonly codeExample?: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCommentPost', readonly id: string, readonly commentId: string, readonly updatedAt: Date, readonly userId: string, readonly comment: { readonly __typename: 'Comment', readonly id: string, readonly postId?: string | null, readonly post?: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityCreateCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowSkill', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null, readonly spdxId?: string | null, readonly url?: string | null } | null, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null } } | { readonly __typename: 'User', readonly viewerFollowing: boolean } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFollowUser', readonly id: string, readonly followId: string, readonly updatedAt: Date, readonly userId: string, readonly follow: { readonly __typename: 'Follow', readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean } | { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityFriendAcceptUser', readonly id: string, readonly friendshipId: string, readonly updatedAt: Date, readonly userId: string, readonly friendship: { readonly __typename: 'Friendship', readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityJoined', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityPublishPost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvoteCodeExample', readonly id: string, readonly updatedAt: Date, readonly userId: string, readonly codeExample: { readonly __typename: 'CodeExample', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } } | { readonly __typename: 'UserActivityUpvotePost', readonly id: string, readonly postId: string, readonly updatedAt: Date, readonly userId: string, readonly post: { readonly __typename: 'Post', readonly authorName: string, readonly description?: string | null, readonly id: string, readonly publishedAt?: Date | null, readonly readTime?: number | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string } }> } } | null };

export type GetUserCodeExamplesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserCodeExamplesQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly codeExamples: { readonly __typename: 'CodeExampleConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'CodeExampleEdge', readonly cursor: string, readonly node: { readonly __typename: 'CodeExample', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null };

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


export type GetUserOverviewQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly createdAt: Date, readonly githubUrl: string, readonly name: string, readonly codeExamples: { readonly __typename: 'CodeExampleConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CodeExampleEdge', readonly cursor: string, readonly node: { readonly __typename: 'CodeExample', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'CodeExample', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly language: CodeLanguage, readonly languageColor: string, readonly title: string, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null, readonly name: string }, readonly primarySkill: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string } } }, readonly skills: { readonly __typename: 'SkillConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> }, readonly experiences: { readonly __typename: 'ExperienceConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'ExperienceEdge', readonly cursor: string, readonly node: { readonly __typename: 'Experience', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly name?: string | null } } }> }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly contributionCalendar: { readonly __typename: 'GitHubUserContributionCalendar', readonly totalContributions: number, readonly weeks: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarWeek', readonly contributionDays: ReadonlyArray<{ readonly __typename: 'GitHubUserContributionCalendarDay', readonly contributionCount: number, readonly contributionLevel: GitHubUserContributionLevel, readonly date: Date, readonly weekday: number }> }> } }, readonly posts: { readonly __typename: 'PostConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly repositories: { readonly __typename: 'RepositoryConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'RepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'Repository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null, readonly name: string, readonly pushedAt?: Date | null, readonly url: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null, readonly id: string, readonly name: string } | null }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }> }, readonly trophies: { readonly __typename: 'UserTrophies', readonly id: string, readonly totalFollowers: number, readonly totalPostViews: number, readonly totalSkills: number, readonly totalUpvotes: number, readonly totalYearlyCommits: number, readonly totalYearlyPosts: number } } | null };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename: 'Query', readonly ok: boolean };

export type SuggestFriendsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestFriendsWhereInput;
}>;


export type SuggestFriendsQuery = { readonly __typename: 'Query', readonly suggestFriends: { readonly __typename: 'UserConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null, readonly id: string, readonly image?: string | null, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly posts: { readonly __typename: 'PostConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null, readonly publishedAt?: Date | null, readonly thumbnailUrl?: string | null, readonly title?: string | null, readonly upvotes: number, readonly urlSlug: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } };

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

export const ActivityFeedFollowableSkillCardSkillFragmentDoc = /*#__PURE__*/ gql`
    fragment ActivityFeedFollowableSkillCardSkill on Skill {
  id
  github {
    id
    owner {
      id
      avatarUrl
    }
  }
  name
  owner
  users {
    totalCount
  }
  viewerFollowing
}
    `;
export const ChatCardChatFragmentDoc = /*#__PURE__*/ gql`
    fragment ChatCardChat on Chat {
  id
  messages(first: 1) {
    nodes {
      id
      content
      createdAt
      sender {
        id
        name
      }
    }
  }
  users(first: 6) {
    totalCount
    nodes {
      id
      image
      name
    }
  }
}
    `;
export const ChatRoomInviteFormChatFragmentDoc = /*#__PURE__*/ gql`
    fragment ChatRoomInviteFormChat on Chat {
  id
  users {
    nodes {
      id
      name
    }
  }
}
    `;
export const ChatRoomMessageChatMessageFragmentDoc = /*#__PURE__*/ gql`
    fragment ChatRoomMessageChatMessage on ChatMessage {
  id
  content
  sender {
    id
    image
    name
  }
  createdAt
}
    `;
export const CodeExampleCardCodeExampleFragmentDoc = /*#__PURE__*/ gql`
    fragment CodeExampleCardCodeExample on CodeExample {
  id
  author {
    id
    image
    name
  }
  authorName
  description
  language
  languageColor
  primarySkill {
    github {
      id
      name
      owner {
        id
        avatarUrl
        login
      }
    }
    id
    name
    owner
  }
  skills(first: 5) {
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  title
  upvotes
  urlSlug
  viewerUpvote
}
    `;
export const CommentCardCommentFragmentDoc = /*#__PURE__*/ gql`
    fragment CommentCardComment on Comment {
  __typename
  id
  author {
    __typename
    id
    image
    name
  }
  codeExampleId
  content
  createdAt
  postId
  updatedAt
  upvotes
  viewerUpvote
}
    `;
export const PageInfoFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment PageInfoFragment on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const CommentRepliesCommentConnectionFragmentDoc = /*#__PURE__*/ gql`
    fragment CommentRepliesCommentConnection on CommentConnection {
  __typename
  edges {
    __typename
    cursor
    node {
      __typename
      id
    }
  }
  nodes {
    __typename
    id
    ...CommentCardComment
  }
  totalCount
  pageInfo {
    __typename
    ...PageInfoFragment
  }
}
    ${CommentCardCommentFragmentDoc}
${PageInfoFragmentFragmentDoc}`;
export const CreateRepositoryFormOptionGitHubRepositoryFragmentDoc = /*#__PURE__*/ gql`
    fragment CreateRepositoryFormOptionGitHubRepository on GitHubRepository {
  __typename
  id
  description
  forkCount
  issueCount
  licenseInfo {
    __typename
    id
    name
    nickname
    spdxId
    url
  }
  name
  primaryLanguage {
    __typename
    color
    id
    name
  }
  pullRequestCount
  pushedAt
  repository {
    __typename
    id
  }
  stargazerCount
}
    `;
export const ExperienceCardExperienceFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceCardExperience on Experience {
  __typename
  endDate
  highlights
  id
  location
  organization {
    __typename
    id
    github {
      __typename
      avatarUrl
      id
      login
      name
      url
    }
  }
  positionName
  startDate
  type
  user {
    id
    name
  }
}
    `;
export const NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragmentDoc = /*#__PURE__*/ gql`
    fragment NotificationCardChatMessageReceivedNotificationChatMessageReceived on NotificationChatMessageReceived {
  id
  chat {
    id
    users(first: 3) {
      totalCount
      nodes {
        id
        image
        name
      }
    }
  }
  chatId
  opened
  updatedAt
}
    `;
export const NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragmentDoc = /*#__PURE__*/ gql`
    fragment NotificationCardCodeExampleCommentedNotificationCodeExampleCommented on NotificationCodeExampleCommented {
  codeExample {
    id
    authorName
    primarySkill {
      github {
        id
        name
        owner {
          id
          avatarUrl
          login
        }
      }
      id
      name
      owner
    }
    title
    urlSlug
  }
  codeExampleId
  id
  opened
  updatedAt
}
    `;
export const NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragmentDoc = /*#__PURE__*/ gql`
    fragment NotificationCardFriendshipAcceptedNotificationFriendshipAccepted on NotificationFriendshipAccepted {
  id
  opened
  friendship {
    id
    friender {
      id
      image
      name
    }
    frienderId
  }
  friendshipId
  updatedAt
}
    `;
export const NotificationCardPostCommentedNotificationPostCommentedFragmentDoc = /*#__PURE__*/ gql`
    fragment NotificationCardPostCommentedNotificationPostCommented on NotificationPostCommented {
  id
  opened
  post {
    id
    authorName
    title
    urlSlug
  }
  postId
  updatedAt
}
    `;
export const PostCardPostFragmentDoc = /*#__PURE__*/ gql`
    fragment PostCardPost on Post {
  id
  author {
    id
    name
  }
  authorName
  description
  publishedAt
  thumbnailUrl
  title
  upvotes
  urlSlug
  viewerUpvote
}
    `;
export const RepositoryCardRepositoryFragmentDoc = /*#__PURE__*/ gql`
    fragment RepositoryCardRepository on Repository {
  __typename
  id
  github {
    __typename
    id
    description
    forkCount
    issueCount
    licenseInfo {
      __typename
      id
      name
      nickname
      spdxId
      url
    }
    name
    owner {
      id
      avatarUrl
      login
    }
    primaryLanguage {
      __typename
      color
      id
      name
    }
    pullRequestCount
    pushedAt
    stargazerCount
    url
  }
  name
  skills {
    __typename
    id
    name
    owner
  }
}
    `;
export const RepositorySearchResultGitHubRepositoryFragmentDoc = /*#__PURE__*/ gql`
    fragment RepositorySearchResultGitHubRepository on GitHubRepository {
  description
  forkCount
  id
  name
  owner {
    __typename
    avatarUrl
    id
    login
    ... on GitHubOrganization {
      name
    }
    ... on GitHubUser {
      name
    }
  }
  primaryLanguage {
    color
    id
    name
  }
  stargazerCount
}
    `;
export const SiteWideSideDrawerSkillFollowLinkSkillFragmentDoc = /*#__PURE__*/ gql`
    fragment SiteWideSideDrawerSkillFollowLinkSkill on Skill {
  github {
    id
    owner {
      __typename
      avatarUrl
      id
    }
  }
  id
  name
  owner
}
    `;
export const SiteWideSideDrawerUserFollowLinkUserFragmentDoc = /*#__PURE__*/ gql`
    fragment SiteWideSideDrawerUserFollowLinkUser on User {
  id
  image
  name
}
    `;
export const SiteWideSideDrawerFollowableFragmentDoc = /*#__PURE__*/ gql`
    fragment SiteWideSideDrawerFollowable on Followable {
  __typename
  viewerFollowing
  ... on Skill {
    ...SiteWideSideDrawerSkillFollowLinkSkill
  }
  ... on User {
    ...SiteWideSideDrawerUserFollowLinkUser
  }
}
    ${SiteWideSideDrawerSkillFollowLinkSkillFragmentDoc}
${SiteWideSideDrawerUserFollowLinkUserFragmentDoc}`;
export const SkillCardSkillFragmentDoc = /*#__PURE__*/ gql`
    fragment SkillCardSkill on Skill {
  id
  github {
    id
    description
    forkCount
    issueCount
    licenseInfo {
      __typename
      id
      name
      nickname
      spdxId
      url
    }
    name
    owner {
      id
      avatarUrl
      login
    }
    primaryLanguage {
      __typename
      color
      id
      name
    }
    pullRequestCount
    pushedAt
    stargazerCount
    url
  }
  name
  owner
}
    `;
export const SkillFollowCardSkillFragmentDoc = /*#__PURE__*/ gql`
    fragment SkillFollowCardSkill on Skill {
  id
  name
  owner
  github {
    __typename
    id
    description
    forkCount
    issueCount
    licenseInfo {
      __typename
      id
      name
      nickname
      spdxId
      url
    }
    name
    owner {
      id
      avatarUrl
      login
    }
    primaryLanguage {
      __typename
      color
      id
      name
    }
    pullRequestCount
    pushedAt
    stargazerCount
    url
  }
  viewerFollowing
}
    `;
export const SkillInfoSideBarGitHubRepositoryFragmentDoc = /*#__PURE__*/ gql`
    fragment SkillInfoSideBarGitHubRepository on GitHubRepository {
  id
  description
  forkCount
  issueCount
  licenseInfo {
    id
    name
    nickname
    spdxId
    url
  }
  name
  owner {
    avatarUrl
    id
    login
    url
    ... on GitHubOrganization {
      twitterUsername
      websiteUrl
    }
    ... on GitHubUser {
      twitterUsername
      websiteUrl
    }
  }
  primaryLanguage {
    color
    id
    name
  }
  pullRequestCount
  pushedAt
  skill {
    id
    followers(first: 0) {
      totalCount
    }
    name
    owner
    viewerDesiredSkill
    viewerFollowing
    viewerSkill
  }
  stargazerCount
  url
}
    `;
export const SkillOwnerInfoSideBarGitHubRepositoryOwnerFragmentDoc = /*#__PURE__*/ gql`
    fragment SkillOwnerInfoSideBarGitHubRepositoryOwner on GitHubRepositoryOwner {
  avatarUrl
  id
  login
  url
  ... on GitHubOrganization {
    description
    name
    twitterUsername
    websiteUrl
  }
  ... on GitHubUser {
    bio
    name
    twitterUsername
    websiteUrl
  }
}
    `;
export const SkillOwnerRepositoryCardGitHubRepositoryFragmentDoc = /*#__PURE__*/ gql`
    fragment SkillOwnerRepositoryCardGitHubRepository on GitHubRepository {
  __typename
  id
  description
  forkCount
  name
  primaryLanguage {
    color
    id
    name
  }
  skill {
    id
    viewerFollowing
    viewerSkill
  }
  stargazerCount
  url
}
    `;
export const OrganizationSearchResultGitHubOrganizationFragmentDoc = /*#__PURE__*/ gql`
    fragment OrganizationSearchResultGitHubOrganization on GitHubOrganization {
  avatarUrl
  description
  id
  login
  name
}
    `;
export const UserSearchResultGitHubUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserSearchResultGitHubUser on GitHubUser {
  avatarUrl
  bio
  id
  login
  name
}
    `;
export const SuggestSkillOwnersGitHubRepositoryOwnerFragmentDoc = /*#__PURE__*/ gql`
    fragment SuggestSkillOwnersGitHubRepositoryOwner on GitHubRepositoryOwner {
  __typename
  id
  ... on GitHubOrganization {
    ...OrganizationSearchResultGitHubOrganization
  }
  ... on GitHubUser {
    ...UserSearchResultGitHubUser
  }
}
    ${OrganizationSearchResultGitHubOrganizationFragmentDoc}
${UserSearchResultGitHubUserFragmentDoc}`;
export const SuggestedFriendCardUserFragmentDoc = /*#__PURE__*/ gql`
    fragment SuggestedFriendCardUser on User {
  __typename
  description
  desiredSkills(first: 6) {
    totalCount
    nodes {
      id
      name
      owner
    }
  }
  id
  image
  name
  posts(first: 1) {
    nodes {
      id
      authorName
      description
      publishedAt
      thumbnailUrl
      title
      upvotes
      urlSlug
    }
  }
  skills(first: 6) {
    totalCount
    nodes {
      id
      name
      owner
    }
  }
}
    `;
export const UpdateExperienceFormExperienceFragmentDoc = /*#__PURE__*/ gql`
    fragment UpdateExperienceFormExperience on Experience {
  endDate
  highlights
  id
  location
  organizationName
  positionName
  startDate
  type
}
    `;
export const UpdateUserInfoSkillFragmentDoc = /*#__PURE__*/ gql`
    fragment UpdateUserInfoSkill on Skill {
  __typename
  id
  name
  owner
}
    `;
export const UserActivityCardHeaderUserActivityFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardHeaderUserActivity on UserActivity {
  id
  updatedAt
  user {
    id
    image
    name
  }
  userId
}
    `;
export const UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardCommentCodeExampleUserActivityCommentCodeExample on UserActivityCommentCodeExample {
  id
  comment {
    id
    codeExample {
      authorName
      description
      id
      language
      languageColor
      primarySkill {
        github {
          id
          name
          owner {
            id
            avatarUrl
            login
          }
        }
        id
        name
        owner
      }
      skills(first: 5) {
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
          name
          owner
        }
      }
      title
      upvotes
      urlSlug
      viewerUpvote
    }
    codeExampleId
  }
  commentId
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardCommentPostUserActivityCommentPostFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardCommentPostUserActivityCommentPost on UserActivityCommentPost {
  id
  comment {
    id
    post {
      authorName
      description
      id
      publishedAt
      readTime
      skills(first: 5) {
        totalCount
        nodes {
          id
          name
          owner
        }
      }
      thumbnailUrl
      title
      upvotes
      urlSlug
      viewerUpvote
    }
    postId
  }
  commentId
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardCreateCodeExampleUserActivityCreateCodeExample on UserActivityCreateCodeExample {
  id
  codeExample {
    authorName
    description
    id
    language
    languageColor
    primarySkill {
      github {
        id
        name
        owner {
          id
          avatarUrl
          login
        }
      }
      id
      name
      owner
    }
    skills(first: 5) {
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        name
        owner
      }
    }
    title
    upvotes
    urlSlug
    viewerUpvote
  }
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardFollowSkillUserActivityFollowSkillFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardFollowSkillUserActivityFollowSkill on UserActivityFollowSkill {
  id
  follow {
    following {
      viewerFollowing
      ... on Skill {
        id
        name
        owner
        github {
          __typename
          id
          description
          forkCount
          issueCount
          licenseInfo {
            __typename
            id
            name
            nickname
            spdxId
            url
          }
          name
          owner {
            id
            avatarUrl
            login
          }
          primaryLanguage {
            __typename
            color
            id
            name
          }
          pullRequestCount
          pushedAt
          stargazerCount
          url
        }
      }
    }
  }
  followId
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardFollowUserUserActivityFollowUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardFollowUserUserActivityFollowUser on UserActivityFollowUser {
  id
  follow {
    following {
      viewerFollowing
      ... on User {
        description
        desiredSkills(first: 6) {
          __typename
          pageInfo {
            ...PageInfoFragment
          }
          totalCount
          edges {
            cursor
            node {
              id
            }
          }
          nodes {
            id
            name
            owner
          }
        }
        id
        image
        name
        skills(first: 6) {
          __typename
          pageInfo {
            ...PageInfoFragment
          }
          totalCount
          edges {
            cursor
            node {
              id
            }
          }
          nodes {
            id
            name
            owner
          }
        }
      }
    }
  }
  followId
  ...UserActivityCardHeaderUserActivity
}
    ${PageInfoFragmentFragmentDoc}
${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardFriendAcceptUserUserActivityFriendAcceptUser on UserActivityFriendAcceptUser {
  id
  friendship {
    friending {
      description
      desiredSkills(first: 6) {
        __typename
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
          name
          owner
        }
      }
      id
      image
      name
      skills(first: 6) {
        __typename
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
          name
          owner
        }
      }
      viewerFollowing
    }
    friendingId
  }
  friendshipId
  ...UserActivityCardHeaderUserActivity
}
    ${PageInfoFragmentFragmentDoc}
${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardJoinedUserActivityJoinedFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardJoinedUserActivityJoined on UserActivityJoined {
  id
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardPublishPostUserActivityPublishPostFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardPublishPostUserActivityPublishPost on UserActivityPublishPost {
  id
  post {
    authorName
    description
    id
    publishedAt
    readTime
    skills(first: 6) {
      totalCount
      nodes {
        id
        name
        owner
      }
    }
    thumbnailUrl
    title
    upvotes
    urlSlug
    viewerUpvote
  }
  postId
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExample on UserActivityUpvoteCodeExample {
  id
  codeExample {
    authorName
    description
    id
    language
    languageColor
    primarySkill {
      github {
        id
        name
        owner {
          id
          avatarUrl
          login
        }
      }
      id
      name
      owner
    }
    skills(first: 5) {
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        name
        owner
      }
    }
    title
    upvotes
    urlSlug
    viewerUpvote
  }
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserActivityCardUpvotePostUserActivityUpvotePostFragmentDoc = /*#__PURE__*/ gql`
    fragment UserActivityCardUpvotePostUserActivityUpvotePost on UserActivityUpvotePost {
  id
  post {
    authorName
    description
    id
    publishedAt
    readTime
    skills(first: 6) {
      totalCount
      nodes {
        id
        name
        owner
      }
    }
    thumbnailUrl
    title
    upvotes
    urlSlug
    viewerUpvote
  }
  postId
  ...UserActivityCardHeaderUserActivity
}
    ${UserActivityCardHeaderUserActivityFragmentDoc}`;
export const UserFollowCardUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserFollowCardUser on User {
  description
  desiredSkills(first: 6) {
    __typename
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  id
  image
  name
  skills(first: 6) {
    __typename
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  viewerFollowing
}
    ${PageInfoFragmentFragmentDoc}`;
export const UserFriendCardUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserFriendCardUser on User {
  description
  desiredSkills(first: 6) {
    __typename
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  id
  image
  name
  skills(first: 6) {
    __typename
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  viewerIsFriend
}
    ${PageInfoFragmentFragmentDoc}`;
export const UserFriendRequestCardUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserFriendRequestCardUser on User {
  description
  desiredSkills(first: 6) {
    __typename
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  id
  image
  name
  skills(first: 6) {
    __typename
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  viewerIsFriend
}
    ${PageInfoFragmentFragmentDoc}`;
export const UserGitHubContributionHeatmapGitHubUserContributionCalendarFragmentDoc = /*#__PURE__*/ gql`
    fragment UserGitHubContributionHeatmapGitHubUserContributionCalendar on GitHubUserContributionCalendar {
  totalContributions
  weeks {
    contributionDays {
      contributionCount
      contributionLevel
      date
      weekday
    }
  }
}
    `;
export const TopLanguagesFragmentDoc = /*#__PURE__*/ gql`
    fragment TopLanguages on TopLanguages {
  __typename
  nodes {
    __typename
    name
    color
    size
  }
  totalCount
  totalSize
}
    `;
export const UserAvatarUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserAvatarUser on User {
  __typename
  id
  name
  image
}
    `;
export const UserInfoSideBarUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserInfoSideBarUser on User {
  desiredSkills(first: 100) {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  followers(first: 0) {
    totalCount
  }
  following(first: 0) {
    totalCount
  }
  friends(first: 0) {
    totalCount
  }
  github {
    id
    bio
    company
    name
    topLanguages {
      ...TopLanguages
    }
    twitterUsername
    url
    websiteUrl
  }
  id
  name
  skills(first: 100) {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      owner
    }
  }
  viewerCanFriend
  viewerFollowing
  viewerIsFriend
  ...UserAvatarUser
}
    ${PageInfoFragmentFragmentDoc}
${TopLanguagesFragmentDoc}
${UserAvatarUserFragmentDoc}`;
export const UserOverviewExperienceCardExperienceFragmentDoc = /*#__PURE__*/ gql`
    fragment UserOverviewExperienceCardExperience on Experience {
  id
  endDate
  organization {
    id
    github {
      id
      avatarUrl
      name
    }
    name
  }
  organizationName
  positionName
  startDate
  type
}
    `;
export const UserOverviewRepositoryCardRepositoryFragmentDoc = /*#__PURE__*/ gql`
    fragment UserOverviewRepositoryCardRepository on Repository {
  id
  github {
    id
    description
    name
    owner {
      id
      login
    }
    primaryLanguage {
      color
      id
      name
    }
    pushedAt
    url
  }
  name
  skills {
    id
    name
    owner
  }
}
    `;
export const CreateExperienceFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment CreateExperienceFragment on Experience {
  id
  endDate
  highlights
  location
  organization {
    id
    github {
      id
      avatarUrl
      login
      url
      description
      name
    }
    name
  }
  organizationName
  positionName
  startDate
  type
  user {
    id
    name
  }
}
    `;
export const AddDesiredSkillDocument = /*#__PURE__*/ gql`
    mutation AddDesiredSkill($where: SkillWhereUniqueInput!) {
  addDesiredSkill(where: $where) {
    viewer {
      id
      skills(first: 100) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
    }
    record {
      ...SkillFollowCardSkill
      viewerSkill
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SkillFollowCardSkillFragmentDoc}`;

export function useAddDesiredSkillMutation() {
  return Urql.useMutation<AddDesiredSkillMutation, AddDesiredSkillMutationVariables>(AddDesiredSkillDocument);
};
export const AddSkillDocument = /*#__PURE__*/ gql`
    mutation AddSkill($where: SkillWhereUniqueInput!) {
  addSkill(where: $where) {
    viewer {
      id
      skills(first: 100) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
    }
    record {
      ...SkillFollowCardSkill
      viewerSkill
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SkillFollowCardSkillFragmentDoc}`;

export function useAddSkillMutation() {
  return Urql.useMutation<AddSkillMutation, AddSkillMutationVariables>(AddSkillDocument);
};
export const CommentCodeExampleDocument = /*#__PURE__*/ gql`
    mutation CommentCodeExample($data: CommentCodeExampleInput!) {
  commentCodeExample(data: $data) {
    record {
      id
      codeExample {
        id
        comments {
          ...CommentRepliesCommentConnection
        }
      }
      codeExampleId
      content
      author {
        id
        name
      }
      authorId
      parent {
        id
        replies {
          ...CommentRepliesCommentConnection
        }
      }
      updatedAt
      upvotes
      viewerUpvote
    }
  }
}
    ${CommentRepliesCommentConnectionFragmentDoc}`;

export function useCommentCodeExampleMutation() {
  return Urql.useMutation<CommentCodeExampleMutation, CommentCodeExampleMutationVariables>(CommentCodeExampleDocument);
};
export const CommentPostDocument = /*#__PURE__*/ gql`
    mutation CommentPost($data: CommentPostInput!) {
  commentPost(data: $data) {
    record {
      id
      content
      author {
        id
        name
      }
      authorId
      parent {
        id
        replies {
          ...CommentRepliesCommentConnection
        }
      }
      post {
        id
        comments {
          ...CommentRepliesCommentConnection
        }
      }
      postId
      updatedAt
      upvotes
      viewerUpvote
    }
  }
}
    ${CommentRepliesCommentConnectionFragmentDoc}`;

export function useCommentPostMutation() {
  return Urql.useMutation<CommentPostMutation, CommentPostMutationVariables>(CommentPostDocument);
};
export const CreateChatDocument = /*#__PURE__*/ gql`
    mutation CreateChat($data: CreateChatInput!) {
  createChat(data: $data) {
    record {
      id
      messages(first: 1) {
        nodes {
          id
          content
        }
      }
      users(first: 10) {
        nodes {
          id
          image
          name
        }
      }
    }
    query {
      viewer {
        id
        chats(first: 20) {
          nodes {
            id
          }
        }
      }
    }
  }
}
    `;

export function useCreateChatMutation() {
  return Urql.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument);
};
export const CreateCodeExampleDocument = /*#__PURE__*/ gql`
    mutation CreateCodeExample($data: CodeExampleCreateInput!) {
  createCodeExample(data: $data) {
    record {
      ...CodeExampleCardCodeExample
    }
  }
}
    ${CodeExampleCardCodeExampleFragmentDoc}`;

export function useCreateCodeExampleMutation() {
  return Urql.useMutation<CreateCodeExampleMutation, CreateCodeExampleMutationVariables>(CreateCodeExampleDocument);
};
export const CreateExperienceDocument = /*#__PURE__*/ gql`
    mutation CreateExperience($data: ExperienceCreateInput!) {
  createExperience(data: $data) {
    query {
      viewer {
        id
        experiences(first: 100) {
          nodes {
            id
          }
        }
      }
    }
    record {
      ...CreateExperienceFragment
    }
  }
}
    ${CreateExperienceFragmentFragmentDoc}`;

export function useCreateExperienceMutation() {
  return Urql.useMutation<CreateExperienceMutation, CreateExperienceMutationVariables>(CreateExperienceDocument);
};
export const CreatePostDocument = /*#__PURE__*/ gql`
    mutation CreatePost {
  createPost {
    record {
      id
      urlSlug
    }
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const CreateRepositoryDocument = /*#__PURE__*/ gql`
    mutation CreateRepository($data: RepositoryCreateInput!) {
  createRepository(data: $data) {
    record {
      ...RepositoryCardRepository
    }
    query {
      viewer {
        id
        repositories(first: 100) {
          nodes {
            id
          }
        }
      }
    }
  }
}
    ${RepositoryCardRepositoryFragmentDoc}`;

export function useCreateRepositoryMutation() {
  return Urql.useMutation<CreateRepositoryMutation, CreateRepositoryMutationVariables>(CreateRepositoryDocument);
};
export const DeleteCodeExampleDocument = /*#__PURE__*/ gql`
    mutation DeleteCodeExample($where: CodeExampleWhereUniqueInput!) {
  deleteCodeExample(where: $where) {
    viewer {
      id
      name
    }
    record {
      authorName
      id
      title
      urlSlug
    }
  }
}
    `;

export function useDeleteCodeExampleMutation() {
  return Urql.useMutation<DeleteCodeExampleMutation, DeleteCodeExampleMutationVariables>(DeleteCodeExampleDocument);
};
export const DeleteExperienceDocument = /*#__PURE__*/ gql`
    mutation DeleteExperience($where: ExperienceWhereUniqueInput!) {
  deleteExperience(where: $where) {
    viewer {
      id
      name
    }
    record {
      id
    }
  }
}
    `;

export function useDeleteExperienceMutation() {
  return Urql.useMutation<DeleteExperienceMutation, DeleteExperienceMutationVariables>(DeleteExperienceDocument);
};
export const DeleteFriendshipDocument = /*#__PURE__*/ gql`
    mutation DeleteFriendship($where: UserWhereUniqueInput!) {
  deleteFriendship(where: $where) {
    viewer {
      id
    }
    record {
      id
      friending {
        id
      }
      friendingId
    }
  }
}
    `;

export function useDeleteFriendshipMutation() {
  return Urql.useMutation<DeleteFriendshipMutation, DeleteFriendshipMutationVariables>(DeleteFriendshipDocument);
};
export const DeletePostDocument = /*#__PURE__*/ gql`
    mutation DeletePost($where: PostWhereUniqueInput!) {
  deletePost(where: $where) {
    viewer {
      id
      name
    }
    record {
      id
      authorName
      title
      urlSlug
    }
  }
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const DeleteRepositoryDocument = /*#__PURE__*/ gql`
    mutation DeleteRepository($where: RepositoryWhereUniqueInput!) {
  deleteRepository(where: $where) {
    viewer {
      id
    }
    record {
      id
    }
  }
}
    `;

export function useDeleteRepositoryMutation() {
  return Urql.useMutation<DeleteRepositoryMutation, DeleteRepositoryMutationVariables>(DeleteRepositoryDocument);
};
export const FollowSkillDocument = /*#__PURE__*/ gql`
    mutation FollowSkill($where: SkillWhereUniqueInput!) {
  followSkill(where: $where) {
    record {
      following {
        ... on Skill {
          id
          viewerFollowing
        }
      }
    }
  }
}
    `;

export function useFollowSkillMutation() {
  return Urql.useMutation<FollowSkillMutation, FollowSkillMutationVariables>(FollowSkillDocument);
};
export const FollowUserDocument = /*#__PURE__*/ gql`
    mutation FollowUser($where: UserWhereUniqueInput!) {
  followUser(where: $where) {
    record {
      following {
        ... on User {
          id
          viewerFollowing
        }
      }
    }
  }
}
    `;

export function useFollowUserMutation() {
  return Urql.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument);
};
export const FriendRequestUserDocument = /*#__PURE__*/ gql`
    mutation FriendRequestUser($where: UserWhereUniqueInput!) {
  requestFriendship(where: $where) {
    record {
      id
      friender {
        id
        viewerFriended
      }
    }
  }
}
    `;

export function useFriendRequestUserMutation() {
  return Urql.useMutation<FriendRequestUserMutation, FriendRequestUserMutationVariables>(FriendRequestUserDocument);
};
export const InviteToChatDocument = /*#__PURE__*/ gql`
    mutation InviteToChat($data: InviteToChatInput!, $where: ChatWhereUniqueInput!) {
  inviteToChat(data: $data, where: $where) {
    record {
      id
      users(first: 11) {
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
          image
          name
        }
      }
    }
  }
}
    `;

export function useInviteToChatMutation() {
  return Urql.useMutation<InviteToChatMutation, InviteToChatMutationVariables>(InviteToChatDocument);
};
export const LeaveChatDocument = /*#__PURE__*/ gql`
    mutation LeaveChat($chatId: String!) {
  leaveChat(where: {id: $chatId}) {
    viewer {
      id
    }
    record {
      id
    }
  }
}
    `;

export function useLeaveChatMutation() {
  return Urql.useMutation<LeaveChatMutation, LeaveChatMutationVariables>(LeaveChatDocument);
};
export const OpenNotificationsDocument = /*#__PURE__*/ gql`
    mutation OpenNotifications {
  openNotifications {
    record {
      id
      notifications(first: 0, where: {opened: false}) {
        totalCount
      }
    }
  }
}
    `;

export function useOpenNotificationsMutation() {
  return Urql.useMutation<OpenNotificationsMutation, OpenNotificationsMutationVariables>(OpenNotificationsDocument);
};
export const PublishPostDocument = /*#__PURE__*/ gql`
    mutation PublishPost($where: PostWhereUniqueInput!, $data: PostPublishInput!) {
  publishPost(where: $where, data: $data) {
    record {
      id
      authorName
      content
      description
      publishedAt
      thumbnailUrl
      title
      urlSlug
    }
  }
}
    `;

export function usePublishPostMutation() {
  return Urql.useMutation<PublishPostMutation, PublishPostMutationVariables>(PublishPostDocument);
};
export const RejectFriendshipDocument = /*#__PURE__*/ gql`
    mutation RejectFriendship($where: UserWhereUniqueInput!) {
  rejectFriendship(where: $where) {
    viewer {
      id
    }
    record {
      id
      friender {
        id
      }
      frienderId
    }
  }
}
    `;

export function useRejectFriendshipMutation() {
  return Urql.useMutation<RejectFriendshipMutation, RejectFriendshipMutationVariables>(RejectFriendshipDocument);
};
export const RemoveBothSkillDocument = /*#__PURE__*/ gql`
    mutation RemoveBothSkill($where: SkillWhereUniqueInput!) {
  removeDesiredSkill(where: $where) {
    viewer {
      id
      skills(first: 100) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
    }
    record {
      ...SkillFollowCardSkill
    }
  }
  removeSkill(where: $where) {
    viewer {
      id
      skills(first: 100) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
    }
    record {
      ...SkillFollowCardSkill
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SkillFollowCardSkillFragmentDoc}`;

export function useRemoveBothSkillMutation() {
  return Urql.useMutation<RemoveBothSkillMutation, RemoveBothSkillMutationVariables>(RemoveBothSkillDocument);
};
export const RemovePostThumbnailDocument = /*#__PURE__*/ gql`
    mutation RemovePostThumbnail($where: PostWhereUniqueInput!) {
  removePostThumbnail(where: $where) {
    record {
      id
      thumbnailUrl
    }
  }
}
    `;

export function useRemovePostThumbnailMutation() {
  return Urql.useMutation<RemovePostThumbnailMutation, RemovePostThumbnailMutationVariables>(RemovePostThumbnailDocument);
};
export const RemoveSkillDocument = /*#__PURE__*/ gql`
    mutation RemoveSkill($where: SkillWhereUniqueInput!) {
  removeSkill(where: $where) {
    viewer {
      id
      skills(first: 100) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
    }
    record {
      ...SkillFollowCardSkill
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SkillFollowCardSkillFragmentDoc}`;

export function useRemoveSkillMutation() {
  return Urql.useMutation<RemoveSkillMutation, RemoveSkillMutationVariables>(RemoveSkillDocument);
};
export const SendChatMessageDocument = /*#__PURE__*/ gql`
    mutation SendChatMessage($data: ChatMessageCreateInput!, $where: ChatWhereUniqueInput!) {
  sendChatMessage(data: $data, where: $where) {
    record {
      ...ChatRoomMessageChatMessage
    }
  }
}
    ${ChatRoomMessageChatMessageFragmentDoc}`;

export function useSendChatMessageMutation() {
  return Urql.useMutation<SendChatMessageMutation, SendChatMessageMutationVariables>(SendChatMessageDocument);
};
export const UnfollowSkillDocument = /*#__PURE__*/ gql`
    mutation UnfollowSkill($where: SkillWhereUniqueInput!) {
  unfollowSkill(where: $where) {
    record {
      following {
        ... on Skill {
          id
          viewerFollowing
        }
      }
    }
  }
}
    `;

export function useUnfollowSkillMutation() {
  return Urql.useMutation<UnfollowSkillMutation, UnfollowSkillMutationVariables>(UnfollowSkillDocument);
};
export const UnfollowUserDocument = /*#__PURE__*/ gql`
    mutation UnfollowUser($where: UserWhereUniqueInput!) {
  unfollowUser(where: $where) {
    record {
      following {
        ... on User {
          id
          viewerFollowing
        }
      }
    }
  }
}
    `;

export function useUnfollowUserMutation() {
  return Urql.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument);
};
export const UnfriendUserDocument = /*#__PURE__*/ gql`
    mutation UnfriendUser($where: UserWhereUniqueInput!) {
  deleteFriendship(where: $where) {
    record {
      id
      friender {
        id
        name
        viewerCanFriend
        viewerFriended
        viewerIsFriend
      }
      friending {
        id
        name
        viewerCanFriend
        viewerFriended
        viewerIsFriend
      }
    }
  }
}
    `;

export function useUnfriendUserMutation() {
  return Urql.useMutation<UnfriendUserMutation, UnfriendUserMutationVariables>(UnfriendUserDocument);
};
export const UnvoteCodeExampleDocument = /*#__PURE__*/ gql`
    mutation UnvoteCodeExample($where: CodeExampleWhereUniqueInput!) {
  unvoteCodeExample(where: $where) {
    record {
      id
      upvotes
      upvoters(first: 6) {
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
      viewerUpvote
    }
  }
}
    `;

export function useUnvoteCodeExampleMutation() {
  return Urql.useMutation<UnvoteCodeExampleMutation, UnvoteCodeExampleMutationVariables>(UnvoteCodeExampleDocument);
};
export const UnvoteCommentDocument = /*#__PURE__*/ gql`
    mutation UnvoteComment($where: CommentWhereUniqueInput!) {
  unvoteComment(where: $where) {
    record {
      __typename
      id
      ...CommentCardComment
    }
  }
}
    ${CommentCardCommentFragmentDoc}`;

export function useUnvoteCommentMutation() {
  return Urql.useMutation<UnvoteCommentMutation, UnvoteCommentMutationVariables>(UnvoteCommentDocument);
};
export const UnvotePostDocument = /*#__PURE__*/ gql`
    mutation UnvotePost($where: PostWhereUniqueInput!) {
  unvotePost(where: $where) {
    record {
      id
      upvotes
      upvoters(first: 6) {
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
      viewerUpvote
    }
  }
}
    `;

export function useUnvotePostMutation() {
  return Urql.useMutation<UnvotePostMutation, UnvotePostMutationVariables>(UnvotePostDocument);
};
export const UpdateCodeExampleDocument = /*#__PURE__*/ gql`
    mutation UpdateCodeExample($data: CodeExampleUpdateInput!, $where: CodeExampleWhereUniqueInput!) {
  updateCodeExample(data: $data, where: $where) {
    record {
      ...CodeExampleCardCodeExample
    }
  }
}
    ${CodeExampleCardCodeExampleFragmentDoc}`;

export function useUpdateCodeExampleMutation() {
  return Urql.useMutation<UpdateCodeExampleMutation, UpdateCodeExampleMutationVariables>(UpdateCodeExampleDocument);
};
export const UpdateExperienceDocument = /*#__PURE__*/ gql`
    mutation UpdateExperience($data: ExperienceUpdateInput!, $where: ExperienceWhereUniqueInput!) {
  updateExperience(data: $data, where: $where) {
    record {
      ...CreateExperienceFragment
    }
  }
}
    ${CreateExperienceFragmentFragmentDoc}`;

export function useUpdateExperienceMutation() {
  return Urql.useMutation<UpdateExperienceMutation, UpdateExperienceMutationVariables>(UpdateExperienceDocument);
};
export const UpdatePostDocument = /*#__PURE__*/ gql`
    mutation UpdatePost($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
  updatePost(where: $where, data: $data) {
    record {
      id
      content
      description
      readTime
      thumbnailUrl
    }
  }
}
    `;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const UpdatePostDraftDocument = /*#__PURE__*/ gql`
    mutation UpdatePostDraft($where: PostWhereUniqueInput!, $data: PostDraftUpdateInput!) {
  updatePostDraft(where: $where, data: $data) {
    record {
      id
      content
      description
      readTime
      thumbnailUrl
      title
    }
  }
}
    `;

export function useUpdatePostDraftMutation() {
  return Urql.useMutation<UpdatePostDraftMutation, UpdatePostDraftMutationVariables>(UpdatePostDraftDocument);
};
export const UpdateRepositoryDocument = /*#__PURE__*/ gql`
    mutation UpdateRepository($data: RepositoryUpdateInput!, $where: RepositoryWhereUniqueInput!) {
  updateRepository(data: $data, where: $where) {
    record {
      id
      skills {
        id
        name
        owner
      }
    }
  }
}
    `;

export function useUpdateRepositoryMutation() {
  return Urql.useMutation<UpdateRepositoryMutation, UpdateRepositoryMutationVariables>(UpdateRepositoryDocument);
};
export const UpdateUserFromGitHubDocument = /*#__PURE__*/ gql`
    mutation UpdateUserFromGitHub {
  updateUserFromGitHub {
    record {
      id
      description
      image
      name
    }
  }
}
    `;

export function useUpdateUserFromGitHubMutation() {
  return Urql.useMutation<UpdateUserFromGitHubMutation, UpdateUserFromGitHubMutationVariables>(UpdateUserFromGitHubDocument);
};
export const UpdateUserInfoDocument = /*#__PURE__*/ gql`
    mutation UpdateUserInfo($skills: [SkillWhereUniqueInput!]!, $desiredSkills: [SkillWhereUniqueInput!]!) {
  updateSkills(data: {skills: $skills}) {
    record {
      __typename
      id
      skills(first: 1) {
        pageInfo {
          ...PageInfoFragment
        }
        edges {
          cursor
          node {
            __typename
            id
          }
        }
        nodes {
          ...UpdateUserInfoSkill
        }
      }
    }
  }
  updateDesiredSkills(data: {skills: $desiredSkills}) {
    record {
      __typename
      id
      skills(first: 1) {
        pageInfo {
          ...PageInfoFragment
        }
        edges {
          cursor
          node {
            __typename
            id
          }
        }
        nodes {
          ...UpdateUserInfoSkill
        }
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${UpdateUserInfoSkillFragmentDoc}`;

export function useUpdateUserInfoMutation() {
  return Urql.useMutation<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>(UpdateUserInfoDocument);
};
export const UploadPostImageDocument = /*#__PURE__*/ gql`
    mutation UploadPostImage($where: PostWhereUniqueInput!, $data: UploadPostImageInput!) {
  uploadPostImage(where: $where, data: $data) {
    record {
      id
      url
    }
  }
}
    `;

export function useUploadPostImageMutation() {
  return Urql.useMutation<UploadPostImageMutation, UploadPostImageMutationVariables>(UploadPostImageDocument);
};
export const UpvoteCodeExampleDocument = /*#__PURE__*/ gql`
    mutation UpvoteCodeExample($where: CodeExampleWhereUniqueInput!) {
  upvoteCodeExample(where: $where) {
    record {
      id
      upvotes
      upvoters(first: 6) {
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
      viewerUpvote
    }
  }
}
    `;

export function useUpvoteCodeExampleMutation() {
  return Urql.useMutation<UpvoteCodeExampleMutation, UpvoteCodeExampleMutationVariables>(UpvoteCodeExampleDocument);
};
export const UpvoteCommentDocument = /*#__PURE__*/ gql`
    mutation UpvoteComment($data: UpvoteCommentInput!, $where: CommentWhereUniqueInput!) {
  upvoteComment(data: $data, where: $where) {
    record {
      __typename
      id
      ...CommentCardComment
    }
  }
}
    ${CommentCardCommentFragmentDoc}`;

export function useUpvoteCommentMutation() {
  return Urql.useMutation<UpvoteCommentMutation, UpvoteCommentMutationVariables>(UpvoteCommentDocument);
};
export const UpvotePostDocument = /*#__PURE__*/ gql`
    mutation UpvotePost($where: PostWhereUniqueInput!) {
  upvotePost(where: $where) {
    record {
      id
      upvotes
      upvoters(first: 6) {
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          id
        }
      }
      viewerUpvote
    }
  }
}
    `;

export function useUpvotePostMutation() {
  return Urql.useMutation<UpvotePostMutation, UpvotePostMutationVariables>(UpvotePostDocument);
};
export const ViewPostDocument = /*#__PURE__*/ gql`
    mutation ViewPost($where: PostWhereUniqueInput!) {
  viewPost(where: $where) {
    record {
      id
      viewers(first: 0) {
        totalCount
      }
    }
  }
}
    `;

export function useViewPostMutation() {
  return Urql.useMutation<ViewPostMutation, ViewPostMutationVariables>(ViewPostDocument);
};
export const GetActivityFeedDocument = /*#__PURE__*/ gql`
    query GetActivityFeed($after: String, $first: Int) {
  activityFeed(after: $after, first: $first) {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      ...UserActivityCardHeaderUserActivity
      ... on UserActivityCommentCodeExample {
        ...UserActivityCardCommentCodeExampleUserActivityCommentCodeExample
      }
      ... on UserActivityCommentPost {
        ...UserActivityCardCommentPostUserActivityCommentPost
      }
      ... on UserActivityCreateCodeExample {
        ...UserActivityCardCreateCodeExampleUserActivityCreateCodeExample
      }
      ... on UserActivityFollowSkill {
        ...UserActivityCardFollowSkillUserActivityFollowSkill
      }
      ... on UserActivityFollowUser {
        ...UserActivityCardFollowUserUserActivityFollowUser
      }
      ... on UserActivityFriendAcceptUser {
        ...UserActivityCardFriendAcceptUserUserActivityFriendAcceptUser
      }
      ... on UserActivityJoined {
        ...UserActivityCardJoinedUserActivityJoined
      }
      ... on UserActivityPublishPost {
        ...UserActivityCardPublishPostUserActivityPublishPost
      }
      ... on UserActivityUpvoteCodeExample {
        ...UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExample
      }
      ... on UserActivityUpvotePost {
        ...UserActivityCardUpvotePostUserActivityUpvotePost
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserActivityCardHeaderUserActivityFragmentDoc}
${UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragmentDoc}
${UserActivityCardCommentPostUserActivityCommentPostFragmentDoc}
${UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragmentDoc}
${UserActivityCardFollowSkillUserActivityFollowSkillFragmentDoc}
${UserActivityCardFollowUserUserActivityFollowUserFragmentDoc}
${UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragmentDoc}
${UserActivityCardJoinedUserActivityJoinedFragmentDoc}
${UserActivityCardPublishPostUserActivityPublishPostFragmentDoc}
${UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragmentDoc}
${UserActivityCardUpvotePostUserActivityUpvotePostFragmentDoc}`;

export function useGetActivityFeedQuery(options?: Omit<Urql.UseQueryArgs<GetActivityFeedQueryVariables>, 'query'>) {
  return Urql.useQuery<GetActivityFeedQuery>({ query: GetActivityFeedDocument, ...options });
};
export const GetChatDocument = /*#__PURE__*/ gql`
    query GetChat($where: ChatWhereUniqueInput!, $messageLimit: Int, $messageOffset: Int) {
  chat(where: $where) {
    id
    messages(first: $messageLimit, offset: $messageOffset) {
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...ChatRoomMessageChatMessage
      }
    }
    users(first: 11) {
      totalCount
      nodes {
        id
        image
        name
      }
    }
  }
}
    ${ChatRoomMessageChatMessageFragmentDoc}`;

export function useGetChatQuery(options: Omit<Urql.UseQueryArgs<GetChatQueryVariables>, 'query'>) {
  return Urql.useQuery<GetChatQuery>({ query: GetChatDocument, ...options });
};
export const GetChatMessagesDocument = /*#__PURE__*/ gql`
    query GetChatMessages($where: ChatMessageWhereInput!) {
  chatMessages(where: $where) {
    ...ChatRoomMessageChatMessage
  }
}
    ${ChatRoomMessageChatMessageFragmentDoc}`;

export function useGetChatMessagesQuery(options: Omit<Urql.UseQueryArgs<GetChatMessagesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetChatMessagesQuery>({ query: GetChatMessagesDocument, ...options });
};
export const GetChatsDocument = /*#__PURE__*/ gql`
    query GetChats($after: String, $first: Int, $where: ChatWhereInput) {
  viewer {
    id
    chats(after: $after, first: $first, where: $where) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...ChatCardChat
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${ChatCardChatFragmentDoc}`;

export function useGetChatsQuery(options?: Omit<Urql.UseQueryArgs<GetChatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetChatsQuery>({ query: GetChatsDocument, ...options });
};
export const GetCodeExampleDocument = /*#__PURE__*/ gql`
    query GetCodeExample($authorName: String!, $urlSlug: String!) {
  codeExample(
    where: {authorName_urlSlug: {authorName: $authorName, urlSlug: $urlSlug}}
  ) {
    id
    author {
      id
      image
      name
    }
    authorName
    content
    description
    language
    primarySkill {
      github {
        id
        name
        owner {
          id
          avatarUrl
          login
        }
      }
      id
      name
      owner
    }
    skills(first: 5) {
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        name
        owner
      }
    }
    title
    updatedAt
    upvotes
    urlSlug
    viewerUpvote
  }
}
    `;

export function useGetCodeExampleQuery(options: Omit<Urql.UseQueryArgs<GetCodeExampleQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCodeExampleQuery>({ query: GetCodeExampleDocument, ...options });
};
export const GetCodeExampleCommentsDocument = /*#__PURE__*/ gql`
    query GetCodeExampleComments($after: String, $first: Int, $codeExampleTitle: String!, $userName: String!) {
  comments(
    after: $after
    first: $first
    where: {codeExample: {authorName: {equals: $userName}, urlSlug: {equals: $codeExampleTitle}}}
  ) {
    ...CommentRepliesCommentConnection
    nodes {
      id
      ...CommentCardComment
      replies(first: $first) {
        ...CommentRepliesCommentConnection
        nodes {
          id
          ...CommentCardComment
          replies(first: $first) {
            ...CommentRepliesCommentConnection
          }
        }
      }
    }
  }
}
    ${CommentRepliesCommentConnectionFragmentDoc}
${CommentCardCommentFragmentDoc}`;

export function useGetCodeExampleCommentsQuery(options: Omit<Urql.UseQueryArgs<GetCodeExampleCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCodeExampleCommentsQuery>({ query: GetCodeExampleCommentsDocument, ...options });
};
export const GetCommentRepliesDocument = /*#__PURE__*/ gql`
    query GetCommentReplies($after: String, $first: Int, $where: CommentWhereUniqueInput!) {
  comment(where: $where) {
    id
    replies(after: $after, first: $first) {
      __typename
      ...CommentRepliesCommentConnection
      nodes {
        __typename
        id
        ...CommentCardComment
        replies(first: $first) {
          __typename
          ...CommentRepliesCommentConnection
        }
      }
    }
  }
}
    ${CommentRepliesCommentConnectionFragmentDoc}
${CommentCardCommentFragmentDoc}`;

export function useGetCommentRepliesQuery(options: Omit<Urql.UseQueryArgs<GetCommentRepliesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentRepliesQuery>({ query: GetCommentRepliesDocument, ...options });
};
export const GetExperiencesDocument = /*#__PURE__*/ gql`
    query GetExperiences($after: String, $first: Int, $where: ExperienceWhereInput!) {
  experiences(after: $after, first: $first, where: $where) {
    __typename
    edges {
      __typename
      cursor
      node {
        __typename
        id
      }
    }
    nodes {
      __typename
      id
      ...ExperienceCardExperience
      ...CreateExperienceFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
    ${ExperienceCardExperienceFragmentDoc}
${CreateExperienceFragmentFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

export function useGetExperiencesQuery(options: Omit<Urql.UseQueryArgs<GetExperiencesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetExperiencesQuery>({ query: GetExperiencesDocument, ...options });
};
export const GetFollowableSkillsDocument = /*#__PURE__*/ gql`
    query GetFollowableSkills {
  followableSkills(
    first: 5
    orderBy: [{users: {_count: Desc}}, {owner: Desc}, {name: Desc}]
  ) {
    nodes {
      ...ActivityFeedFollowableSkillCardSkill
    }
  }
}
    ${ActivityFeedFollowableSkillCardSkillFragmentDoc}`;

export function useGetFollowableSkillsQuery(options?: Omit<Urql.UseQueryArgs<GetFollowableSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFollowableSkillsQuery>({ query: GetFollowableSkillsDocument, ...options });
};
export const GetMyUserDocument = /*#__PURE__*/ gql`
    query GetMyUser {
  viewer {
    id
    name
    image
  }
}
    `;

export function useGetMyUserQuery(options?: Omit<Urql.UseQueryArgs<GetMyUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMyUserQuery>({ query: GetMyUserDocument, ...options });
};
export const GetNotificationCountsDocument = /*#__PURE__*/ gql`
    query GetNotificationCounts {
  viewer {
    id
    friendRequestsReceived(first: 0) {
      totalCount
    }
    messages: notifications(
      first: 0
      where: {opened: false, type: [ChatMessageReceived]}
    ) {
      totalCount
    }
    notifications(first: 0, where: {opened: false}) {
      totalCount
    }
  }
}
    `;

export function useGetNotificationCountsQuery(options?: Omit<Urql.UseQueryArgs<GetNotificationCountsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetNotificationCountsQuery>({ query: GetNotificationCountsDocument, ...options });
};
export const GetNotificationsDocument = /*#__PURE__*/ gql`
    query GetNotifications($after: String, $first: Int) {
  viewer {
    id
    notifications(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        __typename
        id
        ... on NotificationChatMessageReceived {
          ...NotificationCardChatMessageReceivedNotificationChatMessageReceived
        }
        ... on NotificationCodeExampleCommented {
          ...NotificationCardCodeExampleCommentedNotificationCodeExampleCommented
        }
        ... on NotificationFriendshipAccepted {
          ...NotificationCardFriendshipAcceptedNotificationFriendshipAccepted
        }
        ... on NotificationPostCommented {
          ...NotificationCardPostCommentedNotificationPostCommented
        }
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragmentDoc}
${NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragmentDoc}
${NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragmentDoc}
${NotificationCardPostCommentedNotificationPostCommentedFragmentDoc}`;

export function useGetNotificationsQuery(options?: Omit<Urql.UseQueryArgs<GetNotificationsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetNotificationsQuery>({ query: GetNotificationsDocument, ...options });
};
export const GetPostDocument = /*#__PURE__*/ gql`
    query GetPost($where: PostWhereUniqueInput!) {
  post(where: $where) {
    __typename
    id
    author {
      id
      name
      image
    }
    authorName
    content
    description
    publishedAt
    skills(first: 50) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        name
        owner
      }
    }
    title
    upvotes
    urlSlug
    thumbnailUrl
    viewerUpvote
  }
}
    ${PageInfoFragmentFragmentDoc}`;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostQuery>({ query: GetPostDocument, ...options });
};
export const GetPostCommentsDocument = /*#__PURE__*/ gql`
    query GetPostComments($after: String, $first: Int, $postTitle: String!, $userName: String!) {
  comments(
    after: $after
    first: $first
    where: {post: {authorName: {equals: $userName}, urlSlug: {equals: $postTitle}}}
  ) {
    ...CommentRepliesCommentConnection
    nodes {
      id
      ...CommentCardComment
      replies(first: $first) {
        ...CommentRepliesCommentConnection
        nodes {
          id
          ...CommentCardComment
          replies(first: $first) {
            ...CommentRepliesCommentConnection
          }
        }
      }
    }
  }
}
    ${CommentRepliesCommentConnectionFragmentDoc}
${CommentCardCommentFragmentDoc}`;

export function useGetPostCommentsQuery(options: Omit<Urql.UseQueryArgs<GetPostCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostCommentsQuery>({ query: GetPostCommentsDocument, ...options });
};
export const GetPostDraftDocument = /*#__PURE__*/ gql`
    query GetPostDraft {
  postDraft {
    __typename
    id
    content
    description
    title
    thumbnailUrl
  }
}
    `;

export function useGetPostDraftQuery(options?: Omit<Urql.UseQueryArgs<GetPostDraftQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostDraftQuery>({ query: GetPostDraftDocument, ...options });
};
export const GetPostsDocument = /*#__PURE__*/ gql`
    query GetPosts($after: String, $first: Int, $orderBy: [PostOrderByInput!], $where: PostWhereInput!) {
  posts(after: $after, first: $first, where: $where) {
    __typename
    edges {
      __typename
      cursor
      node {
        __typename
        id
      }
    }
    nodes {
      __typename
      id
      ...PostCardPost
    }
    pageInfo {
      __typename
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    ${PostCardPostFragmentDoc}`;

export function useGetPostsQuery(options: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostsQuery>({ query: GetPostsDocument, ...options });
};
export const GetRepositoriesDocument = /*#__PURE__*/ gql`
    query GetRepositories($after: String, $first: Int, $where: RepositoryWhereInput!) {
  repositories(after: $after, first: $first, where: $where) {
    __typename
    edges {
      __typename
      cursor
      node {
        __typename
        id
      }
    }
    nodes {
      __typename
      id
      ...RepositoryCardRepository
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
    ${RepositoryCardRepositoryFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

export function useGetRepositoriesQuery(options: Omit<Urql.UseQueryArgs<GetRepositoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepositoriesQuery>({ query: GetRepositoriesDocument, ...options });
};
export const GetSiteWideSideDrawerDocument = /*#__PURE__*/ gql`
    query GetSiteWideSideDrawer($after: String, $first: Int) {
  viewer {
    id
    following(after: $after, first: $first, orderBy: {type: Desc}) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        following {
          ...SiteWideSideDrawerFollowable
        }
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SiteWideSideDrawerFollowableFragmentDoc}`;

export function useGetSiteWideSideDrawerQuery(options?: Omit<Urql.UseQueryArgs<GetSiteWideSideDrawerQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSiteWideSideDrawerQuery>({ query: GetSiteWideSideDrawerDocument, ...options });
};
export const GetSkillCodeExamplesDocument = /*#__PURE__*/ gql`
    query GetSkillCodeExamples($after: String, $first: Int, $name: String!, $owner: String!) {
  skill(where: {name_owner: {name: $name, owner: $owner}}) {
    id
    codeExamples(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...CodeExampleCardCodeExample
      }
    }
    name
    owner
  }
}
    ${PageInfoFragmentFragmentDoc}
${CodeExampleCardCodeExampleFragmentDoc}`;

export function useGetSkillCodeExamplesQuery(options: Omit<Urql.UseQueryArgs<GetSkillCodeExamplesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillCodeExamplesQuery>({ query: GetSkillCodeExamplesDocument, ...options });
};
export const GetSkillFollowersDocument = /*#__PURE__*/ gql`
    query GetSkillFollowers($after: String, $first: Int, $name: String!, $owner: String!) {
  skill(where: {name_owner: {name: $name, owner: $owner}}) {
    id
    followers(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserFollowCardUser
      }
    }
    name
    owner
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserFollowCardUserFragmentDoc}`;

export function useGetSkillFollowersQuery(options: Omit<Urql.UseQueryArgs<GetSkillFollowersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillFollowersQuery>({ query: GetSkillFollowersDocument, ...options });
};
export const GetSkillInfoSideBarDocument = /*#__PURE__*/ gql`
    query GetSkillInfoSideBar($name: String!, $owner: String!) {
  github {
    repository(where: {name: $name, owner: $owner}) {
      ...SkillInfoSideBarGitHubRepository
    }
  }
}
    ${SkillInfoSideBarGitHubRepositoryFragmentDoc}`;

export function useGetSkillInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<GetSkillInfoSideBarQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillInfoSideBarQuery>({ query: GetSkillInfoSideBarDocument, ...options });
};
export const GetSkillOwnerExperiencersDocument = /*#__PURE__*/ gql`
    query GetSkillOwnerExperiencers($after: String, $first: Int, $where: UserWhereInput, $skillOwner: String!) {
  github {
    repositoryOwner(where: {login: $skillOwner}) {
      id
      experiencers(after: $after, first: $first, where: $where) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          ...UserFollowCardUser
        }
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserFollowCardUserFragmentDoc}`;

export function useGetSkillOwnerExperiencersQuery(options: Omit<Urql.UseQueryArgs<GetSkillOwnerExperiencersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillOwnerExperiencersQuery>({ query: GetSkillOwnerExperiencersDocument, ...options });
};
export const GetSkillOwnerInfoSideBarDocument = /*#__PURE__*/ gql`
    query GetSkillOwnerInfoSideBar($owner: String!) {
  github {
    repositoryOwner(where: {login: $owner}) {
      ...SkillOwnerInfoSideBarGitHubRepositoryOwner
    }
  }
}
    ${SkillOwnerInfoSideBarGitHubRepositoryOwnerFragmentDoc}`;

export function useGetSkillOwnerInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<GetSkillOwnerInfoSideBarQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillOwnerInfoSideBarQuery>({ query: GetSkillOwnerInfoSideBarDocument, ...options });
};
export const GetSkillOwnerRepositoriesDocument = /*#__PURE__*/ gql`
    query GetSkillOwnerRepositories($skillOwner: String!) {
  github {
    repositoryOwner(where: {login: $skillOwner}) {
      id
      repositories(first: 6) {
        pageInfo {
          ...PageInfoFragment
        }
        totalCount
        edges {
          cursor
          node {
            id
          }
        }
        nodes {
          ...SkillOwnerRepositoryCardGitHubRepository
        }
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SkillOwnerRepositoryCardGitHubRepositoryFragmentDoc}`;

export function useGetSkillOwnerRepositoriesQuery(options: Omit<Urql.UseQueryArgs<GetSkillOwnerRepositoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillOwnerRepositoriesQuery>({ query: GetSkillOwnerRepositoriesDocument, ...options });
};
export const GetSkillsDocument = /*#__PURE__*/ gql`
    query GetSkills($after: String, $first: Int, $orderBy: [SkillOrderByInput!], $name: String!, $owner: String!) {
  skill(where: {name_owner: {name: $name, owner: $owner}}) {
    ...SkillCardSkill
  }
  skills(
    after: $after
    first: $first
    where: {NOT: {name: {equals: $name}, owner: {equals: $owner}}, name: {contains: $name}, owner: {contains: $owner}}
  ) {
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      ...SkillCardSkill
    }
  }
}
    ${SkillCardSkillFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

export function useGetSkillsQuery(options: Omit<Urql.UseQueryArgs<GetSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSkillsQuery>({ query: GetSkillsDocument, ...options });
};
export const GetUserActivitiesDocument = /*#__PURE__*/ gql`
    query GetUserActivities($after: String, $first: Int, $name: String!) {
  user(where: {name: $name}) {
    id
    activities(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserActivityCardHeaderUserActivity
        ... on UserActivityCommentCodeExample {
          ...UserActivityCardCommentCodeExampleUserActivityCommentCodeExample
        }
        ... on UserActivityCommentPost {
          ...UserActivityCardCommentPostUserActivityCommentPost
        }
        ... on UserActivityCreateCodeExample {
          ...UserActivityCardCreateCodeExampleUserActivityCreateCodeExample
        }
        ... on UserActivityFollowSkill {
          ...UserActivityCardFollowSkillUserActivityFollowSkill
        }
        ... on UserActivityFollowUser {
          ...UserActivityCardFollowUserUserActivityFollowUser
        }
        ... on UserActivityFriendAcceptUser {
          ...UserActivityCardFriendAcceptUserUserActivityFriendAcceptUser
        }
        ... on UserActivityJoined {
          ...UserActivityCardJoinedUserActivityJoined
        }
        ... on UserActivityPublishPost {
          ...UserActivityCardPublishPostUserActivityPublishPost
        }
        ... on UserActivityUpvoteCodeExample {
          ...UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExample
        }
        ... on UserActivityUpvotePost {
          ...UserActivityCardUpvotePostUserActivityUpvotePost
        }
      }
    }
    name
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserActivityCardHeaderUserActivityFragmentDoc}
${UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragmentDoc}
${UserActivityCardCommentPostUserActivityCommentPostFragmentDoc}
${UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragmentDoc}
${UserActivityCardFollowSkillUserActivityFollowSkillFragmentDoc}
${UserActivityCardFollowUserUserActivityFollowUserFragmentDoc}
${UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragmentDoc}
${UserActivityCardJoinedUserActivityJoinedFragmentDoc}
${UserActivityCardPublishPostUserActivityPublishPostFragmentDoc}
${UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragmentDoc}
${UserActivityCardUpvotePostUserActivityUpvotePostFragmentDoc}`;

export function useGetUserActivitiesQuery(options: Omit<Urql.UseQueryArgs<GetUserActivitiesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserActivitiesQuery>({ query: GetUserActivitiesDocument, ...options });
};
export const GetUserCodeExamplesDocument = /*#__PURE__*/ gql`
    query GetUserCodeExamples($after: String, $first: Int, $name: String!) {
  user(where: {name: $name}) {
    id
    codeExamples(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...CodeExampleCardCodeExample
      }
    }
    name
  }
}
    ${PageInfoFragmentFragmentDoc}
${CodeExampleCardCodeExampleFragmentDoc}`;

export function useGetUserCodeExamplesQuery(options: Omit<Urql.UseQueryArgs<GetUserCodeExamplesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserCodeExamplesQuery>({ query: GetUserCodeExamplesDocument, ...options });
};
export const GetUserFollowersDocument = /*#__PURE__*/ gql`
    query GetUserFollowers($after: String, $first: Int, $name: String!) {
  user(where: {name: $name}) {
    id
    name
    followers(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserFollowCardUser
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserFollowCardUserFragmentDoc}`;

export function useGetUserFollowersQuery(options: Omit<Urql.UseQueryArgs<GetUserFollowersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFollowersQuery>({ query: GetUserFollowersDocument, ...options });
};
export const GetUserFollowingDocument = /*#__PURE__*/ gql`
    query GetUserFollowing($after: String, $first: Int, $name: String!) {
  user(where: {name: $name}) {
    id
    name
    following(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        following {
          viewerFollowing
          ... on Skill {
            ...SkillFollowCardSkill
          }
          ... on User {
            ...UserFollowCardUser
          }
        }
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SkillFollowCardSkillFragmentDoc}
${UserFollowCardUserFragmentDoc}`;

export function useGetUserFollowingQuery(options: Omit<Urql.UseQueryArgs<GetUserFollowingQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFollowingQuery>({ query: GetUserFollowingDocument, ...options });
};
export const GetUserFriendRequestCountDocument = /*#__PURE__*/ gql`
    query GetUserFriendRequestCount {
  viewer {
    id
    friendRequestsReceived(first: 0) {
      totalCount
    }
  }
}
    `;

export function useGetUserFriendRequestCountQuery(options?: Omit<Urql.UseQueryArgs<GetUserFriendRequestCountQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFriendRequestCountQuery>({ query: GetUserFriendRequestCountDocument, ...options });
};
export const GetUserFriendRequestsDocument = /*#__PURE__*/ gql`
    query GetUserFriendRequests($after: String, $first: Int) {
  viewer {
    id
    name
    friendRequestsReceived(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserFriendCardUser
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserFriendCardUserFragmentDoc}`;

export function useGetUserFriendRequestsQuery(options?: Omit<Urql.UseQueryArgs<GetUserFriendRequestsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFriendRequestsQuery>({ query: GetUserFriendRequestsDocument, ...options });
};
export const GetUserFriendsDocument = /*#__PURE__*/ gql`
    query GetUserFriends($after: String, $first: Int, $name: String!) {
  user(where: {name: $name}) {
    id
    name
    friends(after: $after, first: $first) {
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserFriendCardUser
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${UserFriendCardUserFragmentDoc}`;

export function useGetUserFriendsQuery(options: Omit<Urql.UseQueryArgs<GetUserFriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFriendsQuery>({ query: GetUserFriendsDocument, ...options });
};
export const GetUserInfoSideBarDocument = /*#__PURE__*/ gql`
    query GetUserInfoSideBar($name: String!) {
  user(where: {name: $name}) {
    __typename
    ...UserInfoSideBarUser
  }
}
    ${UserInfoSideBarUserFragmentDoc}`;

export function useGetUserInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<GetUserInfoSideBarQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserInfoSideBarQuery>({ query: GetUserInfoSideBarDocument, ...options });
};
export const GetUserOverviewDocument = /*#__PURE__*/ gql`
    query GetUserOverview($name: String!) {
  user(where: {name: $name}) {
    id
    codeExamples(first: 2) {
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...CodeExampleCardCodeExample
      }
    }
    createdAt
    experiences(first: 3) {
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserOverviewExperienceCardExperience
      }
    }
    github {
      id
      contributionCalendar {
        totalContributions
        ...UserGitHubContributionHeatmapGitHubUserContributionCalendar
      }
    }
    githubUrl
    name
    posts(first: 1) {
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...PostCardPost
      }
    }
    repositories(first: 2) {
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        ...UserOverviewRepositoryCardRepository
      }
    }
    trophies {
      id
      totalFollowers
      totalPostViews
      totalSkills
      totalUpvotes
      totalYearlyCommits
      totalYearlyPosts
    }
  }
}
    ${CodeExampleCardCodeExampleFragmentDoc}
${UserOverviewExperienceCardExperienceFragmentDoc}
${UserGitHubContributionHeatmapGitHubUserContributionCalendarFragmentDoc}
${PostCardPostFragmentDoc}
${UserOverviewRepositoryCardRepositoryFragmentDoc}`;

export function useGetUserOverviewQuery(options: Omit<Urql.UseQueryArgs<GetUserOverviewQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserOverviewQuery>({ query: GetUserOverviewDocument, ...options });
};
export const OkDocument = /*#__PURE__*/ gql`
    query Ok {
  ok
}
    `;

export function useOkQuery(options?: Omit<Urql.UseQueryArgs<OkQueryVariables>, 'query'>) {
  return Urql.useQuery<OkQuery>({ query: OkDocument, ...options });
};
export const SuggestFriendsDocument = /*#__PURE__*/ gql`
    query SuggestFriends($after: String, $first: Int, $where: SuggestFriendsWhereInput!) {
  suggestFriends(after: $after, first: $first, where: $where) {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      ...SuggestedFriendCardUser
    }
  }
}
    ${PageInfoFragmentFragmentDoc}
${SuggestedFriendCardUserFragmentDoc}`;

export function useSuggestFriendsQuery(options: Omit<Urql.UseQueryArgs<SuggestFriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<SuggestFriendsQuery>({ query: SuggestFriendsDocument, ...options });
};
export const SuggestOrganizationsDocument = /*#__PURE__*/ gql`
    query SuggestOrganizations($first: Int, $where: SuggestOrganizationsWhereInput!) {
  suggestOrganizations(first: $first, where: $where) {
    totalCount
    nodes {
      ...OrganizationSearchResultGitHubOrganization
    }
  }
}
    ${OrganizationSearchResultGitHubOrganizationFragmentDoc}`;

export function useSuggestOrganizationsQuery(options: Omit<Urql.UseQueryArgs<SuggestOrganizationsQueryVariables>, 'query'>) {
  return Urql.useQuery<SuggestOrganizationsQuery>({ query: SuggestOrganizationsDocument, ...options });
};
export const SuggestRepositoriesDocument = /*#__PURE__*/ gql`
    query SuggestRepositories($first: Int, $where: SuggestRepositoriesWhereInput!) {
  suggestRepositories(first: $first, where: $where) {
    __typename
    totalCount
    nodes {
      __typename
      id
      ...CreateRepositoryFormOptionGitHubRepository
    }
  }
}
    ${CreateRepositoryFormOptionGitHubRepositoryFragmentDoc}`;

export function useSuggestRepositoriesQuery(options: Omit<Urql.UseQueryArgs<SuggestRepositoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<SuggestRepositoriesQuery>({ query: SuggestRepositoriesDocument, ...options });
};
export const SuggestSkillOwnersDocument = /*#__PURE__*/ gql`
    query SuggestSkillOwners($first: Int, $where: SuggestSkillOwnersWhereInput!) {
  suggestSkillOwners(first: $first, where: $where) {
    totalCount
    nodes {
      __typename
      ...SuggestSkillOwnersGitHubRepositoryOwner
    }
  }
}
    ${SuggestSkillOwnersGitHubRepositoryOwnerFragmentDoc}`;

export function useSuggestSkillOwnersQuery(options: Omit<Urql.UseQueryArgs<SuggestSkillOwnersQueryVariables>, 'query'>) {
  return Urql.useQuery<SuggestSkillOwnersQuery>({ query: SuggestSkillOwnersDocument, ...options });
};
export const SuggestSkillsDocument = /*#__PURE__*/ gql`
    query SuggestSkills($where: SuggestSkillsWhereInput!) {
  suggestSkills(first: 6, where: $where) {
    nodes {
      ...RepositorySearchResultGitHubRepository
    }
    totalCount
  }
}
    ${RepositorySearchResultGitHubRepositoryFragmentDoc}`;

export function useSuggestSkillsQuery(options: Omit<Urql.UseQueryArgs<SuggestSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<SuggestSkillsQuery>({ query: SuggestSkillsDocument, ...options });
};
export const SuggestViewerFriendsDocument = /*#__PURE__*/ gql`
    query SuggestViewerFriends($name: String!) {
  viewer {
    id
    friends(first: 5, where: {name: {contains: $name}}) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          id
        }
      }
      nodes {
        id
        name
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}`;

export function useSuggestViewerFriendsQuery(options: Omit<Urql.UseQueryArgs<SuggestViewerFriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<SuggestViewerFriendsQuery>({ query: SuggestViewerFriendsDocument, ...options });
};