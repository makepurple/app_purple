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
  readonly record: User;
  readonly viewer?: Maybe<User>;
};

export type AddSkillMutationPayload = MutationPayload & {
  readonly __typename: 'AddSkillMutationPayload';
  readonly query: Query;
  readonly record: User;
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

export type Comment = {
  readonly __typename: 'Comment';
  readonly author: User;
  readonly authorId: Scalars['String'];
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

/** Relay-style connection for Comment types. */
export type CommentConnection = Connection & {
  readonly __typename: 'CommentConnection';
  readonly edges: ReadonlyArray<CommentEdge>;
  readonly nodes: ReadonlyArray<Comment>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type CommentCreateInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
  readonly parent?: InputMaybe<CommentWhereUniqueInput>;
  readonly post?: InputMaybe<PostWhereUniqueInput>;
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

export type CommentUpdateInput = {
  readonly content?: InputMaybe<Scalars['Json']>;
};

export type CommentWhereInput = {
  readonly author?: InputMaybe<UserWhereInput>;
  readonly authorId?: InputMaybe<StringNullableFilter>;
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

export type CreateCommentPayload = MutationPayload & {
  readonly __typename: 'CreateCommentPayload';
  readonly query: Query;
  readonly record: Comment;
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

export type FollowSkillPayload = MutationPayload & {
  readonly __typename: 'FollowSkillPayload';
  readonly query: Query;
  readonly record: Follow;
  readonly viewer?: Maybe<User>;
};

export type FollowUserPayload = MutationPayload & {
  readonly __typename: 'FollowUserPayload';
  readonly query: Query;
  readonly record: Follow;
  readonly viewer?: Maybe<User>;
};

export type FollowWhereInput = {
  readonly skill?: InputMaybe<SkillWhereInput>;
  readonly type?: InputMaybe<FollowingType>;
  readonly user?: InputMaybe<UserWhereInput>;
};

export type FollowWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['String']>;
};

export type Followable = {
  readonly viewerFollowing: Scalars['Boolean'];
};

export enum FollowingType {
  Skill = 'Skill',
  User = 'User'
}

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
  readonly createChat: CreateChatPayload;
  readonly createComment: CreateCommentPayload;
  readonly createExperience: CreateExperiencePayload;
  /** Creates a new draft if the user doesn't have a draft pending to be published already */
  readonly createPost: CreatePostPayload;
  readonly createRepository: CreateRepositoryPayload;
  readonly deleteComment: DeleteCommentPayload;
  /** Users can delete their own experiences. */
  readonly deleteExperience: DeleteExperiencePayload;
  readonly deleteFriendship: DeleteFriendshipPayload;
  /** Users can delete their own posts. */
  readonly deletePost: DeletePostPayload;
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
  readonly unvoteComment: UnvoteCommentPayload;
  readonly updateComment: UpdateCommentPayload;
  readonly updateDesiredSkills: UpdateDesiredSkillsPayload;
  readonly updateExperience: UpdateExperiencePayload;
  readonly updatePost: UpdatePostPayload;
  readonly updatePostDraft: UpdatePostDraftPayload;
  readonly updateRepository: UpdateRepositoryPayload;
  readonly updateSkills: UpdateSkillsPayload;
  readonly updateUserFromGitHub: UpdateUserFromGitHubPayload;
  readonly uploadPostImage: UploadPostImagePayload;
  readonly upvoteComment: UpvoteCommentPayload;
  readonly upvotePost: UpvotePostPayload;
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
export type MutationCreateChatArgs = {
  data: CreateChatInput;
};


/** Root mutation type */
export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
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
  where: FriendshipWhereUniqueInput;
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
export type MutationUnvoteCommentArgs = {
  where: CommentWhereUniqueInput;
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
export type MutationUpvoteCommentArgs = {
  data: UpvoteCommentInput;
  where: CommentWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpvotePostArgs = {
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
  FriendshipAccepted = 'FriendshipAccepted',
  PostCommented = 'PostCommented'
}

export type NotificationsWhereInput = {
  readonly opened?: InputMaybe<Scalars['Boolean']>;
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
  readonly chat?: Maybe<Chat>;
  /** This is to update a subscribed chat with new messages when received. */
  readonly chatMessages: ReadonlyArray<ChatMessage>;
  readonly comment?: Maybe<Comment>;
  readonly comments: CommentConnection;
  readonly experiences: ExperienceConnection;
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
  readonly suggestExperiences: SuggestExperiences;
  readonly suggestFriends: UserConnection;
  readonly suggestRepositories: SuggestRepositories;
  readonly suggestSkills: SuggestSkills;
  readonly user?: Maybe<User>;
  readonly users: UserConnection;
  readonly viewer?: Maybe<User>;
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
export type QuerySuggestExperiencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestExperiencesWhereInput;
};


/** Root query type */
export type QuerySuggestFriendsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestFriendsWhereInput;
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
  readonly record: User;
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
  readonly record: User;
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
  readonly desiringUsers: UserConnection;
  readonly github: GitHubRepository;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly posts: PostConnection;
  readonly users: UserConnection;
  readonly viewerFollowing: Scalars['Boolean'];
};


export type SkillDesiringUsersArgs = {
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

export type SuggestExperiences = {
  readonly __typename: 'SuggestExperiences';
  readonly nodes: ReadonlyArray<GitHubOrganization>;
  readonly totalCount: Scalars['Int'];
};

export type SuggestExperiencesWhereInput = {
  readonly name: Scalars['String'];
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

export type UnvoteCommentPayload = MutationPayload & {
  readonly __typename: 'UnvoteCommentPayload';
  readonly query: Query;
  readonly record: Comment;
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
  readonly comments: CommentConnection;
  readonly createdAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  readonly desiredSkills: SkillConnection;
  readonly email: Scalars['String'];
  readonly experiences: ReadonlyArray<Experience>;
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
  readonly posts: PostConnection;
  readonly repositories: ReadonlyArray<Repository>;
  readonly skills: SkillConnection;
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


export type UserSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput>>;
  where?: InputMaybe<SkillWhereInput>;
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
  CommentPost = 'CommentPost',
  FollowSkill = 'FollowSkill',
  FollowUser = 'FollowUser',
  FriendAcceptUser = 'FriendAcceptUser',
  Joined = 'Joined',
  PublishPost = 'PublishPost',
  UpvotePost = 'UpvotePost'
}

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

export type UserWhereInput = {
  readonly id?: InputMaybe<StringNullableFilter>;
  readonly name?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type WithGitHubRepository = {
  readonly github: GitHubRepository;
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type ChatCardChatFragment = { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } };

export type ChatRoomInviteFormChatFragment = { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly name: string }> } };

export type ChatRoomMessageChatMessageFragment = { readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } };

export type CommentCardCommentFragment = { readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } };

export type CommentRepliesCommentConnectionFragment = { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } };

export type CreateRepositoryFormOptionGitHubRepositoryFragment = { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined, readonly repository?: { readonly __typename: 'Repository', readonly id: string } | null | undefined };

export type ExperienceCardExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null | undefined, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null | undefined, readonly url: string } } };

