/*
  Warnings:

  - The primary key for the `SkillsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `skillId` on the `SkillsOnUsers` table. All the data in the column will be lost.
  - Added the required column `skillName` to the `SkillsOnUsers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_skillId_fkey";

-- AlterTable
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_pkey",
DROP COLUMN "skillId",
ADD COLUMN     "skillName" TEXT NOT NULL,
ADD PRIMARY KEY ("skillName", "userId");

-- AddForeignKey
ALTER TABLE "SkillsOnUsers" ADD FOREIGN KEY ("skillName") REFERENCES "Skill"("name") ON DELETE CASCADE ON UPDATE CASCADE;
