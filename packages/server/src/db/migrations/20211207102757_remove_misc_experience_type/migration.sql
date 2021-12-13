/*
  Warnings:

  - The values [Misc] on the enum `ExperienceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExperienceType_new" AS ENUM ('FullTime', 'PartTime', 'Contract', 'Intern', 'OpenSource');
ALTER TABLE "Experience" ALTER COLUMN "type" TYPE "ExperienceType_new" USING ("type"::text::"ExperienceType_new");
ALTER TYPE "ExperienceType" RENAME TO "ExperienceType_old";
ALTER TYPE "ExperienceType_new" RENAME TO "ExperienceType";
DROP TYPE "ExperienceType_old";
COMMIT;
