/*
  Warnings:

  - A unique constraint covering the columns `[authorName,title]` on the table `CodeExample` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorName,urlSlug]` on the table `CodeExample` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorName,title]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `urlSlug` to the `CodeExample` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CodeExample" ADD COLUMN     "urlSlug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CodeExample_authorName_title_key" ON "CodeExample"("authorName", "title");

-- CreateIndex
CREATE UNIQUE INDEX "CodeExample_authorName_urlSlug_key" ON "CodeExample"("authorName", "urlSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_authorName_title_key" ON "Post"("authorName", "title");
