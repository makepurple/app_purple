/*
  Warnings:

  - Made the column `positionName` on table `Experience` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startDate` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "positionName" SET NOT NULL,
ALTER COLUMN "startDate" SET NOT NULL;

-- CreateTable
CREATE TABLE "Repository" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillsOnRepositories" (
    "skillId" INTEGER NOT NULL,
    "repositoryId" INTEGER NOT NULL,

    CONSTRAINT "SkillsOnRepositories_pkey" PRIMARY KEY ("skillId")
);

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnRepositories" ADD CONSTRAINT "SkillsOnRepositories_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOnRepositories" ADD CONSTRAINT "SkillsOnRepositories_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE CASCADE ON UPDATE CASCADE;