export type NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment = { readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } } };

export type NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment = { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } } };

export type NotificationCardPostCommentedNotificationPostCommentedFragment = { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title?: string | null | undefined, readonly urlSlug: string } };

export type PageInfoFragmentFragment = { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined };

export type PostCardPostFragment = { readonly __typename: 'Post', readonly id: string, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string } };

export type RepositoryCardRepositoryFragment = { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> };

export type SkillCardSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined } };

export type SkillFollowCardSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly viewerFollowing: boolean, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined } };

export type SuggestedFriendCardUserFragment = { readonly __typename: 'User', readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly posts: { readonly __typename: 'PostConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvotes: number, readonly urlSlug: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type TopLanguagesFragment = { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> };

export type UpdateExperienceFormExperienceFragment = { readonly __typename: 'Experience', readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly id: string, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined };

export type UpdateUserInfoSkillFragment = { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string };

export type UserAvatarUserFragment = { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null | undefined };

export type UserFollowCardUserFragment = { readonly __typename: 'User', readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserFriendCardUserFragment = { readonly __typename: 'User', readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type UserInfoSideBarUserFragment = { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFollowing: boolean, readonly viewerIsFriend: boolean, readonly image?: string | null | undefined, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number }, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null | undefined, readonly company?: string | null | undefined, readonly name?: string | null | undefined, readonly twitterUsername?: string | null | undefined, readonly url: string, readonly websiteUrl?: string | null | undefined, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } };

export type CreateChatMutationVariables = Exact<{
  data: CreateChatInput;
}>;


export type CreateChatMutation = { readonly __typename: 'Mutation', readonly createChat: { readonly __typename: 'CreateChatPayload', readonly record: { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json }> }, readonly users: { readonly __typename: 'UserConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } }, readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly chats: { readonly __typename: 'ChatConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Chat', readonly id: string }> } } | null | undefined } } };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateCommentMutation = { readonly __typename: 'Mutation', readonly createComment: { readonly __typename: 'CreateCommentPayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly authorId: string, readonly postId?: string | null | undefined, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string }, readonly parent?: { readonly __typename: 'Comment', readonly id: string, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } } | null | undefined, readonly post?: { readonly __typename: 'Post', readonly id: string, readonly comments: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } } | null | undefined } } };

