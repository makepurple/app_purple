import * as NexusCore from 'nexus/dist/core'

//
//
// TYPES
// TYPES
// TYPES
// TYPES
//
//

// Models

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Account`.
  *
  * ### ️⚠️ You have not writen documentation for model Account
  *
  * Replace this default advisory JSDoc with your own documentation about model Account
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Account {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Account } from 'nexus-prisma'
  *
  * objectType({
  *   name: Account.$name
  *   description: Account.$description
  *   definition(t) {
  *     t.field(Account.id)
  *   }
  * })
  */
export interface Account {
  $name: 'Account'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.access_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   access_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.access_token)
    *   }
    * })
    */
  access_token: {
    /**
     * The name of this field.
     */
    name: 'access_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'access_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.expires_at`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   expires_at  Int?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.expires_at)
    *   }
    * })
    */
  expires_at: {
    /**
     * The name of this field.
     */
    name: 'expires_at'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'expires_at'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.id_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   id_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.id_token)
    *   }
    * })
    */
  id_token: {
    /**
     * The name of this field.
     */
    name: 'id_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'id_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.provider`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   provider  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.provider)
    *   }
    * })
    */
  provider: {
    /**
     * The name of this field.
     */
    name: 'provider'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'provider'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.providerAccountId`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   providerAccountId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.providerAccountId)
    *   }
    * })
    */
  providerAccountId: {
    /**
     * The name of this field.
     */
    name: 'providerAccountId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'providerAccountId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.oauth_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   oauth_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.oauth_token)
    *   }
    * })
    */
  oauth_token: {
    /**
     * The name of this field.
     */
    name: 'oauth_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'oauth_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.oauth_token_secret`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   oauth_token_secret  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.oauth_token_secret)
    *   }
    * })
    */
  oauth_token_secret: {
    /**
     * The name of this field.
     */
    name: 'oauth_token_secret'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'oauth_token_secret'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.refresh_token`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   refresh_token  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.refresh_token)
    *   }
    * })
    */
  refresh_token: {
    /**
     * The name of this field.
     */
    name: 'refresh_token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'refresh_token'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.scope`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   scope  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.scope)
    *   }
    * })
    */
  scope: {
    /**
     * The name of this field.
     */
    name: 'scope'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'scope'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.session_state`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   session_state  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.session_state)
    *   }
    * })
    */
  session_state: {
    /**
     * The name of this field.
     */
    name: 'session_state'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'session_state'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.token_type`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   token_type  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.token_type)
    *   }
    * })
    */
  token_type: {
    /**
     * The name of this field.
     */
    name: 'token_type'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'token_type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.type`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   type  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.type)
    *   }
    * })
    */
  type: {
    /**
     * The name of this field.
     */
    name: 'type'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Account.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Account
    *
    * Replace this default advisory JSDoc with your own documentation about model Account
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Account {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Account } from 'nexus-prisma'
    *
    * objectType({
    *   name: Account.$name
    *   description: Account.$description
    *   definition(t) {
    *     t.field(Account.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Account', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Session`.
  *
  * ### ️⚠️ You have not writen documentation for model Session
  *
  * Replace this default advisory JSDoc with your own documentation about model Session
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Session {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Session } from 'nexus-prisma'
  *
  * objectType({
  *   name: Session.$name
  *   description: Session.$description
  *   definition(t) {
  *     t.field(Session.id)
  *   }
  * })
  */
export interface Session {
  $name: 'Session'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.expires`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   expires  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.expires)
    *   }
    * })
    */
  expires: {
    /**
     * The name of this field.
     */
    name: 'expires'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'expires'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.sessionToken`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   sessionToken  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.sessionToken)
    *   }
    * })
    */
  sessionToken: {
    /**
     * The name of this field.
     */
    name: 'sessionToken'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'sessionToken'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Session.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Session
    *
    * Replace this default advisory JSDoc with your own documentation about model Session
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Session {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Session } from 'nexus-prisma'
    *
    * objectType({
    *   name: Session.$name
    *   description: Session.$description
    *   definition(t) {
    *     t.field(Session.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Session', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `User`.
  *
  * ### ️⚠️ You have not writen documentation for model User
  *
  * Replace this default advisory JSDoc with your own documentation about model User
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model User {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { User } from 'nexus-prisma'
  *
  * objectType({
  *   name: User.$name
  *   description: User.$description
  *   definition(t) {
  *     t.field(User.id)
  *   }
  * })
  */
export interface User {
  $name: 'User'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.accounts`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   accounts  Account
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.accounts)
    *   }
    * })
    */
  accounts: {
    /**
     * The name of this field.
     */
    name: 'accounts'
  
    /**
     * The type of this field.
     */
    type: 'Account' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Account'> | NexusCore.NexusNonNullDef<'Account'>)
    : 'Warning/Error: The type \'Account\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Account\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'accounts'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.comments`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   comments  Comment
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.comments)
    *   }
    * })
    */
  comments: {
    /**
     * The name of this field.
     */
    name: 'comments'
  
    /**
     * The type of this field.
     */
    type: 'Comment' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Comment'> | NexusCore.NexusNonNullDef<'Comment'>)
    : 'Warning/Error: The type \'Comment\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Comment\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'comments'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.description`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   description  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.description)
    *   }
    * })
    */
  description: {
    /**
     * The name of this field.
     */
    name: 'description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.desiredSkills`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   desiredSkills  DesiredSkillsOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.desiredSkills)
    *   }
    * })
    */
  desiredSkills: {
    /**
     * The name of this field.
     */
    name: 'desiredSkills'
  
    /**
     * The type of this field.
     */
    type: 'DesiredSkillsOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'DesiredSkillsOnUsers'> | NexusCore.NexusNonNullDef<'DesiredSkillsOnUsers'>)
    : 'Warning/Error: The type \'DesiredSkillsOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DesiredSkillsOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'desiredSkills'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.email`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.emailVerified`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   emailVerified  DateTime?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.emailVerified)
    *   }
    * })
    */
  emailVerified: {
    /**
     * The name of this field.
     */
    name: 'emailVerified'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'emailVerified'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.experiences`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   experiences  Experience
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.experiences)
    *   }
    * })
    */
  experiences: {
    /**
     * The name of this field.
     */
    name: 'experiences'
  
    /**
     * The type of this field.
     */
    type: 'Experience' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Experience'> | NexusCore.NexusNonNullDef<'Experience'>)
    : 'Warning/Error: The type \'Experience\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Experience\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'experiences'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.id`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.image`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   image  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.image)
    *   }
    * })
    */
  image: {
    /**
     * The name of this field.
     */
    name: 'image'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'image'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.name`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.posts`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   posts  Post
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.posts)
    *   }
    * })
    */
  posts: {
    /**
     * The name of this field.
     */
    name: 'posts'
  
    /**
     * The type of this field.
     */
    type: 'Post' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Post'> | NexusCore.NexusNonNullDef<'Post'>)
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'posts'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.repositories`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   repositories  Repository
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.repositories)
    *   }
    * })
    */
  repositories: {
    /**
     * The name of this field.
     */
    name: 'repositories'
  
    /**
     * The type of this field.
     */
    type: 'Repository' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Repository'> | NexusCore.NexusNonNullDef<'Repository'>)
    : 'Warning/Error: The type \'Repository\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Repository\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'repositories'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.sessions`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   sessions  Session
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.sessions)
    *   }
    * })
    */
  sessions: {
    /**
     * The name of this field.
     */
    name: 'sessions'
  
    /**
     * The type of this field.
     */
    type: 'Session' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Session'> | NexusCore.NexusNonNullDef<'Session'>)
    : 'Warning/Error: The type \'Session\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Session\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'sessions'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.skills`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   skills  SkillsOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.skills)
    *   }
    * })
    */
  skills: {
    /**
     * The name of this field.
     */
    name: 'skills'
  
    /**
     * The type of this field.
     */
    type: 'SkillsOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'SkillsOnUsers'> | NexusCore.NexusNonNullDef<'SkillsOnUsers'>)
    : 'Warning/Error: The type \'SkillsOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'SkillsOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'skills'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   updatedAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.updatedAt)
    *   }
    * })
    */
  updatedAt: {
    /**
     * The name of this field.
     */
    name: 'updatedAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'updatedAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.upvotedPosts`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   upvotedPosts  PostUpvoter
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.upvotedPosts)
    *   }
    * })
    */
  upvotedPosts: {
    /**
     * The name of this field.
     */
    name: 'upvotedPosts'
  
    /**
     * The type of this field.
     */
    type: 'PostUpvoter' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'PostUpvoter'> | NexusCore.NexusNonNullDef<'PostUpvoter'>)
    : 'Warning/Error: The type \'PostUpvoter\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'PostUpvoter\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'upvotedPosts'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `VerificationToken`.
  *
  * ### ️⚠️ You have not writen documentation for model VerificationToken
  *
  * Replace this default advisory JSDoc with your own documentation about model VerificationToken
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model VerificationToken {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { VerificationToken } from 'nexus-prisma'
  *
  * objectType({
  *   name: VerificationToken.$name
  *   description: VerificationToken.$description
  *   definition(t) {
  *     t.field(VerificationToken.id)
  *   }
  * })
  */
export interface VerificationToken {
  $name: 'VerificationToken'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VerificationToken.expires`.
    *
    * ### ️⚠️ You have not writen documentation for model VerificationToken
    *
    * Replace this default advisory JSDoc with your own documentation about model VerificationToken
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VerificationToken {
    *   /// Lorem ipsum dolor sit amet.
    *   expires  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VerificationToken } from 'nexus-prisma'
    *
    * objectType({
    *   name: VerificationToken.$name
    *   description: VerificationToken.$description
    *   definition(t) {
    *     t.field(VerificationToken.expires)
    *   }
    * })
    */
  expires: {
    /**
     * The name of this field.
     */
    name: 'expires'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VerificationToken', 'expires'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VerificationToken.identifier`.
    *
    * ### ️⚠️ You have not writen documentation for model VerificationToken
    *
    * Replace this default advisory JSDoc with your own documentation about model VerificationToken
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VerificationToken {
    *   /// Lorem ipsum dolor sit amet.
    *   identifier  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VerificationToken } from 'nexus-prisma'
    *
    * objectType({
    *   name: VerificationToken.$name
    *   description: VerificationToken.$description
    *   definition(t) {
    *     t.field(VerificationToken.identifier)
    *   }
    * })
    */
  identifier: {
    /**
     * The name of this field.
     */
    name: 'identifier'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VerificationToken', 'identifier'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `VerificationToken.token`.
    *
    * ### ️⚠️ You have not writen documentation for model VerificationToken
    *
    * Replace this default advisory JSDoc with your own documentation about model VerificationToken
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model VerificationToken {
    *   /// Lorem ipsum dolor sit amet.
    *   token  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { VerificationToken } from 'nexus-prisma'
    *
    * objectType({
    *   name: VerificationToken.$name
    *   description: VerificationToken.$description
    *   definition(t) {
    *     t.field(VerificationToken.token)
    *   }
    * })
    */
  token: {
    /**
     * The name of this field.
     */
    name: 'token'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'VerificationToken', 'token'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Post`.
  *
  * ### ️⚠️ You have not writen documentation for model Post
  *
  * Replace this default advisory JSDoc with your own documentation about model Post
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Post {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Post } from 'nexus-prisma'
  *
  * objectType({
  *   name: Post.$name
  *   description: Post.$description
  *   definition(t) {
  *     t.field(Post.id)
  *   }
  * })
  */
export interface Post {
  $name: 'Post'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.author`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   author  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.author)
    *   }
    * })
    */
  author: {
    /**
     * The name of this field.
     */
    name: 'author'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'author'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.authorName`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   authorName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.authorName)
    *   }
    * })
    */
  authorName: {
    /**
     * The name of this field.
     */
    name: 'authorName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'authorName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.content`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   content  Json?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.content)
    *   }
    * })
    */
  content: {
    /**
     * The name of this field.
     */
    name: 'content'
  
    /**
     * The type of this field.
     */
    type: 'Json' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Json'>
    : 'Warning/Error: The type \'Json\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Json\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'content'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.description`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   description  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.description)
    *   }
    * })
    */
  description: {
    /**
     * The name of this field.
     */
    name: 'description'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'description'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.images`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   images  PostImage
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.images)
    *   }
    * })
    */
  images: {
    /**
     * The name of this field.
     */
    name: 'images'
  
    /**
     * The type of this field.
     */
    type: 'PostImage' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'PostImage'> | NexusCore.NexusNonNullDef<'PostImage'>)
    : 'Warning/Error: The type \'PostImage\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'PostImage\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'images'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.publishedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   publishedAt  DateTime?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.publishedAt)
    *   }
    * })
    */
  publishedAt: {
    /**
     * The name of this field.
     */
    name: 'publishedAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'publishedAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.title`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.thumbnailUrl`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   thumbnailUrl  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.thumbnailUrl)
    *   }
    * })
    */
  thumbnailUrl: {
    /**
     * The name of this field.
     */
    name: 'thumbnailUrl'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'thumbnailUrl'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   updatedAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.updatedAt)
    *   }
    * })
    */
  updatedAt: {
    /**
     * The name of this field.
     */
    name: 'updatedAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'updatedAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.upvotes`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   upvotes  PostUpvoter
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.upvotes)
    *   }
    * })
    */
  upvotes: {
    /**
     * The name of this field.
     */
    name: 'upvotes'
  
    /**
     * The type of this field.
     */
    type: 'PostUpvoter' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'PostUpvoter'> | NexusCore.NexusNonNullDef<'PostUpvoter'>)
    : 'Warning/Error: The type \'PostUpvoter\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'PostUpvoter\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'upvotes'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.urlSlug`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   urlSlug  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.urlSlug)
    *   }
    * })
    */
  urlSlug: {
    /**
     * The name of this field.
     */
    name: 'urlSlug'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'urlSlug'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `PostUpvoter`.
  *
  * ### ️⚠️ You have not writen documentation for model PostUpvoter
  *
  * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model PostUpvoter {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { PostUpvoter } from 'nexus-prisma'
  *
  * objectType({
  *   name: PostUpvoter.$name
  *   description: PostUpvoter.$description
  *   definition(t) {
  *     t.field(PostUpvoter.id)
  *   }
  * })
  */
export interface PostUpvoter {
  $name: 'PostUpvoter'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostUpvoter.post`.
    *
    * ### ️⚠️ You have not writen documentation for model PostUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   post  Post
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostUpvoter.$name
    *   description: PostUpvoter.$description
    *   definition(t) {
    *     t.field(PostUpvoter.post)
    *   }
    * })
    */
  post: {
    /**
     * The name of this field.
     */
    name: 'post'
  
    /**
     * The type of this field.
     */
    type: 'Post' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Post'>
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'post'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostUpvoter.postId`.
    *
    * ### ️⚠️ You have not writen documentation for model PostUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   postId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostUpvoter.$name
    *   description: PostUpvoter.$description
    *   definition(t) {
    *     t.field(PostUpvoter.postId)
    *   }
    * })
    */
  postId: {
    /**
     * The name of this field.
     */
    name: 'postId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostUpvoter.user`.
    *
    * ### ️⚠️ You have not writen documentation for model PostUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostUpvoter.$name
    *   description: PostUpvoter.$description
    *   definition(t) {
    *     t.field(PostUpvoter.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostUpvoter.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model PostUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostUpvoter.$name
    *   description: PostUpvoter.$description
    *   definition(t) {
    *     t.field(PostUpvoter.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `PostImage`.
  *
  * ### ️⚠️ You have not writen documentation for model PostImage
  *
  * Replace this default advisory JSDoc with your own documentation about model PostImage
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model PostImage {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { PostImage } from 'nexus-prisma'
  *
  * objectType({
  *   name: PostImage.$name
  *   description: PostImage.$description
  *   definition(t) {
  *     t.field(PostImage.id)
  *   }
  * })
  */
export interface PostImage {
  $name: 'PostImage'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostImage.id`.
    *
    * ### ️⚠️ You have not writen documentation for model PostImage
    *
    * Replace this default advisory JSDoc with your own documentation about model PostImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostImage {
    *   /// Lorem ipsum dolor sit amet.
    *   id  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostImage.$name
    *   description: PostImage.$description
    *   definition(t) {
    *     t.field(PostImage.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'ID' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'ID'>
    : 'Warning/Error: The type \'ID\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ID\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostImage', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostImage.post`.
    *
    * ### ️⚠️ You have not writen documentation for model PostImage
    *
    * Replace this default advisory JSDoc with your own documentation about model PostImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostImage {
    *   /// Lorem ipsum dolor sit amet.
    *   post  Post
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostImage.$name
    *   description: PostImage.$description
    *   definition(t) {
    *     t.field(PostImage.post)
    *   }
    * })
    */
  post: {
    /**
     * The name of this field.
     */
    name: 'post'
  
    /**
     * The type of this field.
     */
    type: 'Post' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Post'>
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostImage', 'post'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostImage.postId`.
    *
    * ### ️⚠️ You have not writen documentation for model PostImage
    *
    * Replace this default advisory JSDoc with your own documentation about model PostImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostImage {
    *   /// Lorem ipsum dolor sit amet.
    *   postId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostImage.$name
    *   description: PostImage.$description
    *   definition(t) {
    *     t.field(PostImage.postId)
    *   }
    * })
    */
  postId: {
    /**
     * The name of this field.
     */
    name: 'postId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostImage', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostImage.url`.
    *
    * ### ️⚠️ You have not writen documentation for model PostImage
    *
    * Replace this default advisory JSDoc with your own documentation about model PostImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostImage {
    *   /// Lorem ipsum dolor sit amet.
    *   url  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostImage.$name
    *   description: PostImage.$description
    *   definition(t) {
    *     t.field(PostImage.url)
    *   }
    * })
    */
  url: {
    /**
     * The name of this field.
     */
    name: 'url'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostImage', 'url'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostImage.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model PostImage
    *
    * Replace this default advisory JSDoc with your own documentation about model PostImage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostImage {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { PostImage } from 'nexus-prisma'
    *
    * objectType({
    *   name: PostImage.$name
    *   description: PostImage.$description
    *   definition(t) {
    *     t.field(PostImage.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostImage', 'createdAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Comment`.
  *
  * ### ️⚠️ You have not writen documentation for model Comment
  *
  * Replace this default advisory JSDoc with your own documentation about model Comment
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Comment {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Comment } from 'nexus-prisma'
  *
  * objectType({
  *   name: Comment.$name
  *   description: Comment.$description
  *   definition(t) {
  *     t.field(Comment.id)
  *   }
  * })
  */
export interface Comment {
  $name: 'Comment'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Comment } from 'nexus-prisma'
    *
    * objectType({
    *   name: Comment.$name
    *   description: Comment.$description
    *   definition(t) {
    *     t.field(Comment.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.author`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   author  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Comment } from 'nexus-prisma'
    *
    * objectType({
    *   name: Comment.$name
    *   description: Comment.$description
    *   definition(t) {
    *     t.field(Comment.author)
    *   }
    * })
    */
  author: {
    /**
     * The name of this field.
     */
    name: 'author'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'author'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.authorId`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   authorId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Comment } from 'nexus-prisma'
    *
    * objectType({
    *   name: Comment.$name
    *   description: Comment.$description
    *   definition(t) {
    *     t.field(Comment.authorId)
    *   }
    * })
    */
  authorId: {
    /**
     * The name of this field.
     */
    name: 'authorId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'authorId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.content`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   content  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Comment } from 'nexus-prisma'
    *
    * objectType({
    *   name: Comment.$name
    *   description: Comment.$description
    *   definition(t) {
    *     t.field(Comment.content)
    *   }
    * })
    */
  content: {
    /**
     * The name of this field.
     */
    name: 'content'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'content'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   createdAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Comment } from 'nexus-prisma'
    *
    * objectType({
    *   name: Comment.$name
    *   description: Comment.$description
    *   definition(t) {
    *     t.field(Comment.createdAt)
    *   }
    * })
    */
  createdAt: {
    /**
     * The name of this field.
     */
    name: 'createdAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   updatedAt  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Comment } from 'nexus-prisma'
    *
    * objectType({
    *   name: Comment.$name
    *   description: Comment.$description
    *   definition(t) {
    *     t.field(Comment.updatedAt)
    *   }
    * })
    */
  updatedAt: {
    /**
     * The name of this field.
     */
    name: 'updatedAt'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'updatedAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Skill`.
  *
  * ### ️⚠️ You have not writen documentation for model Skill
  *
  * Replace this default advisory JSDoc with your own documentation about model Skill
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Skill {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Skill } from 'nexus-prisma'
  *
  * objectType({
  *   name: Skill.$name
  *   description: Skill.$description
  *   definition(t) {
  *     t.field(Skill.id)
  *   }
  * })
  */
export interface Skill {
  $name: 'Skill'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Skill } from 'nexus-prisma'
    *
    * objectType({
    *   name: Skill.$name
    *   description: Skill.$description
    *   definition(t) {
    *     t.field(Skill.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Skill } from 'nexus-prisma'
    *
    * objectType({
    *   name: Skill.$name
    *   description: Skill.$description
    *   definition(t) {
    *     t.field(Skill.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.owner`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   owner  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Skill } from 'nexus-prisma'
    *
    * objectType({
    *   name: Skill.$name
    *   description: Skill.$description
    *   definition(t) {
    *     t.field(Skill.owner)
    *   }
    * })
    */
  owner: {
    /**
     * The name of this field.
     */
    name: 'owner'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'owner'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.users`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   users  SkillsOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Skill } from 'nexus-prisma'
    *
    * objectType({
    *   name: Skill.$name
    *   description: Skill.$description
    *   definition(t) {
    *     t.field(Skill.users)
    *   }
    * })
    */
  users: {
    /**
     * The name of this field.
     */
    name: 'users'
  
    /**
     * The type of this field.
     */
    type: 'SkillsOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'SkillsOnUsers'> | NexusCore.NexusNonNullDef<'SkillsOnUsers'>)
    : 'Warning/Error: The type \'SkillsOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'SkillsOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'users'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.desiringUsers`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   desiringUsers  DesiredSkillsOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Skill } from 'nexus-prisma'
    *
    * objectType({
    *   name: Skill.$name
    *   description: Skill.$description
    *   definition(t) {
    *     t.field(Skill.desiringUsers)
    *   }
    * })
    */
  desiringUsers: {
    /**
     * The name of this field.
     */
    name: 'desiringUsers'
  
    /**
     * The type of this field.
     */
    type: 'DesiredSkillsOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'DesiredSkillsOnUsers'> | NexusCore.NexusNonNullDef<'DesiredSkillsOnUsers'>)
    : 'Warning/Error: The type \'DesiredSkillsOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DesiredSkillsOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'desiringUsers'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.repositories`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   repositories  SkillsOnRepositories
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Skill } from 'nexus-prisma'
    *
    * objectType({
    *   name: Skill.$name
    *   description: Skill.$description
    *   definition(t) {
    *     t.field(Skill.repositories)
    *   }
    * })
    */
  repositories: {
    /**
     * The name of this field.
     */
    name: 'repositories'
  
    /**
     * The type of this field.
     */
    type: 'SkillsOnRepositories' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'SkillsOnRepositories'> | NexusCore.NexusNonNullDef<'SkillsOnRepositories'>)
    : 'Warning/Error: The type \'SkillsOnRepositories\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'SkillsOnRepositories\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'repositories'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `SkillsOnUsers`.
  *
  * ### ️⚠️ You have not writen documentation for model SkillsOnUsers
  *
  * Replace this default advisory JSDoc with your own documentation about model SkillsOnUsers
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model SkillsOnUsers {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { SkillsOnUsers } from 'nexus-prisma'
  *
  * objectType({
  *   name: SkillsOnUsers.$name
  *   description: SkillsOnUsers.$description
  *   definition(t) {
  *     t.field(SkillsOnUsers.id)
  *   }
  * })
  */
export interface SkillsOnUsers {
  $name: 'SkillsOnUsers'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnUsers.skill`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   skill  Skill
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnUsers.$name
    *   description: SkillsOnUsers.$description
    *   definition(t) {
    *     t.field(SkillsOnUsers.skill)
    *   }
    * })
    */
  skill: {
    /**
     * The name of this field.
     */
    name: 'skill'
  
    /**
     * The type of this field.
     */
    type: 'Skill' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Skill'>
    : 'Warning/Error: The type \'Skill\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Skill\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnUsers', 'skill'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnUsers.skillId`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   skillId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnUsers.$name
    *   description: SkillsOnUsers.$description
    *   definition(t) {
    *     t.field(SkillsOnUsers.skillId)
    *   }
    * })
    */
  skillId: {
    /**
     * The name of this field.
     */
    name: 'skillId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnUsers', 'skillId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnUsers.user`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnUsers.$name
    *   description: SkillsOnUsers.$description
    *   definition(t) {
    *     t.field(SkillsOnUsers.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnUsers', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnUsers.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnUsers.$name
    *   description: SkillsOnUsers.$description
    *   definition(t) {
    *     t.field(SkillsOnUsers.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnUsers', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `DesiredSkillsOnUsers`.
  *
  * ### ️⚠️ You have not writen documentation for model DesiredSkillsOnUsers
  *
  * Replace this default advisory JSDoc with your own documentation about model DesiredSkillsOnUsers
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model DesiredSkillsOnUsers {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { DesiredSkillsOnUsers } from 'nexus-prisma'
  *
  * objectType({
  *   name: DesiredSkillsOnUsers.$name
  *   description: DesiredSkillsOnUsers.$description
  *   definition(t) {
  *     t.field(DesiredSkillsOnUsers.id)
  *   }
  * })
  */
export interface DesiredSkillsOnUsers {
  $name: 'DesiredSkillsOnUsers'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `DesiredSkillsOnUsers.skill`.
    *
    * ### ️⚠️ You have not writen documentation for model DesiredSkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model DesiredSkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model DesiredSkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   skill  Skill
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { DesiredSkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: DesiredSkillsOnUsers.$name
    *   description: DesiredSkillsOnUsers.$description
    *   definition(t) {
    *     t.field(DesiredSkillsOnUsers.skill)
    *   }
    * })
    */
  skill: {
    /**
     * The name of this field.
     */
    name: 'skill'
  
    /**
     * The type of this field.
     */
    type: 'Skill' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Skill'>
    : 'Warning/Error: The type \'Skill\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Skill\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'DesiredSkillsOnUsers', 'skill'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `DesiredSkillsOnUsers.skillId`.
    *
    * ### ️⚠️ You have not writen documentation for model DesiredSkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model DesiredSkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model DesiredSkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   skillId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { DesiredSkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: DesiredSkillsOnUsers.$name
    *   description: DesiredSkillsOnUsers.$description
    *   definition(t) {
    *     t.field(DesiredSkillsOnUsers.skillId)
    *   }
    * })
    */
  skillId: {
    /**
     * The name of this field.
     */
    name: 'skillId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'DesiredSkillsOnUsers', 'skillId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `DesiredSkillsOnUsers.user`.
    *
    * ### ️⚠️ You have not writen documentation for model DesiredSkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model DesiredSkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model DesiredSkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { DesiredSkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: DesiredSkillsOnUsers.$name
    *   description: DesiredSkillsOnUsers.$description
    *   definition(t) {
    *     t.field(DesiredSkillsOnUsers.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'DesiredSkillsOnUsers', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `DesiredSkillsOnUsers.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model DesiredSkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model DesiredSkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model DesiredSkillsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { DesiredSkillsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: DesiredSkillsOnUsers.$name
    *   description: DesiredSkillsOnUsers.$description
    *   definition(t) {
    *     t.field(DesiredSkillsOnUsers.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'DesiredSkillsOnUsers', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Repository`.
  *
  * ### ️⚠️ You have not writen documentation for model Repository
  *
  * Replace this default advisory JSDoc with your own documentation about model Repository
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Repository {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Repository } from 'nexus-prisma'
  *
  * objectType({
  *   name: Repository.$name
  *   description: Repository.$description
  *   definition(t) {
  *     t.field(Repository.id)
  *   }
  * })
  */
export interface Repository {
  $name: 'Repository'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Repository.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Repository
    *
    * Replace this default advisory JSDoc with your own documentation about model Repository
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Repository {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Repository } from 'nexus-prisma'
    *
    * objectType({
    *   name: Repository.$name
    *   description: Repository.$description
    *   definition(t) {
    *     t.field(Repository.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Repository', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Repository.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Repository
    *
    * Replace this default advisory JSDoc with your own documentation about model Repository
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Repository {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Repository } from 'nexus-prisma'
    *
    * objectType({
    *   name: Repository.$name
    *   description: Repository.$description
    *   definition(t) {
    *     t.field(Repository.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Repository', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Repository.skills`.
    *
    * ### ️⚠️ You have not writen documentation for model Repository
    *
    * Replace this default advisory JSDoc with your own documentation about model Repository
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Repository {
    *   /// Lorem ipsum dolor sit amet.
    *   skills  SkillsOnRepositories
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Repository } from 'nexus-prisma'
    *
    * objectType({
    *   name: Repository.$name
    *   description: Repository.$description
    *   definition(t) {
    *     t.field(Repository.skills)
    *   }
    * })
    */
  skills: {
    /**
     * The name of this field.
     */
    name: 'skills'
  
    /**
     * The type of this field.
     */
    type: 'SkillsOnRepositories' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'SkillsOnRepositories'> | NexusCore.NexusNonNullDef<'SkillsOnRepositories'>)
    : 'Warning/Error: The type \'SkillsOnRepositories\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'SkillsOnRepositories\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Repository', 'skills'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Repository.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Repository
    *
    * Replace this default advisory JSDoc with your own documentation about model Repository
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Repository {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Repository } from 'nexus-prisma'
    *
    * objectType({
    *   name: Repository.$name
    *   description: Repository.$description
    *   definition(t) {
    *     t.field(Repository.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Repository', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Repository.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Repository
    *
    * Replace this default advisory JSDoc with your own documentation about model Repository
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Repository {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Repository } from 'nexus-prisma'
    *
    * objectType({
    *   name: Repository.$name
    *   description: Repository.$description
    *   definition(t) {
    *     t.field(Repository.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Repository', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `SkillsOnRepositories`.
  *
  * ### ️⚠️ You have not writen documentation for model SkillsOnRepositories
  *
  * Replace this default advisory JSDoc with your own documentation about model SkillsOnRepositories
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model SkillsOnRepositories {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { SkillsOnRepositories } from 'nexus-prisma'
  *
  * objectType({
  *   name: SkillsOnRepositories.$name
  *   description: SkillsOnRepositories.$description
  *   definition(t) {
  *     t.field(SkillsOnRepositories.id)
  *   }
  * })
  */
export interface SkillsOnRepositories {
  $name: 'SkillsOnRepositories'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnRepositories.skill`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnRepositories
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnRepositories
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnRepositories {
    *   /// Lorem ipsum dolor sit amet.
    *   skill  Skill
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnRepositories } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnRepositories.$name
    *   description: SkillsOnRepositories.$description
    *   definition(t) {
    *     t.field(SkillsOnRepositories.skill)
    *   }
    * })
    */
  skill: {
    /**
     * The name of this field.
     */
    name: 'skill'
  
    /**
     * The type of this field.
     */
    type: 'Skill' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Skill'>
    : 'Warning/Error: The type \'Skill\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Skill\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnRepositories', 'skill'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnRepositories.skillId`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnRepositories
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnRepositories
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnRepositories {
    *   /// Lorem ipsum dolor sit amet.
    *   skillId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnRepositories } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnRepositories.$name
    *   description: SkillsOnRepositories.$description
    *   definition(t) {
    *     t.field(SkillsOnRepositories.skillId)
    *   }
    * })
    */
  skillId: {
    /**
     * The name of this field.
     */
    name: 'skillId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnRepositories', 'skillId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnRepositories.repository`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnRepositories
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnRepositories
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnRepositories {
    *   /// Lorem ipsum dolor sit amet.
    *   repository  Repository
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnRepositories } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnRepositories.$name
    *   description: SkillsOnRepositories.$description
    *   definition(t) {
    *     t.field(SkillsOnRepositories.repository)
    *   }
    * })
    */
  repository: {
    /**
     * The name of this field.
     */
    name: 'repository'
  
    /**
     * The type of this field.
     */
    type: 'Repository' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Repository'>
    : 'Warning/Error: The type \'Repository\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Repository\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnRepositories', 'repository'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnRepositories.repositoryId`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnRepositories
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnRepositories
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnRepositories {
    *   /// Lorem ipsum dolor sit amet.
    *   repositoryId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnRepositories } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnRepositories.$name
    *   description: SkillsOnRepositories.$description
    *   definition(t) {
    *     t.field(SkillsOnRepositories.repositoryId)
    *   }
    * })
    */
  repositoryId: {
    /**
     * The name of this field.
     */
    name: 'repositoryId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'SkillsOnRepositories', 'repositoryId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Organization`.
  *
  * ### ️⚠️ You have not writen documentation for model Organization
  *
  * Replace this default advisory JSDoc with your own documentation about model Organization
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Organization {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Organization } from 'nexus-prisma'
  *
  * objectType({
  *   name: Organization.$name
  *   description: Organization.$description
  *   definition(t) {
  *     t.field(Organization.id)
  *   }
  * })
  */
export interface Organization {
  $name: 'Organization'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Organization.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Organization
    *
    * Replace this default advisory JSDoc with your own documentation about model Organization
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Organization {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Organization } from 'nexus-prisma'
    *
    * objectType({
    *   name: Organization.$name
    *   description: Organization.$description
    *   definition(t) {
    *     t.field(Organization.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Organization', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Organization.name`.
    *
    * ### ️⚠️ You have not writen documentation for model Organization
    *
    * Replace this default advisory JSDoc with your own documentation about model Organization
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Organization {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Organization } from 'nexus-prisma'
    *
    * objectType({
    *   name: Organization.$name
    *   description: Organization.$description
    *   definition(t) {
    *     t.field(Organization.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Organization', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Organization.experiences`.
    *
    * ### ️⚠️ You have not writen documentation for model Organization
    *
    * Replace this default advisory JSDoc with your own documentation about model Organization
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Organization {
    *   /// Lorem ipsum dolor sit amet.
    *   experiences  Experience
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Organization } from 'nexus-prisma'
    *
    * objectType({
    *   name: Organization.$name
    *   description: Organization.$description
    *   definition(t) {
    *     t.field(Organization.experiences)
    *   }
    * })
    */
  experiences: {
    /**
     * The name of this field.
     */
    name: 'experiences'
  
    /**
     * The type of this field.
     */
    type: 'Experience' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Experience'> | NexusCore.NexusNonNullDef<'Experience'>)
    : 'Warning/Error: The type \'Experience\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Experience\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Organization', 'experiences'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Experience`.
  *
  * ### ️⚠️ You have not writen documentation for model Experience
  *
  * Replace this default advisory JSDoc with your own documentation about model Experience
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Experience {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Experience } from 'nexus-prisma'
  *
  * objectType({
  *   name: Experience.$name
  *   description: Experience.$description
  *   definition(t) {
  *     t.field(Experience.id)
  *   }
  * })
  */
export interface Experience {
  $name: 'Experience'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int'>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.endDate`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   endDate  DateTime?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.endDate)
    *   }
    * })
    */
  endDate: {
    /**
     * The name of this field.
     */
    name: 'endDate'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'endDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.highlights`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   highlights  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.highlights)
    *   }
    * })
    */
  highlights: {
    /**
     * The name of this field.
     */
    name: 'highlights'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String'> | NexusCore.NexusNonNullDef<'String'>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'highlights'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.location`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   location  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.location)
    *   }
    * })
    */
  location: {
    /**
     * The name of this field.
     */
    name: 'location'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'location'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.organization`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   organization  Organization
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.organization)
    *   }
    * })
    */
  organization: {
    /**
     * The name of this field.
     */
    name: 'organization'
  
    /**
     * The type of this field.
     */
    type: 'Organization' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Organization'>
    : 'Warning/Error: The type \'Organization\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Organization\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'organization'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.organizationName`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   organizationName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.organizationName)
    *   }
    * })
    */
  organizationName: {
    /**
     * The name of this field.
     */
    name: 'organizationName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'organizationName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.positionName`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   positionName  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.positionName)
    *   }
    * })
    */
  positionName: {
    /**
     * The name of this field.
     */
    name: 'positionName'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'positionName'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.startDate`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   startDate  DateTime
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.startDate)
    *   }
    * })
    */
  startDate: {
    /**
     * The name of this field.
     */
    name: 'startDate'
  
    /**
     * The type of this field.
     */
    type: 'DateTime' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'DateTime'>
    : 'Warning/Error: The type \'DateTime\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'DateTime\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'startDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.type`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   type  ExperienceType?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.type)
    *   }
    * })
    */
  type: {
    /**
     * The name of this field.
     */
    name: 'type'
  
    /**
     * The type of this field.
     */
    type: 'ExperienceType' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'ExperienceType'>
    : 'Warning/Error: The type \'ExperienceType\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ExperienceType\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   user  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.user)
    *   }
    * })
    */
  user: {
    /**
     * The name of this field.
     */
    name: 'user'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User'>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Experience.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Experience
    *
    * Replace this default advisory JSDoc with your own documentation about model Experience
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Experience {
    *   /// Lorem ipsum dolor sit amet.
    *   userId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Experience } from 'nexus-prisma'
    *
    * objectType({
    *   name: Experience.$name
    *   description: Experience.$description
    *   definition(t) {
    *     t.field(Experience.userId)
    *   }
    * })
    */
  userId: {
    /**
     * The name of this field.
     */
    name: 'userId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String'>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Experience', 'userId'>
  }
}

// Enums

/**
  * Generated Nexus `enumType` configuration based on your Prisma schema's enum `ExperienceType`.
  *
  * ### ️⚠️ You have not writen documentation for enum ExperienceType
  *
  * Replace this default advisory JSDoc with your own documentation about enum ExperienceType
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * enum ExperienceType {
  *   FullTime
  *   PartTime
  *   Contract
  *   Intern
  *   OpenSource
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * Contains these members: FullTime, PartTime, Contract, Intern, OpenSource
  *
  * @example
  *
  * import { enumType } from 'nexus'
  * import { ExperienceType } from 'nexus-prisma'
  *
  * enumType(ExperienceType)
  */
export interface ExperienceType {
  name: 'ExperienceType'
  description: undefined
  members: ['FullTime', 'PartTime', 'Contract', 'Intern', 'OpenSource']
}


//
//
// TERMS
// TERMS
// TERMS
// TERMS
//
//

//
//
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
//
//

export const Account: Account

export const Session: Session

export const User: User

export const VerificationToken: VerificationToken

export const Post: Post

export const PostUpvoter: PostUpvoter

export const PostImage: PostImage

export const Comment: Comment

export const Skill: Skill

export const SkillsOnUsers: SkillsOnUsers

export const DesiredSkillsOnUsers: DesiredSkillsOnUsers

export const Repository: Repository

export const SkillsOnRepositories: SkillsOnRepositories

export const Organization: Organization

export const Experience: Experience

//
//
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
//
//

export const ExperienceType: ExperienceType

//
//
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
//
//

import { Runtime } from 'nexus-prisma/dist-cjs/generator/runtime/settingsSingleton'

/**
 * Adjust Nexus Prisma's [runtime settings](https://pris.ly/nexus-prisma/docs/settings/runtime).
 *
 * @example
 *
 *     import { PrismaClient } from '@prisma/client'
 *     import { ApolloServer } from 'apollo-server'
 *     import { makeSchema } from 'nexus'
 *     import { User, Post, $settings } from 'nexus-prisma'
 *
 *     new ApolloServer({
 *       schema: makeSchema({
 *         types: [],
 *       }),
 *       context() {
 *         return {
 *           db: new PrismaClient(), // <-- You put Prisma client on the "db" context property
 *         }
 *       },
 *     })
 *
 *     $settings({
 *       prismaClientContextField: 'db', // <-- Tell Nexus Prisma
 *     })
 *
 * @remarks This is _different_ than Nexus Prisma's [_gentime_ settings](https://pris.ly/nexus-prisma/docs/settings/gentime).
 */
export const $settings: typeof Runtime.changeSettings
