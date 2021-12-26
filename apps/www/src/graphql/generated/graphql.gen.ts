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
  ID: string | number;
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

export type Comment = {
  readonly __typename: 'Comment';
  readonly author: User;
  readonly content: Scalars['String'];
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly updatedAt: Scalars['DateTime'];
};

export type CreateExperiencePayload = MutationPayload & {
  readonly __typename: 'CreateExperiencePayload';
  readonly query: Query;
  readonly record: Experience;
};

export type CreatePostPayload = MutationPayload & {
  readonly __typename: 'CreatePostPayload';
  readonly query: Query;
  readonly record: Post;
};

export type CreateRepositoryPayload = MutationPayload & {
  readonly __typename: 'CreateRepositoryPayload';
  readonly query: Query;
  readonly record: Repository;
};

export type DeleteExperiencePayload = MutationPayload & {
  readonly __typename: 'DeleteExperiencePayload';
  readonly query: Query;
  readonly record: Experience;
};

export type DeletePostPayload = MutationPayload & {
  readonly __typename: 'DeletePostPayload';
  readonly query: Query;
  readonly record: Post;
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
  readonly id: Scalars['Int'];
  readonly location?: Maybe<Scalars['String']>;
  readonly organization: Organization;
  readonly organizationName: Scalars['String'];
  readonly positionName: Scalars['String'];
  readonly startDate: Scalars['DateTime'];
  readonly type?: Maybe<ExperienceType>;
  readonly user: User;
};

