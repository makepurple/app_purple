-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_name_key" ON "Organization"("name");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_organizationName_fkey" FOREIGN KEY ("organizationName") REFERENCES "Organization"("name") ON DELETE CASCADE ON UPDATE CASCADE;