export type CreateExperienceFragmentFragment = { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null | undefined, readonly name?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } };

export type CreateExperienceMutationVariables = Exact<{
  data: ExperienceCreateInput;
}>;


export type CreateExperienceMutation = { readonly __typename: 'Mutation', readonly createExperience: { readonly __typename: 'CreateExperiencePayload', readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly experiences: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string }> } | null | undefined }, readonly record: { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null | undefined, readonly name?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } } } };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { readonly __typename: 'Mutation', readonly createPost: { readonly __typename: 'CreatePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly urlSlug: string } } };

export type CreateRepositoryMutationVariables = Exact<{
  data: RepositoryCreateInput;
}>;


export type CreateRepositoryMutation = { readonly __typename: 'Mutation', readonly createRepository: { readonly __typename: 'CreateRepositoryPayload', readonly record: { readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly query: { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly repositories: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string }> } | null | undefined } } };

export type DeleteFriendshipMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteFriendshipMutation = { readonly __typename: 'Mutation', readonly deleteFriendship: { readonly __typename: 'DeleteFriendshipPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null | undefined, readonly record: { readonly __typename: 'Friendship', readonly id: string, readonly friendingId: string, readonly friending: { readonly __typename: 'User', readonly id: string } } } };

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


export type InviteToChatMutation = { readonly __typename: 'Mutation', readonly inviteToChat: { readonly __typename: 'InviteToChatPayload', readonly record: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } } } };

export type LeaveChatMutationVariables = Exact<{
  chatId: Scalars['String'];
}>;


export type LeaveChatMutation = { readonly __typename: 'Mutation', readonly leaveChat: { readonly __typename: 'LeaveChatPayload', readonly viewer?: { readonly __typename: 'User', readonly id: string } | null | undefined, readonly record: { readonly __typename: 'Chat', readonly id: string } } };

export type PublishPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostPublishInput;
}>;


