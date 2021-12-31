/*
  Warnings:

  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CommentUpvoter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DesiredSkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Organization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostUpvoter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Repository` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SkillsOnRepositories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[commentId,userId]` on the table `CommentUpvoter` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,postId]` on the table `PostUpvoter` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `CommentUpvoter` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `PostUpvoter` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "CommentUpvoter" DROP CONSTRAINT "CommentUpvoter_commentId_fkey";

-- DropForeignKey
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_skillId_fkey";

-- DropForeignKey
ALTER TABLE "PostImage" DROP CONSTRAINT "PostImage_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostUpvoter" DROP CONSTRAINT "PostUpvoter_postId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_repositoryId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_skillId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_skillId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "parentId" SET DATA TYPE TEXT,
ALTER COLUMN "postId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Comment_id_seq";

-- AlterTable
ALTER TABLE "CommentUpvoter" DROP CONSTRAINT "CommentUpvoter_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "upvote" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "commentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CommentUpvoter_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_pkey",
ALTER COLUMN "skillId" SET DATA TYPE TEXT,
ADD CONSTRAINT "DesiredSkillsOnUsers_pkey" PRIMARY KEY ("skillId", "userId");

-- AlterTable
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Experience_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Experience_id_seq";

-- AlterTable
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Organization_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Organization_id_seq";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Post_id_seq";

-- AlterTable
ALTER TABLE "PostImage" ALTER COLUMN "postId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PostUpvoter" DROP CONSTRAINT "PostUpvoter_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "upvote" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "postId" SET DATA TYPE TEXT,
ADD CONSTRAINT "PostUpvoter_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Repository_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Repository_id_seq";

-- AlterTable
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Skill_id_seq";

-- AlterTable
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_pkey",
ALTER COLUMN "skillId" SET DATA TYPE TEXT,
ALTER COLUMN "repositoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SkillsOnRepositories_pkey" PRIMARY KEY ("skillId", "repositoryId");

-- AlterTable
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_pkey",
ALTER COLUMN "skillId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SkillsOnUsers_pkey" PRIMARY KEY ("skillId", "userId");

-- CreateTable
CREATE TABLE "Friendship" (
    "id" TEXT NOT NULL,
    "frienderId" TEXT NOT NULL,
    "friendingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendshipRejection" (
    "id" TEXT NOT NULL,
    "rejecterId" TEXT NOT NULL,
    "rejectingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FriendshipRejection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_frienderId_friendingId_key" ON "Friendship"("frienderId", "friendingId");

-- CreateIndex
CREATE UNIQUE INDEX "FriendshipRejection_rejecterId_rejectingId_key" ON "FriendshipRejection"("rejecterId", "rejectingId");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_followerId_followingId_key" ON "Follow"("followerId", "followingId");

-- CreateIndex
CREATE UNIQUE INDEX "CommentUpvoter_commentId_userId_key" ON "CommentUpvoter"("commentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "PostUpvoter_userId_postId_key" ON "PostUpvoter"("userId", "postId");

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_frienderId_fkey" FOREIGN KEY ("frienderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendingId_fkey" FOREIGN KEY ("friendingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendshipRejection" ADD CONSTRAINT "FriendshipRejection_rejecterId_fkey" FOREIGN KEY ("rejecterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendshipRejection" ADD CONSTRAINT "FriendshipRejection_rejectingId_fkey" FOREIGN KEY ("rejectingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostUpvoter" ADD CONSTRAINT "PostUpvoter_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImage" ADD CONSTRAINT "PostImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentUpvoter" ADD CONSTRAINT "CommentUpvoter_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnUsers" ADD CONSTRAINT "SkillsOnUsers_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesiredSkillsOnUsers" ADD CONSTRAINT "DesiredSkillsOnUsers_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnRepositories" ADD CONSTRAINT "SkillsOnRepositories_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnRepositories" ADD CONSTRAINT "SkillsOnRepositories_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE CASCADE ON UPDATE CASCADE;
