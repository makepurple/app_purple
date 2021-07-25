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
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: Json;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum AuthProvider {
  Github = 'github'
}


export type Comment = {
  readonly __typename?: 'Comment';
  readonly author: User;
  readonly content: Scalars['String'];
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly post: Post;
  readonly updatedAt: Scalars['DateTime'];
};

export type CreatePresignedS3UrlInput = {
  readonly fileName: Scalars['String'];
  readonly fileType: Scalars['String'];
};

export type CreatePresignedS3UrlPayload = {
  readonly __typename?: 'CreatePresignedS3UrlPayload';
  readonly fields: Scalars['Json'];
  readonly url: Scalars['String'];
};



/** Root mutation type */
export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createPresignedS3Url: CreatePresignedS3UrlPayload;
  readonly ok: Scalars['Boolean'];
  readonly updateDesiredSkills: User;
  readonly updateSkills: User;
  readonly viewer?: Maybe<User>;
};


/** Root mutation type */
export type MutationCreatePresignedS3UrlArgs = {
  data: CreatePresignedS3UrlInput;
};


/** Root mutation type */
export type MutationUpdateDesiredSkillsArgs = {
  input: UpdateDesiredSkillsInput;
};


/** Root mutation type */
export type MutationUpdateSkillsArgs = {
  input: UpdateSkillsInput;
};

export type Post = {
  readonly __typename?: 'Post';
  readonly author: User;
  readonly comments: ReadonlyArray<Comment>;
  readonly content: Scalars['String'];
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly thumbnailImageUrl?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};

/** Root query type */
export type Query = {
  readonly __typename?: 'Query';
  readonly ok: Scalars['Boolean'];
  readonly user?: Maybe<User>;
  readonly viewer?: Maybe<User>;
};


/** Root query type */
export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Skill = {
  readonly __typename?: 'Skill';
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly users: ReadonlyArray<User>;
};

export type TopLanguage = {
  readonly __typename?: 'TopLanguage';
  /** The color of the language, defined by GitHub */
  readonly color: Scalars['String'];
  /** The name of the language. */
  readonly name: Scalars['String'];
  /** The sum of number of bytes written across all owned repositories in this language. */
  readonly size: Scalars['Int'];
};

/** The most used languages by a user, determined by number of bytes written to repositories owned by the user on GitHub. */
export type TopLanguages = {
  readonly __typename?: 'TopLanguages';
  readonly nodes: ReadonlyArray<TopLanguage>;
  /** The total number of languages across all owned repositories. */
  readonly totalCount: Scalars['Int'];
  /** The total number of bytes written across all owned repositories across all languages. */
  readonly totalSize: Scalars['Int'];
};


export type UpdateDesiredSkillsInput = {
  /** List of skills (by name) to add to the user. */
  readonly skills: ReadonlyArray<Scalars['String']>;
};

export type UpdateSkillsInput = {
  /** List of skills (by name) to add to the user. */
  readonly skills: ReadonlyArray<Scalars['String']>;
};


export type User = {
  readonly __typename?: 'User';
  readonly comments: ReadonlyArray<Comment>;
  readonly desiredSkills: ReadonlyArray<Skill>;
  readonly email: Scalars['String'];
  readonly github: UserGitHub;
  readonly githubUrl: Scalars['URL'];
  readonly id: Scalars['ID'];
  readonly image?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly posts: ReadonlyArray<Post>;
  readonly skills: ReadonlyArray<Skill>;
};

/** Data for a user from that user's connected GitHub account. */
export type UserGitHub = {
  readonly __typename?: 'UserGitHub';
  readonly bio?: Maybe<Scalars['String']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly topLanguages?: Maybe<TopLanguages>;
  readonly twitterUsername?: Maybe<Scalars['String']>;
  /** The URL of the user's GitHub profile. */
  readonly url: Scalars['URL'];
  readonly user: User;
  readonly websiteUrl?: Maybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { readonly __typename?: 'Query', readonly viewer?: Maybe<{ readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: Maybe<string> }> };

export type GetUserSummarySidebarQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserSummarySidebarQuery = { readonly __typename?: 'Query', readonly user?: Maybe<{ readonly __typename: 'User', readonly id: string | number, readonly name: string, readonly image?: Maybe<string>, readonly github: { readonly __typename: 'UserGitHub', readonly bio?: Maybe<string>, readonly company?: Maybe<string>, readonly twitterUsername?: Maybe<string>, readonly url: any, readonly websiteUrl?: Maybe<string>, readonly topLanguages?: Maybe<{ readonly __typename: 'TopLanguages', readonly totalSize: number, readonly nodes: ReadonlyArray<{ readonly __typename: 'TopLanguage', readonly name: string, readonly color: string, readonly size: number }> }> } }> };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename?: 'Query', readonly ok: boolean };


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
export const GetUserSummarySidebarDocument = /*#__PURE__*/ gql`
    query GetUserSummarySidebar($name: String!) {
  user(where: {name: $name}) {
    __typename
    id
    name
    image
    github {
      __typename
      bio
      company
      twitterUsername
      url
      websiteUrl
      topLanguages {
        __typename
        totalSize
        nodes {
          __typename
          name
          color
          size
        }
      }
    }
  }
}
    `;

export function useGetUserSummarySidebarQuery(options: Omit<Urql.UseQueryArgs<GetUserSummarySidebarQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserSummarySidebarQuery>({ query: GetUserSummarySidebarDocument, ...options });
};
export const OkDocument = /*#__PURE__*/ gql`
    query Ok {
  ok
}
    `;

export function useOkQuery(options: Omit<Urql.UseQueryArgs<OkQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OkQuery>({ query: OkDocument, ...options });
};