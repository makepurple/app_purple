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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum AuthProvider {
  GitHub = 'GitHub'
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
  readonly viewer?: Maybe<User>;
};


/** Root mutation type */
export type MutationCreatePresignedS3UrlArgs = {
  data: CreatePresignedS3UrlInput;
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
  readonly viewer?: Maybe<User>;
};

export type Skill = {
  readonly __typename?: 'Skill';
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly users: ReadonlyArray<User>;
};


export type User = {
  readonly __typename?: 'User';
  readonly comments: ReadonlyArray<Comment>;
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly posts: ReadonlyArray<Post>;
  readonly profileGitHubUrl?: Maybe<Scalars['String']>;
  readonly profileImageUrl?: Maybe<Scalars['String']>;
  readonly provider: AuthProvider;
  readonly skills: ReadonlyArray<Skill>;
  readonly username: Scalars['String'];
};

export type GetMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserQuery = { readonly __typename?: 'Query', readonly viewer?: Maybe<{ readonly __typename?: 'User', readonly id: string | number, readonly username: string, readonly profileImageUrl?: Maybe<string>, readonly profileGitHubUrl?: Maybe<string> }> };

export type OkQueryVariables = Exact<{ [key: string]: never; }>;


export type OkQuery = { readonly __typename?: 'Query', readonly ok: boolean };


export const GetMyUserDocument = /*#__PURE__*/ gql`
    query GetMyUser {
  viewer {
    id
    username
    profileImageUrl
    profileGitHubUrl
  }
}
    `;

export function useGetMyUserQuery(options: Omit<Urql.UseQueryArgs<GetMyUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyUserQuery>({ query: GetMyUserDocument, ...options });
};
export const OkDocument = /*#__PURE__*/ gql`
    query Ok {
  ok
}
    `;

export function useOkQuery(options: Omit<Urql.UseQueryArgs<OkQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OkQuery>({ query: OkDocument, ...options });
};