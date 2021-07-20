-- CreateTable
CREATE TABLE "DesiredSkillsOnUsers" (
    "skillName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("skillName","userId")
);

-- AddForeignKey
ALTER TABLE "DesiredSkillsOnUsers" ADD FOREIGN KEY ("skillName") REFERENCES "Skill"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesiredSkillsOnUsers" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