/** Relay-style connection for Experience types. */
export type ExperienceConnection = {
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
export type ExperienceEdge = {
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
  readonly id: Scalars['Int'];
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
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly organization: Organization;
  readonly url: Scalars['URL'];
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
  readonly stargazerCount: Scalars['Int'];
  readonly url: Scalars['URL'];
};

export type GitHubRepositoryOwner = {
  readonly avatarUrl: Scalars['URL'];
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly url: Scalars['URL'];
};

/** Data for a user from that user's connected GitHub account. */
export type GitHubUser = GitHubRepositoryOwner & {
  readonly __typename: 'GitHubUser';
  readonly avatarUrl: Scalars['URL'];
  readonly bio?: Maybe<Scalars['String']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly topLanguages: TopLanguages;
  readonly twitterUsername?: Maybe<Scalars['String']>;
  readonly url: Scalars['URL'];
  readonly user: User;
  readonly websiteUrl?: Maybe<Scalars['String']>;
};

/** Root mutation type */
export type Mutation = {
  readonly __typename: 'Mutation';
  readonly createExperience: CreateExperiencePayload;
  /** Creates a new draft if the user doesn't have a draft pending to be published already */
  readonly createPost: CreatePostPayload;
  readonly createRepository: CreateRepositoryPayload;
  /** Users can delete their own experiences. */
  readonly deleteExperience: DeleteExperiencePayload;
  /** Users can delete their own posts. */
  readonly deletePost: DeletePostPayload;
  readonly ok: Scalars['Boolean'];
  readonly publishPost: PublishPostPayload;
  readonly removePostThumbnail: RemovePostThumbnailPayload;
  readonly updateDesiredSkills: UpdateDesiredSkillsPayload;
  readonly updateExperience: UpdateExperiencePayload;
  readonly updatePost: UpdatePostPayload;
  readonly updatePostDraft: UpdatePostDraftPayload;
  readonly updateRepository: UpdateRepositoryPayload;
  readonly updateSkills: UpdateSkillsPayload;
  readonly uploadPostImage: UploadPostImagePayload;
  readonly upvotePost: UpvotePostPayload;
  readonly viewer?: Maybe<User>;
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
export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


/** Root mutation type */
export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationPublishPostArgs = {
  data?: InputMaybe<PostPublishInput>;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationRemovePostThumbnailArgs = {
  where: PostWhereUniqueInput;
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
export type MutationUpvotePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationPayload = {
  readonly query: Query;
};

export type Organization = {
  readonly __typename: 'Organization';
  readonly experiences: ReadonlyArray<Experience>;
  readonly github: GitHubOrganization;
  readonly id: Scalars['Int'];
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
  readonly content?: Maybe<Scalars['Json']>;
  readonly createdAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly images: ReadonlyArray<PostImage>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  readonly thumbnailUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly upvoteCount: Scalars['Int'];
  readonly upvotingUsers: ReadonlyArray<User>;
  readonly urlSlug: Scalars['String'];
  readonly viewerUpvoted: Scalars['Boolean'];
};


export type PostUpvotingUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type PostAuthorNameUrlSlugCompoundUniqueInput = {
  readonly authorName: Scalars['String'];
  readonly urlSlug: Scalars['String'];
};

/** Relay-style connection for Post types. */
export type PostConnection = {
  readonly __typename: 'PostConnection';
  readonly edges: ReadonlyArray<PostEdge>;
  readonly nodes: ReadonlyArray<Post>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type PostDraftUpdateInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly thumbnailUrl?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

/** Relay-style edge for Post types. */
export type PostEdge = {
  readonly __typename: 'PostEdge';
  readonly cursor: Scalars['String'];
  readonly node: Post;
};

export type PostImage = {
  readonly __typename: 'PostImage';
  readonly id: Scalars['ID'];
  readonly post: Post;
  readonly postId: Scalars['Int'];
  readonly url: Scalars['String'];
};

export type PostPublishInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly thumbnailUrl?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type PostUpdateInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly thumbnailUrl?: InputMaybe<Scalars['String']>;
};

export type PostWhereInput = {
  readonly author?: InputMaybe<UserWhereInput>;
};

export type PostWhereUniqueInput = {
  readonly authorName_urlSlug?: InputMaybe<PostAuthorNameUrlSlugCompoundUniqueInput>;
  /** The id of the post to retrieve */
  readonly id?: InputMaybe<Scalars['Int']>;
};

export type PublishPostPayload = MutationPayload & {
  readonly __typename: 'PublishPostPayload';
  readonly query: Query;
  readonly record: Post;
};

/** Root query type */
export type Query = {
  readonly __typename: 'Query';
  readonly experiences: ExperienceConnection;
  readonly ok: Scalars['Boolean'];
  /** A user-created post. */
  readonly post?: Maybe<Post>;
  readonly postDraft?: Maybe<Post>;
  /** Relay-style connection on Post types. */
  readonly posts: PostConnection;
  readonly repositories: RepositoryConnection;
  readonly suggestExperiences: SuggestExperiences;
  readonly suggestRepositories: SuggestRepositories;
  readonly suggestSkills: SuggestSkills;
  readonly user?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};


/** Root query type */
export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  where?: InputMaybe<ExperienceWhereInput>;
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
  where?: InputMaybe<PostWhereInput>;
};


/** Root query type */
export type QueryRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where: RepositoryWhereInput;
};


/** Root query type */
export type QuerySuggestExperiencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestExperiencesWhereInput;
};


/** Root query type */
export type QuerySuggestRepositoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestRepositoriesWhereInput;
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

export type RemovePostThumbnailPayload = MutationPayload & {
  readonly __typename: 'RemovePostThumbnailPayload';
  readonly query: Query;
  readonly record?: Maybe<Post>;
};

export type Repository = {
  readonly __typename: 'Repository';
  readonly github: GitHubRepository;
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly skills: ReadonlyArray<Skill>;
  readonly user: User;
};

/** Relay-style connection for Repository types. */
export type RepositoryConnection = {
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
export type RepositoryEdge = {
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
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name_owner?: InputMaybe<RepositoryNameOwnerCompoundUniqueInput>;
};

export type Skill = {
  readonly __typename: 'Skill';
  readonly desiringUsers: ReadonlyArray<User>;
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly users: ReadonlyArray<User>;
};

export type SkillNameOwnerCompoundUniqueInput = {
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type SkillWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
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
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
};

export type SuggestExperiences = {
  readonly __typename: 'SuggestExperiences';
  readonly nodes: ReadonlyArray<GitHubOrganization>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestExperiencesWhereInput = {
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

export type SuggestSkills = {
  readonly __typename: 'SuggestSkills';
  readonly nodes: ReadonlyArray<GitHubRepository>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestSkillsWhereInput = {
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
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

export type UpdateDesiredSkillsInput = {
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
};

export type UpdateDesiredSkillsPayload = MutationPayload & {
  readonly __typename: 'UpdateDesiredSkillsPayload';
  readonly query: Query;
  readonly record: User;
};

export type UpdateExperiencePayload = MutationPayload & {
  readonly __typename: 'UpdateExperiencePayload';
  readonly query: Query;
  readonly record: Experience;
};

export type UpdatePostDraftPayload = MutationPayload & {
  readonly __typename: 'UpdatePostDraftPayload';
  readonly query: Query;
  readonly record: Post;
};

export type UpdatePostPayload = MutationPayload & {
  readonly __typename: 'UpdatePostPayload';
  readonly query: Query;
  readonly record: Post;
};

export type UpdateRepositoryPayload = MutationPayload & {
  readonly __typename: 'UpdateRepositoryPayload';
  readonly query: Query;
  readonly record: Repository;
};

export type UpdateSkillsInput = {
  readonly skills: ReadonlyArray<SkillWhereUniqueInput>;
};

export type UpdateSkillsPayload = MutationPayload & {
  readonly __typename: 'UpdateSkillsPayload';
  readonly query: Query;
  readonly record: User;
};

export type UploadPostImageInput = {
  /** The file of the image to be uploaded */
  readonly image: Scalars['Upload'];
};

export type UploadPostImagePayload = MutationPayload & {
  readonly __typename: 'UploadPostImagePayload';
  readonly query: Query;
  readonly record: PostImage;
};

export type UpvotePostPayload = MutationPayload & {
  readonly __typename: 'UpvotePostPayload';
  readonly query: Query;
  readonly record: Post;
};

export type User = {
  readonly __typename: 'User';
  readonly comments: ReadonlyArray<Comment>;
  readonly description?: Maybe<Scalars['String']>;
  readonly desiredSkills: ReadonlyArray<Skill>;
  readonly email: Scalars['String'];
  readonly experiences: ReadonlyArray<Experience>;
  readonly github: GitHubUser;
  readonly githubUrl: Scalars['URL'];
  readonly id: Scalars['ID'];
  readonly image?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly posts: ReadonlyArray<Post>;
  readonly repositories: ReadonlyArray<Repository>;
  readonly skills: ReadonlyArray<Skill>;
  readonly upvotedPosts: ReadonlyArray<Post>;
};

export type UserWhereInput = {
  readonly name?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type CreateRepositoryFormOptionGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined, readonly repository?: { readonly __typename: 'Repository', readonly id: number } | null | undefined };

export type ExperienceCardExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly id: number, readonly location?: string | null | undefined, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: number, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null | undefined } } };

export type PostCardPostFragment = { readonly __typename: 'Post', readonly id: number, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvoteCount: number, readonly urlSlug: string, readonly viewerUpvoted: boolean, readonly author: { readonly __typename: 'User', readonly id: string | number, readonly name: string } };

export type RepositoryCardRepositoryFragment = { readonly __typename: 'Repository', readonly id: number, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> };

export type TopLanguagesFragment = { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> };

export type UpdateExperienceFormExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly id: number, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined };

export type UpdateUserInfoSkillFragment = { readonly __typename: 'Skill', readonly id: number, readonly name: string, readonly owner: string };

export type UserAvatarUserFragment = { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined };

export type UserInfoSideBarUserFragment = { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined, readonly desiredSkills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }>, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null | undefined, readonly company?: string | null | undefined, readonly name?: string | null | undefined, readonly twitterUsername?: string | null | undefined, readonly url: string, readonly websiteUrl?: string | null | undefined, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> };

export type CreateExperienceFragmentFragment = { readonly __typename: 'Experience', readonly id: number, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: number, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null | undefined, readonly name?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string | number, readonly name: string } };

