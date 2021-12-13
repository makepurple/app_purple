/*
  Warnings:

  - Changed the type of `providerType` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "providerType",
ADD COLUMN     "providerType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "AuthProvider";
