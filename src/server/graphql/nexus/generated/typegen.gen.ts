

import { ServerContext as ctx } from "@/server/graphql/context"
import { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
import { FieldRateLimitResolver } from "@/server/graphql/nexus/plugins/rate-limit.plugin"
import { IFieldYupValidationResolver } from "@/server/graphql/nexus/plugins/yup-validation.plugin"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  AuthProvider: "GitHub"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // String!
    profileImageUrl?: string | null; // String
    profileUrl: string; // String!
    provider: NexusGenEnums['AuthProvider']; // AuthProvider!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    ok: boolean; // Boolean!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    ok: boolean; // Boolean!
    viewer: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    profileImageUrl: string | null; // String
    profileUrl: string; // String!
    provider: NexusGenEnums['AuthProvider']; // AuthProvider!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    ok: 'Boolean'
    viewer: 'User'
  }
  Query: { // field return type name
    ok: 'Boolean'
    viewer: 'User'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    profileImageUrl: 'String'
    profileUrl: 'String'
    provider: 'AuthProvider'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: false
    isTypeOf: false
    __typename: true
  }
}

export interface NexusGenTypes {
  context: ctx;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    /**
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
    /**
     * Rate limit plugin for an individual field. Uses the same directive args as `graphql-rate-limit`.
     */
    rateLimit?: FieldRateLimitResolver<TypeName, FieldName>
    /**
     * `yup` validation plugin for an individual field. Requires that an object schema definition be defined for the input args.
     */
    yupValidation?: IFieldYupValidationResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}