export type CreateExperienceMutationVariables = Exact<{
  data: ExperienceCreateInput;
}>;


export type CreateExperienceMutation = { readonly __typename: 'Mutation', readonly createExperience: { readonly __typename: 'CreateExperiencePayload', readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string | number, readonly experiences: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: number }> } | null | undefined }, readonly record: { readonly __typename: 'Experience', readonly id: number, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: number, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null | undefined, readonly name?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string | number, readonly name: string } } } };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { readonly __typename: 'Mutation', readonly createPost: { readonly __typename: 'CreatePostPayload', readonly record: { readonly __typename: 'Post', readonly id: number, readonly urlSlug: string } } };

export type CreateRepositoryMutationVariables = Exact<{
  data: RepositoryCreateInput;
}>;


export type CreateRepositoryMutation = { readonly __typename: 'Mutation', readonly createRepository: { readonly __typename: 'CreateRepositoryPayload', readonly record: { readonly __typename: 'Repository', readonly id: number, readonly name: string, readonly user: { readonly __typename: 'User', readonly id: string | number }, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> } } };

export type PublishPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostPublishInput;
}>;


export type PublishPostMutation = { readonly __typename: 'Mutation', readonly publishPost: { readonly __typename: 'PublishPostPayload', readonly record: { readonly __typename: 'Post', readonly id: number, readonly authorName: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly urlSlug: string } } };

