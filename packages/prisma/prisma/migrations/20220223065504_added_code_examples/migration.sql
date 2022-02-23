/*
  Warnings:

  - Added the required column `type` to the `Follow` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FollowType" AS ENUM ('Skill', 'User');

-- CreateEnum
CREATE TYPE "CodeLanguage" AS ENUM ('JavaScript', 'TypeScript', 'HTML', 'SCSS', 'GraphQL', 'Python', 'Go', 'SQL', 'YAML');

-- AlterEnum
ALTER TYPE "UserActivityType" ADD VALUE 'CreateCodeExample';

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "codeExampleId" TEXT;

-- AlterTable
ALTER TABLE "Follow" ADD COLUMN     "type" "FollowType" NOT NULL;

-- AlterTable
ALTER TABLE "UserActivity" ADD COLUMN     "codeExampleId" TEXT;

-- CreateTable
CREATE TABLE "SkillsOnCodeExamples" (
    "id" TEXT NOT NULL,
    "codeExampleId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "SkillsOnCodeExamples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeExample" (
    "id" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "language" "CodeLanguage" NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CodeExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeExampleUpvoter" (
    "id" TEXT NOT NULL,
    "codeExampleId" TEXT NOT NULL,
    "upvote" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CodeExampleUpvoter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillsOnCodeExamples_skillId_codeExampleId_key" ON "SkillsOnCodeExamples"("skillId", "codeExampleId");

-- CreateIndex
CREATE UNIQUE INDEX "CodeExampleUpvoter_codeExampleId_userId_key" ON "CodeExampleUpvoter"("codeExampleId", "userId");

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_codeExampleId_fkey" FOREIGN KEY ("codeExampleId") REFERENCES "CodeExample"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_codeExampleId_fkey" FOREIGN KEY ("codeExampleId") REFERENCES "CodeExample"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnCodeExamples" ADD CONSTRAINT "SkillsOnCodeExamples_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnCodeExamples" ADD CONSTRAINT "SkillsOnCodeExamples_codeExampleId_fkey" FOREIGN KEY ("codeExampleId") REFERENCES "CodeExample"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeExample" ADD CONSTRAINT "CodeExample_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "User"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeExampleUpvoter" ADD CONSTRAINT "CodeExampleUpvoter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeExampleUpvoter" ADD CONSTRAINT "CodeExampleUpvoter_codeExampleId_fkey" FOREIGN KEY ("codeExampleId") REFERENCES "CodeExample"("id") ON DELETE CASCADE ON UPDATE CASCADE;
