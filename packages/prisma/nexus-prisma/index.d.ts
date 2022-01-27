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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.activities`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   activities  UserActivity
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
    *     t.field(User.activities)
    *   }
    * })
    */
  activities: {
    /**
     * The name of this field.
     */
    name: 'activities'
  
    /**
     * The type of this field.
     */
    type: 'UserActivity' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UserActivity'> | NexusCore.NexusNonNullDef<'UserActivity'>)
    : 'Warning/Error: The type \'UserActivity\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UserActivity\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'activities'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.chats`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   chats  ChatsOnUsers
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
    *     t.field(User.chats)
    *   }
    * })
    */
  chats: {
    /**
     * The name of this field.
     */
    name: 'chats'
  
    /**
     * The type of this field.
     */
    type: 'ChatsOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'ChatsOnUsers'> | NexusCore.NexusNonNullDef<'ChatsOnUsers'>)
    : 'Warning/Error: The type \'ChatsOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ChatsOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'chats'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.chatMessages`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   chatMessages  ChatMessage
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
    *     t.field(User.chatMessages)
    *   }
    * })
    */
  chatMessages: {
    /**
     * The name of this field.
     */
    name: 'chatMessages'
  
    /**
     * The type of this field.
     */
    type: 'ChatMessage' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'ChatMessage'> | NexusCore.NexusNonNullDef<'ChatMessage'>)
    : 'Warning/Error: The type \'ChatMessage\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ChatMessage\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'chatMessages'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.followedBy`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   followedBy  FollowUser
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
    *     t.field(User.followedBy)
    *   }
    * })
    */
  followedBy: {
    /**
     * The name of this field.
     */
    name: 'followedBy'
  
    /**
     * The type of this field.
     */
    type: 'FollowUser' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'FollowUser'> | NexusCore.NexusNonNullDef<'FollowUser'>)
    : 'Warning/Error: The type \'FollowUser\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'FollowUser\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'followedBy'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.followingSkill`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   followingSkill  FollowSkill
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
    *     t.field(User.followingSkill)
    *   }
    * })
    */
  followingSkill: {
    /**
     * The name of this field.
     */
    name: 'followingSkill'
  
    /**
     * The type of this field.
     */
    type: 'FollowSkill' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'FollowSkill'> | NexusCore.NexusNonNullDef<'FollowSkill'>)
    : 'Warning/Error: The type \'FollowSkill\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'FollowSkill\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'followingSkill'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.followingUser`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   followingUser  FollowUser
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
    *     t.field(User.followingUser)
    *   }
    * })
    */
  followingUser: {
    /**
     * The name of this field.
     */
    name: 'followingUser'
  
    /**
     * The type of this field.
     */
    type: 'FollowUser' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'FollowUser'> | NexusCore.NexusNonNullDef<'FollowUser'>)
    : 'Warning/Error: The type \'FollowUser\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'FollowUser\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'followingUser'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.friendedBy`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   friendedBy  Friendship
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
    *     t.field(User.friendedBy)
    *   }
    * })
    */
  friendedBy: {
    /**
     * The name of this field.
     */
    name: 'friendedBy'
  
    /**
     * The type of this field.
     */
    type: 'Friendship' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Friendship'> | NexusCore.NexusNonNullDef<'Friendship'>)
    : 'Warning/Error: The type \'Friendship\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Friendship\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'friendedBy'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.friending`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   friending  Friendship
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
    *     t.field(User.friending)
    *   }
    * })
    */
  friending: {
    /**
     * The name of this field.
     */
    name: 'friending'
  
    /**
     * The type of this field.
     */
    type: 'Friendship' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Friendship'> | NexusCore.NexusNonNullDef<'Friendship'>)
    : 'Warning/Error: The type \'Friendship\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Friendship\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'friending'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.notifications`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   notifications  Notification
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
    *     t.field(User.notifications)
    *   }
    * })
    */
  notifications: {
    /**
     * The name of this field.
     */
    name: 'notifications'
  
    /**
     * The type of this field.
     */
    type: 'Notification' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Notification'> | NexusCore.NexusNonNullDef<'Notification'>)
    : 'Warning/Error: The type \'Notification\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Notification\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'notifications'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.notificationsLastOpenedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   notificationsLastOpenedAt  DateTime
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
    *     t.field(User.notificationsLastOpenedAt)
    *   }
    * })
    */
  notificationsLastOpenedAt: {
    /**
     * The name of this field.
     */
    name: 'notificationsLastOpenedAt'
  
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
    resolve: NexusCore.FieldResolver<'User', 'notificationsLastOpenedAt'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.upvotedComments`.
    *
    * ### ️⚠️ You have not writen documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   upvotedComments  CommentUpvoter
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
    *     t.field(User.upvotedComments)
    *   }
    * })
    */
  upvotedComments: {
    /**
     * The name of this field.
     */
    name: 'upvotedComments'
  
    /**
     * The type of this field.
     */
    type: 'CommentUpvoter' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'CommentUpvoter'> | NexusCore.NexusNonNullDef<'CommentUpvoter'>)
    : 'Warning/Error: The type \'CommentUpvoter\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'CommentUpvoter\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'upvotedComments'>
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
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `UserActivity`.
  *
  * ### ️⚠️ You have not writen documentation for model UserActivity
  *
  * Replace this default advisory JSDoc with your own documentation about model UserActivity
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model UserActivity {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { UserActivity } from 'nexus-prisma'
  *
  * objectType({
  *   name: UserActivity.$name
  *   description: UserActivity.$description
  *   definition(t) {
  *     t.field(UserActivity.id)
  *   }
  * })
  */
export interface UserActivity {
  $name: 'UserActivity'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.id`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
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
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.id)
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.comment`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   comment  Comment?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.comment)
    *   }
    * })
    */
  comment: {
    /**
     * The name of this field.
     */
    name: 'comment'
  
    /**
     * The type of this field.
     */
    type: 'Comment' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Comment'>
    : 'Warning/Error: The type \'Comment\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Comment\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UserActivity', 'comment'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.commentId`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   commentId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.commentId)
    *   }
    * })
    */
  commentId: {
    /**
     * The name of this field.
     */
    name: 'commentId'
  
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'commentId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
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
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.createdAt)
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.follow`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   follow  Follow?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.follow)
    *   }
    * })
    */
  follow: {
    /**
     * The name of this field.
     */
    name: 'follow'
  
    /**
     * The type of this field.
     */
    type: 'Follow' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Follow'>
    : 'Warning/Error: The type \'Follow\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Follow\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UserActivity', 'follow'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.followId`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   followId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.followId)
    *   }
    * })
    */
  followId: {
    /**
     * The name of this field.
     */
    name: 'followId'
  
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'followId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.friendship`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   friendship  Friendship?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.friendship)
    *   }
    * })
    */
  friendship: {
    /**
     * The name of this field.
     */
    name: 'friendship'
  
    /**
     * The type of this field.
     */
    type: 'Friendship' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Friendship'>
    : 'Warning/Error: The type \'Friendship\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Friendship\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UserActivity', 'friendship'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.friendshipId`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   friendshipId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.friendshipId)
    *   }
    * })
    */
  friendshipId: {
    /**
     * The name of this field.
     */
    name: 'friendshipId'
  
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'friendshipId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.post`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   post  Post?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.post)
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
    ? NexusCore.NexusNullDef<'Post'>
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UserActivity', 'post'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.postId`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   postId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.postId)
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.type`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
    *   /// Lorem ipsum dolor sit amet.
    *   type  UserActivityType
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.type)
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
    type: 'UserActivityType' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'UserActivityType'>
    : 'Warning/Error: The type \'UserActivityType\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UserActivityType\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'UserActivity', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.user`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
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
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.user)
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `UserActivity.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model UserActivity
    *
    * Replace this default advisory JSDoc with your own documentation about model UserActivity
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model UserActivity {
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
    * import { UserActivity } from 'nexus-prisma'
    *
    * objectType({
    *   name: UserActivity.$name
    *   description: UserActivity.$description
    *   definition(t) {
    *     t.field(UserActivity.userId)
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
    resolve: NexusCore.FieldResolver<'UserActivity', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Notification`.
  *
  * ### ️⚠️ You have not writen documentation for model Notification
  *
  * Replace this default advisory JSDoc with your own documentation about model Notification
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Notification {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Notification } from 'nexus-prisma'
  *
  * objectType({
  *   name: Notification.$name
  *   description: Notification.$description
  *   definition(t) {
  *     t.field(Notification.id)
  *   }
  * })
  */
