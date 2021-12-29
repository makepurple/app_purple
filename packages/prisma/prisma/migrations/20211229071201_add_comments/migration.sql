/*
  Warnings:

  - The `content` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `userId` on the `Repository` table. All the data in the column will be lost.
  - The primary key for the `SkillsOnRepositories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name,owner]` on the table `Repository` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Repository` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "postId" INTEGER NOT NULL,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "readTime" INTEGER;

-- AlterTable
ALTER TABLE "Repository" DROP COLUMN "userId",
ADD COLUMN     "owner" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_pkey",
ADD CONSTRAINT "SkillsOnRepositories_pkey" PRIMARY KEY ("skillId", "repositoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_name_owner_key" ON "Repository"("name", "owner");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("name") ON DELETE CASCADE ON UPDATE CASCADE;