export type RemovePostThumbnailMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type RemovePostThumbnailMutation = { readonly __typename: 'Mutation', readonly removePostThumbnail: { readonly __typename: 'RemovePostThumbnailPayload', readonly record?: { readonly __typename: 'Post', readonly id: number, readonly thumbnailUrl?: string | null | undefined } | null | undefined } };

export type UpdateExperienceMutationVariables = Exact<{
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
}>;


export type UpdateExperienceMutation = { readonly __typename: 'Mutation', readonly updateExperience: { readonly __typename: 'UpdateExperiencePayload', readonly record: { readonly __typename: 'Experience', readonly id: number, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: number, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null | undefined, readonly name?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string | number, readonly name: string } } } };

export type UpdatePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { readonly __typename: 'Mutation', readonly updatePost: { readonly __typename: 'UpdatePostPayload', readonly record: { readonly __typename: 'Post', readonly id: number, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined } } };

export type UpdatePostDraftMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostDraftUpdateInput;
}>;


export type UpdatePostDraftMutation = { readonly __typename: 'Mutation', readonly updatePostDraft: { readonly __typename: 'UpdatePostDraftPayload', readonly record: { readonly __typename: 'Post', readonly id: number, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined } } };

export type UpdateUserInfoMutationVariables = Exact<{
  skills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
  desiredSkills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
}>;


export type UpdateUserInfoMutation = { readonly __typename: 'Mutation', readonly updateSkills: { readonly __typename: 'UpdateSkillsPayload', readonly record: { readonly __typename: 'User', readonly id: string | number, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string, readonly owner: string }> } }, readonly updateDesiredSkills: { readonly __typename: 'UpdateDesiredSkillsPayload', readonly record: { readonly __typename: 'User', readonly id: string | number, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string, readonly owner: string }> } } };

export type UploadPostImageMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: UploadPostImageInput;
}>;


export type UploadPostImageMutation = { readonly __typename: 'Mutation', readonly uploadPostImage: { readonly __typename: 'UploadPostImagePayload', readonly record: { readonly __typename: 'PostImage', readonly id: string | number, readonly url: string } } };

export type UpvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UpvotePostMutation = { readonly __typename: 'Mutation', readonly upvotePost: { readonly __typename: 'UpvotePostPayload', readonly record: { readonly __typename: 'Post', readonly id: number, readonly upvoteCount: number, readonly upvotingUsers: ReadonlyArray<{ readonly __typename: 'User', readonly id: string | number }> } } };

export type GetExperiencesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: ExperienceWhereInput;
}>;


