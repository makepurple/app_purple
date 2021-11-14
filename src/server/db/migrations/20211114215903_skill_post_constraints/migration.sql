/*
  Warnings:

  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `DesiredSkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `skillName` on the `DesiredSkillsOnUsers` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailImageUrl` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `SkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `skillName` on the `SkillsOnUsers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorName,urlSlug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,owner]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `skillId` to the `DesiredSkillsOnUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillId` to the `SkillsOnUsers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_skillName_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_skillName_fkey";

-- DropIndex
DROP INDEX "Skill.name_unique";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_pkey",
DROP COLUMN "skillName",
ADD COLUMN     "skillId" INTEGER NOT NULL,
ADD CONSTRAINT "DesiredSkillsOnUsers_pkey" PRIMARY KEY ("skillId", "userId");

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "thumbnailImageUrl",
ADD COLUMN     "authorName" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "thumbnailUrl" TEXT,
ADD COLUMN     "urlSlug" TEXT NOT NULL DEFAULT E'draft',
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "owner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_pkey",
DROP COLUMN "skillName",
ADD COLUMN     "skillId" INTEGER NOT NULL,
ADD CONSTRAINT "SkillsOnUsers_pkey" PRIMARY KEY ("skillId", "userId");

-- CreateTable
CREATE TABLE "PostUpvoter" (
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PostUpvoter_pkey" PRIMARY KEY ("userId","postId")
);

-- CreateTable
CREATE TABLE "PostImage" (
    "id" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostImage_url_key" ON "PostImage"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Post_authorName_urlSlug_key" ON "Post"("authorName", "urlSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_owner_key" ON "Skill"("name", "owner");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "User"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostUpvoter" ADD CONSTRAINT "PostUpvoter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostUpvoter" ADD CONSTRAINT "PostUpvoter_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImage" ADD CONSTRAINT "PostImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnUsers" ADD CONSTRAINT "SkillsOnUsers_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesiredSkillsOnUsers" ADD CONSTRAINT "DesiredSkillsOnUsers_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Account.providerId_providerAccountId_unique" RENAME TO "Account_providerId_providerAccountId_key";

-- RenameIndex
ALTER INDEX "Session.accessToken_unique" RENAME TO "Session_accessToken_key";

-- RenameIndex
ALTER INDEX "Session.sessionToken_unique" RENAME TO "Session_sessionToken_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "User.name_unique" RENAME TO "User_name_key";

-- RenameIndex
ALTER INDEX "VerificationRequest.identifier_token_unique" RENAME TO "VerificationRequest_identifier_token_key";

-- RenameIndex
ALTER INDEX "VerificationRequest.token_unique" RENAME TO "VerificationRequest_token_key";
