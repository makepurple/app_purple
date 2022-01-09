/*
  Warnings:

  - The values [CommentReply] on the enum `UserActivityType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `activityId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `activityId` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `followerId` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `followingId` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `activityId` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `activityId` on the `Post` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserActivityType_new" AS ENUM ('CommentPost', 'FollowSkill', 'FollowUser', 'FriendAcceptUser', 'Joined', 'PublishPost', 'UpvotePost');
ALTER TABLE "UserActivity" ALTER COLUMN "type" TYPE "UserActivityType_new" USING ("type"::text::"UserActivityType_new");
ALTER TYPE "UserActivityType" RENAME TO "UserActivityType_old";
ALTER TYPE "UserActivityType_new" RENAME TO "UserActivityType";
DROP TYPE "UserActivityType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followingId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_activityId_fkey";

-- DropIndex
DROP INDEX "Comment_activityId_key";

-- DropIndex
DROP INDEX "Follow_activityId_key";

-- DropIndex
DROP INDEX "Follow_followerId_followingId_key";

-- DropIndex
DROP INDEX "Friendship_activityId_key";

-- DropIndex
DROP INDEX "Post_activityId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "activityId";

-- AlterTable
ALTER TABLE "Follow" DROP COLUMN "activityId",
DROP COLUMN "followerId",
DROP COLUMN "followingId",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Friendship" DROP COLUMN "activityId";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "activityId";

-- AlterTable
ALTER TABLE "UserActivity" ADD COLUMN     "commentId" TEXT,
ADD COLUMN     "followId" TEXT,
ADD COLUMN     "friendshipId" TEXT,
ADD COLUMN     "postId" TEXT;

-- CreateTable
CREATE TABLE "FollowUser" (
    "id" TEXT NOT NULL,
    "followId" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "FollowUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowSkill" (
    "id" TEXT NOT NULL,
    "followId" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "FollowSkill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FollowUser_followId_key" ON "FollowUser"("followId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowUser_followerId_followingId_key" ON "FollowUser"("followerId", "followingId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowSkill_followId_key" ON "FollowSkill"("followId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowSkill_followerId_followingId_key" ON "FollowSkill"("followerId", "followingId");

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_followId_fkey" FOREIGN KEY ("followId") REFERENCES "Follow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_friendshipId_fkey" FOREIGN KEY ("friendshipId") REFERENCES "Friendship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUser" ADD CONSTRAINT "FollowUser_followId_fkey" FOREIGN KEY ("followId") REFERENCES "Follow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUser" ADD CONSTRAINT "FollowUser_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUser" ADD CONSTRAINT "FollowUser_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowSkill" ADD CONSTRAINT "FollowSkill_followId_fkey" FOREIGN KEY ("followId") REFERENCES "Follow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowSkill" ADD CONSTRAINT "FollowSkill_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowSkill" ADD CONSTRAINT "FollowSkill_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
