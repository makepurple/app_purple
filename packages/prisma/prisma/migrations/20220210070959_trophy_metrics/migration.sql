/*
  Warnings:

  - You are about to drop the column `rejected` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `opened` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserActivity` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `UserActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "NotificationType" ADD VALUE 'FriendshipAccepted';

-- AlterTable
ALTER TABLE "Friendship" DROP COLUMN "rejected",
ADD COLUMN     "rejectedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "opened",
ADD COLUMN     "friendshipId" TEXT;

-- AlterTable
ALTER TABLE "UserActivity" DROP COLUMN "createdAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "PostViewer" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PostViewer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillToUserActivity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PostViewer_ip_postId_key" ON "PostViewer"("ip", "postId");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToUserActivity_AB_unique" ON "_SkillToUserActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToUserActivity_B_index" ON "_SkillToUserActivity"("B");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_friendshipId_fkey" FOREIGN KEY ("friendshipId") REFERENCES "Friendship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostViewer" ADD CONSTRAINT "PostViewer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostViewer" ADD CONSTRAINT "PostViewer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_owner_fkey" FOREIGN KEY ("owner") REFERENCES "Organization"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUserActivity" ADD FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToUserActivity" ADD FOREIGN KEY ("B") REFERENCES "UserActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