export type GetExperiencesQuery = { readonly __typename: 'Query', readonly experiences: { readonly __typename: 'ExperienceConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ExperienceEdge', readonly cursor: string, readonly node: { readonly __typename: 'Experience', readonly id: number } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: number, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organizationName: string, readonly organization: { readonly __typename: 'Organization', readonly id: number, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null | undefined, readonly url: string, readonly description?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string | number, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined } | null | undefined };

export type GetPostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetPostQuery = { readonly __typename: 'Query', readonly post?: { readonly __typename: 'Post', readonly id: number, readonly authorName: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly title?: string | null | undefined, readonly urlSlug: string, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type GetPostDraftQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostDraftQuery = { readonly __typename: 'Query', readonly postDraft?: { readonly __typename: 'Post', readonly id: number, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly title?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type GetPostsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: PostWhereInput;
}>;


export type GetPostsQuery = { readonly __typename: 'Query', readonly posts: { readonly __typename: 'PostConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: number } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: number, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvoteCount: number, readonly urlSlug: string, readonly viewerUpvoted: boolean, readonly author: { readonly __typename: 'User', readonly id: string | number, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetRepositoriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: RepositoryWhereInput;
}>;


export type GetRepositoriesQuery = { readonly __typename: 'Query', readonly repositories: { readonly __typename: 'RepositoryConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'RepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'Repository', readonly id: number } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: number, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetUserInfoSideBarQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserInfoSideBarQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined, readonly desiredSkills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }>, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null | undefined, readonly company?: string | null | undefined, readonly name?: string | null | undefined, readonly twitterUsername?: string | null | undefined, readonly url: string, readonly websiteUrl?: string | null | undefined, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> } | null | undefined };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename: 'Query', readonly ok: boolean };

export type SuggestExperiencesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestExperiencesWhereInput;
}>;


export type SuggestExperiencesQuery = { readonly __typename: 'Query', readonly suggestExperiences: { readonly __typename: 'SuggestExperiences', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly description?: string | null | undefined, readonly id: string, readonly login: string, readonly name?: string | null | undefined }> } };

export type SuggestRepositoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestRepositoriesWhereInput;
}>;


export type SuggestRepositoriesQuery = { readonly __typename: 'Query', readonly suggestRepositories: { readonly __typename: 'SuggestRepositories', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined, readonly repository?: { readonly __typename: 'Repository', readonly id: number } | null | undefined }> } };

export type SuggestSkillsQueryVariables = Exact<{
  where: SuggestSkillsWhereInput;
}>;


export type SuggestSkillsQuery = { readonly __typename: 'Query', readonly suggestSkills: { readonly __typename: 'SuggestSkills', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly login: string } }> } };

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
    }
  }
  positionName
  startDate
  type
}
    `;
export const PostCardPostFragmentDoc = /*#__PURE__*/ gql`
    fragment PostCardPost on Post {
  __typename
  id
  author {
    __typename
    id
    name
  }
  description
  publishedAt
  thumbnailUrl
  title
  upvoteCount
  urlSlug
  viewerUpvoted
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
  __typename
  desiredSkills {
    __typename
    id
    name
  }
  github {
    __typename
    id
    bio
    company
    name
    topLanguages {
      __typename
      ...TopLanguages
    }
    twitterUsername
    url
    websiteUrl
  }
  id
  name
  skills {
    __typename
    id
    name
  }
  ...UserAvatarUser
}
    ${TopLanguagesFragmentDoc}