export type PublishPostMutation = { readonly __typename: 'Mutation', readonly publishPost: { readonly __typename: 'PublishPostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly urlSlug: string } } };

export type RemovePostThumbnailMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type RemovePostThumbnailMutation = { readonly __typename: 'Mutation', readonly removePostThumbnail: { readonly __typename: 'RemovePostThumbnailPayload', readonly record?: { readonly __typename: 'Post', readonly id: string, readonly thumbnailUrl?: string | null | undefined } | null | undefined } };

export type SendChatMessageMutationVariables = Exact<{
  data: ChatMessageCreateInput;
  where: ChatWhereUniqueInput;
}>;


export type SendChatMessageMutation = { readonly __typename: 'Mutation', readonly sendChatMessage: { readonly __typename: 'SendChatMessagePayload', readonly record: { readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } } } };

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

export type UnvoteCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type UnvoteCommentMutation = { readonly __typename: 'Mutation', readonly unvoteComment: { readonly __typename: 'UnvoteCommentPayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } } } };

export type UpdateExperienceMutationVariables = Exact<{
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
}>;


export type UpdateExperienceMutation = { readonly __typename: 'Mutation', readonly updateExperience: { readonly __typename: 'UpdateExperiencePayload', readonly record: { readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly organizationName: string, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string, readonly url: string, readonly description?: string | null | undefined, readonly name?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } } } };

export type UpdatePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { readonly __typename: 'Mutation', readonly updatePost: { readonly __typename: 'UpdatePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly readTime?: number | null | undefined, readonly thumbnailUrl?: string | null | undefined } } };

export type UpdatePostDraftMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostDraftUpdateInput;
}>;


export type UpdatePostDraftMutation = { readonly __typename: 'Mutation', readonly updatePostDraft: { readonly __typename: 'UpdatePostDraftPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly readTime?: number | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined } } };

export type UpdateRepositoryMutationVariables = Exact<{
  data: RepositoryUpdateInput;
  where: RepositoryWhereUniqueInput;
}>;


export type UpdateRepositoryMutation = { readonly __typename: 'Mutation', readonly updateRepository: { readonly __typename: 'UpdateRepositoryPayload', readonly record: { readonly __typename: 'Repository', readonly id: string, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } };

export type UpdateUserFromGitHubMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateUserFromGitHubMutation = { readonly __typename: 'Mutation', readonly updateUserFromGitHub: { readonly __typename: 'UpdateUserFromGitHubPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly description?: string | null | undefined, readonly image?: string | null | undefined, readonly name: string } } };

export type UpdateUserInfoMutationVariables = Exact<{
  skills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
  desiredSkills: ReadonlyArray<SkillWhereUniqueInput> | SkillWhereUniqueInput;
}>;


export type UpdateUserInfoMutation = { readonly __typename: 'Mutation', readonly updateSkills: { readonly __typename: 'UpdateSkillsPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }, readonly updateDesiredSkills: { readonly __typename: 'UpdateDesiredSkillsPayload', readonly record: { readonly __typename: 'User', readonly id: string, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } } };

export type UploadPostImageMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: UploadPostImageInput;
}>;


export type UploadPostImageMutation = { readonly __typename: 'Mutation', readonly uploadPostImage: { readonly __typename: 'UploadPostImagePayload', readonly record: { readonly __typename: 'PostImage', readonly id: string, readonly url: string } } };

export type UpvoteCommentMutationVariables = Exact<{
  data: UpvoteCommentInput;
  where: CommentWhereUniqueInput;
}>;


export type UpvoteCommentMutation = { readonly __typename: 'Mutation', readonly upvoteComment: { readonly __typename: 'UpvoteCommentPayload', readonly record: { readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } } } };

export type UpvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UpvotePostMutation = { readonly __typename: 'Mutation', readonly upvotePost: { readonly __typename: 'UpvotePostPayload', readonly record: { readonly __typename: 'Post', readonly id: string, readonly upvotes: number, readonly upvoters: { readonly __typename: 'UserConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string }> } } } };

export type GetChatQueryVariables = Exact<{
  where: ChatWhereUniqueInput;
  messageLimit?: InputMaybe<Scalars['Int']>;
  messageOffset?: InputMaybe<Scalars['Int']>;
}>;


export type GetChatQuery = { readonly __typename: 'Query', readonly chat?: { readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ChatMessageEdge', readonly cursor: string, readonly node: { readonly __typename: 'ChatMessage', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } } | null | undefined };

export type GetChatMessagesQueryVariables = Exact<{
  where: ChatMessageWhereInput;
}>;


export type GetChatMessagesQuery = { readonly __typename: 'Query', readonly chatMessages: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }> };

export type GetChatsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
}>;


export type GetChatsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly chats: { readonly __typename: 'ChatConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'ChatEdge', readonly cursor: string, readonly node: { readonly __typename: 'Chat', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Chat', readonly id: string, readonly messages: { readonly __typename: 'ChatMessageConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'ChatMessage', readonly id: string, readonly content: Json, readonly createdAt: Date, readonly sender: { readonly __typename: 'User', readonly id: string, readonly name: string } }> }, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } }> } } | null | undefined };

export type GetCommentRepliesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: CommentWhereUniqueInput;
}>;


export type GetCommentRepliesQuery = { readonly __typename: 'Query', readonly comment?: { readonly __typename: 'Comment', readonly id: string, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } } | null | undefined };

export type GetExperiencesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: ExperienceWhereInput;
}>;


export type GetExperiencesQuery = { readonly __typename: 'Query', readonly experiences: { readonly __typename: 'ExperienceConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'ExperienceEdge', readonly cursor: string, readonly node: { readonly __typename: 'Experience', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Experience', readonly id: string, readonly endDate?: Date | null | undefined, readonly highlights: ReadonlyArray<string>, readonly location?: string | null | undefined, readonly positionName: string, readonly startDate: Date, readonly type?: ExperienceType | null | undefined, readonly organizationName: string, readonly organization: { readonly __typename: 'Organization', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly id: string, readonly login: string, readonly name?: string | null | undefined, readonly url: string, readonly description?: string | null | undefined } }, readonly user: { readonly __typename: 'User', readonly id: string, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null | undefined } | null | undefined };

export type GetNotificationCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationCountQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly notifications: { readonly __typename: 'NotificationConnection', readonly totalCount: number } } | null | undefined };

export type GetNotificationsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetNotificationsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly notifications: { readonly __typename: 'NotificationConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'NotificationEdge', readonly cursor: string, readonly node: { readonly __typename: 'NotificationChatMessageReceived', readonly id: string } | { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string } | { readonly __typename: 'NotificationPostCommented', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'NotificationChatMessageReceived', readonly id: string, readonly chatId: string, readonly opened: boolean, readonly updatedAt: Date, readonly chat: { readonly __typename: 'Chat', readonly id: string, readonly users: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string }> } } } | { readonly __typename: 'NotificationFriendshipAccepted', readonly id: string, readonly opened: boolean, readonly friendshipId: string, readonly updatedAt: Date, readonly friendship: { readonly __typename: 'Friendship', readonly id: string, readonly frienderId: string, readonly friender: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } } } | { readonly __typename: 'NotificationPostCommented', readonly id: string, readonly opened: boolean, readonly postId: string, readonly updatedAt: Date, readonly post: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly title?: string | null | undefined, readonly urlSlug: string } }> } } | null | undefined };

export type GetPostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetPostQuery = { readonly __typename: 'Query', readonly post?: { readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly title?: string | null | undefined, readonly urlSlug: string, readonly thumbnailUrl?: string | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly image?: string | null | undefined }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null | undefined };

export type GetPostCommentsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  postTitle: Scalars['String'];
  userName: Scalars['String'];
}>;


export type GetPostCommentsQuery = { readonly __typename: 'Query', readonly comments: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly replies: { readonly __typename: 'CommentConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Comment', readonly id: string, readonly content?: Json | null | undefined, readonly createdAt: Date, readonly updatedAt: Date, readonly upvotes: number, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } }, readonly author: { readonly __typename: 'User', readonly id: string, readonly image?: string | null | undefined, readonly name: string } }>, readonly edges: ReadonlyArray<{ readonly __typename: 'CommentEdge', readonly cursor: string, readonly node: { readonly __typename: 'Comment', readonly id: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetPostDraftQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostDraftQuery = { readonly __typename: 'Query', readonly postDraft?: { readonly __typename: 'Post', readonly id: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly title?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type GetPostsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: PostWhereInput;
}>;


export type GetPostsQuery = { readonly __typename: 'Query', readonly posts: { readonly __typename: 'PostConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvotes: number, readonly urlSlug: string, readonly viewerUpvote?: boolean | null | undefined, readonly author: { readonly __typename: 'User', readonly id: string, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetRepositoriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: RepositoryWhereInput;
}>;


export type GetRepositoriesQuery = { readonly __typename: 'Query', readonly repositories: { readonly __typename: 'RepositoryConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'RepositoryEdge', readonly cursor: string, readonly node: { readonly __typename: 'Repository', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Repository', readonly id: string, readonly name: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetSkillsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<SkillOrderByInput> | SkillOrderByInput>;
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type GetSkillsQuery = { readonly __typename: 'Query', readonly skill?: { readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined } } | null | undefined, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined } }> } };

export type GetUserFollowersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserFollowersQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly viewerFollowing: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null | undefined };

export type GetUserFollowingQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserFollowingQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'FollowEdge', readonly cursor: string, readonly node: { readonly __typename: 'Follow', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Follow', readonly id: string, readonly following: { readonly __typename: 'Skill', readonly viewerFollowing: boolean, readonly id: string, readonly name: string, readonly owner: string, readonly github: { readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly url: string, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly avatarUrl: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly avatarUrl: string, readonly login: string }, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined } } | { readonly __typename: 'User', readonly viewerFollowing: boolean, readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } }> } } | null | undefined };

export type GetUserFriendsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}>;


export type GetUserFriendsQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly viewerIsFriend: boolean, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } } | null | undefined };

export type GetUserInfoSideBarQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserInfoSideBarQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string, readonly name: string, readonly viewerCanFriend: boolean, readonly viewerFollowing: boolean, readonly viewerIsFriend: boolean, readonly image?: string | null | undefined, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string }> }, readonly followers: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly following: { readonly __typename: 'FollowConnection', readonly totalCount: number }, readonly friends: { readonly __typename: 'UserConnection', readonly totalCount: number }, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null | undefined, readonly company?: string | null | undefined, readonly name?: string | null | undefined, readonly twitterUsername?: string | null | undefined, readonly url: string, readonly websiteUrl?: string | null | undefined, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: { readonly __typename: 'SkillConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'SkillEdge', readonly cursor: string, readonly node: { readonly __typename: 'Skill', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } } | null | undefined };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename: 'Query', readonly ok: boolean };

export type SuggestExperiencesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestExperiencesWhereInput;
}>;


export type SuggestExperiencesQuery = { readonly __typename: 'Query', readonly suggestExperiences: { readonly __typename: 'SuggestExperiences', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubOrganization', readonly avatarUrl: string, readonly description?: string | null | undefined, readonly id: string, readonly login: string, readonly name?: string | null | undefined }> } };

export type SuggestFriendsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestFriendsWhereInput;
}>;


export type SuggestFriendsQuery = { readonly __typename: 'Query', readonly suggestFriends: { readonly __typename: 'UserConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly description?: string | null | undefined, readonly id: string, readonly image?: string | null | undefined, readonly name: string, readonly desiredSkills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> }, readonly posts: { readonly __typename: 'PostConnection', readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: string, readonly authorName: string, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvotes: number, readonly urlSlug: string }> }, readonly skills: { readonly __typename: 'SkillConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: string, readonly name: string, readonly owner: string }> } }> } };

export type SuggestRepositoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where: SuggestRepositoriesWhereInput;
}>;


export type SuggestRepositoriesQuery = { readonly __typename: 'Query', readonly suggestRepositories: { readonly __typename: 'SuggestRepositories', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly forkCount: number, readonly issueCount: number, readonly name: string, readonly pullRequestCount: number, readonly pushedAt?: Date | null | undefined, readonly stargazerCount: number, readonly licenseInfo?: { readonly __typename: 'GitHubLicense', readonly id: string, readonly name: string, readonly nickname?: string | null | undefined, readonly spdxId?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined, readonly primaryLanguage?: { readonly __typename: 'GitHubLanguage', readonly color?: string | null | undefined, readonly id: string, readonly name: string } | null | undefined, readonly repository?: { readonly __typename: 'Repository', readonly id: string } | null | undefined }> } };

export type SuggestSkillsQueryVariables = Exact<{
  where: SuggestSkillsWhereInput;
}>;


export type SuggestSkillsQuery = { readonly __typename: 'Query', readonly suggestSkills: { readonly __typename: 'SuggestSkills', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'GitHubRepository', readonly id: string, readonly description?: string | null | undefined, readonly name: string, readonly owner: { readonly __typename: 'GitHubOrganization', readonly id: string, readonly login: string } | { readonly __typename: 'GitHubUser', readonly id: string, readonly login: string } }> } };

