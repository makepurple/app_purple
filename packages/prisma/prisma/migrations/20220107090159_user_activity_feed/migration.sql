/*
  Warnings:

  - A unique constraint covering the columns `[activityId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activityId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activityId]` on the table `Friendship` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activityId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activityId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activityId` to the `Follow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activityId` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activityId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserActivityType" AS ENUM ('CommentPost', 'CommentReply', 'FollowUser', 'FriendUser', 'PublishPost', 'UpvotePost');

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "activityId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Follow" ADD COLUMN     "activityId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Friendship" ADD COLUMN     "activityId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "activityId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserActivity" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "UserActivityType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_activityId_key" ON "Comment"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_activityId_key" ON "Follow"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_activityId_key" ON "Friendship"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_activityId_key" ON "Post"("activityId");

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