${UserAvatarUserFragmentDoc}`;
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
export const CreateExperienceDocument = /*#__PURE__*/ gql`
    mutation CreateExperience($data: ExperienceCreateInput!) {
  createExperience(data: $data) {
    query {
      viewer {
        id
        experiences {
          id
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
      user {
        __typename
        id
      }
    }
  }
}
    ${RepositoryCardRepositoryFragmentDoc}`;

export function useCreateRepositoryMutation() {
  return Urql.useMutation<CreateRepositoryMutation, CreateRepositoryMutationVariables>(CreateRepositoryDocument);
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
      thumbnailUrl
      title
    }
  }
}
    `;

export function useUpdatePostDraftMutation() {
  return Urql.useMutation<UpdatePostDraftMutation, UpdatePostDraftMutationVariables>(UpdatePostDraftDocument);
};
export const UpdateUserInfoDocument = /*#__PURE__*/ gql`
    mutation UpdateUserInfo($skills: [SkillWhereUniqueInput!]!, $desiredSkills: [SkillWhereUniqueInput!]!) {
  updateSkills(data: {skills: $skills}) {
    record {
      __typename
      id
      skills {
        __typename
        ...UpdateUserInfoSkill
      }
    }
  }
  updateDesiredSkills(data: {skills: $desiredSkills}) {
    record {
      __typename
      id
      skills {
        __typename
        ...UpdateUserInfoSkill
      }
    }
  }
}
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
export const UpvotePostDocument = /*#__PURE__*/ gql`
    mutation UpvotePost($where: PostWhereUniqueInput!) {
  upvotePost(where: $where) {
    record {
      id
      upvoteCount
      upvotingUsers {
        id
      }
    }
  }
}
    `;

export function useUpvotePostMutation() {
  return Urql.useMutation<UpvotePostMutation, UpvotePostMutationVariables>(UpvotePostDocument);
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
      __typename
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    ${ExperienceCardExperienceFragmentDoc}
${CreateExperienceFragmentFragmentDoc}`;

export function useGetExperiencesQuery(options: Omit<Urql.UseQueryArgs<GetExperiencesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetExperiencesQuery>({ query: GetExperiencesDocument, ...options });
};
export const GetMyUserDocument = /*#__PURE__*/ gql`
    query GetMyUser {
  viewer {
    __typename
    id
    name
    image
  }
}
    `;

export function useGetMyUserQuery(options: Omit<Urql.UseQueryArgs<GetMyUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyUserQuery>({ query: GetMyUserDocument, ...options });
};
export const GetPostDocument = /*#__PURE__*/ gql`
    query GetPost($where: PostWhereUniqueInput!) {
  post(where: $where) {
    __typename
    id
    authorName
    content
    description
    publishedAt
    title
    urlSlug
    thumbnailUrl
  }
}
    `;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPostQuery>({ query: GetPostDocument, ...options });
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

export function useGetPostDraftQuery(options: Omit<Urql.UseQueryArgs<GetPostDraftQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPostDraftQuery>({ query: GetPostDraftDocument, ...options });
};
export const GetPostsDocument = /*#__PURE__*/ gql`
    query GetPosts($after: String, $first: Int, $where: PostWhereInput!) {
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

export function useGetPostsQuery(options: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'> = {}) {
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
      __typename
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    ${RepositoryCardRepositoryFragmentDoc}`;

export function useGetRepositoriesQuery(options: Omit<Urql.UseQueryArgs<GetRepositoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRepositoriesQuery>({ query: GetRepositoriesDocument, ...options });
};
export const GetUserInfoSideBarDocument = /*#__PURE__*/ gql`
    query GetUserInfoSideBar($name: String!) {
  user(where: {name: $name}) {
    __typename
    ...UserInfoSideBarUser
  }
}
    ${UserInfoSideBarUserFragmentDoc}`;

export function useGetUserInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<GetUserInfoSideBarQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserInfoSideBarQuery>({ query: GetUserInfoSideBarDocument, ...options });
};
export const OkDocument = /*#__PURE__*/ gql`
    query Ok {
  ok
}
    `;

export function useOkQuery(options: Omit<Urql.UseQueryArgs<OkQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OkQuery>({ query: OkDocument, ...options });
};
export const SuggestExperiencesDocument = /*#__PURE__*/ gql`
    query SuggestExperiences($first: Int, $where: SuggestExperiencesWhereInput!) {
  suggestExperiences(first: $first, where: $where) {
    totalCount
    nodes {
      avatarUrl
      description
      id
      login
      name
    }
  }
}
    `;

export function useSuggestExperiencesQuery(options: Omit<Urql.UseQueryArgs<SuggestExperiencesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SuggestExperiencesQuery>({ query: SuggestExperiencesDocument, ...options });
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

export function useSuggestRepositoriesQuery(options: Omit<Urql.UseQueryArgs<SuggestRepositoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SuggestRepositoriesQuery>({ query: SuggestRepositoriesDocument, ...options });
};
export const SuggestSkillsDocument = /*#__PURE__*/ gql`
    query SuggestSkills($where: SuggestSkillsWhereInput!) {
  suggestSkills(where: $where) {
    __typename
    nodes {
      __typename
      id
      description
      name
      owner {
        __typename
        id
        login
      }
    }
    totalCount
  }
}
    `;

export function useSuggestSkillsQuery(options: Omit<Urql.UseQueryArgs<SuggestSkillsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SuggestSkillsQuery>({ query: SuggestSkillsDocument, ...options });
};