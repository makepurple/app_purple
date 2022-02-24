-- AlterEnum
ALTER TYPE "NotificationType" ADD VALUE 'CodeExampleCommented';

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "codeExampleId" TEXT;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_codeExampleId_fkey" FOREIGN KEY ("codeExampleId") REFERENCES "CodeExample"("id") ON DELETE CASCADE ON UPDATE CASCADE;
