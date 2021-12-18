/*
  Warnings:

  - The values [GitHub] on the enum `AuthProvider` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `providerType` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuthProvider_new" AS ENUM ('github', 'linkedin');
ALTER TABLE "Account" ALTER COLUMN "providerType" TYPE "AuthProvider_new" USING ("providerType"::text::"AuthProvider_new");
ALTER TYPE "AuthProvider" RENAME TO "AuthProvider_old";
ALTER TYPE "AuthProvider_new" RENAME TO "AuthProvider";
DROP TYPE "AuthProvider_old";
COMMIT;

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "providerType",
ADD COLUMN     "providerType" "AuthProvider" NOT NULL;
