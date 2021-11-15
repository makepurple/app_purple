import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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

export type CreatePresignedS3UrlInput = {
  readonly fileName: Scalars['String'];
  readonly fileType: Scalars['String'];
};

export type CreatePresignedS3UrlPayload = {
  readonly __typename: 'CreatePresignedS3UrlPayload';
  readonly fields: Scalars['Json'];
  readonly url: Scalars['String'];
};

export type Experience = {
  readonly __typename: 'Experience';
  readonly actions: ReadonlyArray<Scalars['String']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['Int'];
  readonly location?: Maybe<Scalars['String']>;
  readonly organizationName?: Maybe<Scalars['String']>;
  readonly positionName?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly type?: Maybe<ExperienceType>;
  readonly user: User;
};

export enum ExperienceType {
  Contract = 'Contract',
  FullTime = 'FullTime',
  Intern = 'Intern',
  Misc = 'Misc',
  OpenSource = 'OpenSource',
  PartTime = 'PartTime'
}

export type GitHubRepository = {
  readonly __typename: 'GitHubRepository';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly owner: GitHubUser;
};

/** Data for a user from that user's connected GitHub account. */
export type GitHubUser = {
  readonly __typename: 'GitHubUser';
  readonly bio?: Maybe<Scalars['String']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly login: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly topLanguages: TopLanguages;
  readonly twitterUsername?: Maybe<Scalars['String']>;
  /** The URL of the user's GitHub profile. */
  readonly url: Scalars['URL'];
  readonly user?: Maybe<User>;
  readonly websiteUrl?: Maybe<Scalars['String']>;
};

/** Root mutation type */
export type Mutation = {
  readonly __typename: 'Mutation';
  /** Creates a new draft if the user doesn't have a draft pending to be published already */
  readonly createPost: Post;
  readonly createPresignedS3Url: CreatePresignedS3UrlPayload;
  /** User can delete their own post. */
  readonly deletePost: Post;
  readonly ok: Scalars['Boolean'];
  readonly publishPost: Post;
  readonly removePostThumbnail?: Maybe<Post>;
  readonly updatePost?: Maybe<Post>;
  readonly updatePostDraft?: Maybe<Post>;
  readonly uploadPostImage: PostImage;
  readonly upvotePost: Post;
  readonly viewer?: Maybe<User>;
};


/** Root mutation type */
export type MutationCreatePresignedS3UrlArgs = {
  data: CreatePresignedS3UrlInput;
};


