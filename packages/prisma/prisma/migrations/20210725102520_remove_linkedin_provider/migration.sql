/*
  Warnings:

  - The values [linkedin] on the enum `AuthProvider` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuthProvider_new" AS ENUM ('github');
ALTER TABLE "Account" ALTER COLUMN "providerType" TYPE "AuthProvider_new" USING ("providerType"::text::"AuthProvider_new");
ALTER TYPE "AuthProvider" RENAME TO "AuthProvider_old";
ALTER TYPE "AuthProvider_new" RENAME TO "AuthProvider";
DROP TYPE "AuthProvider_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "users.name_unique" ON "users"("name");