export type SuggestViewerFriendsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SuggestViewerFriendsQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string, readonly friends: { readonly __typename: 'UserConnection', readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined }, readonly edges: ReadonlyArray<{ readonly __typename: 'UserEdge', readonly cursor: string, readonly node: { readonly __typename: 'User', readonly id: string } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'User', readonly id: string, readonly name: string }> } } | null | undefined };

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
  content
  createdAt
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
export const SuggestedFriendCardUserFragmentDoc = /*#__PURE__*/ gql`
    fragment SuggestedFriendCardUser on User {
  __typename
  description
  desiredSkills {
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
  skills {
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
export const UserFollowCardUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserFollowCardUser on User {
  description
  desiredSkills(first: 5) {
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
    }
  }
  id
  image
  name
  skills(first: 5) {
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
  desiredSkills(first: 5) {
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
    }
  }
  id
  image
  name
  skills(first: 5) {
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
      __typename
      id
      name
    }
  }
  followers {
    totalCount
  }
  following {
    totalCount
  }
  friends {
    totalCount
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
      __typename
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
export const CreateCommentDocument = /*#__PURE__*/ gql`
    mutation CreateComment($data: CommentCreateInput!) {
  createComment(data: $data) {
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

export function useCreateCommentMutation() {
  return Urql.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument);
};
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
    }
    query {
      viewer {
        repositories {
          id
        }
      }
    }
  }
}
    ${RepositoryCardRepositoryFragmentDoc}`;

export function useCreateRepositoryMutation() {
  return Urql.useMutation<CreateRepositoryMutation, CreateRepositoryMutationVariables>(CreateRepositoryDocument);
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
      users {
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
      skills {
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
      skills {
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
      upvoters {
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
  }
}
    `;

