
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 * 
 */
export type Account = {
  access_token: string | null
  expires_at: number | null
  id: string
  id_token: string | null
  provider: string
  providerAccountId: string
  oauth_token: string | null
  oauth_token_secret: string | null
  refresh_token: string | null
  scope: string | null
  session_state: string | null
  token_type: string | null
  type: string
  userId: string
}

/**
 * Model Session
 * 
 */
export type Session = {
  expires: Date
  id: string
  sessionToken: string
  userId: string
}

/**
 * Model User
 * 
 */
export type User = {
  createdAt: Date
  description: string | null
  email: string
  emailVerified: Date | null
  id: string
  image: string | null
  name: string
  updatedAt: Date
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  expires: Date
  identifier: string
  token: string
}

/**
 * Model Post
 * 
 */
export type Post = {
  authorName: string
  content: Prisma.JsonValue | null
  createdAt: Date
  description: string | null
  id: number
  publishedAt: Date | null
  title: string | null
  thumbnailUrl: string | null
  updatedAt: Date
  urlSlug: string
}

/**
 * Model PostUpvoter
 * 
 */
export type PostUpvoter = {
  postId: number
  userId: string
}

/**
 * Model PostImage
 * 
 */
export type PostImage = {
  id: string
  postId: number
  url: string
  createdAt: Date
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: number
  authorId: string
  content: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Skill
 * 
 */
export type Skill = {
  id: number
  name: string
  owner: string
}

/**
 * Model SkillsOnUsers
 * 
 */
export type SkillsOnUsers = {
  skillId: number
  userId: string
}

/**
 * Model DesiredSkillsOnUsers
 * 
 */
export type DesiredSkillsOnUsers = {
  skillId: number
  userId: string
}

/**
 * Model Organization
 * 
 */
export type Organization = {
  id: number
  name: string
}

/**
 * Model Experience
 * 
 */
export type Experience = {
  id: number
  endDate: Date | null
  highlights: string[]
  location: string | null
  organizationName: string
  positionName: string | null
  startDate: Date | null
  type: ExperienceType | null
  userId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ExperienceType: {
  FullTime: 'FullTime',
  PartTime: 'PartTime',
  Contract: 'Contract',
  Intern: 'Intern',
  OpenSource: 'OpenSource'
};

export type ExperienceType = (typeof ExperienceType)[keyof typeof ExperienceType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>;

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.postUpvoter`: Exposes CRUD operations for the **PostUpvoter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostUpvoters
    * const postUpvoters = await prisma.postUpvoter.findMany()
    * ```
    */
  get postUpvoter(): Prisma.PostUpvoterDelegate<GlobalReject>;

  /**
   * `prisma.postImage`: Exposes CRUD operations for the **PostImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostImages
    * const postImages = await prisma.postImage.findMany()
    * ```
    */
  get postImage(): Prisma.PostImageDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<GlobalReject>;

  /**
   * `prisma.skillsOnUsers`: Exposes CRUD operations for the **SkillsOnUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillsOnUsers
    * const skillsOnUsers = await prisma.skillsOnUsers.findMany()
    * ```
    */
  get skillsOnUsers(): Prisma.SkillsOnUsersDelegate<GlobalReject>;

  /**
   * `prisma.desiredSkillsOnUsers`: Exposes CRUD operations for the **DesiredSkillsOnUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesiredSkillsOnUsers
    * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.findMany()
    * ```
    */
  get desiredSkillsOnUsers(): Prisma.DesiredSkillsOnUsersDelegate<GlobalReject>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<GlobalReject>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.6.0
   * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Post: 'Post',
    PostUpvoter: 'PostUpvoter',
    PostImage: 'PostImage',
    Comment: 'Comment',
    Skill: 'Skill',
    SkillsOnUsers: 'SkillsOnUsers',
    DesiredSkillsOnUsers: 'DesiredSkillsOnUsers',
    Organization: 'Organization',
    Experience: 'Experience'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    comments: number
    desiredSkills: number
    experiences: number
    posts: number
    sessions: number
    skills: number
    upvotedPosts: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    comments?: boolean
    desiredSkills?: boolean
    experiences?: boolean
    posts?: boolean
    sessions?: boolean
    skills?: boolean
    upvotedPosts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    images: number
    upvotes: number
  }

  export type PostCountOutputTypeSelect = {
    images?: boolean
    upvotes?: boolean
  }

  export type PostCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PostCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PostCountOutputType
    : S extends undefined
    ? never
    : S extends PostCountOutputTypeArgs
    ?'include' extends U
    ? PostCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostCountOutputType ?PostCountOutputType [P]
  : 
     never
  } 
    : PostCountOutputType
  : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type SkillCountOutputType
   */


  export type SkillCountOutputType = {
    users: number
    desiringUsers: number
  }

  export type SkillCountOutputTypeSelect = {
    users?: boolean
    desiringUsers?: boolean
  }

  export type SkillCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SkillCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SkillCountOutputType
    : S extends undefined
    ? never
    : S extends SkillCountOutputTypeArgs
    ?'include' extends U
    ? SkillCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SkillCountOutputType ?SkillCountOutputType [P]
  : 
     never
  } 
    : SkillCountOutputType
  : SkillCountOutputType




  // Custom InputTypes

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     * 
    **/
    select?: SkillCountOutputTypeSelect | null
  }



  /**
   * Count Type OrganizationCountOutputType
   */


  export type OrganizationCountOutputType = {
    experiences: number
  }

  export type OrganizationCountOutputTypeSelect = {
    experiences?: boolean
  }

  export type OrganizationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OrganizationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OrganizationCountOutputType
    : S extends undefined
    ? never
    : S extends OrganizationCountOutputTypeArgs
    ?'include' extends U
    ? OrganizationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof OrganizationCountOutputType ?OrganizationCountOutputType [P]
  : 
     never
  } 
    : OrganizationCountOutputType
  : OrganizationCountOutputType




  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     * 
    **/
    select?: OrganizationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    access_token: string | null
    expires_at: number | null
    id: string | null
    id_token: string | null
    provider: string | null
    providerAccountId: string | null
    oauth_token: string | null
    oauth_token_secret: string | null
    refresh_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
    type: string | null
    userId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    access_token: string | null
    expires_at: number | null
    id: string | null
    id_token: string | null
    provider: string | null
    providerAccountId: string | null
    oauth_token: string | null
    oauth_token_secret: string | null
    refresh_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
    type: string | null
    userId: string | null
  }

  export type AccountCountAggregateOutputType = {
    access_token: number
    expires_at: number
    id: number
    id_token: number
    provider: number
    providerAccountId: number
    oauth_token: number
    oauth_token_secret: number
    refresh_token: number
    scope: number
    session_state: number
    token_type: number
    type: number
    userId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    access_token?: true
    expires_at?: true
    id?: true
    id_token?: true
    provider?: true
    providerAccountId?: true
    oauth_token?: true
    oauth_token_secret?: true
    refresh_token?: true
    scope?: true
    session_state?: true
    token_type?: true
    type?: true
    userId?: true
  }

  export type AccountMaxAggregateInputType = {
    access_token?: true
    expires_at?: true
    id?: true
    id_token?: true
    provider?: true
    providerAccountId?: true
    oauth_token?: true
    oauth_token_secret?: true
    refresh_token?: true
    scope?: true
    session_state?: true
    token_type?: true
    type?: true
    userId?: true
  }

  export type AccountCountAggregateInputType = {
    access_token?: true
    expires_at?: true
    id?: true
    id_token?: true
    provider?: true
    providerAccountId?: true
    oauth_token?: true
    oauth_token_secret?: true
    refresh_token?: true
    scope?: true
    session_state?: true
    token_type?: true
    type?: true
    userId?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    access_token: string | null
    expires_at: number | null
    id: string
    id_token: string | null
    provider: string
    providerAccountId: string
    oauth_token: string | null
    oauth_token_secret: string | null
    refresh_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
    type: string
    userId: string
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Promise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    access_token?: boolean
    expires_at?: boolean
    id?: boolean
    id_token?: boolean
    provider?: boolean
    providerAccountId?: boolean
    oauth_token?: boolean
    oauth_token_secret?: boolean
    refresh_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
    type?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Account ?Account [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `access_token`
     * const accountWithAccess_tokenOnly = await prisma.account.findMany({ select: { access_token: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    expires: Date | null
    id: string | null
    sessionToken: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    expires: Date | null
    id: string | null
    sessionToken: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    expires: number
    id: number
    sessionToken: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    expires?: true
    id?: true
    sessionToken?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    expires?: true
    id?: true
    sessionToken?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    expires?: true
    id?: true
    sessionToken?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    expires: Date
    id: string
    sessionToken: string
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Promise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    expires?: boolean
    id?: boolean
    sessionToken?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Session ?Session [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `expires`
     * const sessionWithExpiresOnly = await prisma.session.findMany({ select: { expires: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    email: string | null
    emailVerified: Date | null
    id: string | null
    image: string | null
    name: string | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    email: string | null
    emailVerified: Date | null
    id: string | null
    image: string | null
    name: string | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    createdAt: number
    description: number
    email: number
    emailVerified: number
    id: number
    image: number
    name: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    createdAt?: true
    description?: true
    email?: true
    emailVerified?: true
    id?: true
    image?: true
    name?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    createdAt?: true
    description?: true
    email?: true
    emailVerified?: true
    id?: true
    image?: true
    name?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    createdAt?: true
    description?: true
    email?: true
    emailVerified?: true
    id?: true
    image?: true
    name?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    createdAt: Date
    description: string | null
    email: string
    emailVerified: Date | null
    id: string
    image: string | null
    name: string
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    accounts?: boolean | AccountFindManyArgs
    comments?: boolean | CommentFindManyArgs
    createdAt?: boolean
    description?: boolean
    desiredSkills?: boolean | DesiredSkillsOnUsersFindManyArgs
    email?: boolean
    emailVerified?: boolean
    experiences?: boolean | ExperienceFindManyArgs
    id?: boolean
    image?: boolean
    name?: boolean
    posts?: boolean | PostFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    skills?: boolean | SkillsOnUsersFindManyArgs
    updatedAt?: boolean
    upvotedPosts?: boolean | PostUpvoterFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    comments?: boolean | CommentFindManyArgs
    desiredSkills?: boolean | DesiredSkillsOnUsersFindManyArgs
    experiences?: boolean | ExperienceFindManyArgs
    posts?: boolean | PostFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    skills?: boolean | SkillsOnUsersFindManyArgs
    upvotedPosts?: boolean | PostUpvoterFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'accounts'
        ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'desiredSkills'
        ? Array < DesiredSkillsOnUsersGetPayload<S['include'][P]>>  :
        P extends 'experiences'
        ? Array < ExperienceGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'sessions'
        ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'skills'
        ? Array < SkillsOnUsersGetPayload<S['include'][P]>>  :
        P extends 'upvotedPosts'
        ? Array < PostUpvoterGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'accounts'
        ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'desiredSkills'
        ? Array < DesiredSkillsOnUsersGetPayload<S['select'][P]>>  :
        P extends 'experiences'
        ? Array < ExperienceGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'sessions'
        ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'skills'
        ? Array < SkillsOnUsersGetPayload<S['select'][P]>>  :
        P extends 'upvotedPosts'
        ? Array < PostUpvoterGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    desiredSkills<T extends DesiredSkillsOnUsersFindManyArgs = {}>(args?: Subset<T, DesiredSkillsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<DesiredSkillsOnUsers>>, PrismaPromise<Array<DesiredSkillsOnUsersGetPayload<T>>>>;

    experiences<T extends ExperienceFindManyArgs = {}>(args?: Subset<T, ExperienceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Experience>>, PrismaPromise<Array<ExperienceGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    sessions<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    skills<T extends SkillsOnUsersFindManyArgs = {}>(args?: Subset<T, SkillsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SkillsOnUsers>>, PrismaPromise<Array<SkillsOnUsersGetPayload<T>>>>;

    upvotedPosts<T extends PostUpvoterFindManyArgs = {}>(args?: Subset<T, PostUpvoterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostUpvoter>>, PrismaPromise<Array<PostUpvoterGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    expires: Date | null
    identifier: string | null
    token: string | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    expires: Date | null
    identifier: string | null
    token: string | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    expires: number
    identifier: number
    token: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    expires?: true
    identifier?: true
    token?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    expires?: true
    identifier?: true
    token?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    expires?: true
    identifier?: true
    token?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: Array<VerificationTokenScalarFieldEnum>
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    expires: Date
    identifier: string
    token: string
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Promise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    expires?: boolean
    identifier?: boolean
    token?: boolean
  }

  export type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenArgs,
    U = keyof S
      > = S extends true
        ? VerificationToken
    : S extends undefined
    ? never
    : S extends VerificationTokenArgs | VerificationTokenFindManyArgs
    ?'include' extends U
    ? VerificationToken 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof VerificationToken ?VerificationToken [P]
  : 
     never
  } 
    : VerificationToken
  : VerificationToken


  type VerificationTokenCountArgs = Merge<
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }
  >

  export interface VerificationTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `expires`
     * const verificationTokenWithExpiresOnly = await prisma.verificationToken.findMany({ select: { expires: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VerificationToken>>, PrismaPromise<Array<VerificationTokenGetPayload<T>>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Throw an Error if a VerificationToken can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Throw an Error if a VerificationToken can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     * 
    **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     * 
    **/
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    authorName: string | null
    createdAt: Date | null
    description: string | null
    id: number | null
    publishedAt: Date | null
    title: string | null
    thumbnailUrl: string | null
    updatedAt: Date | null
    urlSlug: string | null
  }

  export type PostMaxAggregateOutputType = {
    authorName: string | null
    createdAt: Date | null
    description: string | null
    id: number | null
    publishedAt: Date | null
    title: string | null
    thumbnailUrl: string | null
    updatedAt: Date | null
    urlSlug: string | null
  }

  export type PostCountAggregateOutputType = {
    authorName: number
    content: number
    createdAt: number
    description: number
    id: number
    publishedAt: number
    title: number
    thumbnailUrl: number
    updatedAt: number
    urlSlug: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    authorName?: true
    createdAt?: true
    description?: true
    id?: true
    publishedAt?: true
    title?: true
    thumbnailUrl?: true
    updatedAt?: true
    urlSlug?: true
  }

  export type PostMaxAggregateInputType = {
    authorName?: true
    createdAt?: true
    description?: true
    id?: true
    publishedAt?: true
    title?: true
    thumbnailUrl?: true
    updatedAt?: true
    urlSlug?: true
  }

  export type PostCountAggregateInputType = {
    authorName?: true
    content?: true
    createdAt?: true
    description?: true
    id?: true
    publishedAt?: true
    title?: true
    thumbnailUrl?: true
    updatedAt?: true
    urlSlug?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    authorName: string
    content: JsonValue | null
    createdAt: Date
    description: string | null
    id: number
    publishedAt: Date | null
    title: string | null
    thumbnailUrl: string | null
    updatedAt: Date
    urlSlug: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    author?: boolean | UserArgs
    authorName?: boolean
    content?: boolean
    createdAt?: boolean
    description?: boolean
    id?: boolean
    images?: boolean | PostImageFindManyArgs
    publishedAt?: boolean
    title?: boolean
    thumbnailUrl?: boolean
    updatedAt?: boolean
    upvotes?: boolean | PostUpvoterFindManyArgs
    urlSlug?: boolean
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostInclude = {
    author?: boolean | UserArgs
    images?: boolean | PostImageFindManyArgs
    upvotes?: boolean | PostUpvoterFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'images'
        ? Array < PostImageGetPayload<S['include'][P]>>  :
        P extends 'upvotes'
        ? Array < PostUpvoterGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'images'
        ? Array < PostImageGetPayload<S['select'][P]>>  :
        P extends 'upvotes'
        ? Array < PostUpvoterGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `authorName`
     * const postWithAuthorNameOnly = await prisma.post.findMany({ select: { authorName: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    images<T extends PostImageFindManyArgs = {}>(args?: Subset<T, PostImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostImage>>, PrismaPromise<Array<PostImageGetPayload<T>>>>;

    upvotes<T extends PostUpvoterFindManyArgs = {}>(args?: Subset<T, PostUpvoterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostUpvoter>>, PrismaPromise<Array<PostUpvoterGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model PostUpvoter
   */


  export type AggregatePostUpvoter = {
    _count: PostUpvoterCountAggregateOutputType | null
    _avg: PostUpvoterAvgAggregateOutputType | null
    _sum: PostUpvoterSumAggregateOutputType | null
    _min: PostUpvoterMinAggregateOutputType | null
    _max: PostUpvoterMaxAggregateOutputType | null
  }

  export type PostUpvoterAvgAggregateOutputType = {
    postId: number | null
  }

  export type PostUpvoterSumAggregateOutputType = {
    postId: number | null
  }

  export type PostUpvoterMinAggregateOutputType = {
    postId: number | null
    userId: string | null
  }

  export type PostUpvoterMaxAggregateOutputType = {
    postId: number | null
    userId: string | null
  }

  export type PostUpvoterCountAggregateOutputType = {
    postId: number
    userId: number
    _all: number
  }


  export type PostUpvoterAvgAggregateInputType = {
    postId?: true
  }

  export type PostUpvoterSumAggregateInputType = {
    postId?: true
  }

  export type PostUpvoterMinAggregateInputType = {
    postId?: true
    userId?: true
  }

  export type PostUpvoterMaxAggregateInputType = {
    postId?: true
    userId?: true
  }

  export type PostUpvoterCountAggregateInputType = {
    postId?: true
    userId?: true
    _all?: true
  }

  export type PostUpvoterAggregateArgs = {
    /**
     * Filter which PostUpvoter to aggregate.
     * 
    **/
    where?: PostUpvoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostUpvoters to fetch.
     * 
    **/
    orderBy?: Enumerable<PostUpvoterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostUpvoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostUpvoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostUpvoters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostUpvoters
    **/
    _count?: true | PostUpvoterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostUpvoterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostUpvoterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostUpvoterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostUpvoterMaxAggregateInputType
  }

  export type GetPostUpvoterAggregateType<T extends PostUpvoterAggregateArgs> = {
        [P in keyof T & keyof AggregatePostUpvoter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostUpvoter[P]>
      : GetScalarType<T[P], AggregatePostUpvoter[P]>
  }




  export type PostUpvoterGroupByArgs = {
    where?: PostUpvoterWhereInput
    orderBy?: Enumerable<PostUpvoterOrderByWithAggregationInput>
    by: Array<PostUpvoterScalarFieldEnum>
    having?: PostUpvoterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostUpvoterCountAggregateInputType | true
    _avg?: PostUpvoterAvgAggregateInputType
    _sum?: PostUpvoterSumAggregateInputType
    _min?: PostUpvoterMinAggregateInputType
    _max?: PostUpvoterMaxAggregateInputType
  }


  export type PostUpvoterGroupByOutputType = {
    postId: number
    userId: string
    _count: PostUpvoterCountAggregateOutputType | null
    _avg: PostUpvoterAvgAggregateOutputType | null
    _sum: PostUpvoterSumAggregateOutputType | null
    _min: PostUpvoterMinAggregateOutputType | null
    _max: PostUpvoterMaxAggregateOutputType | null
  }

  type GetPostUpvoterGroupByPayload<T extends PostUpvoterGroupByArgs> = Promise<
    Array<
      PickArray<PostUpvoterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostUpvoterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostUpvoterGroupByOutputType[P]>
            : GetScalarType<T[P], PostUpvoterGroupByOutputType[P]>
        }
      >
    >


  export type PostUpvoterSelect = {
    post?: boolean | PostArgs
    postId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type PostUpvoterInclude = {
    post?: boolean | PostArgs
    user?: boolean | UserArgs
  }

  export type PostUpvoterGetPayload<
    S extends boolean | null | undefined | PostUpvoterArgs,
    U = keyof S
      > = S extends true
        ? PostUpvoter
    : S extends undefined
    ? never
    : S extends PostUpvoterArgs | PostUpvoterFindManyArgs
    ?'include' extends U
    ? PostUpvoter  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'post'
        ? PostGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostUpvoter ?PostUpvoter [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : PostUpvoter
  : PostUpvoter


  type PostUpvoterCountArgs = Merge<
    Omit<PostUpvoterFindManyArgs, 'select' | 'include'> & {
      select?: PostUpvoterCountAggregateInputType | true
    }
  >

  export interface PostUpvoterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostUpvoter that matches the filter.
     * @param {PostUpvoterFindUniqueArgs} args - Arguments to find a PostUpvoter
     * @example
     * // Get one PostUpvoter
     * const postUpvoter = await prisma.postUpvoter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostUpvoterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostUpvoterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostUpvoter'> extends True ? CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter>, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T>>> : CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter | null >, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T> | null >>

    /**
     * Find the first PostUpvoter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpvoterFindFirstArgs} args - Arguments to find a PostUpvoter
     * @example
     * // Get one PostUpvoter
     * const postUpvoter = await prisma.postUpvoter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostUpvoterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostUpvoterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostUpvoter'> extends True ? CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter>, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T>>> : CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter | null >, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T> | null >>

    /**
     * Find zero or more PostUpvoters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpvoterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostUpvoters
     * const postUpvoters = await prisma.postUpvoter.findMany()
     * 
     * // Get first 10 PostUpvoters
     * const postUpvoters = await prisma.postUpvoter.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postUpvoterWithPostIdOnly = await prisma.postUpvoter.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends PostUpvoterFindManyArgs>(
      args?: SelectSubset<T, PostUpvoterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostUpvoter>>, PrismaPromise<Array<PostUpvoterGetPayload<T>>>>

    /**
     * Create a PostUpvoter.
     * @param {PostUpvoterCreateArgs} args - Arguments to create a PostUpvoter.
     * @example
     * // Create one PostUpvoter
     * const PostUpvoter = await prisma.postUpvoter.create({
     *   data: {
     *     // ... data to create a PostUpvoter
     *   }
     * })
     * 
    **/
    create<T extends PostUpvoterCreateArgs>(
      args: SelectSubset<T, PostUpvoterCreateArgs>
    ): CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter>, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T>>>

    /**
     * Create many PostUpvoters.
     *     @param {PostUpvoterCreateManyArgs} args - Arguments to create many PostUpvoters.
     *     @example
     *     // Create many PostUpvoters
     *     const postUpvoter = await prisma.postUpvoter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostUpvoterCreateManyArgs>(
      args?: SelectSubset<T, PostUpvoterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostUpvoter.
     * @param {PostUpvoterDeleteArgs} args - Arguments to delete one PostUpvoter.
     * @example
     * // Delete one PostUpvoter
     * const PostUpvoter = await prisma.postUpvoter.delete({
     *   where: {
     *     // ... filter to delete one PostUpvoter
     *   }
     * })
     * 
    **/
    delete<T extends PostUpvoterDeleteArgs>(
      args: SelectSubset<T, PostUpvoterDeleteArgs>
    ): CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter>, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T>>>

    /**
     * Update one PostUpvoter.
     * @param {PostUpvoterUpdateArgs} args - Arguments to update one PostUpvoter.
     * @example
     * // Update one PostUpvoter
     * const postUpvoter = await prisma.postUpvoter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpvoterUpdateArgs>(
      args: SelectSubset<T, PostUpvoterUpdateArgs>
    ): CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter>, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T>>>

    /**
     * Delete zero or more PostUpvoters.
     * @param {PostUpvoterDeleteManyArgs} args - Arguments to filter PostUpvoters to delete.
     * @example
     * // Delete a few PostUpvoters
     * const { count } = await prisma.postUpvoter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostUpvoterDeleteManyArgs>(
      args?: SelectSubset<T, PostUpvoterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostUpvoters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpvoterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostUpvoters
     * const postUpvoter = await prisma.postUpvoter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpvoterUpdateManyArgs>(
      args: SelectSubset<T, PostUpvoterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostUpvoter.
     * @param {PostUpvoterUpsertArgs} args - Arguments to update or create a PostUpvoter.
     * @example
     * // Update or create a PostUpvoter
     * const postUpvoter = await prisma.postUpvoter.upsert({
     *   create: {
     *     // ... data to create a PostUpvoter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostUpvoter we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpvoterUpsertArgs>(
      args: SelectSubset<T, PostUpvoterUpsertArgs>
    ): CheckSelect<T, Prisma__PostUpvoterClient<PostUpvoter>, Prisma__PostUpvoterClient<PostUpvoterGetPayload<T>>>

    /**
     * Count the number of PostUpvoters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpvoterCountArgs} args - Arguments to filter PostUpvoters to count.
     * @example
     * // Count the number of PostUpvoters
     * const count = await prisma.postUpvoter.count({
     *   where: {
     *     // ... the filter for the PostUpvoters we want to count
     *   }
     * })
    **/
    count<T extends PostUpvoterCountArgs>(
      args?: Subset<T, PostUpvoterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostUpvoterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostUpvoter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpvoterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostUpvoterAggregateArgs>(args: Subset<T, PostUpvoterAggregateArgs>): PrismaPromise<GetPostUpvoterAggregateType<T>>

    /**
     * Group by PostUpvoter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpvoterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostUpvoterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostUpvoterGroupByArgs['orderBy'] }
        : { orderBy?: PostUpvoterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostUpvoterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostUpvoterGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostUpvoter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostUpvoterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostUpvoter findUnique
   */
  export type PostUpvoterFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * Throw an Error if a PostUpvoter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostUpvoter to fetch.
     * 
    **/
    where: PostUpvoterWhereUniqueInput
  }


  /**
   * PostUpvoter findFirst
   */
  export type PostUpvoterFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * Throw an Error if a PostUpvoter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostUpvoter to fetch.
     * 
    **/
    where?: PostUpvoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostUpvoters to fetch.
     * 
    **/
    orderBy?: Enumerable<PostUpvoterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostUpvoters.
     * 
    **/
    cursor?: PostUpvoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostUpvoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostUpvoters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostUpvoters.
     * 
    **/
    distinct?: Enumerable<PostUpvoterScalarFieldEnum>
  }


  /**
   * PostUpvoter findMany
   */
  export type PostUpvoterFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * Filter, which PostUpvoters to fetch.
     * 
    **/
    where?: PostUpvoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostUpvoters to fetch.
     * 
    **/
    orderBy?: Enumerable<PostUpvoterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostUpvoters.
     * 
    **/
    cursor?: PostUpvoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostUpvoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostUpvoters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostUpvoterScalarFieldEnum>
  }


  /**
   * PostUpvoter create
   */
  export type PostUpvoterCreateArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * The data needed to create a PostUpvoter.
     * 
    **/
    data: XOR<PostUpvoterCreateInput, PostUpvoterUncheckedCreateInput>
  }


  /**
   * PostUpvoter createMany
   */
  export type PostUpvoterCreateManyArgs = {
    data: Enumerable<PostUpvoterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostUpvoter update
   */
  export type PostUpvoterUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * The data needed to update a PostUpvoter.
     * 
    **/
    data: XOR<PostUpvoterUpdateInput, PostUpvoterUncheckedUpdateInput>
    /**
     * Choose, which PostUpvoter to update.
     * 
    **/
    where: PostUpvoterWhereUniqueInput
  }


  /**
   * PostUpvoter updateMany
   */
  export type PostUpvoterUpdateManyArgs = {
    data: XOR<PostUpvoterUpdateManyMutationInput, PostUpvoterUncheckedUpdateManyInput>
    where?: PostUpvoterWhereInput
  }


  /**
   * PostUpvoter upsert
   */
  export type PostUpvoterUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * The filter to search for the PostUpvoter to update in case it exists.
     * 
    **/
    where: PostUpvoterWhereUniqueInput
    /**
     * In case the PostUpvoter found by the `where` argument doesn't exist, create a new PostUpvoter with this data.
     * 
    **/
    create: XOR<PostUpvoterCreateInput, PostUpvoterUncheckedCreateInput>
    /**
     * In case the PostUpvoter was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpvoterUpdateInput, PostUpvoterUncheckedUpdateInput>
  }


  /**
   * PostUpvoter delete
   */
  export type PostUpvoterDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
    /**
     * Filter which PostUpvoter to delete.
     * 
    **/
    where: PostUpvoterWhereUniqueInput
  }


  /**
   * PostUpvoter deleteMany
   */
  export type PostUpvoterDeleteManyArgs = {
    where?: PostUpvoterWhereInput
  }


  /**
   * PostUpvoter without action
   */
  export type PostUpvoterArgs = {
    /**
     * Select specific fields to fetch from the PostUpvoter
     * 
    **/
    select?: PostUpvoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostUpvoterInclude | null
  }



  /**
   * Model PostImage
   */


  export type AggregatePostImage = {
    _count: PostImageCountAggregateOutputType | null
    _avg: PostImageAvgAggregateOutputType | null
    _sum: PostImageSumAggregateOutputType | null
    _min: PostImageMinAggregateOutputType | null
    _max: PostImageMaxAggregateOutputType | null
  }

  export type PostImageAvgAggregateOutputType = {
    postId: number | null
  }

  export type PostImageSumAggregateOutputType = {
    postId: number | null
  }

  export type PostImageMinAggregateOutputType = {
    id: string | null
    postId: number | null
    url: string | null
    createdAt: Date | null
  }

  export type PostImageMaxAggregateOutputType = {
    id: string | null
    postId: number | null
    url: string | null
    createdAt: Date | null
  }

  export type PostImageCountAggregateOutputType = {
    id: number
    postId: number
    url: number
    createdAt: number
    _all: number
  }


  export type PostImageAvgAggregateInputType = {
    postId?: true
  }

  export type PostImageSumAggregateInputType = {
    postId?: true
  }

  export type PostImageMinAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    createdAt?: true
  }

  export type PostImageMaxAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    createdAt?: true
  }

  export type PostImageCountAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type PostImageAggregateArgs = {
    /**
     * Filter which PostImage to aggregate.
     * 
    **/
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     * 
    **/
    orderBy?: Enumerable<PostImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostImages
    **/
    _count?: true | PostImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostImageMaxAggregateInputType
  }

  export type GetPostImageAggregateType<T extends PostImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePostImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostImage[P]>
      : GetScalarType<T[P], AggregatePostImage[P]>
  }




  export type PostImageGroupByArgs = {
    where?: PostImageWhereInput
    orderBy?: Enumerable<PostImageOrderByWithAggregationInput>
    by: Array<PostImageScalarFieldEnum>
    having?: PostImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostImageCountAggregateInputType | true
    _avg?: PostImageAvgAggregateInputType
    _sum?: PostImageSumAggregateInputType
    _min?: PostImageMinAggregateInputType
    _max?: PostImageMaxAggregateInputType
  }


  export type PostImageGroupByOutputType = {
    id: string
    postId: number
    url: string
    createdAt: Date
    _count: PostImageCountAggregateOutputType | null
    _avg: PostImageAvgAggregateOutputType | null
    _sum: PostImageSumAggregateOutputType | null
    _min: PostImageMinAggregateOutputType | null
    _max: PostImageMaxAggregateOutputType | null
  }

  type GetPostImageGroupByPayload<T extends PostImageGroupByArgs> = Promise<
    Array<
      PickArray<PostImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostImageGroupByOutputType[P]>
            : GetScalarType<T[P], PostImageGroupByOutputType[P]>
        }
      >
    >


  export type PostImageSelect = {
    id?: boolean
    post?: boolean | PostArgs
    postId?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type PostImageInclude = {
    post?: boolean | PostArgs
  }

  export type PostImageGetPayload<
    S extends boolean | null | undefined | PostImageArgs,
    U = keyof S
      > = S extends true
        ? PostImage
    : S extends undefined
    ? never
    : S extends PostImageArgs | PostImageFindManyArgs
    ?'include' extends U
    ? PostImage  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'post'
        ? PostGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostImage ?PostImage [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> : never
  } 
    : PostImage
  : PostImage


  type PostImageCountArgs = Merge<
    Omit<PostImageFindManyArgs, 'select' | 'include'> & {
      select?: PostImageCountAggregateInputType | true
    }
  >

  export interface PostImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostImage that matches the filter.
     * @param {PostImageFindUniqueArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostImage'> extends True ? CheckSelect<T, Prisma__PostImageClient<PostImage>, Prisma__PostImageClient<PostImageGetPayload<T>>> : CheckSelect<T, Prisma__PostImageClient<PostImage | null >, Prisma__PostImageClient<PostImageGetPayload<T> | null >>

    /**
     * Find the first PostImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindFirstArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostImage'> extends True ? CheckSelect<T, Prisma__PostImageClient<PostImage>, Prisma__PostImageClient<PostImageGetPayload<T>>> : CheckSelect<T, Prisma__PostImageClient<PostImage | null >, Prisma__PostImageClient<PostImageGetPayload<T> | null >>

    /**
     * Find zero or more PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostImages
     * const postImages = await prisma.postImage.findMany()
     * 
     * // Get first 10 PostImages
     * const postImages = await prisma.postImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postImageWithIdOnly = await prisma.postImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostImageFindManyArgs>(
      args?: SelectSubset<T, PostImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostImage>>, PrismaPromise<Array<PostImageGetPayload<T>>>>

    /**
     * Create a PostImage.
     * @param {PostImageCreateArgs} args - Arguments to create a PostImage.
     * @example
     * // Create one PostImage
     * const PostImage = await prisma.postImage.create({
     *   data: {
     *     // ... data to create a PostImage
     *   }
     * })
     * 
    **/
    create<T extends PostImageCreateArgs>(
      args: SelectSubset<T, PostImageCreateArgs>
    ): CheckSelect<T, Prisma__PostImageClient<PostImage>, Prisma__PostImageClient<PostImageGetPayload<T>>>

    /**
     * Create many PostImages.
     *     @param {PostImageCreateManyArgs} args - Arguments to create many PostImages.
     *     @example
     *     // Create many PostImages
     *     const postImage = await prisma.postImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostImageCreateManyArgs>(
      args?: SelectSubset<T, PostImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostImage.
     * @param {PostImageDeleteArgs} args - Arguments to delete one PostImage.
     * @example
     * // Delete one PostImage
     * const PostImage = await prisma.postImage.delete({
     *   where: {
     *     // ... filter to delete one PostImage
     *   }
     * })
     * 
    **/
    delete<T extends PostImageDeleteArgs>(
      args: SelectSubset<T, PostImageDeleteArgs>
    ): CheckSelect<T, Prisma__PostImageClient<PostImage>, Prisma__PostImageClient<PostImageGetPayload<T>>>

    /**
     * Update one PostImage.
     * @param {PostImageUpdateArgs} args - Arguments to update one PostImage.
     * @example
     * // Update one PostImage
     * const postImage = await prisma.postImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostImageUpdateArgs>(
      args: SelectSubset<T, PostImageUpdateArgs>
    ): CheckSelect<T, Prisma__PostImageClient<PostImage>, Prisma__PostImageClient<PostImageGetPayload<T>>>

    /**
     * Delete zero or more PostImages.
     * @param {PostImageDeleteManyArgs} args - Arguments to filter PostImages to delete.
     * @example
     * // Delete a few PostImages
     * const { count } = await prisma.postImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostImageDeleteManyArgs>(
      args?: SelectSubset<T, PostImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostImages
     * const postImage = await prisma.postImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostImageUpdateManyArgs>(
      args: SelectSubset<T, PostImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostImage.
     * @param {PostImageUpsertArgs} args - Arguments to update or create a PostImage.
     * @example
     * // Update or create a PostImage
     * const postImage = await prisma.postImage.upsert({
     *   create: {
     *     // ... data to create a PostImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostImage we want to update
     *   }
     * })
    **/
    upsert<T extends PostImageUpsertArgs>(
      args: SelectSubset<T, PostImageUpsertArgs>
    ): CheckSelect<T, Prisma__PostImageClient<PostImage>, Prisma__PostImageClient<PostImageGetPayload<T>>>

    /**
     * Count the number of PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageCountArgs} args - Arguments to filter PostImages to count.
     * @example
     * // Count the number of PostImages
     * const count = await prisma.postImage.count({
     *   where: {
     *     // ... the filter for the PostImages we want to count
     *   }
     * })
    **/
    count<T extends PostImageCountArgs>(
      args?: Subset<T, PostImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostImageAggregateArgs>(args: Subset<T, PostImageAggregateArgs>): PrismaPromise<GetPostImageAggregateType<T>>

    /**
     * Group by PostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostImageGroupByArgs['orderBy'] }
        : { orderBy?: PostImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostImageGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostImage findUnique
   */
  export type PostImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * Throw an Error if a PostImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostImage to fetch.
     * 
    **/
    where: PostImageWhereUniqueInput
  }


  /**
   * PostImage findFirst
   */
  export type PostImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * Throw an Error if a PostImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostImage to fetch.
     * 
    **/
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     * 
    **/
    orderBy?: Enumerable<PostImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     * 
    **/
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     * 
    **/
    distinct?: Enumerable<PostImageScalarFieldEnum>
  }


  /**
   * PostImage findMany
   */
  export type PostImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * Filter, which PostImages to fetch.
     * 
    **/
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     * 
    **/
    orderBy?: Enumerable<PostImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostImages.
     * 
    **/
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostImageScalarFieldEnum>
  }


  /**
   * PostImage create
   */
  export type PostImageCreateArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * The data needed to create a PostImage.
     * 
    **/
    data: XOR<PostImageCreateInput, PostImageUncheckedCreateInput>
  }


  /**
   * PostImage createMany
   */
  export type PostImageCreateManyArgs = {
    data: Enumerable<PostImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostImage update
   */
  export type PostImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * The data needed to update a PostImage.
     * 
    **/
    data: XOR<PostImageUpdateInput, PostImageUncheckedUpdateInput>
    /**
     * Choose, which PostImage to update.
     * 
    **/
    where: PostImageWhereUniqueInput
  }


  /**
   * PostImage updateMany
   */
  export type PostImageUpdateManyArgs = {
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyInput>
    where?: PostImageWhereInput
  }


  /**
   * PostImage upsert
   */
  export type PostImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * The filter to search for the PostImage to update in case it exists.
     * 
    **/
    where: PostImageWhereUniqueInput
    /**
     * In case the PostImage found by the `where` argument doesn't exist, create a new PostImage with this data.
     * 
    **/
    create: XOR<PostImageCreateInput, PostImageUncheckedCreateInput>
    /**
     * In case the PostImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostImageUpdateInput, PostImageUncheckedUpdateInput>
  }


  /**
   * PostImage delete
   */
  export type PostImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
    /**
     * Filter which PostImage to delete.
     * 
    **/
    where: PostImageWhereUniqueInput
  }


  /**
   * PostImage deleteMany
   */
  export type PostImageDeleteManyArgs = {
    where?: PostImageWhereInput
  }


  /**
   * PostImage without action
   */
  export type PostImageArgs = {
    /**
     * Select specific fields to fetch from the PostImage
     * 
    **/
    select?: PostImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostImageInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    authorId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    authorId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    authorId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    authorId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Promise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentInclude = {
    author?: boolean | UserArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model Skill
   */


  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    owner: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    owner: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    owner: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    owner?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    owner?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    _all?: true
  }

  export type SkillAggregateArgs = {
    /**
     * Filter which Skill to aggregate.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs = {
    where?: SkillWhereInput
    orderBy?: Enumerable<SkillOrderByWithAggregationInput>
    by: Array<SkillScalarFieldEnum>
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }


  export type SkillGroupByOutputType = {
    id: number
    name: string
    owner: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Promise<
    Array<
      PickArray<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect = {
    id?: boolean
    name?: boolean
    owner?: boolean
    users?: boolean | SkillsOnUsersFindManyArgs
    desiringUsers?: boolean | DesiredSkillsOnUsersFindManyArgs
    _count?: boolean | SkillCountOutputTypeArgs
  }

  export type SkillInclude = {
    users?: boolean | SkillsOnUsersFindManyArgs
    desiringUsers?: boolean | DesiredSkillsOnUsersFindManyArgs
    _count?: boolean | SkillCountOutputTypeArgs
  }

  export type SkillGetPayload<
    S extends boolean | null | undefined | SkillArgs,
    U = keyof S
      > = S extends true
        ? Skill
    : S extends undefined
    ? never
    : S extends SkillArgs | SkillFindManyArgs
    ?'include' extends U
    ? Skill  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? Array < SkillsOnUsersGetPayload<S['include'][P]>>  :
        P extends 'desiringUsers'
        ? Array < DesiredSkillsOnUsersGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SkillCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Skill ?Skill [P]
  : 
          P extends 'users'
        ? Array < SkillsOnUsersGetPayload<S['select'][P]>>  :
        P extends 'desiringUsers'
        ? Array < DesiredSkillsOnUsersGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SkillCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Skill
  : Skill


  type SkillCountArgs = Merge<
    Omit<SkillFindManyArgs, 'select' | 'include'> & {
      select?: SkillCountAggregateInputType | true
    }
  >

  export interface SkillDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkillFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Skill'> extends True ? CheckSelect<T, Prisma__SkillClient<Skill>, Prisma__SkillClient<SkillGetPayload<T>>> : CheckSelect<T, Prisma__SkillClient<Skill | null >, Prisma__SkillClient<SkillGetPayload<T> | null >>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkillFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Skill'> extends True ? CheckSelect<T, Prisma__SkillClient<Skill>, Prisma__SkillClient<SkillGetPayload<T>>> : CheckSelect<T, Prisma__SkillClient<Skill | null >, Prisma__SkillClient<SkillGetPayload<T> | null >>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkillFindManyArgs>(
      args?: SelectSubset<T, SkillFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Skill>>, PrismaPromise<Array<SkillGetPayload<T>>>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
    **/
    create<T extends SkillCreateArgs>(
      args: SelectSubset<T, SkillCreateArgs>
    ): CheckSelect<T, Prisma__SkillClient<Skill>, Prisma__SkillClient<SkillGetPayload<T>>>

    /**
     * Create many Skills.
     *     @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skill = await prisma.skill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillCreateManyArgs>(
      args?: SelectSubset<T, SkillCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
    **/
    delete<T extends SkillDeleteArgs>(
      args: SelectSubset<T, SkillDeleteArgs>
    ): CheckSelect<T, Prisma__SkillClient<Skill>, Prisma__SkillClient<SkillGetPayload<T>>>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillUpdateArgs>(
      args: SelectSubset<T, SkillUpdateArgs>
    ): CheckSelect<T, Prisma__SkillClient<Skill>, Prisma__SkillClient<SkillGetPayload<T>>>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillDeleteManyArgs>(
      args?: SelectSubset<T, SkillDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillUpdateManyArgs>(
      args: SelectSubset<T, SkillUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
    **/
    upsert<T extends SkillUpsertArgs>(
      args: SelectSubset<T, SkillUpsertArgs>
    ): CheckSelect<T, Prisma__SkillClient<Skill>, Prisma__SkillClient<SkillGetPayload<T>>>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkillClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends SkillsOnUsersFindManyArgs = {}>(args?: Subset<T, SkillsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SkillsOnUsers>>, PrismaPromise<Array<SkillsOnUsersGetPayload<T>>>>;

    desiringUsers<T extends DesiredSkillsOnUsersFindManyArgs = {}>(args?: Subset<T, DesiredSkillsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<DesiredSkillsOnUsers>>, PrismaPromise<Array<DesiredSkillsOnUsersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Throw an Error if a Skill can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Skill to fetch.
     * 
    **/
    where: SkillWhereUniqueInput
  }


  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Throw an Error if a Skill can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Skill to fetch.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     * 
    **/
    distinct?: Enumerable<SkillScalarFieldEnum>
  }


  /**
   * Skill findMany
   */
  export type SkillFindManyArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter, which Skills to fetch.
     * 
    **/
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     * 
    **/
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkillScalarFieldEnum>
  }


  /**
   * Skill create
   */
  export type SkillCreateArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * The data needed to create a Skill.
     * 
    **/
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }


  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs = {
    data: Enumerable<SkillCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Skill update
   */
  export type SkillUpdateArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * The data needed to update a Skill.
     * 
    **/
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     * 
    **/
    where: SkillWhereUniqueInput
  }


  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs = {
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    where?: SkillWhereInput
  }


  /**
   * Skill upsert
   */
  export type SkillUpsertArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * The filter to search for the Skill to update in case it exists.
     * 
    **/
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     * 
    **/
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }


  /**
   * Skill delete
   */
  export type SkillDeleteArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
    /**
     * Filter which Skill to delete.
     * 
    **/
    where: SkillWhereUniqueInput
  }


  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs = {
    where?: SkillWhereInput
  }


  /**
   * Skill without action
   */
  export type SkillArgs = {
    /**
     * Select specific fields to fetch from the Skill
     * 
    **/
    select?: SkillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillInclude | null
  }



  /**
   * Model SkillsOnUsers
   */


  export type AggregateSkillsOnUsers = {
    _count: SkillsOnUsersCountAggregateOutputType | null
    _avg: SkillsOnUsersAvgAggregateOutputType | null
    _sum: SkillsOnUsersSumAggregateOutputType | null
    _min: SkillsOnUsersMinAggregateOutputType | null
    _max: SkillsOnUsersMaxAggregateOutputType | null
  }

  export type SkillsOnUsersAvgAggregateOutputType = {
    skillId: number | null
  }

  export type SkillsOnUsersSumAggregateOutputType = {
    skillId: number | null
  }

  export type SkillsOnUsersMinAggregateOutputType = {
    skillId: number | null
    userId: string | null
  }

  export type SkillsOnUsersMaxAggregateOutputType = {
    skillId: number | null
    userId: string | null
  }

  export type SkillsOnUsersCountAggregateOutputType = {
    skillId: number
    userId: number
    _all: number
  }


  export type SkillsOnUsersAvgAggregateInputType = {
    skillId?: true
  }

  export type SkillsOnUsersSumAggregateInputType = {
    skillId?: true
  }

  export type SkillsOnUsersMinAggregateInputType = {
    skillId?: true
    userId?: true
  }

  export type SkillsOnUsersMaxAggregateInputType = {
    skillId?: true
    userId?: true
  }

  export type SkillsOnUsersCountAggregateInputType = {
    skillId?: true
    userId?: true
    _all?: true
  }

  export type SkillsOnUsersAggregateArgs = {
    /**
     * Filter which SkillsOnUsers to aggregate.
     * 
    **/
    where?: SkillsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkillsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillsOnUsers
    **/
    _count?: true | SkillsOnUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsOnUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsOnUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsOnUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsOnUsersMaxAggregateInputType
  }

  export type GetSkillsOnUsersAggregateType<T extends SkillsOnUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillsOnUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillsOnUsers[P]>
      : GetScalarType<T[P], AggregateSkillsOnUsers[P]>
  }




  export type SkillsOnUsersGroupByArgs = {
    where?: SkillsOnUsersWhereInput
    orderBy?: Enumerable<SkillsOnUsersOrderByWithAggregationInput>
    by: Array<SkillsOnUsersScalarFieldEnum>
    having?: SkillsOnUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsOnUsersCountAggregateInputType | true
    _avg?: SkillsOnUsersAvgAggregateInputType
    _sum?: SkillsOnUsersSumAggregateInputType
    _min?: SkillsOnUsersMinAggregateInputType
    _max?: SkillsOnUsersMaxAggregateInputType
  }


  export type SkillsOnUsersGroupByOutputType = {
    skillId: number
    userId: string
    _count: SkillsOnUsersCountAggregateOutputType | null
    _avg: SkillsOnUsersAvgAggregateOutputType | null
    _sum: SkillsOnUsersSumAggregateOutputType | null
    _min: SkillsOnUsersMinAggregateOutputType | null
    _max: SkillsOnUsersMaxAggregateOutputType | null
  }

  type GetSkillsOnUsersGroupByPayload<T extends SkillsOnUsersGroupByArgs> = Promise<
    Array<
      PickArray<SkillsOnUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsOnUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsOnUsersGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsOnUsersGroupByOutputType[P]>
        }
      >
    >


  export type SkillsOnUsersSelect = {
    skill?: boolean | SkillArgs
    skillId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type SkillsOnUsersInclude = {
    skill?: boolean | SkillArgs
    user?: boolean | UserArgs
  }

  export type SkillsOnUsersGetPayload<
    S extends boolean | null | undefined | SkillsOnUsersArgs,
    U = keyof S
      > = S extends true
        ? SkillsOnUsers
    : S extends undefined
    ? never
    : S extends SkillsOnUsersArgs | SkillsOnUsersFindManyArgs
    ?'include' extends U
    ? SkillsOnUsers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skill'
        ? SkillGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SkillsOnUsers ?SkillsOnUsers [P]
  : 
          P extends 'skill'
        ? SkillGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : SkillsOnUsers
  : SkillsOnUsers


  type SkillsOnUsersCountArgs = Merge<
    Omit<SkillsOnUsersFindManyArgs, 'select' | 'include'> & {
      select?: SkillsOnUsersCountAggregateInputType | true
    }
  >

  export interface SkillsOnUsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SkillsOnUsers that matches the filter.
     * @param {SkillsOnUsersFindUniqueArgs} args - Arguments to find a SkillsOnUsers
     * @example
     * // Get one SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillsOnUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkillsOnUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SkillsOnUsers'> extends True ? CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers>, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers | null >, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T> | null >>

    /**
     * Find the first SkillsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsOnUsersFindFirstArgs} args - Arguments to find a SkillsOnUsers
     * @example
     * // Get one SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillsOnUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkillsOnUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SkillsOnUsers'> extends True ? CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers>, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers | null >, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T> | null >>

    /**
     * Find zero or more SkillsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsOnUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.findMany()
     * 
     * // Get first 10 SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.findMany({ take: 10 })
     * 
     * // Only select the `skillId`
     * const skillsOnUsersWithSkillIdOnly = await prisma.skillsOnUsers.findMany({ select: { skillId: true } })
     * 
    **/
    findMany<T extends SkillsOnUsersFindManyArgs>(
      args?: SelectSubset<T, SkillsOnUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SkillsOnUsers>>, PrismaPromise<Array<SkillsOnUsersGetPayload<T>>>>

    /**
     * Create a SkillsOnUsers.
     * @param {SkillsOnUsersCreateArgs} args - Arguments to create a SkillsOnUsers.
     * @example
     * // Create one SkillsOnUsers
     * const SkillsOnUsers = await prisma.skillsOnUsers.create({
     *   data: {
     *     // ... data to create a SkillsOnUsers
     *   }
     * })
     * 
    **/
    create<T extends SkillsOnUsersCreateArgs>(
      args: SelectSubset<T, SkillsOnUsersCreateArgs>
    ): CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers>, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T>>>

    /**
     * Create many SkillsOnUsers.
     *     @param {SkillsOnUsersCreateManyArgs} args - Arguments to create many SkillsOnUsers.
     *     @example
     *     // Create many SkillsOnUsers
     *     const skillsOnUsers = await prisma.skillsOnUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillsOnUsersCreateManyArgs>(
      args?: SelectSubset<T, SkillsOnUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SkillsOnUsers.
     * @param {SkillsOnUsersDeleteArgs} args - Arguments to delete one SkillsOnUsers.
     * @example
     * // Delete one SkillsOnUsers
     * const SkillsOnUsers = await prisma.skillsOnUsers.delete({
     *   where: {
     *     // ... filter to delete one SkillsOnUsers
     *   }
     * })
     * 
    **/
    delete<T extends SkillsOnUsersDeleteArgs>(
      args: SelectSubset<T, SkillsOnUsersDeleteArgs>
    ): CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers>, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T>>>

    /**
     * Update one SkillsOnUsers.
     * @param {SkillsOnUsersUpdateArgs} args - Arguments to update one SkillsOnUsers.
     * @example
     * // Update one SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillsOnUsersUpdateArgs>(
      args: SelectSubset<T, SkillsOnUsersUpdateArgs>
    ): CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers>, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T>>>

    /**
     * Delete zero or more SkillsOnUsers.
     * @param {SkillsOnUsersDeleteManyArgs} args - Arguments to filter SkillsOnUsers to delete.
     * @example
     * // Delete a few SkillsOnUsers
     * const { count } = await prisma.skillsOnUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillsOnUsersDeleteManyArgs>(
      args?: SelectSubset<T, SkillsOnUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsOnUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillsOnUsersUpdateManyArgs>(
      args: SelectSubset<T, SkillsOnUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SkillsOnUsers.
     * @param {SkillsOnUsersUpsertArgs} args - Arguments to update or create a SkillsOnUsers.
     * @example
     * // Update or create a SkillsOnUsers
     * const skillsOnUsers = await prisma.skillsOnUsers.upsert({
     *   create: {
     *     // ... data to create a SkillsOnUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillsOnUsers we want to update
     *   }
     * })
    **/
    upsert<T extends SkillsOnUsersUpsertArgs>(
      args: SelectSubset<T, SkillsOnUsersUpsertArgs>
    ): CheckSelect<T, Prisma__SkillsOnUsersClient<SkillsOnUsers>, Prisma__SkillsOnUsersClient<SkillsOnUsersGetPayload<T>>>

    /**
     * Count the number of SkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsOnUsersCountArgs} args - Arguments to filter SkillsOnUsers to count.
     * @example
     * // Count the number of SkillsOnUsers
     * const count = await prisma.skillsOnUsers.count({
     *   where: {
     *     // ... the filter for the SkillsOnUsers we want to count
     *   }
     * })
    **/
    count<T extends SkillsOnUsersCountArgs>(
      args?: Subset<T, SkillsOnUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsOnUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsOnUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillsOnUsersAggregateArgs>(args: Subset<T, SkillsOnUsersAggregateArgs>): PrismaPromise<GetSkillsOnUsersAggregateType<T>>

    /**
     * Group by SkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsOnUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillsOnUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsOnUsersGroupByArgs['orderBy'] }
        : { orderBy?: SkillsOnUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillsOnUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsOnUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillsOnUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkillsOnUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skill<T extends SkillArgs = {}>(args?: Subset<T, SkillArgs>): CheckSelect<T, Prisma__SkillClient<Skill | null >, Prisma__SkillClient<SkillGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SkillsOnUsers findUnique
   */
  export type SkillsOnUsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * Throw an Error if a SkillsOnUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SkillsOnUsers to fetch.
     * 
    **/
    where: SkillsOnUsersWhereUniqueInput
  }


  /**
   * SkillsOnUsers findFirst
   */
  export type SkillsOnUsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * Throw an Error if a SkillsOnUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SkillsOnUsers to fetch.
     * 
    **/
    where?: SkillsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillsOnUsers.
     * 
    **/
    cursor?: SkillsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillsOnUsers.
     * 
    **/
    distinct?: Enumerable<SkillsOnUsersScalarFieldEnum>
  }


  /**
   * SkillsOnUsers findMany
   */
  export type SkillsOnUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * Filter, which SkillsOnUsers to fetch.
     * 
    **/
    where?: SkillsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<SkillsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillsOnUsers.
     * 
    **/
    cursor?: SkillsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillsOnUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkillsOnUsersScalarFieldEnum>
  }


  /**
   * SkillsOnUsers create
   */
  export type SkillsOnUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * The data needed to create a SkillsOnUsers.
     * 
    **/
    data: XOR<SkillsOnUsersCreateInput, SkillsOnUsersUncheckedCreateInput>
  }


  /**
   * SkillsOnUsers createMany
   */
  export type SkillsOnUsersCreateManyArgs = {
    data: Enumerable<SkillsOnUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SkillsOnUsers update
   */
  export type SkillsOnUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * The data needed to update a SkillsOnUsers.
     * 
    **/
    data: XOR<SkillsOnUsersUpdateInput, SkillsOnUsersUncheckedUpdateInput>
    /**
     * Choose, which SkillsOnUsers to update.
     * 
    **/
    where: SkillsOnUsersWhereUniqueInput
  }


  /**
   * SkillsOnUsers updateMany
   */
  export type SkillsOnUsersUpdateManyArgs = {
    data: XOR<SkillsOnUsersUpdateManyMutationInput, SkillsOnUsersUncheckedUpdateManyInput>
    where?: SkillsOnUsersWhereInput
  }


  /**
   * SkillsOnUsers upsert
   */
  export type SkillsOnUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * The filter to search for the SkillsOnUsers to update in case it exists.
     * 
    **/
    where: SkillsOnUsersWhereUniqueInput
    /**
     * In case the SkillsOnUsers found by the `where` argument doesn't exist, create a new SkillsOnUsers with this data.
     * 
    **/
    create: XOR<SkillsOnUsersCreateInput, SkillsOnUsersUncheckedCreateInput>
    /**
     * In case the SkillsOnUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkillsOnUsersUpdateInput, SkillsOnUsersUncheckedUpdateInput>
  }


  /**
   * SkillsOnUsers delete
   */
  export type SkillsOnUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
    /**
     * Filter which SkillsOnUsers to delete.
     * 
    **/
    where: SkillsOnUsersWhereUniqueInput
  }


  /**
   * SkillsOnUsers deleteMany
   */
  export type SkillsOnUsersDeleteManyArgs = {
    where?: SkillsOnUsersWhereInput
  }


  /**
   * SkillsOnUsers without action
   */
  export type SkillsOnUsersArgs = {
    /**
     * Select specific fields to fetch from the SkillsOnUsers
     * 
    **/
    select?: SkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkillsOnUsersInclude | null
  }



  /**
   * Model DesiredSkillsOnUsers
   */


  export type AggregateDesiredSkillsOnUsers = {
    _count: DesiredSkillsOnUsersCountAggregateOutputType | null
    _avg: DesiredSkillsOnUsersAvgAggregateOutputType | null
    _sum: DesiredSkillsOnUsersSumAggregateOutputType | null
    _min: DesiredSkillsOnUsersMinAggregateOutputType | null
    _max: DesiredSkillsOnUsersMaxAggregateOutputType | null
  }

  export type DesiredSkillsOnUsersAvgAggregateOutputType = {
    skillId: number | null
  }

  export type DesiredSkillsOnUsersSumAggregateOutputType = {
    skillId: number | null
  }

  export type DesiredSkillsOnUsersMinAggregateOutputType = {
    skillId: number | null
    userId: string | null
  }

  export type DesiredSkillsOnUsersMaxAggregateOutputType = {
    skillId: number | null
    userId: string | null
  }

  export type DesiredSkillsOnUsersCountAggregateOutputType = {
    skillId: number
    userId: number
    _all: number
  }


  export type DesiredSkillsOnUsersAvgAggregateInputType = {
    skillId?: true
  }

  export type DesiredSkillsOnUsersSumAggregateInputType = {
    skillId?: true
  }

  export type DesiredSkillsOnUsersMinAggregateInputType = {
    skillId?: true
    userId?: true
  }

  export type DesiredSkillsOnUsersMaxAggregateInputType = {
    skillId?: true
    userId?: true
  }

  export type DesiredSkillsOnUsersCountAggregateInputType = {
    skillId?: true
    userId?: true
    _all?: true
  }

  export type DesiredSkillsOnUsersAggregateArgs = {
    /**
     * Filter which DesiredSkillsOnUsers to aggregate.
     * 
    **/
    where?: DesiredSkillsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesiredSkillsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<DesiredSkillsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DesiredSkillsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesiredSkillsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesiredSkillsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesiredSkillsOnUsers
    **/
    _count?: true | DesiredSkillsOnUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesiredSkillsOnUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesiredSkillsOnUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesiredSkillsOnUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesiredSkillsOnUsersMaxAggregateInputType
  }

  export type GetDesiredSkillsOnUsersAggregateType<T extends DesiredSkillsOnUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateDesiredSkillsOnUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesiredSkillsOnUsers[P]>
      : GetScalarType<T[P], AggregateDesiredSkillsOnUsers[P]>
  }




  export type DesiredSkillsOnUsersGroupByArgs = {
    where?: DesiredSkillsOnUsersWhereInput
    orderBy?: Enumerable<DesiredSkillsOnUsersOrderByWithAggregationInput>
    by: Array<DesiredSkillsOnUsersScalarFieldEnum>
    having?: DesiredSkillsOnUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesiredSkillsOnUsersCountAggregateInputType | true
    _avg?: DesiredSkillsOnUsersAvgAggregateInputType
    _sum?: DesiredSkillsOnUsersSumAggregateInputType
    _min?: DesiredSkillsOnUsersMinAggregateInputType
    _max?: DesiredSkillsOnUsersMaxAggregateInputType
  }


  export type DesiredSkillsOnUsersGroupByOutputType = {
    skillId: number
    userId: string
    _count: DesiredSkillsOnUsersCountAggregateOutputType | null
    _avg: DesiredSkillsOnUsersAvgAggregateOutputType | null
    _sum: DesiredSkillsOnUsersSumAggregateOutputType | null
    _min: DesiredSkillsOnUsersMinAggregateOutputType | null
    _max: DesiredSkillsOnUsersMaxAggregateOutputType | null
  }

  type GetDesiredSkillsOnUsersGroupByPayload<T extends DesiredSkillsOnUsersGroupByArgs> = Promise<
    Array<
      PickArray<DesiredSkillsOnUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesiredSkillsOnUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesiredSkillsOnUsersGroupByOutputType[P]>
            : GetScalarType<T[P], DesiredSkillsOnUsersGroupByOutputType[P]>
        }
      >
    >


  export type DesiredSkillsOnUsersSelect = {
    skill?: boolean | SkillArgs
    skillId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type DesiredSkillsOnUsersInclude = {
    skill?: boolean | SkillArgs
    user?: boolean | UserArgs
  }

  export type DesiredSkillsOnUsersGetPayload<
    S extends boolean | null | undefined | DesiredSkillsOnUsersArgs,
    U = keyof S
      > = S extends true
        ? DesiredSkillsOnUsers
    : S extends undefined
    ? never
    : S extends DesiredSkillsOnUsersArgs | DesiredSkillsOnUsersFindManyArgs
    ?'include' extends U
    ? DesiredSkillsOnUsers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skill'
        ? SkillGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DesiredSkillsOnUsers ?DesiredSkillsOnUsers [P]
  : 
          P extends 'skill'
        ? SkillGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : DesiredSkillsOnUsers
  : DesiredSkillsOnUsers


  type DesiredSkillsOnUsersCountArgs = Merge<
    Omit<DesiredSkillsOnUsersFindManyArgs, 'select' | 'include'> & {
      select?: DesiredSkillsOnUsersCountAggregateInputType | true
    }
  >

  export interface DesiredSkillsOnUsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DesiredSkillsOnUsers that matches the filter.
     * @param {DesiredSkillsOnUsersFindUniqueArgs} args - Arguments to find a DesiredSkillsOnUsers
     * @example
     * // Get one DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DesiredSkillsOnUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DesiredSkillsOnUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DesiredSkillsOnUsers'> extends True ? CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers>, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers | null >, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T> | null >>

    /**
     * Find the first DesiredSkillsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesiredSkillsOnUsersFindFirstArgs} args - Arguments to find a DesiredSkillsOnUsers
     * @example
     * // Get one DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DesiredSkillsOnUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DesiredSkillsOnUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DesiredSkillsOnUsers'> extends True ? CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers>, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers | null >, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T> | null >>

    /**
     * Find zero or more DesiredSkillsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesiredSkillsOnUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.findMany()
     * 
     * // Get first 10 DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.findMany({ take: 10 })
     * 
     * // Only select the `skillId`
     * const desiredSkillsOnUsersWithSkillIdOnly = await prisma.desiredSkillsOnUsers.findMany({ select: { skillId: true } })
     * 
    **/
    findMany<T extends DesiredSkillsOnUsersFindManyArgs>(
      args?: SelectSubset<T, DesiredSkillsOnUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DesiredSkillsOnUsers>>, PrismaPromise<Array<DesiredSkillsOnUsersGetPayload<T>>>>

    /**
     * Create a DesiredSkillsOnUsers.
     * @param {DesiredSkillsOnUsersCreateArgs} args - Arguments to create a DesiredSkillsOnUsers.
     * @example
     * // Create one DesiredSkillsOnUsers
     * const DesiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.create({
     *   data: {
     *     // ... data to create a DesiredSkillsOnUsers
     *   }
     * })
     * 
    **/
    create<T extends DesiredSkillsOnUsersCreateArgs>(
      args: SelectSubset<T, DesiredSkillsOnUsersCreateArgs>
    ): CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers>, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T>>>

    /**
     * Create many DesiredSkillsOnUsers.
     *     @param {DesiredSkillsOnUsersCreateManyArgs} args - Arguments to create many DesiredSkillsOnUsers.
     *     @example
     *     // Create many DesiredSkillsOnUsers
     *     const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DesiredSkillsOnUsersCreateManyArgs>(
      args?: SelectSubset<T, DesiredSkillsOnUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DesiredSkillsOnUsers.
     * @param {DesiredSkillsOnUsersDeleteArgs} args - Arguments to delete one DesiredSkillsOnUsers.
     * @example
     * // Delete one DesiredSkillsOnUsers
     * const DesiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.delete({
     *   where: {
     *     // ... filter to delete one DesiredSkillsOnUsers
     *   }
     * })
     * 
    **/
    delete<T extends DesiredSkillsOnUsersDeleteArgs>(
      args: SelectSubset<T, DesiredSkillsOnUsersDeleteArgs>
    ): CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers>, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T>>>

    /**
     * Update one DesiredSkillsOnUsers.
     * @param {DesiredSkillsOnUsersUpdateArgs} args - Arguments to update one DesiredSkillsOnUsers.
     * @example
     * // Update one DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DesiredSkillsOnUsersUpdateArgs>(
      args: SelectSubset<T, DesiredSkillsOnUsersUpdateArgs>
    ): CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers>, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T>>>

    /**
     * Delete zero or more DesiredSkillsOnUsers.
     * @param {DesiredSkillsOnUsersDeleteManyArgs} args - Arguments to filter DesiredSkillsOnUsers to delete.
     * @example
     * // Delete a few DesiredSkillsOnUsers
     * const { count } = await prisma.desiredSkillsOnUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DesiredSkillsOnUsersDeleteManyArgs>(
      args?: SelectSubset<T, DesiredSkillsOnUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesiredSkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesiredSkillsOnUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DesiredSkillsOnUsersUpdateManyArgs>(
      args: SelectSubset<T, DesiredSkillsOnUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DesiredSkillsOnUsers.
     * @param {DesiredSkillsOnUsersUpsertArgs} args - Arguments to update or create a DesiredSkillsOnUsers.
     * @example
     * // Update or create a DesiredSkillsOnUsers
     * const desiredSkillsOnUsers = await prisma.desiredSkillsOnUsers.upsert({
     *   create: {
     *     // ... data to create a DesiredSkillsOnUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesiredSkillsOnUsers we want to update
     *   }
     * })
    **/
    upsert<T extends DesiredSkillsOnUsersUpsertArgs>(
      args: SelectSubset<T, DesiredSkillsOnUsersUpsertArgs>
    ): CheckSelect<T, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsers>, Prisma__DesiredSkillsOnUsersClient<DesiredSkillsOnUsersGetPayload<T>>>

    /**
     * Count the number of DesiredSkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesiredSkillsOnUsersCountArgs} args - Arguments to filter DesiredSkillsOnUsers to count.
     * @example
     * // Count the number of DesiredSkillsOnUsers
     * const count = await prisma.desiredSkillsOnUsers.count({
     *   where: {
     *     // ... the filter for the DesiredSkillsOnUsers we want to count
     *   }
     * })
    **/
    count<T extends DesiredSkillsOnUsersCountArgs>(
      args?: Subset<T, DesiredSkillsOnUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesiredSkillsOnUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesiredSkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesiredSkillsOnUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DesiredSkillsOnUsersAggregateArgs>(args: Subset<T, DesiredSkillsOnUsersAggregateArgs>): PrismaPromise<GetDesiredSkillsOnUsersAggregateType<T>>

    /**
     * Group by DesiredSkillsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesiredSkillsOnUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DesiredSkillsOnUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesiredSkillsOnUsersGroupByArgs['orderBy'] }
        : { orderBy?: DesiredSkillsOnUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DesiredSkillsOnUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesiredSkillsOnUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesiredSkillsOnUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DesiredSkillsOnUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skill<T extends SkillArgs = {}>(args?: Subset<T, SkillArgs>): CheckSelect<T, Prisma__SkillClient<Skill | null >, Prisma__SkillClient<SkillGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DesiredSkillsOnUsers findUnique
   */
  export type DesiredSkillsOnUsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * Throw an Error if a DesiredSkillsOnUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DesiredSkillsOnUsers to fetch.
     * 
    **/
    where: DesiredSkillsOnUsersWhereUniqueInput
  }


  /**
   * DesiredSkillsOnUsers findFirst
   */
  export type DesiredSkillsOnUsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * Throw an Error if a DesiredSkillsOnUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DesiredSkillsOnUsers to fetch.
     * 
    **/
    where?: DesiredSkillsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesiredSkillsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<DesiredSkillsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesiredSkillsOnUsers.
     * 
    **/
    cursor?: DesiredSkillsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesiredSkillsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesiredSkillsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesiredSkillsOnUsers.
     * 
    **/
    distinct?: Enumerable<DesiredSkillsOnUsersScalarFieldEnum>
  }


  /**
   * DesiredSkillsOnUsers findMany
   */
  export type DesiredSkillsOnUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * Filter, which DesiredSkillsOnUsers to fetch.
     * 
    **/
    where?: DesiredSkillsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesiredSkillsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<DesiredSkillsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesiredSkillsOnUsers.
     * 
    **/
    cursor?: DesiredSkillsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesiredSkillsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesiredSkillsOnUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DesiredSkillsOnUsersScalarFieldEnum>
  }


  /**
   * DesiredSkillsOnUsers create
   */
  export type DesiredSkillsOnUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * The data needed to create a DesiredSkillsOnUsers.
     * 
    **/
    data: XOR<DesiredSkillsOnUsersCreateInput, DesiredSkillsOnUsersUncheckedCreateInput>
  }


  /**
   * DesiredSkillsOnUsers createMany
   */
  export type DesiredSkillsOnUsersCreateManyArgs = {
    data: Enumerable<DesiredSkillsOnUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DesiredSkillsOnUsers update
   */
  export type DesiredSkillsOnUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * The data needed to update a DesiredSkillsOnUsers.
     * 
    **/
    data: XOR<DesiredSkillsOnUsersUpdateInput, DesiredSkillsOnUsersUncheckedUpdateInput>
    /**
     * Choose, which DesiredSkillsOnUsers to update.
     * 
    **/
    where: DesiredSkillsOnUsersWhereUniqueInput
  }


  /**
   * DesiredSkillsOnUsers updateMany
   */
  export type DesiredSkillsOnUsersUpdateManyArgs = {
    data: XOR<DesiredSkillsOnUsersUpdateManyMutationInput, DesiredSkillsOnUsersUncheckedUpdateManyInput>
    where?: DesiredSkillsOnUsersWhereInput
  }


  /**
   * DesiredSkillsOnUsers upsert
   */
  export type DesiredSkillsOnUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * The filter to search for the DesiredSkillsOnUsers to update in case it exists.
     * 
    **/
    where: DesiredSkillsOnUsersWhereUniqueInput
    /**
     * In case the DesiredSkillsOnUsers found by the `where` argument doesn't exist, create a new DesiredSkillsOnUsers with this data.
     * 
    **/
    create: XOR<DesiredSkillsOnUsersCreateInput, DesiredSkillsOnUsersUncheckedCreateInput>
    /**
     * In case the DesiredSkillsOnUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DesiredSkillsOnUsersUpdateInput, DesiredSkillsOnUsersUncheckedUpdateInput>
  }


  /**
   * DesiredSkillsOnUsers delete
   */
  export type DesiredSkillsOnUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
    /**
     * Filter which DesiredSkillsOnUsers to delete.
     * 
    **/
    where: DesiredSkillsOnUsersWhereUniqueInput
  }


  /**
   * DesiredSkillsOnUsers deleteMany
   */
  export type DesiredSkillsOnUsersDeleteManyArgs = {
    where?: DesiredSkillsOnUsersWhereInput
  }


  /**
   * DesiredSkillsOnUsers without action
   */
  export type DesiredSkillsOnUsersArgs = {
    /**
     * Select specific fields to fetch from the DesiredSkillsOnUsers
     * 
    **/
    select?: DesiredSkillsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DesiredSkillsOnUsersInclude | null
  }



  /**
   * Model Organization
   */


  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which Organization to aggregate.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs = {
    where?: OrganizationWhereInput
    orderBy?: Enumerable<OrganizationOrderByWithAggregationInput>
    by: Array<OrganizationScalarFieldEnum>
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }


  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Promise<
    Array<
      PickArray<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect = {
    id?: boolean
    name?: boolean
    experiences?: boolean | ExperienceFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationInclude = {
    experiences?: boolean | ExperienceFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationArgs,
    U = keyof S
      > = S extends true
        ? Organization
    : S extends undefined
    ? never
    : S extends OrganizationArgs | OrganizationFindManyArgs
    ?'include' extends U
    ? Organization  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'experiences'
        ? Array < ExperienceGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? OrganizationCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Organization ?Organization [P]
  : 
          P extends 'experiences'
        ? Array < ExperienceGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? OrganizationCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Organization
  : Organization


  type OrganizationCountArgs = Merge<
    Omit<OrganizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }
  >

  export interface OrganizationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrganizationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Organization'> extends True ? CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>> : CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrganizationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Organization'> extends True ? CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>> : CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Organization>>, PrismaPromise<Array<OrganizationGetPayload<T>>>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Create many Organizations.
     *     @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrganizationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    experiences<T extends ExperienceFindManyArgs = {}>(args?: Subset<T, ExperienceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Experience>>, PrismaPromise<Array<ExperienceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Throw an Error if a Organization can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Organization to fetch.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Throw an Error if a Organization can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Organization to fetch.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     * 
    **/
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organizations to fetch.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization create
   */
  export type OrganizationCreateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to create a Organization.
     * 
    **/
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }


  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs = {
    data: Enumerable<OrganizationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Organization update
   */
  export type OrganizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to update a Organization.
     * 
    **/
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs = {
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    where?: OrganizationWhereInput
  }


  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The filter to search for the Organization to update in case it exists.
     * 
    **/
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     * 
    **/
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }


  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter which Organization to delete.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs = {
    where?: OrganizationWhereInput
  }


  /**
   * Organization without action
   */
  export type OrganizationArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
  }



  /**
   * Model Experience
   */


  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    endDate: Date | null
    location: string | null
    organizationName: string | null
    positionName: string | null
    startDate: Date | null
    type: ExperienceType | null
    userId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    endDate: Date | null
    location: string | null
    organizationName: string | null
    positionName: string | null
    startDate: Date | null
    type: ExperienceType | null
    userId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    endDate: number
    highlights: number
    location: number
    organizationName: number
    positionName: number
    startDate: number
    type: number
    userId: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    endDate?: true
    location?: true
    organizationName?: true
    positionName?: true
    startDate?: true
    type?: true
    userId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    endDate?: true
    location?: true
    organizationName?: true
    positionName?: true
    startDate?: true
    type?: true
    userId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    endDate?: true
    highlights?: true
    location?: true
    organizationName?: true
    positionName?: true
    startDate?: true
    type?: true
    userId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs = {
    /**
     * Filter which Experience to aggregate.
     * 
    **/
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     * 
    **/
    orderBy?: Enumerable<ExperienceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs = {
    where?: ExperienceWhereInput
    orderBy?: Enumerable<ExperienceOrderByWithAggregationInput>
    by: Array<ExperienceScalarFieldEnum>
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }


  export type ExperienceGroupByOutputType = {
    id: number
    endDate: Date | null
    highlights: string[]
    location: string | null
    organizationName: string
    positionName: string | null
    startDate: Date | null
    type: ExperienceType | null
    userId: string
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Promise<
    Array<
      PickArray<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect = {
    id?: boolean
    endDate?: boolean
    highlights?: boolean
    location?: boolean
    organization?: boolean | OrganizationArgs
    organizationName?: boolean
    positionName?: boolean
    startDate?: boolean
    type?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type ExperienceInclude = {
    organization?: boolean | OrganizationArgs
    user?: boolean | UserArgs
  }

  export type ExperienceGetPayload<
    S extends boolean | null | undefined | ExperienceArgs,
    U = keyof S
      > = S extends true
        ? Experience
    : S extends undefined
    ? never
    : S extends ExperienceArgs | ExperienceFindManyArgs
    ?'include' extends U
    ? Experience  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'organization'
        ? OrganizationGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Experience ?Experience [P]
  : 
          P extends 'organization'
        ? OrganizationGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Experience
  : Experience


  type ExperienceCountArgs = Merge<
    Omit<ExperienceFindManyArgs, 'select' | 'include'> & {
      select?: ExperienceCountAggregateInputType | true
    }
  >

  export interface ExperienceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExperienceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExperienceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Experience'> extends True ? CheckSelect<T, Prisma__ExperienceClient<Experience>, Prisma__ExperienceClient<ExperienceGetPayload<T>>> : CheckSelect<T, Prisma__ExperienceClient<Experience | null >, Prisma__ExperienceClient<ExperienceGetPayload<T> | null >>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExperienceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExperienceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Experience'> extends True ? CheckSelect<T, Prisma__ExperienceClient<Experience>, Prisma__ExperienceClient<ExperienceGetPayload<T>>> : CheckSelect<T, Prisma__ExperienceClient<Experience | null >, Prisma__ExperienceClient<ExperienceGetPayload<T> | null >>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExperienceFindManyArgs>(
      args?: SelectSubset<T, ExperienceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Experience>>, PrismaPromise<Array<ExperienceGetPayload<T>>>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
    **/
    create<T extends ExperienceCreateArgs>(
      args: SelectSubset<T, ExperienceCreateArgs>
    ): CheckSelect<T, Prisma__ExperienceClient<Experience>, Prisma__ExperienceClient<ExperienceGetPayload<T>>>

    /**
     * Create many Experiences.
     *     @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     *     @example
     *     // Create many Experiences
     *     const experience = await prisma.experience.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExperienceCreateManyArgs>(
      args?: SelectSubset<T, ExperienceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
    **/
    delete<T extends ExperienceDeleteArgs>(
      args: SelectSubset<T, ExperienceDeleteArgs>
    ): CheckSelect<T, Prisma__ExperienceClient<Experience>, Prisma__ExperienceClient<ExperienceGetPayload<T>>>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExperienceUpdateArgs>(
      args: SelectSubset<T, ExperienceUpdateArgs>
    ): CheckSelect<T, Prisma__ExperienceClient<Experience>, Prisma__ExperienceClient<ExperienceGetPayload<T>>>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExperienceDeleteManyArgs>(
      args?: SelectSubset<T, ExperienceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExperienceUpdateManyArgs>(
      args: SelectSubset<T, ExperienceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
    **/
    upsert<T extends ExperienceUpsertArgs>(
      args: SelectSubset<T, ExperienceUpsertArgs>
    ): CheckSelect<T, Prisma__ExperienceClient<Experience>, Prisma__ExperienceClient<ExperienceGetPayload<T>>>

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExperienceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * Throw an Error if a Experience can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Experience to fetch.
     * 
    **/
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * Throw an Error if a Experience can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Experience to fetch.
     * 
    **/
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     * 
    **/
    orderBy?: Enumerable<ExperienceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     * 
    **/
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     * 
    **/
    distinct?: Enumerable<ExperienceScalarFieldEnum>
  }


  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * Filter, which Experiences to fetch.
     * 
    **/
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     * 
    **/
    orderBy?: Enumerable<ExperienceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     * 
    **/
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ExperienceScalarFieldEnum>
  }


  /**
   * Experience create
   */
  export type ExperienceCreateArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * The data needed to create a Experience.
     * 
    **/
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }


  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs = {
    data: Enumerable<ExperienceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Experience update
   */
  export type ExperienceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * The data needed to update a Experience.
     * 
    **/
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     * 
    **/
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs = {
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    where?: ExperienceWhereInput
  }


  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * The filter to search for the Experience to update in case it exists.
     * 
    **/
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     * 
    **/
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }


  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
    /**
     * Filter which Experience to delete.
     * 
    **/
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs = {
    where?: ExperienceWhereInput
  }


  /**
   * Experience without action
   */
  export type ExperienceArgs = {
    /**
     * Select specific fields to fetch from the Experience
     * 
    **/
    select?: ExperienceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExperienceInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    access_token: 'access_token',
    expires_at: 'expires_at',
    id: 'id',
    id_token: 'id_token',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    oauth_token: 'oauth_token',
    oauth_token_secret: 'oauth_token_secret',
    refresh_token: 'refresh_token',
    scope: 'scope',
    session_state: 'session_state',
    token_type: 'token_type',
    type: 'type',
    userId: 'userId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    expires: 'expires',
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    createdAt: 'createdAt',
    description: 'description',
    email: 'email',
    emailVerified: 'emailVerified',
    id: 'id',
    image: 'image',
    name: 'name',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    expires: 'expires',
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const PostScalarFieldEnum: {
    authorName: 'authorName',
    content: 'content',
    createdAt: 'createdAt',
    description: 'description',
    id: 'id',
    publishedAt: 'publishedAt',
    title: 'title',
    thumbnailUrl: 'thumbnailUrl',
    updatedAt: 'updatedAt',
    urlSlug: 'urlSlug'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostUpvoterScalarFieldEnum: {
    postId: 'postId',
    userId: 'userId'
  };

  export type PostUpvoterScalarFieldEnum = (typeof PostUpvoterScalarFieldEnum)[keyof typeof PostUpvoterScalarFieldEnum]


  export const PostImageScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type PostImageScalarFieldEnum = (typeof PostImageScalarFieldEnum)[keyof typeof PostImageScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    owner: 'owner'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SkillsOnUsersScalarFieldEnum: {
    skillId: 'skillId',
    userId: 'userId'
  };

  export type SkillsOnUsersScalarFieldEnum = (typeof SkillsOnUsersScalarFieldEnum)[keyof typeof SkillsOnUsersScalarFieldEnum]


  export const DesiredSkillsOnUsersScalarFieldEnum: {
    skillId: 'skillId',
    userId: 'userId'
  };

  export type DesiredSkillsOnUsersScalarFieldEnum = (typeof DesiredSkillsOnUsersScalarFieldEnum)[keyof typeof DesiredSkillsOnUsersScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    endDate: 'endDate',
    highlights: 'highlights',
    location: 'location',
    organizationName: 'organizationName',
    positionName: 'positionName',
    startDate: 'startDate',
    type: 'type',
    userId: 'userId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    id?: StringFilter | string
    id_token?: StringNullableFilter | string | null
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    oauth_token?: StringNullableFilter | string | null
    oauth_token_secret?: StringNullableFilter | string | null
    refresh_token?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    token_type?: StringNullableFilter | string | null
    type?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type AccountOrderByWithRelationInput = {
    access_token?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    id_token?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    oauth_token?: SortOrder
    oauth_token_secret?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    access_token?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    id_token?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    oauth_token?: SortOrder
    oauth_token_secret?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    id?: StringWithAggregatesFilter | string
    id_token?: StringNullableWithAggregatesFilter | string | null
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    oauth_token?: StringNullableWithAggregatesFilter | string | null
    oauth_token_secret?: StringNullableWithAggregatesFilter | string | null
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    type?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    expires?: DateTimeFilter | Date | string
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type SessionOrderByWithRelationInput = {
    expires?: SortOrder
    id?: SortOrder
    sessionToken?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    expires?: SortOrder
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    expires?: DateTimeWithAggregatesFilter | Date | string
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    accounts?: AccountListRelationFilter
    comments?: CommentListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    description?: StringNullableFilter | string | null
    desiredSkills?: DesiredSkillsOnUsersListRelationFilter
    email?: StringFilter | string
    emailVerified?: DateTimeNullableFilter | Date | string | null
    experiences?: ExperienceListRelationFilter
    id?: StringFilter | string
    image?: StringNullableFilter | string | null
    name?: StringFilter | string
    posts?: PostListRelationFilter
    sessions?: SessionListRelationFilter
    skills?: SkillsOnUsersListRelationFilter
    updatedAt?: DateTimeFilter | Date | string
    upvotedPosts?: PostUpvoterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    accounts?: AccountOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    createdAt?: SortOrder
    description?: SortOrder
    desiredSkills?: DesiredSkillsOnUsersOrderByRelationAggregateInput
    email?: SortOrder
    emailVerified?: SortOrder
    experiences?: ExperienceOrderByRelationAggregateInput
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    skills?: SkillsOnUsersOrderByRelationAggregateInput
    updatedAt?: SortOrder
    upvotedPosts?: PostUpvoterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    email?: string
    id?: string
    name?: string
  }

  export type UserOrderByWithAggregationInput = {
    createdAt?: SortOrder
    description?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    description?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    expires?: DateTimeFilter | Date | string
    identifier?: StringFilter | string
    token?: StringFilter | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    expires?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    expires?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    expires?: DateTimeWithAggregatesFilter | Date | string
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorName?: StringFilter | string
    content?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    description?: StringNullableFilter | string | null
    id?: IntFilter | number
    images?: PostImageListRelationFilter
    publishedAt?: DateTimeNullableFilter | Date | string | null
    title?: StringNullableFilter | string | null
    thumbnailUrl?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    upvotes?: PostUpvoterListRelationFilter
    urlSlug?: StringFilter | string
  }

  export type PostOrderByWithRelationInput = {
    author?: UserOrderByWithRelationInput
    authorName?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    images?: PostImageOrderByRelationAggregateInput
    publishedAt?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    updatedAt?: SortOrder
    upvotes?: PostUpvoterOrderByRelationAggregateInput
    urlSlug?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
    authorName_urlSlug?: PostAuthorNameUrlSlugCompoundUniqueInput
  }

  export type PostOrderByWithAggregationInput = {
    authorName?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    publishedAt?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    updatedAt?: SortOrder
    urlSlug?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    authorName?: StringWithAggregatesFilter | string
    content?: JsonNullableWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    description?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
    publishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    title?: StringNullableWithAggregatesFilter | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    urlSlug?: StringWithAggregatesFilter | string
  }

  export type PostUpvoterWhereInput = {
    AND?: Enumerable<PostUpvoterWhereInput>
    OR?: Enumerable<PostUpvoterWhereInput>
    NOT?: Enumerable<PostUpvoterWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type PostUpvoterOrderByWithRelationInput = {
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type PostUpvoterWhereUniqueInput = {
    userId_postId?: PostUpvoterUserIdPostIdCompoundUniqueInput
  }

  export type PostUpvoterOrderByWithAggregationInput = {
    postId?: SortOrder
    userId?: SortOrder
    _count?: PostUpvoterCountOrderByAggregateInput
    _avg?: PostUpvoterAvgOrderByAggregateInput
    _max?: PostUpvoterMaxOrderByAggregateInput
    _min?: PostUpvoterMinOrderByAggregateInput
    _sum?: PostUpvoterSumOrderByAggregateInput
  }

  export type PostUpvoterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostUpvoterScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostUpvoterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostUpvoterScalarWhereWithAggregatesInput>
    postId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
  }

  export type PostImageWhereInput = {
    AND?: Enumerable<PostImageWhereInput>
    OR?: Enumerable<PostImageWhereInput>
    NOT?: Enumerable<PostImageWhereInput>
    id?: StringFilter | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type PostImageOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageWhereUniqueInput = {
    id?: string
    url?: string
  }

  export type PostImageOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: PostImageCountOrderByAggregateInput
    _avg?: PostImageAvgOrderByAggregateInput
    _max?: PostImageMaxOrderByAggregateInput
    _min?: PostImageMinOrderByAggregateInput
    _sum?: PostImageSumOrderByAggregateInput
  }

  export type PostImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    postId?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    authorId?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SkillWhereInput = {
    AND?: Enumerable<SkillWhereInput>
    OR?: Enumerable<SkillWhereInput>
    NOT?: Enumerable<SkillWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    owner?: StringFilter | string
    users?: SkillsOnUsersListRelationFilter
    desiringUsers?: DesiredSkillsOnUsersListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    users?: SkillsOnUsersOrderByRelationAggregateInput
    desiringUsers?: DesiredSkillsOnUsersOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = {
    id?: number
    name_owner?: SkillNameOwnerCompoundUniqueInput
  }

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkillScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkillScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkillScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    owner?: StringWithAggregatesFilter | string
  }

  export type SkillsOnUsersWhereInput = {
    AND?: Enumerable<SkillsOnUsersWhereInput>
    OR?: Enumerable<SkillsOnUsersWhereInput>
    NOT?: Enumerable<SkillsOnUsersWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
    skillId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type SkillsOnUsersOrderByWithRelationInput = {
    skill?: SkillOrderByWithRelationInput
    skillId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type SkillsOnUsersWhereUniqueInput = {
    skillId_userId?: SkillsOnUsersSkillIdUserIdCompoundUniqueInput
  }

  export type SkillsOnUsersOrderByWithAggregationInput = {
    skillId?: SortOrder
    userId?: SortOrder
    _count?: SkillsOnUsersCountOrderByAggregateInput
    _avg?: SkillsOnUsersAvgOrderByAggregateInput
    _max?: SkillsOnUsersMaxOrderByAggregateInput
    _min?: SkillsOnUsersMinOrderByAggregateInput
    _sum?: SkillsOnUsersSumOrderByAggregateInput
  }

  export type SkillsOnUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkillsOnUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkillsOnUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkillsOnUsersScalarWhereWithAggregatesInput>
    skillId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
  }

  export type DesiredSkillsOnUsersWhereInput = {
    AND?: Enumerable<DesiredSkillsOnUsersWhereInput>
    OR?: Enumerable<DesiredSkillsOnUsersWhereInput>
    NOT?: Enumerable<DesiredSkillsOnUsersWhereInput>
    skill?: XOR<SkillRelationFilter, SkillWhereInput>
    skillId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type DesiredSkillsOnUsersOrderByWithRelationInput = {
    skill?: SkillOrderByWithRelationInput
    skillId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type DesiredSkillsOnUsersWhereUniqueInput = {
    skillId_userId?: DesiredSkillsOnUsersSkillIdUserIdCompoundUniqueInput
  }

  export type DesiredSkillsOnUsersOrderByWithAggregationInput = {
    skillId?: SortOrder
    userId?: SortOrder
    _count?: DesiredSkillsOnUsersCountOrderByAggregateInput
    _avg?: DesiredSkillsOnUsersAvgOrderByAggregateInput
    _max?: DesiredSkillsOnUsersMaxOrderByAggregateInput
    _min?: DesiredSkillsOnUsersMinOrderByAggregateInput
    _sum?: DesiredSkillsOnUsersSumOrderByAggregateInput
  }

  export type DesiredSkillsOnUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DesiredSkillsOnUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<DesiredSkillsOnUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DesiredSkillsOnUsersScalarWhereWithAggregatesInput>
    skillId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
  }

  export type OrganizationWhereInput = {
    AND?: Enumerable<OrganizationWhereInput>
    OR?: Enumerable<OrganizationWhereInput>
    NOT?: Enumerable<OrganizationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    experiences?: ExperienceListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    experiences?: ExperienceOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type ExperienceWhereInput = {
    AND?: Enumerable<ExperienceWhereInput>
    OR?: Enumerable<ExperienceWhereInput>
    NOT?: Enumerable<ExperienceWhereInput>
    id?: IntFilter | number
    endDate?: DateTimeNullableFilter | Date | string | null
    highlights?: StringNullableListFilter
    location?: StringNullableFilter | string | null
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    organizationName?: StringFilter | string
    positionName?: StringNullableFilter | string | null
    startDate?: DateTimeNullableFilter | Date | string | null
    type?: EnumExperienceTypeNullableFilter | ExperienceType | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    endDate?: SortOrder
    highlights?: SortOrder
    location?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    organizationName?: SortOrder
    positionName?: SortOrder
    startDate?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type ExperienceWhereUniqueInput = {
    id?: number
  }

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    endDate?: SortOrder
    highlights?: SortOrder
    location?: SortOrder
    organizationName?: SortOrder
    positionName?: SortOrder
    startDate?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExperienceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExperienceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExperienceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    endDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    highlights?: StringNullableListFilter
    location?: StringNullableWithAggregatesFilter | string | null
    organizationName?: StringWithAggregatesFilter | string
    positionName?: StringNullableWithAggregatesFilter | string | null
    startDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    type?: EnumExperienceTypeNullableWithAggregatesFilter | ExperienceType | null
    userId?: StringWithAggregatesFilter | string
  }

  export type AccountCreateInput = {
    access_token?: string | null
    expires_at?: number | null
    id?: string
    id_token?: string | null
    provider: string
    providerAccountId: string
    oauth_token?: string | null
    oauth_token_secret?: string | null
    refresh_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
    type: string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    access_token?: string | null
    expires_at?: number | null
    id?: string
    id_token?: string | null
    provider: string
    providerAccountId: string
    oauth_token?: string | null
    oauth_token_secret?: string | null
    refresh_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
    type: string
    userId: string
  }

  export type AccountUpdateInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAccountsInput
  }

  export type AccountUncheckedUpdateInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    access_token?: string | null
    expires_at?: number | null
    id?: string
    id_token?: string | null
    provider: string
    providerAccountId: string
    oauth_token?: string | null
    oauth_token_secret?: string | null
    refresh_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
    type: string
    userId: string
  }

  export type AccountUpdateManyMutationInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    expires: Date | string
    id?: string
    sessionToken: string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    expires: Date | string
    id?: string
    sessionToken: string
    userId: string
  }

  export type SessionUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionsInput
  }

  export type SessionUncheckedUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    expires: Date | string
    id?: string
    sessionToken: string
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateManyInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    expires: Date | string
    identifier: string
    token: string
  }

  export type VerificationTokenUncheckedCreateInput = {
    expires: Date | string
    identifier: string
    token: string
  }

  export type VerificationTokenUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateManyInput = {
    expires: Date | string
    identifier: string
    token: string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    author: UserCreateNestedOneWithoutPostsInput
    images?: PostImageCreateNestedManyWithoutPostInput
    upvotes?: PostUpvoterCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    authorName: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    id?: number
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    images?: PostImageUncheckedCreateNestedManyWithoutPostInput
    upvotes?: PostUpvoterUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutPostsInput
    images?: PostImageUpdateManyWithoutPostInput
    upvotes?: PostUpvoterUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    authorName?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    images?: PostImageUncheckedUpdateManyWithoutPostInput
    upvotes?: PostUpvoterUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateManyInput = {
    authorName: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    id?: number
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
  }

  export type PostUpdateManyMutationInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    authorName?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpvoterCreateInput = {
    post: PostCreateNestedOneWithoutUpvotesInput
    user: UserCreateNestedOneWithoutUpvotedPostsInput
  }

  export type PostUpvoterUncheckedCreateInput = {
    postId: number
    userId: string
  }

  export type PostUpvoterUpdateInput = {
    post?: PostUpdateOneRequiredWithoutUpvotesInput
    user?: UserUpdateOneRequiredWithoutUpvotedPostsInput
  }

  export type PostUpvoterUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpvoterCreateManyInput = {
    postId: number
    userId: string
  }

  export type PostUpvoterUpdateManyMutationInput = {

  }

  export type PostUpvoterUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostImageCreateInput = {
    id: string
    url: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutImagesInput
  }

  export type PostImageUncheckedCreateInput = {
    id: string
    postId: number
    url: string
    createdAt?: Date | string
  }

  export type PostImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutImagesInput
  }

  export type PostImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageCreateManyInput = {
    id: string
    postId: number
    url: string
    createdAt?: Date | string
  }

  export type PostImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    authorId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    authorId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    name: string
    owner: string
    users?: SkillsOnUsersCreateNestedManyWithoutSkillInput
    desiringUsers?: DesiredSkillsOnUsersCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    owner: string
    users?: SkillsOnUsersUncheckedCreateNestedManyWithoutSkillInput
    desiringUsers?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    users?: SkillsOnUsersUpdateManyWithoutSkillInput
    desiringUsers?: DesiredSkillsOnUsersUpdateManyWithoutSkillInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    users?: SkillsOnUsersUncheckedUpdateManyWithoutSkillInput
    desiringUsers?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutSkillInput
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
    owner: string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsOnUsersCreateInput = {
    skill: SkillCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillsOnUsersUncheckedCreateInput = {
    skillId: number
    userId: string
  }

  export type SkillsOnUsersUpdateInput = {
    skill?: SkillUpdateOneRequiredWithoutUsersInput
    user?: UserUpdateOneRequiredWithoutSkillsInput
  }

  export type SkillsOnUsersUncheckedUpdateInput = {
    skillId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsOnUsersCreateManyInput = {
    skillId: number
    userId: string
  }

  export type SkillsOnUsersUpdateManyMutationInput = {

  }

  export type SkillsOnUsersUncheckedUpdateManyInput = {
    skillId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DesiredSkillsOnUsersCreateInput = {
    skill: SkillCreateNestedOneWithoutDesiringUsersInput
    user: UserCreateNestedOneWithoutDesiredSkillsInput
  }

  export type DesiredSkillsOnUsersUncheckedCreateInput = {
    skillId: number
    userId: string
  }

  export type DesiredSkillsOnUsersUpdateInput = {
    skill?: SkillUpdateOneRequiredWithoutDesiringUsersInput
    user?: UserUpdateOneRequiredWithoutDesiredSkillsInput
  }

  export type DesiredSkillsOnUsersUncheckedUpdateInput = {
    skillId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DesiredSkillsOnUsersCreateManyInput = {
    skillId: number
    userId: string
  }

  export type DesiredSkillsOnUsersUpdateManyMutationInput = {

  }

  export type DesiredSkillsOnUsersUncheckedUpdateManyInput = {
    skillId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationCreateInput = {
    name: string
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    experiences?: ExperienceUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    endDate?: Date | string | null
    location?: string | null
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    highlights?: ExperienceCreatehighlightsInput | Enumerable<string>
    organization: OrganizationCreateNestedOneWithoutExperiencesInput
    user: UserCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    endDate?: Date | string | null
    location?: string | null
    organizationName: string
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    userId: string
    highlights?: ExperienceCreatehighlightsInput | Enumerable<string>
  }

  export type ExperienceUpdateInput = {
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
    organization?: OrganizationUpdateOneRequiredWithoutExperiencesInput
    user?: UserUpdateOneRequiredWithoutExperiencesInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: StringFieldUpdateOperationsInput | string
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    userId?: StringFieldUpdateOperationsInput | string
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
  }

  export type ExperienceCreateManyInput = {
    id?: number
    endDate?: Date | string | null
    location?: string | null
    organizationName: string
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    userId: string
    highlights?: ExperienceCreateManyhighlightsInput | Enumerable<string>
  }

  export type ExperienceUpdateManyMutationInput = {
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: StringFieldUpdateOperationsInput | string
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    userId?: StringFieldUpdateOperationsInput | string
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    access_token?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    id_token?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    oauth_token?: SortOrder
    oauth_token_secret?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    access_token?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    id_token?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    oauth_token?: SortOrder
    oauth_token_secret?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    access_token?: SortOrder
    expires_at?: SortOrder
    id?: SortOrder
    id_token?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    oauth_token?: SortOrder
    oauth_token_secret?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    expires?: SortOrder
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    expires?: SortOrder
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    expires?: SortOrder
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type DesiredSkillsOnUsersListRelationFilter = {
    every?: DesiredSkillsOnUsersWhereInput
    some?: DesiredSkillsOnUsersWhereInput
    none?: DesiredSkillsOnUsersWhereInput
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SkillsOnUsersListRelationFilter = {
    every?: SkillsOnUsersWhereInput
    some?: SkillsOnUsersWhereInput
    none?: SkillsOnUsersWhereInput
  }

  export type PostUpvoterListRelationFilter = {
    every?: PostUpvoterWhereInput
    some?: PostUpvoterWhereInput
    none?: PostUpvoterWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesiredSkillsOnUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillsOnUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostUpvoterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    expires?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    expires?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    expires?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type PostImageListRelationFilter = {
    every?: PostImageWhereInput
    some?: PostImageWhereInput
    none?: PostImageWhereInput
  }

  export type PostImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostAuthorNameUrlSlugCompoundUniqueInput = {
    authorName: string
    urlSlug: string
  }

  export type PostCountOrderByAggregateInput = {
    authorName?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    publishedAt?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    updatedAt?: SortOrder
    urlSlug?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    authorName?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    publishedAt?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    updatedAt?: SortOrder
    urlSlug?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    authorName?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    publishedAt?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    updatedAt?: SortOrder
    urlSlug?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostUpvoterUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: number
  }

  export type PostUpvoterCountOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostUpvoterAvgOrderByAggregateInput = {
    postId?: SortOrder
  }

  export type PostUpvoterMaxOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostUpvoterMinOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostUpvoterSumOrderByAggregateInput = {
    postId?: SortOrder
  }

  export type PostImageCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageAvgOrderByAggregateInput = {
    postId?: SortOrder
  }

  export type PostImageMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageSumOrderByAggregateInput = {
    postId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillNameOwnerCompoundUniqueInput = {
    name: string
    owner: string
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type SkillsOnUsersSkillIdUserIdCompoundUniqueInput = {
    skillId: number
    userId: string
  }

  export type SkillsOnUsersCountOrderByAggregateInput = {
    skillId?: SortOrder
    userId?: SortOrder
  }

  export type SkillsOnUsersAvgOrderByAggregateInput = {
    skillId?: SortOrder
  }

  export type SkillsOnUsersMaxOrderByAggregateInput = {
    skillId?: SortOrder
    userId?: SortOrder
  }

  export type SkillsOnUsersMinOrderByAggregateInput = {
    skillId?: SortOrder
    userId?: SortOrder
  }

  export type SkillsOnUsersSumOrderByAggregateInput = {
    skillId?: SortOrder
  }

  export type DesiredSkillsOnUsersSkillIdUserIdCompoundUniqueInput = {
    skillId: number
    userId: string
  }

  export type DesiredSkillsOnUsersCountOrderByAggregateInput = {
    skillId?: SortOrder
    userId?: SortOrder
  }

  export type DesiredSkillsOnUsersAvgOrderByAggregateInput = {
    skillId?: SortOrder
  }

  export type DesiredSkillsOnUsersMaxOrderByAggregateInput = {
    skillId?: SortOrder
    userId?: SortOrder
  }

  export type DesiredSkillsOnUsersMinOrderByAggregateInput = {
    skillId?: SortOrder
    userId?: SortOrder
  }

  export type DesiredSkillsOnUsersSumOrderByAggregateInput = {
    skillId?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type EnumExperienceTypeNullableFilter = {
    equals?: ExperienceType | null
    in?: Enumerable<ExperienceType> | null
    notIn?: Enumerable<ExperienceType> | null
    not?: NestedEnumExperienceTypeNullableFilter | ExperienceType | null
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    endDate?: SortOrder
    highlights?: SortOrder
    location?: SortOrder
    organizationName?: SortOrder
    positionName?: SortOrder
    startDate?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    organizationName?: SortOrder
    positionName?: SortOrder
    startDate?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    organizationName?: SortOrder
    positionName?: SortOrder
    startDate?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumExperienceTypeNullableWithAggregatesFilter = {
    equals?: ExperienceType | null
    in?: Enumerable<ExperienceType> | null
    notIn?: Enumerable<ExperienceType> | null
    not?: NestedEnumExperienceTypeNullableWithAggregatesFilter | ExperienceType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumExperienceTypeNullableFilter
    _max?: NestedEnumExperienceTypeNullableFilter
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type DesiredSkillsOnUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutUserInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: DesiredSkillsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
  }

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutUserInput>, Enumerable<ExperienceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutUserInput>
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: Enumerable<ExperienceWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type SkillsOnUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutUserInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: SkillsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
  }

  export type PostUpvoterCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutUserInput>, Enumerable<PostUpvoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutUserInput>
    createMany?: PostUpvoterCreateManyUserInputEnvelope
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutUserInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: DesiredSkillsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
  }

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutUserInput>, Enumerable<ExperienceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutUserInput>
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: Enumerable<ExperienceWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutUserInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: SkillsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
  }

  export type PostUpvoterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutUserInput>, Enumerable<PostUpvoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutUserInput>
    createMany?: PostUpvoterCreateManyUserInputEnvelope
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type CommentUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type DesiredSkillsOnUsersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutUserInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DesiredSkillsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DesiredSkillsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    update?: Enumerable<DesiredSkillsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DesiredSkillsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
  }

  export type ExperienceUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutUserInput>, Enumerable<ExperienceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ExperienceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: Enumerable<ExperienceWhereUniqueInput>
    disconnect?: Enumerable<ExperienceWhereUniqueInput>
    delete?: Enumerable<ExperienceWhereUniqueInput>
    connect?: Enumerable<ExperienceWhereUniqueInput>
    update?: Enumerable<ExperienceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ExperienceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ExperienceScalarWhereInput>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type SkillsOnUsersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutUserInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SkillsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SkillsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<SkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<SkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    update?: Enumerable<SkillsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SkillsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SkillsOnUsersScalarWhereInput>
  }

  export type PostUpvoterUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutUserInput>, Enumerable<PostUpvoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpvoterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostUpvoterCreateManyUserInputEnvelope
    set?: Enumerable<PostUpvoterWhereUniqueInput>
    disconnect?: Enumerable<PostUpvoterWhereUniqueInput>
    delete?: Enumerable<PostUpvoterWhereUniqueInput>
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
    update?: Enumerable<PostUpvoterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpvoterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostUpvoterScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutUserInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DesiredSkillsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DesiredSkillsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    update?: Enumerable<DesiredSkillsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DesiredSkillsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
  }

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutUserInput>, Enumerable<ExperienceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ExperienceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: Enumerable<ExperienceWhereUniqueInput>
    disconnect?: Enumerable<ExperienceWhereUniqueInput>
    delete?: Enumerable<ExperienceWhereUniqueInput>
    connect?: Enumerable<ExperienceWhereUniqueInput>
    update?: Enumerable<ExperienceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ExperienceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ExperienceScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type SkillsOnUsersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutUserInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SkillsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SkillsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<SkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<SkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    update?: Enumerable<SkillsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SkillsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SkillsOnUsersScalarWhereInput>
  }

  export type PostUpvoterUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutUserInput>, Enumerable<PostUpvoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpvoterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostUpvoterCreateManyUserInputEnvelope
    set?: Enumerable<PostUpvoterWhereUniqueInput>
    disconnect?: Enumerable<PostUpvoterWhereUniqueInput>
    delete?: Enumerable<PostUpvoterWhereUniqueInput>
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
    update?: Enumerable<PostUpvoterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpvoterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostUpvoterScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostImageCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostImageCreateWithoutPostInput>, Enumerable<PostImageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostImageCreateOrConnectWithoutPostInput>
    createMany?: PostImageCreateManyPostInputEnvelope
    connect?: Enumerable<PostImageWhereUniqueInput>
  }

  export type PostUpvoterCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutPostInput>, Enumerable<PostUpvoterUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutPostInput>
    createMany?: PostUpvoterCreateManyPostInputEnvelope
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
  }

  export type PostImageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostImageCreateWithoutPostInput>, Enumerable<PostImageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostImageCreateOrConnectWithoutPostInput>
    createMany?: PostImageCreateManyPostInputEnvelope
    connect?: Enumerable<PostImageWhereUniqueInput>
  }

  export type PostUpvoterUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutPostInput>, Enumerable<PostUpvoterUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutPostInput>
    createMany?: PostUpvoterCreateManyPostInputEnvelope
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type PostImageUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostImageCreateWithoutPostInput>, Enumerable<PostImageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostImageCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostImageUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostImageCreateManyPostInputEnvelope
    set?: Enumerable<PostImageWhereUniqueInput>
    disconnect?: Enumerable<PostImageWhereUniqueInput>
    delete?: Enumerable<PostImageWhereUniqueInput>
    connect?: Enumerable<PostImageWhereUniqueInput>
    update?: Enumerable<PostImageUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostImageUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostImageScalarWhereInput>
  }

  export type PostUpvoterUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutPostInput>, Enumerable<PostUpvoterUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostUpvoterUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostUpvoterCreateManyPostInputEnvelope
    set?: Enumerable<PostUpvoterWhereUniqueInput>
    disconnect?: Enumerable<PostUpvoterWhereUniqueInput>
    delete?: Enumerable<PostUpvoterWhereUniqueInput>
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
    update?: Enumerable<PostUpvoterUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostUpvoterUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostUpvoterScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostImageUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostImageCreateWithoutPostInput>, Enumerable<PostImageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostImageCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostImageUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostImageCreateManyPostInputEnvelope
    set?: Enumerable<PostImageWhereUniqueInput>
    disconnect?: Enumerable<PostImageWhereUniqueInput>
    delete?: Enumerable<PostImageWhereUniqueInput>
    connect?: Enumerable<PostImageWhereUniqueInput>
    update?: Enumerable<PostImageUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostImageUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostImageScalarWhereInput>
  }

  export type PostUpvoterUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostUpvoterCreateWithoutPostInput>, Enumerable<PostUpvoterUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostUpvoterCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostUpvoterUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostUpvoterCreateManyPostInputEnvelope
    set?: Enumerable<PostUpvoterWhereUniqueInput>
    disconnect?: Enumerable<PostUpvoterWhereUniqueInput>
    delete?: Enumerable<PostUpvoterWhereUniqueInput>
    connect?: Enumerable<PostUpvoterWhereUniqueInput>
    update?: Enumerable<PostUpvoterUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostUpvoterUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostUpvoterScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<PostCreateWithoutUpvotesInput, PostUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutUpvotesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpvotedPostsInput = {
    create?: XOR<UserCreateWithoutUpvotedPostsInput, UserUncheckedCreateWithoutUpvotedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutUpvotesInput = {
    create?: XOR<PostCreateWithoutUpvotesInput, PostUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutUpvotesInput
    upsert?: PostUpsertWithoutUpvotesInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutUpvotesInput, PostUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserUpdateOneRequiredWithoutUpvotedPostsInput = {
    create?: XOR<UserCreateWithoutUpvotedPostsInput, UserUncheckedCreateWithoutUpvotedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotedPostsInput
    upsert?: UserUpsertWithoutUpvotedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUpvotedPostsInput, UserUncheckedUpdateWithoutUpvotedPostsInput>
  }

  export type PostCreateNestedOneWithoutImagesInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutImagesInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    upsert?: PostUpsertWithoutImagesInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type SkillsOnUsersCreateNestedManyWithoutSkillInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutSkillInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutSkillInput>
    createMany?: SkillsOnUsersCreateManySkillInputEnvelope
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
  }

  export type DesiredSkillsOnUsersCreateNestedManyWithoutSkillInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutSkillInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutSkillInput>
    createMany?: DesiredSkillsOnUsersCreateManySkillInputEnvelope
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
  }

  export type SkillsOnUsersUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutSkillInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutSkillInput>
    createMany?: SkillsOnUsersCreateManySkillInputEnvelope
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
  }

  export type DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutSkillInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutSkillInput>
    createMany?: DesiredSkillsOnUsersCreateManySkillInputEnvelope
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
  }

  export type SkillsOnUsersUpdateManyWithoutSkillInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutSkillInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutSkillInput>
    upsert?: Enumerable<SkillsOnUsersUpsertWithWhereUniqueWithoutSkillInput>
    createMany?: SkillsOnUsersCreateManySkillInputEnvelope
    set?: Enumerable<SkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<SkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    update?: Enumerable<SkillsOnUsersUpdateWithWhereUniqueWithoutSkillInput>
    updateMany?: Enumerable<SkillsOnUsersUpdateManyWithWhereWithoutSkillInput>
    deleteMany?: Enumerable<SkillsOnUsersScalarWhereInput>
  }

  export type DesiredSkillsOnUsersUpdateManyWithoutSkillInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutSkillInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutSkillInput>
    upsert?: Enumerable<DesiredSkillsOnUsersUpsertWithWhereUniqueWithoutSkillInput>
    createMany?: DesiredSkillsOnUsersCreateManySkillInputEnvelope
    set?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    update?: Enumerable<DesiredSkillsOnUsersUpdateWithWhereUniqueWithoutSkillInput>
    updateMany?: Enumerable<DesiredSkillsOnUsersUpdateManyWithWhereWithoutSkillInput>
    deleteMany?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
  }

  export type SkillsOnUsersUncheckedUpdateManyWithoutSkillInput = {
    create?: XOR<Enumerable<SkillsOnUsersCreateWithoutSkillInput>, Enumerable<SkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<SkillsOnUsersCreateOrConnectWithoutSkillInput>
    upsert?: Enumerable<SkillsOnUsersUpsertWithWhereUniqueWithoutSkillInput>
    createMany?: SkillsOnUsersCreateManySkillInputEnvelope
    set?: Enumerable<SkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<SkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<SkillsOnUsersWhereUniqueInput>
    update?: Enumerable<SkillsOnUsersUpdateWithWhereUniqueWithoutSkillInput>
    updateMany?: Enumerable<SkillsOnUsersUpdateManyWithWhereWithoutSkillInput>
    deleteMany?: Enumerable<SkillsOnUsersScalarWhereInput>
  }

  export type DesiredSkillsOnUsersUncheckedUpdateManyWithoutSkillInput = {
    create?: XOR<Enumerable<DesiredSkillsOnUsersCreateWithoutSkillInput>, Enumerable<DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput>>
    connectOrCreate?: Enumerable<DesiredSkillsOnUsersCreateOrConnectWithoutSkillInput>
    upsert?: Enumerable<DesiredSkillsOnUsersUpsertWithWhereUniqueWithoutSkillInput>
    createMany?: DesiredSkillsOnUsersCreateManySkillInputEnvelope
    set?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    delete?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    connect?: Enumerable<DesiredSkillsOnUsersWhereUniqueInput>
    update?: Enumerable<DesiredSkillsOnUsersUpdateWithWhereUniqueWithoutSkillInput>
    updateMany?: Enumerable<DesiredSkillsOnUsersUpdateManyWithWhereWithoutSkillInput>
    deleteMany?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillCreateNestedOneWithoutDesiringUsersInput = {
    create?: XOR<SkillCreateWithoutDesiringUsersInput, SkillUncheckedCreateWithoutDesiringUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutDesiringUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDesiredSkillsInput = {
    create?: XOR<UserCreateWithoutDesiredSkillsInput, UserUncheckedCreateWithoutDesiredSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesiredSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillUpdateOneRequiredWithoutDesiringUsersInput = {
    create?: XOR<SkillCreateWithoutDesiringUsersInput, SkillUncheckedCreateWithoutDesiringUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutDesiringUsersInput
    upsert?: SkillUpsertWithoutDesiringUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<SkillUpdateWithoutDesiringUsersInput, SkillUncheckedUpdateWithoutDesiringUsersInput>
  }

  export type UserUpdateOneRequiredWithoutDesiredSkillsInput = {
    create?: XOR<UserCreateWithoutDesiredSkillsInput, UserUncheckedCreateWithoutDesiredSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesiredSkillsInput
    upsert?: UserUpsertWithoutDesiredSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDesiredSkillsInput, UserUncheckedUpdateWithoutDesiredSkillsInput>
  }

  export type ExperienceCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutOrganizationInput>, Enumerable<ExperienceUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutOrganizationInput>
    createMany?: ExperienceCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ExperienceWhereUniqueInput>
  }

  export type ExperienceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutOrganizationInput>, Enumerable<ExperienceUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutOrganizationInput>
    createMany?: ExperienceCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ExperienceWhereUniqueInput>
  }

  export type ExperienceUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutOrganizationInput>, Enumerable<ExperienceUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ExperienceUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ExperienceCreateManyOrganizationInputEnvelope
    set?: Enumerable<ExperienceWhereUniqueInput>
    disconnect?: Enumerable<ExperienceWhereUniqueInput>
    delete?: Enumerable<ExperienceWhereUniqueInput>
    connect?: Enumerable<ExperienceWhereUniqueInput>
    update?: Enumerable<ExperienceUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ExperienceUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ExperienceScalarWhereInput>
  }

  export type ExperienceUncheckedUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ExperienceCreateWithoutOrganizationInput>, Enumerable<ExperienceUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ExperienceCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ExperienceUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ExperienceCreateManyOrganizationInputEnvelope
    set?: Enumerable<ExperienceWhereUniqueInput>
    disconnect?: Enumerable<ExperienceWhereUniqueInput>
    delete?: Enumerable<ExperienceWhereUniqueInput>
    connect?: Enumerable<ExperienceWhereUniqueInput>
    update?: Enumerable<ExperienceUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ExperienceUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ExperienceScalarWhereInput>
  }

  export type ExperienceCreatehighlightsInput = {
    set: Enumerable<string>
  }

  export type OrganizationCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<OrganizationCreateWithoutExperiencesInput, OrganizationUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExperiencesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumExperienceTypeFieldUpdateOperationsInput = {
    set?: ExperienceType | null
  }

  export type ExperienceUpdatehighlightsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type OrganizationUpdateOneRequiredWithoutExperiencesInput = {
    create?: XOR<OrganizationCreateWithoutExperiencesInput, OrganizationUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExperiencesInput
    upsert?: OrganizationUpsertWithoutExperiencesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutExperiencesInput, OrganizationUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserUpdateOneRequiredWithoutExperiencesInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    upsert?: UserUpsertWithoutExperiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type ExperienceCreateManyhighlightsInput = {
    set: Enumerable<string>
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumExperienceTypeNullableFilter = {
    equals?: ExperienceType | null
    in?: Enumerable<ExperienceType> | null
    notIn?: Enumerable<ExperienceType> | null
    not?: NestedEnumExperienceTypeNullableFilter | ExperienceType | null
  }

  export type NestedEnumExperienceTypeNullableWithAggregatesFilter = {
    equals?: ExperienceType | null
    in?: Enumerable<ExperienceType> | null
    notIn?: Enumerable<ExperienceType> | null
    not?: NestedEnumExperienceTypeNullableWithAggregatesFilter | ExperienceType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumExperienceTypeNullableFilter
    _max?: NestedEnumExperienceTypeNullableFilter
  }

  export type UserCreateWithoutAccountsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutSessionsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type AccountCreateWithoutUserInput = {
    access_token?: string | null
    expires_at?: number | null
    id?: string
    id_token?: string | null
    provider: string
    providerAccountId: string
    oauth_token?: string | null
    oauth_token_secret?: string | null
    refresh_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
    type: string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    access_token?: string | null
    expires_at?: number | null
    id?: string
    id_token?: string | null
    provider: string
    providerAccountId: string
    oauth_token?: string | null
    oauth_token_secret?: string | null
    refresh_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
    type: string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: Enumerable<CommentCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type DesiredSkillsOnUsersCreateWithoutUserInput = {
    skill: SkillCreateNestedOneWithoutDesiringUsersInput
  }

  export type DesiredSkillsOnUsersUncheckedCreateWithoutUserInput = {
    skillId: number
  }

  export type DesiredSkillsOnUsersCreateOrConnectWithoutUserInput = {
    where: DesiredSkillsOnUsersWhereUniqueInput
    create: XOR<DesiredSkillsOnUsersCreateWithoutUserInput, DesiredSkillsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type DesiredSkillsOnUsersCreateManyUserInputEnvelope = {
    data: Enumerable<DesiredSkillsOnUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutUserInput = {
    endDate?: Date | string | null
    location?: string | null
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    highlights?: ExperienceCreatehighlightsInput | Enumerable<string>
    organization: OrganizationCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: number
    endDate?: Date | string | null
    location?: string | null
    organizationName: string
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    highlights?: ExperienceCreatehighlightsInput | Enumerable<string>
  }

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateManyUserInputEnvelope = {
    data: Enumerable<ExperienceCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    images?: PostImageCreateNestedManyWithoutPostInput
    upvotes?: PostUpvoterCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    id?: number
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    images?: PostImageUncheckedCreateNestedManyWithoutPostInput
    upvotes?: PostUpvoterUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    expires: Date | string
    id?: string
    sessionToken: string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    expires: Date | string
    id?: string
    sessionToken: string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SkillsOnUsersCreateWithoutUserInput = {
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type SkillsOnUsersUncheckedCreateWithoutUserInput = {
    skillId: number
  }

  export type SkillsOnUsersCreateOrConnectWithoutUserInput = {
    where: SkillsOnUsersWhereUniqueInput
    create: XOR<SkillsOnUsersCreateWithoutUserInput, SkillsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type SkillsOnUsersCreateManyUserInputEnvelope = {
    data: Enumerable<SkillsOnUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PostUpvoterCreateWithoutUserInput = {
    post: PostCreateNestedOneWithoutUpvotesInput
  }

  export type PostUpvoterUncheckedCreateWithoutUserInput = {
    postId: number
  }

  export type PostUpvoterCreateOrConnectWithoutUserInput = {
    where: PostUpvoterWhereUniqueInput
    create: XOR<PostUpvoterCreateWithoutUserInput, PostUpvoterUncheckedCreateWithoutUserInput>
  }

  export type PostUpvoterCreateManyUserInputEnvelope = {
    data: Enumerable<PostUpvoterCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    id?: StringFilter | string
    id_token?: StringNullableFilter | string | null
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    oauth_token?: StringNullableFilter | string | null
    oauth_token_secret?: StringNullableFilter | string | null
    refresh_token?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    token_type?: StringNullableFilter | string | null
    type?: StringFilter | string
    userId?: StringFilter | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    authorId?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DesiredSkillsOnUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: DesiredSkillsOnUsersWhereUniqueInput
    update: XOR<DesiredSkillsOnUsersUpdateWithoutUserInput, DesiredSkillsOnUsersUncheckedUpdateWithoutUserInput>
    create: XOR<DesiredSkillsOnUsersCreateWithoutUserInput, DesiredSkillsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type DesiredSkillsOnUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: DesiredSkillsOnUsersWhereUniqueInput
    data: XOR<DesiredSkillsOnUsersUpdateWithoutUserInput, DesiredSkillsOnUsersUncheckedUpdateWithoutUserInput>
  }

  export type DesiredSkillsOnUsersUpdateManyWithWhereWithoutUserInput = {
    where: DesiredSkillsOnUsersScalarWhereInput
    data: XOR<DesiredSkillsOnUsersUpdateManyMutationInput, DesiredSkillsOnUsersUncheckedUpdateManyWithoutDesiredSkillsInput>
  }

  export type DesiredSkillsOnUsersScalarWhereInput = {
    AND?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
    OR?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
    NOT?: Enumerable<DesiredSkillsOnUsersScalarWhereInput>
    skillId?: IntFilter | number
    userId?: StringFilter | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutExperiencesInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: Enumerable<ExperienceScalarWhereInput>
    OR?: Enumerable<ExperienceScalarWhereInput>
    NOT?: Enumerable<ExperienceScalarWhereInput>
    id?: IntFilter | number
    endDate?: DateTimeNullableFilter | Date | string | null
    highlights?: StringNullableListFilter
    location?: StringNullableFilter | string | null
    organizationName?: StringFilter | string
    positionName?: StringNullableFilter | string | null
    startDate?: DateTimeNullableFilter | Date | string | null
    type?: EnumExperienceTypeNullableFilter | ExperienceType | null
    userId?: StringFilter | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    authorName?: StringFilter | string
    content?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    description?: StringNullableFilter | string | null
    id?: IntFilter | number
    publishedAt?: DateTimeNullableFilter | Date | string | null
    title?: StringNullableFilter | string | null
    thumbnailUrl?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    urlSlug?: StringFilter | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    expires?: DateTimeFilter | Date | string
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
  }

  export type SkillsOnUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillsOnUsersWhereUniqueInput
    update: XOR<SkillsOnUsersUpdateWithoutUserInput, SkillsOnUsersUncheckedUpdateWithoutUserInput>
    create: XOR<SkillsOnUsersCreateWithoutUserInput, SkillsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type SkillsOnUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillsOnUsersWhereUniqueInput
    data: XOR<SkillsOnUsersUpdateWithoutUserInput, SkillsOnUsersUncheckedUpdateWithoutUserInput>
  }

  export type SkillsOnUsersUpdateManyWithWhereWithoutUserInput = {
    where: SkillsOnUsersScalarWhereInput
    data: XOR<SkillsOnUsersUpdateManyMutationInput, SkillsOnUsersUncheckedUpdateManyWithoutSkillsInput>
  }

  export type SkillsOnUsersScalarWhereInput = {
    AND?: Enumerable<SkillsOnUsersScalarWhereInput>
    OR?: Enumerable<SkillsOnUsersScalarWhereInput>
    NOT?: Enumerable<SkillsOnUsersScalarWhereInput>
    skillId?: IntFilter | number
    userId?: StringFilter | string
  }

  export type PostUpvoterUpsertWithWhereUniqueWithoutUserInput = {
    where: PostUpvoterWhereUniqueInput
    update: XOR<PostUpvoterUpdateWithoutUserInput, PostUpvoterUncheckedUpdateWithoutUserInput>
    create: XOR<PostUpvoterCreateWithoutUserInput, PostUpvoterUncheckedCreateWithoutUserInput>
  }

  export type PostUpvoterUpdateWithWhereUniqueWithoutUserInput = {
    where: PostUpvoterWhereUniqueInput
    data: XOR<PostUpvoterUpdateWithoutUserInput, PostUpvoterUncheckedUpdateWithoutUserInput>
  }

  export type PostUpvoterUpdateManyWithWhereWithoutUserInput = {
    where: PostUpvoterScalarWhereInput
    data: XOR<PostUpvoterUpdateManyMutationInput, PostUpvoterUncheckedUpdateManyWithoutUpvotedPostsInput>
  }

  export type PostUpvoterScalarWhereInput = {
    AND?: Enumerable<PostUpvoterScalarWhereInput>
    OR?: Enumerable<PostUpvoterScalarWhereInput>
    NOT?: Enumerable<PostUpvoterScalarWhereInput>
    postId?: IntFilter | number
    userId?: StringFilter | string
  }

  export type UserCreateWithoutPostsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type PostImageCreateWithoutPostInput = {
    id: string
    url: string
    createdAt?: Date | string
  }

  export type PostImageUncheckedCreateWithoutPostInput = {
    id: string
    url: string
    createdAt?: Date | string
  }

  export type PostImageCreateOrConnectWithoutPostInput = {
    where: PostImageWhereUniqueInput
    create: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput>
  }

  export type PostImageCreateManyPostInputEnvelope = {
    data: Enumerable<PostImageCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type PostUpvoterCreateWithoutPostInput = {
    user: UserCreateNestedOneWithoutUpvotedPostsInput
  }

  export type PostUpvoterUncheckedCreateWithoutPostInput = {
    userId: string
  }

  export type PostUpvoterCreateOrConnectWithoutPostInput = {
    where: PostUpvoterWhereUniqueInput
    create: XOR<PostUpvoterCreateWithoutPostInput, PostUpvoterUncheckedCreateWithoutPostInput>
  }

  export type PostUpvoterCreateManyPostInputEnvelope = {
    data: Enumerable<PostUpvoterCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type PostImageUpsertWithWhereUniqueWithoutPostInput = {
    where: PostImageWhereUniqueInput
    update: XOR<PostImageUpdateWithoutPostInput, PostImageUncheckedUpdateWithoutPostInput>
    create: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput>
  }

  export type PostImageUpdateWithWhereUniqueWithoutPostInput = {
    where: PostImageWhereUniqueInput
    data: XOR<PostImageUpdateWithoutPostInput, PostImageUncheckedUpdateWithoutPostInput>
  }

  export type PostImageUpdateManyWithWhereWithoutPostInput = {
    where: PostImageScalarWhereInput
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type PostImageScalarWhereInput = {
    AND?: Enumerable<PostImageScalarWhereInput>
    OR?: Enumerable<PostImageScalarWhereInput>
    NOT?: Enumerable<PostImageScalarWhereInput>
    id?: StringFilter | string
    postId?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type PostUpvoterUpsertWithWhereUniqueWithoutPostInput = {
    where: PostUpvoterWhereUniqueInput
    update: XOR<PostUpvoterUpdateWithoutPostInput, PostUpvoterUncheckedUpdateWithoutPostInput>
    create: XOR<PostUpvoterCreateWithoutPostInput, PostUpvoterUncheckedCreateWithoutPostInput>
  }

  export type PostUpvoterUpdateWithWhereUniqueWithoutPostInput = {
    where: PostUpvoterWhereUniqueInput
    data: XOR<PostUpvoterUpdateWithoutPostInput, PostUpvoterUncheckedUpdateWithoutPostInput>
  }

  export type PostUpvoterUpdateManyWithWhereWithoutPostInput = {
    where: PostUpvoterScalarWhereInput
    data: XOR<PostUpvoterUpdateManyMutationInput, PostUpvoterUncheckedUpdateManyWithoutUpvotesInput>
  }

  export type PostCreateWithoutUpvotesInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    author: UserCreateNestedOneWithoutPostsInput
    images?: PostImageCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUpvotesInput = {
    authorName: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    id?: number
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    images?: PostImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUpvotesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUpvotesInput, PostUncheckedCreateWithoutUpvotesInput>
  }

  export type UserCreateWithoutUpvotedPostsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpvotedPostsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpvotedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpvotedPostsInput, UserUncheckedCreateWithoutUpvotedPostsInput>
  }

  export type PostUpsertWithoutUpvotesInput = {
    update: XOR<PostUpdateWithoutUpvotesInput, PostUncheckedUpdateWithoutUpvotesInput>
    create: XOR<PostCreateWithoutUpvotesInput, PostUncheckedCreateWithoutUpvotesInput>
  }

  export type PostUpdateWithoutUpvotesInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutPostsInput
    images?: PostImageUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutUpvotesInput = {
    authorName?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    images?: PostImageUncheckedUpdateManyWithoutPostInput
  }

  export type UserUpsertWithoutUpvotedPostsInput = {
    update: XOR<UserUpdateWithoutUpvotedPostsInput, UserUncheckedUpdateWithoutUpvotedPostsInput>
    create: XOR<UserCreateWithoutUpvotedPostsInput, UserUncheckedCreateWithoutUpvotedPostsInput>
  }

  export type UserUpdateWithoutUpvotedPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUpvotedPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type PostCreateWithoutImagesInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    author: UserCreateNestedOneWithoutPostsInput
    upvotes?: PostUpvoterCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImagesInput = {
    authorName: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    id?: number
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
    upvotes?: PostUpvoterUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type PostUpsertWithoutImagesInput = {
    update: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type PostUpdateWithoutImagesInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutPostsInput
    upvotes?: PostUpvoterUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutImagesInput = {
    authorName?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    upvotes?: PostUpvoterUncheckedUpdateManyWithoutPostInput
  }

  export type UserCreateWithoutCommentsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type SkillsOnUsersCreateWithoutSkillInput = {
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillsOnUsersUncheckedCreateWithoutSkillInput = {
    userId: string
  }

  export type SkillsOnUsersCreateOrConnectWithoutSkillInput = {
    where: SkillsOnUsersWhereUniqueInput
    create: XOR<SkillsOnUsersCreateWithoutSkillInput, SkillsOnUsersUncheckedCreateWithoutSkillInput>
  }

  export type SkillsOnUsersCreateManySkillInputEnvelope = {
    data: Enumerable<SkillsOnUsersCreateManySkillInput>
    skipDuplicates?: boolean
  }

  export type DesiredSkillsOnUsersCreateWithoutSkillInput = {
    user: UserCreateNestedOneWithoutDesiredSkillsInput
  }

  export type DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput = {
    userId: string
  }

  export type DesiredSkillsOnUsersCreateOrConnectWithoutSkillInput = {
    where: DesiredSkillsOnUsersWhereUniqueInput
    create: XOR<DesiredSkillsOnUsersCreateWithoutSkillInput, DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput>
  }

  export type DesiredSkillsOnUsersCreateManySkillInputEnvelope = {
    data: Enumerable<DesiredSkillsOnUsersCreateManySkillInput>
    skipDuplicates?: boolean
  }

  export type SkillsOnUsersUpsertWithWhereUniqueWithoutSkillInput = {
    where: SkillsOnUsersWhereUniqueInput
    update: XOR<SkillsOnUsersUpdateWithoutSkillInput, SkillsOnUsersUncheckedUpdateWithoutSkillInput>
    create: XOR<SkillsOnUsersCreateWithoutSkillInput, SkillsOnUsersUncheckedCreateWithoutSkillInput>
  }

  export type SkillsOnUsersUpdateWithWhereUniqueWithoutSkillInput = {
    where: SkillsOnUsersWhereUniqueInput
    data: XOR<SkillsOnUsersUpdateWithoutSkillInput, SkillsOnUsersUncheckedUpdateWithoutSkillInput>
  }

  export type SkillsOnUsersUpdateManyWithWhereWithoutSkillInput = {
    where: SkillsOnUsersScalarWhereInput
    data: XOR<SkillsOnUsersUpdateManyMutationInput, SkillsOnUsersUncheckedUpdateManyWithoutUsersInput>
  }

  export type DesiredSkillsOnUsersUpsertWithWhereUniqueWithoutSkillInput = {
    where: DesiredSkillsOnUsersWhereUniqueInput
    update: XOR<DesiredSkillsOnUsersUpdateWithoutSkillInput, DesiredSkillsOnUsersUncheckedUpdateWithoutSkillInput>
    create: XOR<DesiredSkillsOnUsersCreateWithoutSkillInput, DesiredSkillsOnUsersUncheckedCreateWithoutSkillInput>
  }

  export type DesiredSkillsOnUsersUpdateWithWhereUniqueWithoutSkillInput = {
    where: DesiredSkillsOnUsersWhereUniqueInput
    data: XOR<DesiredSkillsOnUsersUpdateWithoutSkillInput, DesiredSkillsOnUsersUncheckedUpdateWithoutSkillInput>
  }

  export type DesiredSkillsOnUsersUpdateManyWithWhereWithoutSkillInput = {
    where: DesiredSkillsOnUsersScalarWhereInput
    data: XOR<DesiredSkillsOnUsersUpdateManyMutationInput, DesiredSkillsOnUsersUncheckedUpdateManyWithoutDesiringUsersInput>
  }

  export type SkillCreateWithoutUsersInput = {
    name: string
    owner: string
    desiringUsers?: DesiredSkillsOnUsersCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    owner: string
    desiringUsers?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSkillsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    desiringUsers?: DesiredSkillsOnUsersUpdateManyWithoutSkillInput
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    desiringUsers?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutSkillInput
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type SkillCreateWithoutDesiringUsersInput = {
    name: string
    owner: string
    users?: SkillsOnUsersCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutDesiringUsersInput = {
    id?: number
    name: string
    owner: string
    users?: SkillsOnUsersUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutDesiringUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutDesiringUsersInput, SkillUncheckedCreateWithoutDesiringUsersInput>
  }

  export type UserCreateWithoutDesiredSkillsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    experiences?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDesiredSkillsInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDesiredSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDesiredSkillsInput, UserUncheckedCreateWithoutDesiredSkillsInput>
  }

  export type SkillUpsertWithoutDesiringUsersInput = {
    update: XOR<SkillUpdateWithoutDesiringUsersInput, SkillUncheckedUpdateWithoutDesiringUsersInput>
    create: XOR<SkillCreateWithoutDesiringUsersInput, SkillUncheckedCreateWithoutDesiringUsersInput>
  }

  export type SkillUpdateWithoutDesiringUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    users?: SkillsOnUsersUpdateManyWithoutSkillInput
  }

  export type SkillUncheckedUpdateWithoutDesiringUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    users?: SkillsOnUsersUncheckedUpdateManyWithoutSkillInput
  }

  export type UserUpsertWithoutDesiredSkillsInput = {
    update: XOR<UserUpdateWithoutDesiredSkillsInput, UserUncheckedUpdateWithoutDesiredSkillsInput>
    create: XOR<UserCreateWithoutDesiredSkillsInput, UserUncheckedCreateWithoutDesiredSkillsInput>
  }

  export type UserUpdateWithoutDesiredSkillsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    experiences?: ExperienceUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutDesiredSkillsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type ExperienceCreateWithoutOrganizationInput = {
    endDate?: Date | string | null
    location?: string | null
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    highlights?: ExperienceCreatehighlightsInput | Enumerable<string>
    user: UserCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateWithoutOrganizationInput = {
    id?: number
    endDate?: Date | string | null
    location?: string | null
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    userId: string
    highlights?: ExperienceCreatehighlightsInput | Enumerable<string>
  }

  export type ExperienceCreateOrConnectWithoutOrganizationInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutOrganizationInput, ExperienceUncheckedCreateWithoutOrganizationInput>
  }

  export type ExperienceCreateManyOrganizationInputEnvelope = {
    data: Enumerable<ExperienceCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type ExperienceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutOrganizationInput, ExperienceUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ExperienceCreateWithoutOrganizationInput, ExperienceUncheckedCreateWithoutOrganizationInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutOrganizationInput, ExperienceUncheckedUpdateWithoutOrganizationInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutOrganizationInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutExperiencesInput>
  }

  export type OrganizationCreateWithoutExperiencesInput = {
    name: string
  }

  export type OrganizationUncheckedCreateWithoutExperiencesInput = {
    id?: number
    name: string
  }

  export type OrganizationCreateOrConnectWithoutExperiencesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutExperiencesInput, OrganizationUncheckedCreateWithoutExperiencesInput>
  }

  export type UserCreateWithoutExperiencesInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExperiencesInput = {
    createdAt?: Date | string
    description?: string | null
    email: string
    emailVerified?: Date | string | null
    id?: string
    image?: string | null
    name: string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedCreateNestedManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExperiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
  }

  export type OrganizationUpsertWithoutExperiencesInput = {
    update: XOR<OrganizationUpdateWithoutExperiencesInput, OrganizationUncheckedUpdateWithoutExperiencesInput>
    create: XOR<OrganizationCreateWithoutExperiencesInput, OrganizationUncheckedCreateWithoutExperiencesInput>
  }

  export type OrganizationUpdateWithoutExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateWithoutExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutExperiencesInput = {
    update: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
  }

  export type UserUpdateWithoutExperiencesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutExperiencesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
    desiredSkills?: DesiredSkillsOnUsersUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    skills?: SkillsOnUsersUncheckedUpdateManyWithoutUserInput
    upvotedPosts?: PostUpvoterUncheckedUpdateManyWithoutUserInput
  }

  export type AccountCreateManyUserInput = {
    access_token?: string | null
    expires_at?: number | null
    id?: string
    id_token?: string | null
    provider: string
    providerAccountId: string
    oauth_token?: string | null
    oauth_token_secret?: string | null
    refresh_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
    type: string
  }

  export type CommentCreateManyAuthorInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesiredSkillsOnUsersCreateManyUserInput = {
    skillId: number
  }

  export type ExperienceCreateManyUserInput = {
    id?: number
    endDate?: Date | string | null
    location?: string | null
    organizationName: string
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    highlights?: ExperienceCreateManyhighlightsInput | Enumerable<string>
  }

  export type PostCreateManyAuthorInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    description?: string | null
    id?: number
    publishedAt?: Date | string | null
    title?: string | null
    thumbnailUrl?: string | null
    updatedAt?: Date | string
    urlSlug?: string
  }

  export type SessionCreateManyUserInput = {
    expires: Date | string
    id?: string
    sessionToken: string
  }

  export type SkillsOnUsersCreateManyUserInput = {
    skillId: number
  }

  export type PostUpvoterCreateManyUserInput = {
    postId: number
  }

  export type AccountUpdateWithoutUserInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    oauth_token?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesiredSkillsOnUsersUpdateWithoutUserInput = {
    skill?: SkillUpdateOneRequiredWithoutDesiringUsersInput
  }

  export type DesiredSkillsOnUsersUncheckedUpdateWithoutUserInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type DesiredSkillsOnUsersUncheckedUpdateManyWithoutDesiredSkillsInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceUpdateWithoutUserInput = {
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
    organization?: OrganizationUpdateOneRequiredWithoutExperiencesInput
  }

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: StringFieldUpdateOperationsInput | string
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
  }

  export type ExperienceUncheckedUpdateManyWithoutExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizationName?: StringFieldUpdateOperationsInput | string
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
  }

  export type PostUpdateWithoutAuthorInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    images?: PostImageUpdateManyWithoutPostInput
    upvotes?: PostUpvoterUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    images?: PostImageUncheckedUpdateManyWithoutPostInput
    upvotes?: PostUpvoterUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urlSlug?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUpdateWithoutUserInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsOnUsersUpdateWithoutUserInput = {
    skill?: SkillUpdateOneRequiredWithoutUsersInput
  }

  export type SkillsOnUsersUncheckedUpdateWithoutUserInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillsOnUsersUncheckedUpdateManyWithoutSkillsInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpvoterUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutUpvotesInput
  }

  export type PostUpvoterUncheckedUpdateWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpvoterUncheckedUpdateManyWithoutUpvotedPostsInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostImageCreateManyPostInput = {
    id: string
    url: string
    createdAt?: Date | string
  }

  export type PostUpvoterCreateManyPostInput = {
    userId: string
  }

  export type PostImageUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpvoterUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutUpvotedPostsInput
  }

  export type PostUpvoterUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpvoterUncheckedUpdateManyWithoutUpvotesInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsOnUsersCreateManySkillInput = {
    userId: string
  }

  export type DesiredSkillsOnUsersCreateManySkillInput = {
    userId: string
  }

  export type SkillsOnUsersUpdateWithoutSkillInput = {
    user?: UserUpdateOneRequiredWithoutSkillsInput
  }

  export type SkillsOnUsersUncheckedUpdateWithoutSkillInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsOnUsersUncheckedUpdateManyWithoutUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DesiredSkillsOnUsersUpdateWithoutSkillInput = {
    user?: UserUpdateOneRequiredWithoutDesiredSkillsInput
  }

  export type DesiredSkillsOnUsersUncheckedUpdateWithoutSkillInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DesiredSkillsOnUsersUncheckedUpdateManyWithoutDesiringUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyOrganizationInput = {
    id?: number
    endDate?: Date | string | null
    location?: string | null
    positionName?: string | null
    startDate?: Date | string | null
    type?: ExperienceType | null
    userId: string
    highlights?: ExperienceCreateManyhighlightsInput | Enumerable<string>
  }

  export type ExperienceUpdateWithoutOrganizationInput = {
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutExperiencesInput
  }

  export type ExperienceUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    positionName?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumExperienceTypeFieldUpdateOperationsInput | ExperienceType | null
    userId?: StringFieldUpdateOperationsInput | string
    highlights?: ExperienceUpdatehighlightsInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}