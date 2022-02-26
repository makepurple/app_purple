/*
  Warnings:

  - You are about to drop the `PrimarySkillsOnCodeExamples` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `primarySkillId` to the `CodeExample` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PrimarySkillsOnCodeExamples" DROP CONSTRAINT "PrimarySkillsOnCodeExamples_codeExampleId_fkey";

-- DropForeignKey
ALTER TABLE "PrimarySkillsOnCodeExamples" DROP CONSTRAINT "PrimarySkillsOnCodeExamples_skillId_fkey";

-- AlterTable
ALTER TABLE "CodeExample" ADD COLUMN     "primarySkillId" TEXT NOT NULL;

-- DropTable
DROP TABLE "PrimarySkillsOnCodeExamples";

-- AddForeignKey
ALTER TABLE "CodeExample" ADD CONSTRAINT "CodeExample_primarySkillId_fkey" FOREIGN KEY ("primarySkillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
