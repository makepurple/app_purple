/*
  Warnings:

  - You are about to drop the `FriendshipRejection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FriendshipRejection" DROP CONSTRAINT "FriendshipRejection_rejecterId_fkey";

-- DropForeignKey
ALTER TABLE "FriendshipRejection" DROP CONSTRAINT "FriendshipRejection_rejectingId_fkey";

-- AlterTable
ALTER TABLE "Friendship" ADD COLUMN     "rejected" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "FriendshipRejection";
