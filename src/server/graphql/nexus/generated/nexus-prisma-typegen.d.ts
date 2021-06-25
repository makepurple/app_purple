import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Post: Prisma.Post
  Comment: Prisma.Comment
  Skill: Prisma.Skill
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'username' | 'profileUrl' | 'profileImageUrl' | 'provider' | 'posts' | 'comments' | 'skills'
      ordering: 'id' | 'email' | 'username' | 'profileUrl' | 'profileImageUrl' | 'provider'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'title' | 'content' | 'thumbnailImageUrl' | 'comments' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'title' | 'content' | 'thumbnailImageUrl' | 'createdAt' | 'updatedAt'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'post' | 'postId' | 'content' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'postId' | 'content' | 'createdAt' | 'updatedAt'
    }
    skills: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name'
    }
  },
  User: {
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'title' | 'content' | 'thumbnailImageUrl' | 'comments' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'title' | 'content' | 'thumbnailImageUrl' | 'createdAt' | 'updatedAt'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'post' | 'postId' | 'content' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'postId' | 'content' | 'createdAt' | 'updatedAt'
    }
    skills: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'users'
      ordering: 'id' | 'name'
    }
  }
  Post: {
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'post' | 'postId' | 'content' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'postId' | 'content' | 'createdAt' | 'updatedAt'
    }
  }
  Comment: {

  }
  Skill: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'username' | 'profileUrl' | 'profileImageUrl' | 'provider' | 'posts' | 'comments' | 'skills'
      ordering: 'id' | 'email' | 'username' | 'profileUrl' | 'profileImageUrl' | 'provider'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    post: 'Post'
    posts: 'Post'
    comment: 'Comment'
    comments: 'Comment'
    skill: 'Skill'
    skills: 'Skill'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
    createOneComment: 'Comment'
    updateOneComment: 'Comment'
    updateManyComment: 'AffectedRowsOutput'
    deleteOneComment: 'Comment'
    deleteManyComment: 'AffectedRowsOutput'
    upsertOneComment: 'Comment'
    createOneSkill: 'Skill'
    updateOneSkill: 'Skill'
    updateManySkill: 'AffectedRowsOutput'
    deleteOneSkill: 'Skill'
    deleteManySkill: 'AffectedRowsOutput'
    upsertOneSkill: 'Skill'
  },
  User: {
    id: 'String'
    email: 'String'
    username: 'String'
    profileUrl: 'String'
    profileImageUrl: 'String'
    provider: 'AuthProvider'
    posts: 'Post'
    comments: 'Comment'
    skills: 'Skill'
  }
  Post: {
    id: 'Int'
    author: 'User'
    authorId: 'String'
    title: 'String'
    content: 'String'
    thumbnailImageUrl: 'String'
    comments: 'Comment'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Comment: {
    id: 'Int'
    author: 'User'
    authorId: 'String'
    post: 'Post'
    postId: 'Int'
    content: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Skill: {
    id: 'Int'
    name: 'String'
    users: 'User'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Comment: Typegen.NexusPrismaFields<'Comment'>
  Skill: Typegen.NexusPrismaFields<'Skill'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  