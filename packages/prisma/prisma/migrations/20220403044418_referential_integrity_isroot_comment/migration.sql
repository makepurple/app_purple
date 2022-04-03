-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_chatId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_senderId_fkey";

-- DropForeignKey
ALTER TABLE "ChatsOnUsers" DROP CONSTRAINT "ChatsOnUsers_chatId_fkey";

-- DropForeignKey
ALTER TABLE "ChatsOnUsers" DROP CONSTRAINT "ChatsOnUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "CodeExample" DROP CONSTRAINT "CodeExample_authorName_fkey";

-- DropForeignKey
ALTER TABLE "CodeExample" DROP CONSTRAINT "CodeExample_primarySkillId_fkey";

-- DropForeignKey
ALTER TABLE "CodeExampleUpvoter" DROP CONSTRAINT "CodeExampleUpvoter_codeExampleId_fkey";

-- DropForeignKey
ALTER TABLE "CodeExampleUpvoter" DROP CONSTRAINT "CodeExampleUpvoter_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_codeExampleId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "CommentUpvoter" DROP CONSTRAINT "CommentUpvoter_commentId_fkey";

-- DropForeignKey
ALTER TABLE "CommentUpvoter" DROP CONSTRAINT "CommentUpvoter_userId_fkey";

-- DropForeignKey
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_skillId_fkey";

-- DropForeignKey
ALTER TABLE "DesiredSkillsOnUsers" DROP CONSTRAINT "DesiredSkillsOnUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_organizationName_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_userId_fkey";

-- DropForeignKey
ALTER TABLE "FollowSkill" DROP CONSTRAINT "FollowSkill_followId_fkey";

-- DropForeignKey
ALTER TABLE "FollowSkill" DROP CONSTRAINT "FollowSkill_followerId_fkey";

-- DropForeignKey
ALTER TABLE "FollowSkill" DROP CONSTRAINT "FollowSkill_followingId_fkey";

-- DropForeignKey
ALTER TABLE "FollowUser" DROP CONSTRAINT "FollowUser_followId_fkey";

-- DropForeignKey
ALTER TABLE "FollowUser" DROP CONSTRAINT "FollowUser_followerId_fkey";

-- DropForeignKey
ALTER TABLE "FollowUser" DROP CONSTRAINT "FollowUser_followingId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_frienderId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_friendingId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_chatId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_codeExampleId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_friendshipId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_postId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorName_fkey";

-- DropForeignKey
ALTER TABLE "PostImage" DROP CONSTRAINT "PostImage_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostUpvoter" DROP CONSTRAINT "PostUpvoter_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostUpvoter" DROP CONSTRAINT "PostUpvoter_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostViewer" DROP CONSTRAINT "PostViewer_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostViewer" DROP CONSTRAINT "PostViewer_userId_fkey";

-- DropForeignKey
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_owner_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_owner_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnCodeExamples" DROP CONSTRAINT "SkillsOnCodeExamples_codeExampleId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnCodeExamples" DROP CONSTRAINT "SkillsOnCodeExamples_skillId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnPosts" DROP CONSTRAINT "SkillsOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnPosts" DROP CONSTRAINT "SkillsOnPosts_skillId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_repositoryId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnRepositories" DROP CONSTRAINT "SkillsOnRepositories_skillId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_skillId_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnUsers" DROP CONSTRAINT "SkillsOnUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_codeExampleId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_commentId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_followId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_friendshipId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_postId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_userId_fkey";

-- DropForeignKey
ALTER TABLE "_SkillToUserActivity" DROP CONSTRAINT "_SkillToUserActivity_A_fkey";

-- DropForeignKey
ALTER TABLE "_SkillToUserActivity" DROP CONSTRAINT "_SkillToUserActivity_B_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "isRoot" BOOLEAN NOT NULL DEFAULT false;
