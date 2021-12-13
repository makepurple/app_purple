-- CreateEnum
CREATE TYPE "ExperienceType" AS ENUM ('FullTime', 'PartTime', 'Contract', 'Intern', 'OpenSource', 'Misc');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "summary" TEXT;

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "positionName" TEXT,
    "type" "ExperienceType",
    "organizationName" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "location" TEXT,
    "actions" TEXT[],

    PRIMARY KEY ("id")
);
