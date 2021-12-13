/*
  Warnings:

  - You are about to drop the column `actions` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `User` table. All the data in the column will be lost.
  - Made the column `organizationName` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "actions",
ADD COLUMN     "highlights" TEXT[],
ALTER COLUMN "organizationName" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "summary",
ADD COLUMN     "description" TEXT;
