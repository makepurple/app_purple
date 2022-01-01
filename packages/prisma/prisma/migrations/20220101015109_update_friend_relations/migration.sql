/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `FriendshipRejection` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Follow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FriendshipRejection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Follow" DROP COLUMN "createdAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Friendship" DROP COLUMN "createdAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FriendshipRejection" DROP COLUMN "createdAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