/** Root mutation type */
export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationPublishPostArgs = {
  data?: Maybe<PostPublishInput>;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationRemovePostThumbnailArgs = {
  where: PostWhereUniqueInput;
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
export type MutationUploadPostImageArgs = {
  data: UploadPostImageInput;
  where: PostWhereUniqueInput;
};


/** Root mutation type */
export type MutationUpvotePostArgs = {
  where: PostWhereUniqueInput;
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
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
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
  readonly content?: Maybe<Scalars['Json']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly thumbnailUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
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
  readonly content?: Maybe<Scalars['Json']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly thumbnailUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

export type PostUpdateInput = {
  readonly content?: Maybe<Scalars['Json']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly thumbnailUrl?: Maybe<Scalars['String']>;
};

export type PostWhereInput = {
  readonly author?: Maybe<UserWhereInput>;
};

export type PostWhereUniqueInput = {
  readonly authorName_urlSlug?: Maybe<PostAuthorNameUrlSlugCompoundUniqueInput>;
  /** The id of the post to retrieve */
  readonly id?: Maybe<Scalars['Int']>;
};

/** Root query type */
export type Query = {
  readonly __typename: 'Query';
  readonly ok: Scalars['Boolean'];
  /** A user-created post. */
  readonly post?: Maybe<Post>;
  readonly postDraft?: Maybe<Post>;
  /** Relay-style connection on Post types. */
  readonly posts: PostConnection;
  readonly suggestSkills: SuggestSkills;
  readonly user?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};


/** Root query type */
export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


/** Root query type */
export type QueryPostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


/** Root query type */
export type QuerySuggestSkillsArgs = {
  first?: Maybe<Scalars['Int']>;
  where: SuggestSkillWhereInput;
};


/** Root query type */
export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Skill = {
  readonly __typename: 'Skill';
  readonly desiringUsers: ReadonlyArray<User>;
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly users: ReadonlyArray<User>;
};

export type StringNullableFilter = {
  readonly contains?: Maybe<Scalars['String']>;
  readonly endsWith?: Maybe<Scalars['String']>;
  readonly equals?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly startsWith?: Maybe<Scalars['String']>;
};

export type SuggestSkillWhereInput = {
  readonly name: Scalars['String'];
  readonly owner: Scalars['String'];
};

export type SuggestSkills = {
  readonly __typename: 'SuggestSkills';
  readonly nodes: ReadonlyArray<GitHubRepository>;
  readonly totalCount: Scalars['Int'];
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

export type UploadPostImageInput = {
  /** The file of the image to be uploaded */
  readonly image: Scalars['Upload'];
};

export type User = {
  readonly __typename: 'User';
  readonly comments: ReadonlyArray<Comment>;
  readonly desiredSkills: ReadonlyArray<Skill>;
  readonly email: Scalars['String'];
  readonly github: GitHubUser;
  readonly githubUrl: Scalars['URL'];
  readonly id: Scalars['ID'];
  readonly image?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly posts: ReadonlyArray<Post>;
  readonly skills: ReadonlyArray<Skill>;
  readonly upvotedPosts: ReadonlyArray<Post>;
};

export type UserWhereInput = {
  readonly name?: Maybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type PostCardPostFragment = { readonly __typename: 'Post', readonly id: number, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvoteCount: number, readonly urlSlug: string, readonly viewerUpvoted: boolean, readonly author: { readonly __typename: 'User', readonly id: string | number, readonly name: string } };

export type TopLanguagesFragment = { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> };

export type UserAvatarUserFragment = { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined };

export type UserInfoSideBarUserFragment = { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined, readonly desiredSkills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }>, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null | undefined, readonly company?: string | null | undefined, readonly name?: string | null | undefined, readonly twitterUsername?: string | null | undefined, readonly url: string, readonly websiteUrl?: string | null | undefined, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { readonly __typename: 'Mutation', readonly post: { readonly __typename: 'Post', readonly id: number, readonly urlSlug: string } };

export type PublishPostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostPublishInput;
}>;


export type PublishPostMutation = { readonly __typename: 'Mutation', readonly post: { readonly __typename: 'Post', readonly id: number, readonly authorName: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly urlSlug: string } };

export type RemovePostThumbnailMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type RemovePostThumbnailMutation = { readonly __typename: 'Mutation', readonly post?: { readonly __typename: 'Post', readonly id: number, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type UpdatePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { readonly __typename: 'Mutation', readonly post?: { readonly __typename: 'Post', readonly id: number, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type UpdatePostDraftMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostDraftUpdateInput;
}>;


export type UpdatePostDraftMutation = { readonly __typename: 'Mutation', readonly post?: { readonly __typename: 'Post', readonly id: number, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined } | null | undefined };

export type UploadPostImageMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: UploadPostImageInput;
}>;


export type UploadPostImageMutation = { readonly __typename: 'Mutation', readonly postImage: { readonly __typename: 'PostImage', readonly id: string | number, readonly url: string } };

export type UpvotePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type UpvotePostMutation = { readonly __typename: 'Mutation', readonly post: { readonly __typename: 'Post', readonly id: number, readonly upvoteCount: number, readonly upvotingUsers: ReadonlyArray<{ readonly __typename: 'User', readonly id: string | number }> } };

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { readonly __typename: 'Query', readonly viewer?: { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined } | null | undefined };

export type GetPostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetPostQuery = { readonly __typename: 'Query', readonly post?: { readonly __typename: 'Post', readonly id: number, readonly authorName: string, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly title?: string | null | undefined, readonly urlSlug: string, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type GetPostDraftQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostDraftQuery = { readonly __typename: 'Query', readonly postDraft?: { readonly __typename: 'Post', readonly id: number, readonly content?: Json | null | undefined, readonly description?: string | null | undefined, readonly title?: string | null | undefined, readonly thumbnailUrl?: string | null | undefined } | null | undefined };

export type GetPostsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  where: PostWhereInput;
}>;


export type GetPostsQuery = { readonly __typename: 'Query', readonly posts: { readonly __typename: 'PostConnection', readonly edges: ReadonlyArray<{ readonly __typename: 'PostEdge', readonly cursor: string, readonly node: { readonly __typename: 'Post', readonly id: number } }>, readonly nodes: ReadonlyArray<{ readonly __typename: 'Post', readonly id: number, readonly description?: string | null | undefined, readonly publishedAt?: Date | null | undefined, readonly thumbnailUrl?: string | null | undefined, readonly title?: string | null | undefined, readonly upvoteCount: number, readonly urlSlug: string, readonly viewerUpvoted: boolean, readonly author: { readonly __typename: 'User', readonly id: string | number, readonly name: string } }>, readonly pageInfo: { readonly __typename: 'PageInfo', readonly endCursor?: string | null | undefined, readonly hasNextPage: boolean, readonly hasPreviousPage: boolean, readonly startCursor?: string | null | undefined } } };

export type GetUserInfoSideBarQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserInfoSideBarQuery = { readonly __typename: 'Query', readonly user?: { readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: string | null | undefined, readonly desiredSkills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }>, readonly github: { readonly __typename: 'GitHubUser', readonly id: string, readonly bio?: string | null | undefined, readonly company?: string | null | undefined, readonly name?: string | null | undefined, readonly twitterUsername?: string | null | undefined, readonly url: string, readonly websiteUrl?: string | null | undefined, readonly topLanguages: { readonly __typename: 'TopLanguages', readonly totalCount: number, readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> } }, readonly skills: ReadonlyArray<{ readonly __typename: 'Skill', readonly id: number, readonly name: string }> } | null | undefined };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename: 'Query', readonly ok: boolean };

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
  id
  name
  image
}
    `;
export const UserInfoSideBarUserFragmentDoc = /*#__PURE__*/ gql`
    fragment UserInfoSideBarUser on User {
  __typename
  desiredSkills {
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
    id
    name
  }
  ...UserAvatarUser
}
    ${TopLanguagesFragmentDoc}
${UserAvatarUserFragmentDoc}`;
export const CreatePostDocument = /*#__PURE__*/ gql`
    mutation CreatePost {
  post: createPost {
    id
    urlSlug
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const PublishPostDocument = /*#__PURE__*/ gql`
    mutation PublishPost($where: PostWhereUniqueInput!, $data: PostPublishInput!) {
  post: publishPost(where: $where, data: $data) {
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
    `;

export function usePublishPostMutation() {
  return Urql.useMutation<PublishPostMutation, PublishPostMutationVariables>(PublishPostDocument);
};
export const RemovePostThumbnailDocument = /*#__PURE__*/ gql`
    mutation RemovePostThumbnail($where: PostWhereUniqueInput!) {
  post: removePostThumbnail(where: $where) {
    id
    thumbnailUrl
  }
}
    `;

export function useRemovePostThumbnailMutation() {
  return Urql.useMutation<RemovePostThumbnailMutation, RemovePostThumbnailMutationVariables>(RemovePostThumbnailDocument);
};
export const UpdatePostDocument = /*#__PURE__*/ gql`
    mutation UpdatePost($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
  post: updatePost(where: $where, data: $data) {
    id
    content
    description
    thumbnailUrl
  }
}
    `;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const UpdatePostDraftDocument = /*#__PURE__*/ gql`
    mutation UpdatePostDraft($where: PostWhereUniqueInput!, $data: PostDraftUpdateInput!) {
  post: updatePostDraft(where: $where, data: $data) {
    id
    content
    description
    thumbnailUrl
    title
  }
}
    `;

export function useUpdatePostDraftMutation() {
  return Urql.useMutation<UpdatePostDraftMutation, UpdatePostDraftMutationVariables>(UpdatePostDraftDocument);
};
export const UploadPostImageDocument = /*#__PURE__*/ gql`
    mutation UploadPostImage($where: PostWhereUniqueInput!, $data: UploadPostImageInput!) {
  postImage: uploadPostImage(where: $where, data: $data) {
    id
    url
  }
}
    `;

export function useUploadPostImageMutation() {
  return Urql.useMutation<UploadPostImageMutation, UploadPostImageMutationVariables>(UploadPostImageDocument);
};
export const UpvotePostDocument = /*#__PURE__*/ gql`
    mutation UpvotePost($where: PostWhereUniqueInput!) {
  post: upvotePost(where: $where) {
    id
    upvoteCount
    upvotingUsers {
      id
    }
  }
}
    `;

export function useUpvotePostMutation() {
  return Urql.useMutation<UpvotePostMutation, UpvotePostMutationVariables>(UpvotePostDocument);
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