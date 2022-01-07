/*
  Warnings:

  - The values [FriendUser] on the enum `UserActivityType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserActivityType_new" AS ENUM ('CommentPost', 'CommentReply', 'FollowUser', 'FriendAcceptUser', 'Joined', 'PublishPost', 'UpvotePost');
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
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_activityId_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "activityId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Follow" ALTER COLUMN "activityId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Friendship" ALTER COLUMN "activityId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "activityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "UserActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
