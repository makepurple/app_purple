/*
  Warnings:

  - The primary key for the `SkillsOnRepositories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[skillId,repositoryId]` on the table `SkillsOnRepositories` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `SkillsOnRepositories` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "SkillsOnRepositories_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "SkillsOnPosts" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "SkillsOnPosts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillsOnPosts_skillId_postId_key" ON "SkillsOnPosts"("skillId", "postId");

-- CreateIndex
CREATE UNIQUE INDEX "SkillsOnRepositories_skillId_repositoryId_key" ON "SkillsOnRepositories"("skillId", "repositoryId");

-- AddForeignKey
ALTER TABLE "SkillsOnPosts" ADD CONSTRAINT "SkillsOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnPosts" ADD CONSTRAINT "SkillsOnPosts_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
