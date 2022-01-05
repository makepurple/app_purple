/*
  Warnings:

  - The primary key for the `DesiredSkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[skillId,userId]` on the table `DesiredSkillsOnUsers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[skillId,userId]` on the table `SkillsOnUsers` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `DesiredSkillsOnUsers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `SkillsOnUsers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "DesiredSkillsOnUsers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "SkillsOnUsers_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "DesiredSkillsOnUsers_skillId_userId_key" ON "DesiredSkillsOnUsers"("skillId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "SkillsOnUsers_skillId_userId_key" ON "SkillsOnUsers"("skillId", "userId");
