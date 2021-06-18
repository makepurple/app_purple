-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('GitHub');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileUrl" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "provider" "AuthProvider" NOT NULL DEFAULT E'GitHub',
ADD COLUMN     "username" TEXT NOT NULL DEFAULT E'';
