/*
  Warnings:

  - The `content` column on the `ChatMessage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `content` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `content` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "content",
ADD COLUMN     "content" JSONB[];

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "content",
ADD COLUMN     "content" JSONB[];

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "content" JSONB[];