export function useUpvotePostMutation() {
  return Urql.useMutation<UpvotePostMutation, UpvotePostMutationVariables>(UpvotePostDocument);
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

export function useGetChatQuery(options: Omit<Urql.UseQueryArgs<GetChatQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetChatQuery>({ query: GetChatDocument, ...options });
};
export const GetChatMessagesDocument = /*#__PURE__*/ gql`
    query GetChatMessages($where: ChatMessageWhereInput!) {
  chatMessages(where: $where) {
    ...ChatRoomMessageChatMessage
  }
}
    ${ChatRoomMessageChatMessageFragmentDoc}`;

export function useGetChatMessagesQuery(options: Omit<Urql.UseQueryArgs<GetChatMessagesQueryVariables>, 'query'> = {}) {
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

export function useGetChatsQuery(options: Omit<Urql.UseQueryArgs<GetChatsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetChatsQuery>({ query: GetChatsDocument, ...options });
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

export function useGetCommentRepliesQuery(options: Omit<Urql.UseQueryArgs<GetCommentRepliesQueryVariables>, 'query'> = {}) {
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
export const GetNotificationCountDocument = /*#__PURE__*/ gql`
    query GetNotificationCount {
  viewer {
    notifications(first: 0, where: {opened: false}) {
      totalCount
    }
  }
}
    `;

export function useGetNotificationCountQuery(options: Omit<Urql.UseQueryArgs<GetNotificationCountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetNotificationCountQuery>({ query: GetNotificationCountDocument, ...options });
};
export const GetNotificationsDocument = /*#__PURE__*/ gql`
    query GetNotifications($after: String, $first: Int) {
  viewer {
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
${NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragmentDoc}
${NotificationCardPostCommentedNotificationPostCommentedFragmentDoc}`;

export function useGetNotificationsQuery(options: Omit<Urql.UseQueryArgs<GetNotificationsQueryVariables>, 'query'> = {}) {
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
    urlSlug
    thumbnailUrl
  }
}
    ${PageInfoFragmentFragmentDoc}`;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPostQuery>({ query: GetPostDocument, ...options });
};
export const GetPostCommentsDocument = /*#__PURE__*/ gql`
    query GetPostComments($after: String, $first: Int, $postTitle: String!, $userName: String!) {
  comments(
    after: $after
    first: $first
    where: {post: {authorName: {equals: $userName}, urlSlug: {equals: $postTitle}}}
  ) {
    __typename
    ...CommentRepliesCommentConnection
    nodes {
      __typename
      id
      ...CommentCardComment
      replies(first: $first) {
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
}
    ${CommentRepliesCommentConnectionFragmentDoc}
${CommentCardCommentFragmentDoc}`;

export function useGetPostCommentsQuery(options: Omit<Urql.UseQueryArgs<GetPostCommentsQueryVariables>, 'query'> = {}) {
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
      ...PageInfoFragment
    }
  }
}
    ${RepositoryCardRepositoryFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

export function useGetRepositoriesQuery(options: Omit<Urql.UseQueryArgs<GetRepositoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRepositoriesQuery>({ query: GetRepositoriesDocument, ...options });
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

export function useGetSkillsQuery(options: Omit<Urql.UseQueryArgs<GetSkillsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSkillsQuery>({ query: GetSkillsDocument, ...options });
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

export function useGetUserFollowersQuery(options: Omit<Urql.UseQueryArgs<GetUserFollowersQueryVariables>, 'query'> = {}) {
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

export function useGetUserFollowingQuery(options: Omit<Urql.UseQueryArgs<GetUserFollowingQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserFollowingQuery>({ query: GetUserFollowingDocument, ...options });
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

export function useGetUserFriendsQuery(options: Omit<Urql.UseQueryArgs<GetUserFriendsQueryVariables>, 'query'> = {}) {
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

export function useSuggestFriendsQuery(options: Omit<Urql.UseQueryArgs<SuggestFriendsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SuggestFriendsQuery>({ query: SuggestFriendsDocument, ...options });
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

export function useSuggestViewerFriendsQuery(options: Omit<Urql.UseQueryArgs<SuggestViewerFriendsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SuggestViewerFriendsQuery>({ query: SuggestViewerFriendsDocument, ...options });
};