export interface Notification {
  $name: 'Notification'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
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
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.id)
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
    resolve: NexusCore.FieldResolver<'Notification', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.chat`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   chat  Chat?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.chat)
    *   }
    * })
    */
  chat: {
    /**
     * The name of this field.
     */
    name: 'chat'
  
    /**
     * The type of this field.
     */
    type: 'Chat' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Chat'>
    : 'Warning/Error: The type \'Chat\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Chat\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'chat'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.chatId`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   chatId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.chatId)
    *   }
    * })
    */
  chatId: {
    /**
     * The name of this field.
     */
    name: 'chatId'
  
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
    resolve: NexusCore.FieldResolver<'Notification', 'chatId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.opened`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   opened  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.opened)
    *   }
    * })
    */
  opened: {
    /**
     * The name of this field.
     */
    name: 'opened'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'opened'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.post`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   post  Post?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.post)
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
    ? NexusCore.NexusNullDef<'Post'>
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'post'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.postId`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   postId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.postId)
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
    resolve: NexusCore.FieldResolver<'Notification', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.type`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
    *   /// Lorem ipsum dolor sit amet.
    *   type  NotificationType
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.type)
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
    type: 'NotificationType' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'NotificationType'>
    : 'Warning/Error: The type \'NotificationType\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'NotificationType\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Notification', 'type'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
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
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.updatedAt)
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
    resolve: NexusCore.FieldResolver<'Notification', 'updatedAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.user`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
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
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.user)
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
    resolve: NexusCore.FieldResolver<'Notification', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Notification.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model Notification
    *
    * Replace this default advisory JSDoc with your own documentation about model Notification
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Notification {
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
    * import { Notification } from 'nexus-prisma'
    *
    * objectType({
    *   name: Notification.$name
    *   description: Notification.$description
    *   definition(t) {
    *     t.field(Notification.userId)
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
    resolve: NexusCore.FieldResolver<'Notification', 'userId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Friendship`.
  *
  * ### ️⚠️ You have not writen documentation for model Friendship
  *
  * Replace this default advisory JSDoc with your own documentation about model Friendship
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Friendship {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Friendship } from 'nexus-prisma'
  *
  * objectType({
  *   name: Friendship.$name
  *   description: Friendship.$description
  *   definition(t) {
  *     t.field(Friendship.id)
  *   }
  * })
  */
export interface Friendship {
  $name: 'Friendship'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
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
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.id)
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
    resolve: NexusCore.FieldResolver<'Friendship', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.activities`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
    *   /// Lorem ipsum dolor sit amet.
    *   activities  UserActivity
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.activities)
    *   }
    * })
    */
  activities: {
    /**
     * The name of this field.
     */
    name: 'activities'
  
    /**
     * The type of this field.
     */
    type: 'UserActivity' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UserActivity'> | NexusCore.NexusNonNullDef<'UserActivity'>)
    : 'Warning/Error: The type \'UserActivity\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UserActivity\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Friendship', 'activities'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.friender`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
    *   /// Lorem ipsum dolor sit amet.
    *   friender  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.friender)
    *   }
    * })
    */
  friender: {
    /**
     * The name of this field.
     */
    name: 'friender'
  
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
    resolve: NexusCore.FieldResolver<'Friendship', 'friender'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.frienderId`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
    *   /// Lorem ipsum dolor sit amet.
    *   frienderId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.frienderId)
    *   }
    * })
    */
  frienderId: {
    /**
     * The name of this field.
     */
    name: 'frienderId'
  
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
    resolve: NexusCore.FieldResolver<'Friendship', 'frienderId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.friending`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
    *   /// Lorem ipsum dolor sit amet.
    *   friending  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.friending)
    *   }
    * })
    */
  friending: {
    /**
     * The name of this field.
     */
    name: 'friending'
  
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
    resolve: NexusCore.FieldResolver<'Friendship', 'friending'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.friendingId`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
    *   /// Lorem ipsum dolor sit amet.
    *   friendingId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.friendingId)
    *   }
    * })
    */
  friendingId: {
    /**
     * The name of this field.
     */
    name: 'friendingId'
  
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
    resolve: NexusCore.FieldResolver<'Friendship', 'friendingId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.rejected`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
    *   /// Lorem ipsum dolor sit amet.
    *   rejected  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.rejected)
    *   }
    * })
    */
  rejected: {
    /**
     * The name of this field.
     */
    name: 'rejected'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Friendship', 'rejected'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Friendship.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Friendship
    *
    * Replace this default advisory JSDoc with your own documentation about model Friendship
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Friendship {
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
    * import { Friendship } from 'nexus-prisma'
    *
    * objectType({
    *   name: Friendship.$name
    *   description: Friendship.$description
    *   definition(t) {
    *     t.field(Friendship.updatedAt)
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
    resolve: NexusCore.FieldResolver<'Friendship', 'updatedAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Follow`.
  *
  * ### ️⚠️ You have not writen documentation for model Follow
  *
  * Replace this default advisory JSDoc with your own documentation about model Follow
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Follow {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Follow } from 'nexus-prisma'
  *
  * objectType({
  *   name: Follow.$name
  *   description: Follow.$description
  *   definition(t) {
  *     t.field(Follow.id)
  *   }
  * })
  */
export interface Follow {
  $name: 'Follow'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Follow.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Follow
    *
    * Replace this default advisory JSDoc with your own documentation about model Follow
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Follow {
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
    * import { Follow } from 'nexus-prisma'
    *
    * objectType({
    *   name: Follow.$name
    *   description: Follow.$description
    *   definition(t) {
    *     t.field(Follow.id)
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
    resolve: NexusCore.FieldResolver<'Follow', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Follow.activities`.
    *
    * ### ️⚠️ You have not writen documentation for model Follow
    *
    * Replace this default advisory JSDoc with your own documentation about model Follow
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Follow {
    *   /// Lorem ipsum dolor sit amet.
    *   activities  UserActivity
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Follow } from 'nexus-prisma'
    *
    * objectType({
    *   name: Follow.$name
    *   description: Follow.$description
    *   definition(t) {
    *     t.field(Follow.activities)
    *   }
    * })
    */
  activities: {
    /**
     * The name of this field.
     */
    name: 'activities'
  
    /**
     * The type of this field.
     */
    type: 'UserActivity' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UserActivity'> | NexusCore.NexusNonNullDef<'UserActivity'>)
    : 'Warning/Error: The type \'UserActivity\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UserActivity\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Follow', 'activities'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Follow.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Follow
    *
    * Replace this default advisory JSDoc with your own documentation about model Follow
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Follow {
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
    * import { Follow } from 'nexus-prisma'
    *
    * objectType({
    *   name: Follow.$name
    *   description: Follow.$description
    *   definition(t) {
    *     t.field(Follow.createdAt)
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
    resolve: NexusCore.FieldResolver<'Follow', 'createdAt'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Follow.followingSkill`.
    *
    * ### ️⚠️ You have not writen documentation for model Follow
    *
    * Replace this default advisory JSDoc with your own documentation about model Follow
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Follow {
    *   /// Lorem ipsum dolor sit amet.
    *   followingSkill  FollowSkill?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Follow } from 'nexus-prisma'
    *
    * objectType({
    *   name: Follow.$name
    *   description: Follow.$description
    *   definition(t) {
    *     t.field(Follow.followingSkill)
    *   }
    * })
    */
  followingSkill: {
    /**
     * The name of this field.
     */
    name: 'followingSkill'
  
    /**
     * The type of this field.
     */
    type: 'FollowSkill' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'FollowSkill'>
    : 'Warning/Error: The type \'FollowSkill\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'FollowSkill\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Follow', 'followingSkill'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Follow.followingUser`.
    *
    * ### ️⚠️ You have not writen documentation for model Follow
    *
    * Replace this default advisory JSDoc with your own documentation about model Follow
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Follow {
    *   /// Lorem ipsum dolor sit amet.
    *   followingUser  FollowUser?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Follow } from 'nexus-prisma'
    *
    * objectType({
    *   name: Follow.$name
    *   description: Follow.$description
    *   definition(t) {
    *     t.field(Follow.followingUser)
    *   }
    * })
    */
  followingUser: {
    /**
     * The name of this field.
     */
    name: 'followingUser'
  
    /**
     * The type of this field.
     */
    type: 'FollowUser' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'FollowUser'>
    : 'Warning/Error: The type \'FollowUser\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'FollowUser\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Follow', 'followingUser'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `FollowUser`.
  *
  * ### ️⚠️ You have not writen documentation for model FollowUser
  *
  * Replace this default advisory JSDoc with your own documentation about model FollowUser
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model FollowUser {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { FollowUser } from 'nexus-prisma'
  *
  * objectType({
  *   name: FollowUser.$name
  *   description: FollowUser.$description
  *   definition(t) {
  *     t.field(FollowUser.id)
  *   }
  * })
  */
export interface FollowUser {
  $name: 'FollowUser'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.id`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
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
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.id)
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
    resolve: NexusCore.FieldResolver<'FollowUser', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.follow`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
    *   /// Lorem ipsum dolor sit amet.
    *   follow  Follow
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.follow)
    *   }
    * })
    */
  follow: {
    /**
     * The name of this field.
     */
    name: 'follow'
  
    /**
     * The type of this field.
     */
    type: 'Follow' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Follow'>
    : 'Warning/Error: The type \'Follow\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Follow\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'FollowUser', 'follow'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.followId`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
    *   /// Lorem ipsum dolor sit amet.
    *   followId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.followId)
    *   }
    * })
    */
  followId: {
    /**
     * The name of this field.
     */
    name: 'followId'
  
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
    resolve: NexusCore.FieldResolver<'FollowUser', 'followId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.follower`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
    *   /// Lorem ipsum dolor sit amet.
    *   follower  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.follower)
    *   }
    * })
    */
  follower: {
    /**
     * The name of this field.
     */
    name: 'follower'
  
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
    resolve: NexusCore.FieldResolver<'FollowUser', 'follower'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.followerId`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
    *   /// Lorem ipsum dolor sit amet.
    *   followerId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.followerId)
    *   }
    * })
    */
  followerId: {
    /**
     * The name of this field.
     */
    name: 'followerId'
  
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
    resolve: NexusCore.FieldResolver<'FollowUser', 'followerId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.following`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
    *   /// Lorem ipsum dolor sit amet.
    *   following  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.following)
    *   }
    * })
    */
  following: {
    /**
     * The name of this field.
     */
    name: 'following'
  
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
    resolve: NexusCore.FieldResolver<'FollowUser', 'following'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowUser.followingId`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowUser
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowUser
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowUser {
    *   /// Lorem ipsum dolor sit amet.
    *   followingId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowUser } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowUser.$name
    *   description: FollowUser.$description
    *   definition(t) {
    *     t.field(FollowUser.followingId)
    *   }
    * })
    */
  followingId: {
    /**
     * The name of this field.
     */
    name: 'followingId'
  
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
    resolve: NexusCore.FieldResolver<'FollowUser', 'followingId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `FollowSkill`.
  *
  * ### ️⚠️ You have not writen documentation for model FollowSkill
  *
  * Replace this default advisory JSDoc with your own documentation about model FollowSkill
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model FollowSkill {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { FollowSkill } from 'nexus-prisma'
  *
  * objectType({
  *   name: FollowSkill.$name
  *   description: FollowSkill.$description
  *   definition(t) {
  *     t.field(FollowSkill.id)
  *   }
  * })
  */
export interface FollowSkill {
  $name: 'FollowSkill'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.id`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
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
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.id)
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
    resolve: NexusCore.FieldResolver<'FollowSkill', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.follow`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
    *   /// Lorem ipsum dolor sit amet.
    *   follow  Follow
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.follow)
    *   }
    * })
    */
  follow: {
    /**
     * The name of this field.
     */
    name: 'follow'
  
    /**
     * The type of this field.
     */
    type: 'Follow' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Follow'>
    : 'Warning/Error: The type \'Follow\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Follow\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'FollowSkill', 'follow'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.followId`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
    *   /// Lorem ipsum dolor sit amet.
    *   followId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.followId)
    *   }
    * })
    */
  followId: {
    /**
     * The name of this field.
     */
    name: 'followId'
  
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
    resolve: NexusCore.FieldResolver<'FollowSkill', 'followId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.follower`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
    *   /// Lorem ipsum dolor sit amet.
    *   follower  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.follower)
    *   }
    * })
    */
  follower: {
    /**
     * The name of this field.
     */
    name: 'follower'
  
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
    resolve: NexusCore.FieldResolver<'FollowSkill', 'follower'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.followerId`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
    *   /// Lorem ipsum dolor sit amet.
    *   followerId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.followerId)
    *   }
    * })
    */
  followerId: {
    /**
     * The name of this field.
     */
    name: 'followerId'
  
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
    resolve: NexusCore.FieldResolver<'FollowSkill', 'followerId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.following`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
    *   /// Lorem ipsum dolor sit amet.
    *   following  Skill
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.following)
    *   }
    * })
    */
  following: {
    /**
     * The name of this field.
     */
    name: 'following'
  
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
    resolve: NexusCore.FieldResolver<'FollowSkill', 'following'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `FollowSkill.followingId`.
    *
    * ### ️⚠️ You have not writen documentation for model FollowSkill
    *
    * Replace this default advisory JSDoc with your own documentation about model FollowSkill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model FollowSkill {
    *   /// Lorem ipsum dolor sit amet.
    *   followingId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { FollowSkill } from 'nexus-prisma'
    *
    * objectType({
    *   name: FollowSkill.$name
    *   description: FollowSkill.$description
    *   definition(t) {
    *     t.field(FollowSkill.followingId)
    *   }
    * })
    */
  followingId: {
    /**
     * The name of this field.
     */
    name: 'followingId'
  
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
    resolve: NexusCore.FieldResolver<'FollowSkill', 'followingId'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Chat`.
  *
  * ### ️⚠️ You have not writen documentation for model Chat
  *
  * Replace this default advisory JSDoc with your own documentation about model Chat
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Chat {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Chat } from 'nexus-prisma'
  *
  * objectType({
  *   name: Chat.$name
  *   description: Chat.$description
  *   definition(t) {
  *     t.field(Chat.id)
  *   }
  * })
  */
export interface Chat {
  $name: 'Chat'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Chat.id`.
    *
    * ### ️⚠️ You have not writen documentation for model Chat
    *
    * Replace this default advisory JSDoc with your own documentation about model Chat
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Chat {
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
    * import { Chat } from 'nexus-prisma'
    *
    * objectType({
    *   name: Chat.$name
    *   description: Chat.$description
    *   definition(t) {
    *     t.field(Chat.id)
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
    resolve: NexusCore.FieldResolver<'Chat', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Chat.messages`.
    *
    * ### ️⚠️ You have not writen documentation for model Chat
    *
    * Replace this default advisory JSDoc with your own documentation about model Chat
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Chat {
    *   /// Lorem ipsum dolor sit amet.
    *   messages  ChatMessage
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Chat } from 'nexus-prisma'
    *
    * objectType({
    *   name: Chat.$name
    *   description: Chat.$description
    *   definition(t) {
    *     t.field(Chat.messages)
    *   }
    * })
    */
  messages: {
    /**
     * The name of this field.
     */
    name: 'messages'
  
    /**
     * The type of this field.
     */
    type: 'ChatMessage' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'ChatMessage'> | NexusCore.NexusNonNullDef<'ChatMessage'>)
    : 'Warning/Error: The type \'ChatMessage\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ChatMessage\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Chat', 'messages'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Chat.notifications`.
    *
    * ### ️⚠️ You have not writen documentation for model Chat
    *
    * Replace this default advisory JSDoc with your own documentation about model Chat
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Chat {
    *   /// Lorem ipsum dolor sit amet.
    *   notifications  Notification
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Chat } from 'nexus-prisma'
    *
    * objectType({
    *   name: Chat.$name
    *   description: Chat.$description
    *   definition(t) {
    *     t.field(Chat.notifications)
    *   }
    * })
    */
  notifications: {
    /**
     * The name of this field.
     */
    name: 'notifications'
  
    /**
     * The type of this field.
     */
    type: 'Notification' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Notification'> | NexusCore.NexusNonNullDef<'Notification'>)
    : 'Warning/Error: The type \'Notification\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Notification\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Chat', 'notifications'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Chat.users`.
    *
    * ### ️⚠️ You have not writen documentation for model Chat
    *
    * Replace this default advisory JSDoc with your own documentation about model Chat
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Chat {
    *   /// Lorem ipsum dolor sit amet.
    *   users  ChatsOnUsers
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Chat } from 'nexus-prisma'
    *
    * objectType({
    *   name: Chat.$name
    *   description: Chat.$description
    *   definition(t) {
    *     t.field(Chat.users)
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
    type: 'ChatsOnUsers' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'ChatsOnUsers'> | NexusCore.NexusNonNullDef<'ChatsOnUsers'>)
    : 'Warning/Error: The type \'ChatsOnUsers\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'ChatsOnUsers\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Chat', 'users'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Chat.updatedAt`.
    *
    * ### ️⚠️ You have not writen documentation for model Chat
    *
    * Replace this default advisory JSDoc with your own documentation about model Chat
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Chat {
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
    * import { Chat } from 'nexus-prisma'
    *
    * objectType({
    *   name: Chat.$name
    *   description: Chat.$description
    *   definition(t) {
    *     t.field(Chat.updatedAt)
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
    resolve: NexusCore.FieldResolver<'Chat', 'updatedAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `ChatMessage`.
  *
  * ### ️⚠️ You have not writen documentation for model ChatMessage
  *
  * Replace this default advisory JSDoc with your own documentation about model ChatMessage
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model ChatMessage {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { ChatMessage } from 'nexus-prisma'
  *
  * objectType({
  *   name: ChatMessage.$name
  *   description: ChatMessage.$description
  *   definition(t) {
  *     t.field(ChatMessage.id)
  *   }
  * })
  */
export interface ChatMessage {
  $name: 'ChatMessage'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.id`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
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
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.id)
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
    resolve: NexusCore.FieldResolver<'ChatMessage', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.chat`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
    *   /// Lorem ipsum dolor sit amet.
    *   chat  Chat
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.chat)
    *   }
    * })
    */
  chat: {
    /**
     * The name of this field.
     */
    name: 'chat'
  
    /**
     * The type of this field.
     */
    type: 'Chat' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Chat'>
    : 'Warning/Error: The type \'Chat\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Chat\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'ChatMessage', 'chat'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.chatId`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
    *   /// Lorem ipsum dolor sit amet.
    *   chatId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.chatId)
    *   }
    * })
    */
  chatId: {
    /**
     * The name of this field.
     */
    name: 'chatId'
  
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
    resolve: NexusCore.FieldResolver<'ChatMessage', 'chatId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.content`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
    *   /// Lorem ipsum dolor sit amet.
    *   content  Json
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.content)
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
    ? NexusCore.NexusNonNullDef<'Json'>
    : 'Warning/Error: The type \'Json\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Json\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'ChatMessage', 'content'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.sender`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
    *   /// Lorem ipsum dolor sit amet.
    *   sender  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.sender)
    *   }
    * })
    */
  sender: {
    /**
     * The name of this field.
     */
    name: 'sender'
  
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
    resolve: NexusCore.FieldResolver<'ChatMessage', 'sender'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.senderId`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
    *   /// Lorem ipsum dolor sit amet.
    *   senderId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.senderId)
    *   }
    * })
    */
  senderId: {
    /**
     * The name of this field.
     */
    name: 'senderId'
  
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
    resolve: NexusCore.FieldResolver<'ChatMessage', 'senderId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatMessage.createdAt`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatMessage
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatMessage
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatMessage {
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
    * import { ChatMessage } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatMessage.$name
    *   description: ChatMessage.$description
    *   definition(t) {
    *     t.field(ChatMessage.createdAt)
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
    resolve: NexusCore.FieldResolver<'ChatMessage', 'createdAt'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `ChatsOnUsers`.
  *
  * ### ️⚠️ You have not writen documentation for model ChatsOnUsers
  *
  * Replace this default advisory JSDoc with your own documentation about model ChatsOnUsers
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model ChatsOnUsers {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { ChatsOnUsers } from 'nexus-prisma'
  *
  * objectType({
  *   name: ChatsOnUsers.$name
  *   description: ChatsOnUsers.$description
  *   definition(t) {
  *     t.field(ChatsOnUsers.id)
  *   }
  * })
  */
export interface ChatsOnUsers {
  $name: 'ChatsOnUsers'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatsOnUsers.id`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatsOnUsers {
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
    * import { ChatsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatsOnUsers.$name
    *   description: ChatsOnUsers.$description
    *   definition(t) {
    *     t.field(ChatsOnUsers.id)
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
    resolve: NexusCore.FieldResolver<'ChatsOnUsers', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatsOnUsers.chat`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   chat  Chat
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatsOnUsers.$name
    *   description: ChatsOnUsers.$description
    *   definition(t) {
    *     t.field(ChatsOnUsers.chat)
    *   }
    * })
    */
  chat: {
    /**
     * The name of this field.
     */
    name: 'chat'
  
    /**
     * The type of this field.
     */
    type: 'Chat' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Chat'>
    : 'Warning/Error: The type \'Chat\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Chat\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'ChatsOnUsers', 'chat'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatsOnUsers.chatId`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatsOnUsers {
    *   /// Lorem ipsum dolor sit amet.
    *   chatId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { ChatsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatsOnUsers.$name
    *   description: ChatsOnUsers.$description
    *   definition(t) {
    *     t.field(ChatsOnUsers.chatId)
    *   }
    * })
    */
  chatId: {
    /**
     * The name of this field.
     */
    name: 'chatId'
  
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
    resolve: NexusCore.FieldResolver<'ChatsOnUsers', 'chatId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatsOnUsers.user`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatsOnUsers {
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
    * import { ChatsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatsOnUsers.$name
    *   description: ChatsOnUsers.$description
    *   definition(t) {
    *     t.field(ChatsOnUsers.user)
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
    resolve: NexusCore.FieldResolver<'ChatsOnUsers', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `ChatsOnUsers.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model ChatsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model ChatsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model ChatsOnUsers {
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
    * import { ChatsOnUsers } from 'nexus-prisma'
    *
    * objectType({
    *   name: ChatsOnUsers.$name
    *   description: ChatsOnUsers.$description
    *   definition(t) {
    *     t.field(ChatsOnUsers.userId)
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
    resolve: NexusCore.FieldResolver<'ChatsOnUsers', 'userId'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.activities`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   activities  UserActivity
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
    *     t.field(Post.activities)
    *   }
    * })
    */
  activities: {
    /**
     * The name of this field.
     */
    name: 'activities'
  
    /**
     * The type of this field.
     */
    type: 'UserActivity' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UserActivity'> | NexusCore.NexusNonNullDef<'UserActivity'>)
    : 'Warning/Error: The type \'UserActivity\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UserActivity\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'activities'>
  }
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.comments`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
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
    * import { Post } from 'nexus-prisma'
    *
    * objectType({
    *   name: Post.$name
    *   description: Post.$description
    *   definition(t) {
    *     t.field(Post.comments)
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
    resolve: NexusCore.FieldResolver<'Post', 'comments'>
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
    *   id  String
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.notifications`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   notifications  Notification
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
    *     t.field(Post.notifications)
    *   }
    * })
    */
  notifications: {
    /**
     * The name of this field.
     */
    name: 'notifications'
  
    /**
     * The type of this field.
     */
    type: 'Notification' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Notification'> | NexusCore.NexusNonNullDef<'Notification'>)
    : 'Warning/Error: The type \'Notification\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Notification\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'notifications'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.readTime`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   readTime  Int?
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
    *     t.field(Post.readTime)
    *   }
    * })
    */
  readTime: {
    /**
     * The name of this field.
     */
    name: 'readTime'
  
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
    resolve: NexusCore.FieldResolver<'Post', 'readTime'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.skills`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   skills  SkillsOnPosts
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
    *     t.field(Post.skills)
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
    type: 'SkillsOnPosts' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'SkillsOnPosts'> | NexusCore.NexusNonNullDef<'SkillsOnPosts'>)
    : 'Warning/Error: The type \'SkillsOnPosts\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'SkillsOnPosts\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Post', 'skills'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Post.upvoters`.
    *
    * ### ️⚠️ You have not writen documentation for model Post
    *
    * Replace this default advisory JSDoc with your own documentation about model Post
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Post {
    *   /// Lorem ipsum dolor sit amet.
    *   upvoters  PostUpvoter
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
    *     t.field(Post.upvoters)
    *   }
    * })
    */
  upvoters: {
    /**
     * The name of this field.
     */
    name: 'upvoters'
  
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
    resolve: NexusCore.FieldResolver<'Post', 'upvoters'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostUpvoter.id`.
    *
    * ### ️⚠️ You have not writen documentation for model PostUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostUpvoter {
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
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'id'>
  }
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
    *   postId  String
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
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `PostUpvoter.upvote`.
    *
    * ### ️⚠️ You have not writen documentation for model PostUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model PostUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model PostUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   upvote  Boolean
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
    *     t.field(PostUpvoter.upvote)
    *   }
    * })
    */
  upvote: {
    /**
     * The name of this field.
     */
    name: 'upvote'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'PostUpvoter', 'upvote'>
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
    *   postId  String
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
    *   id  String
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
    resolve: NexusCore.FieldResolver<'Comment', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.activities`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   activities  UserActivity
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
    *     t.field(Comment.activities)
    *   }
    * })
    */
  activities: {
    /**
     * The name of this field.
     */
    name: 'activities'
  
    /**
     * The type of this field.
     */
    type: 'UserActivity' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'UserActivity'> | NexusCore.NexusNonNullDef<'UserActivity'>)
    : 'Warning/Error: The type \'UserActivity\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'UserActivity\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'activities'>
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
    *   content  Json?
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.parent`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   parent  Comment?
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
    *     t.field(Comment.parent)
    *   }
    * })
    */
  parent: {
    /**
     * The name of this field.
     */
    name: 'parent'
  
    /**
     * The type of this field.
     */
    type: 'Comment' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Comment'>
    : 'Warning/Error: The type \'Comment\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Comment\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'parent'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.parentId`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   parentId  String?
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
    *     t.field(Comment.parentId)
    *   }
    * })
    */
  parentId: {
    /**
     * The name of this field.
     */
    name: 'parentId'
  
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
    resolve: NexusCore.FieldResolver<'Comment', 'parentId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.post`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   post  Post?
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
    *     t.field(Comment.post)
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
    ? NexusCore.NexusNullDef<'Post'>
    : 'Warning/Error: The type \'Post\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Post\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'post'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.postId`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   postId  String?
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
    *     t.field(Comment.postId)
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
    resolve: NexusCore.FieldResolver<'Comment', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.replies`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   replies  Comment
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
    *     t.field(Comment.replies)
    *   }
    * })
    */
  replies: {
    /**
     * The name of this field.
     */
    name: 'replies'
  
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
    resolve: NexusCore.FieldResolver<'Comment', 'replies'>
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
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Comment.upvoters`.
    *
    * ### ️⚠️ You have not writen documentation for model Comment
    *
    * Replace this default advisory JSDoc with your own documentation about model Comment
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Comment {
    *   /// Lorem ipsum dolor sit amet.
    *   upvoters  CommentUpvoter
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
    *     t.field(Comment.upvoters)
    *   }
    * })
    */
  upvoters: {
    /**
     * The name of this field.
     */
    name: 'upvoters'
  
    /**
     * The type of this field.
     */
    type: 'CommentUpvoter' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'CommentUpvoter'> | NexusCore.NexusNonNullDef<'CommentUpvoter'>)
    : 'Warning/Error: The type \'CommentUpvoter\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'CommentUpvoter\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Comment', 'upvoters'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `CommentUpvoter`.
  *
  * ### ️⚠️ You have not writen documentation for model CommentUpvoter
  *
  * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model CommentUpvoter {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { CommentUpvoter } from 'nexus-prisma'
  *
  * objectType({
  *   name: CommentUpvoter.$name
  *   description: CommentUpvoter.$description
  *   definition(t) {
  *     t.field(CommentUpvoter.id)
  *   }
  * })
  */
export interface CommentUpvoter {
  $name: 'CommentUpvoter'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CommentUpvoter.id`.
    *
    * ### ️⚠️ You have not writen documentation for model CommentUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CommentUpvoter {
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
    * import { CommentUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: CommentUpvoter.$name
    *   description: CommentUpvoter.$description
    *   definition(t) {
    *     t.field(CommentUpvoter.id)
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
    resolve: NexusCore.FieldResolver<'CommentUpvoter', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CommentUpvoter.comment`.
    *
    * ### ️⚠️ You have not writen documentation for model CommentUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CommentUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   comment  Comment
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CommentUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: CommentUpvoter.$name
    *   description: CommentUpvoter.$description
    *   definition(t) {
    *     t.field(CommentUpvoter.comment)
    *   }
    * })
    */
  comment: {
    /**
     * The name of this field.
     */
    name: 'comment'
  
    /**
     * The type of this field.
     */
    type: 'Comment' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Comment'>
    : 'Warning/Error: The type \'Comment\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Comment\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CommentUpvoter', 'comment'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CommentUpvoter.commentId`.
    *
    * ### ️⚠️ You have not writen documentation for model CommentUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CommentUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   commentId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CommentUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: CommentUpvoter.$name
    *   description: CommentUpvoter.$description
    *   definition(t) {
    *     t.field(CommentUpvoter.commentId)
    *   }
    * })
    */
  commentId: {
    /**
     * The name of this field.
     */
    name: 'commentId'
  
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
    resolve: NexusCore.FieldResolver<'CommentUpvoter', 'commentId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CommentUpvoter.upvote`.
    *
    * ### ️⚠️ You have not writen documentation for model CommentUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CommentUpvoter {
    *   /// Lorem ipsum dolor sit amet.
    *   upvote  Boolean
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { CommentUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: CommentUpvoter.$name
    *   description: CommentUpvoter.$description
    *   definition(t) {
    *     t.field(CommentUpvoter.upvote)
    *   }
    * })
    */
  upvote: {
    /**
     * The name of this field.
     */
    name: 'upvote'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Boolean'>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'CommentUpvoter', 'upvote'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CommentUpvoter.user`.
    *
    * ### ️⚠️ You have not writen documentation for model CommentUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CommentUpvoter {
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
    * import { CommentUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: CommentUpvoter.$name
    *   description: CommentUpvoter.$description
    *   definition(t) {
    *     t.field(CommentUpvoter.user)
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
    resolve: NexusCore.FieldResolver<'CommentUpvoter', 'user'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `CommentUpvoter.userId`.
    *
    * ### ️⚠️ You have not writen documentation for model CommentUpvoter
    *
    * Replace this default advisory JSDoc with your own documentation about model CommentUpvoter
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model CommentUpvoter {
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
    * import { CommentUpvoter } from 'nexus-prisma'
    *
    * objectType({
    *   name: CommentUpvoter.$name
    *   description: CommentUpvoter.$description
    *   definition(t) {
    *     t.field(CommentUpvoter.userId)
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
    resolve: NexusCore.FieldResolver<'CommentUpvoter', 'userId'>
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
    *   id  String
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.posts`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   posts  SkillsOnPosts
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
    *     t.field(Skill.posts)
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
    type: 'SkillsOnPosts' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'SkillsOnPosts'> | NexusCore.NexusNonNullDef<'SkillsOnPosts'>)
    : 'Warning/Error: The type \'SkillsOnPosts\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'SkillsOnPosts\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'posts'>
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
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Skill.followedBy`.
    *
    * ### ️⚠️ You have not writen documentation for model Skill
    *
    * Replace this default advisory JSDoc with your own documentation about model Skill
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Skill {
    *   /// Lorem ipsum dolor sit amet.
    *   followedBy  FollowSkill
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
    *     t.field(Skill.followedBy)
    *   }
    * })
    */
  followedBy: {
    /**
     * The name of this field.
     */
    name: 'followedBy'
  
    /**
     * The type of this field.
     */
    type: 'FollowSkill' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'FollowSkill'> | NexusCore.NexusNonNullDef<'FollowSkill'>)
    : 'Warning/Error: The type \'FollowSkill\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'FollowSkill\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Skill', 'followedBy'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `SkillsOnPosts`.
  *
  * ### ️⚠️ You have not writen documentation for model SkillsOnPosts
  *
  * Replace this default advisory JSDoc with your own documentation about model SkillsOnPosts
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model SkillsOnPosts {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { SkillsOnPosts } from 'nexus-prisma'
  *
  * objectType({
  *   name: SkillsOnPosts.$name
  *   description: SkillsOnPosts.$description
  *   definition(t) {
  *     t.field(SkillsOnPosts.id)
  *   }
  * })
  */
export interface SkillsOnPosts {
  $name: 'SkillsOnPosts'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnPosts.id`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnPosts
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnPosts
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnPosts {
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
    * import { SkillsOnPosts } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnPosts.$name
    *   description: SkillsOnPosts.$description
    *   definition(t) {
    *     t.field(SkillsOnPosts.id)
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
    resolve: NexusCore.FieldResolver<'SkillsOnPosts', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnPosts.post`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnPosts
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnPosts
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnPosts {
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
    * import { SkillsOnPosts } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnPosts.$name
    *   description: SkillsOnPosts.$description
    *   definition(t) {
    *     t.field(SkillsOnPosts.post)
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
    resolve: NexusCore.FieldResolver<'SkillsOnPosts', 'post'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnPosts.postId`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnPosts
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnPosts
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnPosts {
    *   /// Lorem ipsum dolor sit amet.
    *   postId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnPosts } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnPosts.$name
    *   description: SkillsOnPosts.$description
    *   definition(t) {
    *     t.field(SkillsOnPosts.postId)
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
    resolve: NexusCore.FieldResolver<'SkillsOnPosts', 'postId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnPosts.skill`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnPosts
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnPosts
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnPosts {
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
    * import { SkillsOnPosts } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnPosts.$name
    *   description: SkillsOnPosts.$description
    *   definition(t) {
    *     t.field(SkillsOnPosts.skill)
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
    resolve: NexusCore.FieldResolver<'SkillsOnPosts', 'skill'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnPosts.skillId`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnPosts
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnPosts
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnPosts {
    *   /// Lorem ipsum dolor sit amet.
    *   skillId  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { SkillsOnPosts } from 'nexus-prisma'
    *
    * objectType({
    *   name: SkillsOnPosts.$name
    *   description: SkillsOnPosts.$description
    *   definition(t) {
    *     t.field(SkillsOnPosts.skillId)
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
    resolve: NexusCore.FieldResolver<'SkillsOnPosts', 'skillId'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnUsers.id`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnUsers {
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
    resolve: NexusCore.FieldResolver<'SkillsOnUsers', 'id'>
  }
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
    *   skillId  String
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `DesiredSkillsOnUsers.id`.
    *
    * ### ️⚠️ You have not writen documentation for model DesiredSkillsOnUsers
    *
    * Replace this default advisory JSDoc with your own documentation about model DesiredSkillsOnUsers
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model DesiredSkillsOnUsers {
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
    resolve: NexusCore.FieldResolver<'DesiredSkillsOnUsers', 'id'>
  }
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
    *   skillId  String
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
    *   id  String
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Repository.owner`.
    *
    * ### ️⚠️ You have not writen documentation for model Repository
    *
    * Replace this default advisory JSDoc with your own documentation about model Repository
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Repository {
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
    * import { Repository } from 'nexus-prisma'
    *
    * objectType({
    *   name: Repository.$name
    *   description: Repository.$description
    *   definition(t) {
    *     t.field(Repository.owner)
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
    resolve: NexusCore.FieldResolver<'Repository', 'owner'>
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
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `SkillsOnRepositories.id`.
    *
    * ### ️⚠️ You have not writen documentation for model SkillsOnRepositories
    *
    * Replace this default advisory JSDoc with your own documentation about model SkillsOnRepositories
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model SkillsOnRepositories {
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
    resolve: NexusCore.FieldResolver<'SkillsOnRepositories', 'id'>
  }
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
    *   skillId  String
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
    *   repositoryId  String
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
    *   id  String
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
    *   id  String
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
  * Generated Nexus `enumType` configuration based on your Prisma schema's enum `UserActivityType`.
  *
  * ### ️⚠️ You have not writen documentation for enum UserActivityType
  *
  * Replace this default advisory JSDoc with your own documentation about enum UserActivityType
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * enum UserActivityType {
  *   CommentPost
  *   FollowSkill
  *   FollowUser
  *   FriendAcceptUser
  *   Joined
  *   PublishPost
  *   UpvotePost
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * Contains these members: CommentPost, FollowSkill, FollowUser, FriendAcceptUser, Joined, PublishPost, UpvotePost
  *
  * @example
  *
  * import { enumType } from 'nexus'
  * import { UserActivityType } from 'nexus-prisma'
  *
  * enumType(UserActivityType)
  */
export interface UserActivityType {
  name: 'UserActivityType'
  description: undefined
  members: ['CommentPost', 'FollowSkill', 'FollowUser', 'FriendAcceptUser', 'Joined', 'PublishPost', 'UpvotePost']
}

/**
  * Generated Nexus `enumType` configuration based on your Prisma schema's enum `NotificationType`.
  *
  * ### ️⚠️ You have not writen documentation for enum NotificationType
  *
  * Replace this default advisory JSDoc with your own documentation about enum NotificationType
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * enum NotificationType {
  *   ChatMessageReceived
  *   PostCommented
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * Contains these members: ChatMessageReceived, PostCommented
  *
  * @example
  *
  * import { enumType } from 'nexus'
  * import { NotificationType } from 'nexus-prisma'
  *
  * enumType(NotificationType)
  */
export interface NotificationType {
  name: 'NotificationType'
  description: undefined
  members: ['ChatMessageReceived', 'PostCommented']
}

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

export const VerificationToken: VerificationToken

export const User: User

export const UserActivity: UserActivity

export const Notification: Notification

export const Friendship: Friendship

export const Follow: Follow

export const FollowUser: FollowUser

export const FollowSkill: FollowSkill

export const Chat: Chat

export const ChatMessage: ChatMessage

export const ChatsOnUsers: ChatsOnUsers

export const Post: Post

export const PostUpvoter: PostUpvoter

export const PostImage: PostImage

export const Comment: Comment

export const CommentUpvoter: CommentUpvoter

export const Skill: Skill

export const SkillsOnPosts: SkillsOnPosts

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

export const UserActivityType: UserActivityType

export const NotificationType: NotificationType

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
