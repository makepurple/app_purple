-- CreateTable
CREATE TABLE "PrimarySkillsOnCodeExamples" (
    "id" TEXT NOT NULL,
    "codeExampleId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "PrimarySkillsOnCodeExamples_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrimarySkillsOnCodeExamples_codeExampleId_key" ON "PrimarySkillsOnCodeExamples"("codeExampleId");

-- CreateIndex
CREATE UNIQUE INDEX "PrimarySkillsOnCodeExamples_skillId_codeExampleId_key" ON "PrimarySkillsOnCodeExamples"("skillId", "codeExampleId");

-- AddForeignKey
ALTER TABLE "PrimarySkillsOnCodeExamples" ADD CONSTRAINT "PrimarySkillsOnCodeExamples_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrimarySkillsOnCodeExamples" ADD CONSTRAINT "PrimarySkillsOnCodeExamples_codeExampleId_fkey" FOREIGN KEY ("codeExampleId") REFERENCES "CodeExample"("id") ON DELETE CASCADE ON UPDATE CASCADE;
