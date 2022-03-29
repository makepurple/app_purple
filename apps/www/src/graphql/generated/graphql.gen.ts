import * as Operations from './operations.gen';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useAcceptFriendshipMutation() {
  return Urql.useMutation<Operations.AcceptFriendshipMutation, Operations.AcceptFriendshipMutationVariables>(Operations.AcceptFriendshipDocument);
};

export function useAddDesiredSkillMutation() {
  return Urql.useMutation<Operations.AddDesiredSkillMutation, Operations.AddDesiredSkillMutationVariables>(Operations.AddDesiredSkillDocument);
};

export function useAddSkillMutation() {
  return Urql.useMutation<Operations.AddSkillMutation, Operations.AddSkillMutationVariables>(Operations.AddSkillDocument);
};

export function useCommentCodeExampleMutation() {
  return Urql.useMutation<Operations.CommentCodeExampleMutation, Operations.CommentCodeExampleMutationVariables>(Operations.CommentCodeExampleDocument);
};

export function useCommentPostMutation() {
  return Urql.useMutation<Operations.CommentPostMutation, Operations.CommentPostMutationVariables>(Operations.CommentPostDocument);
};

export function useCreateChatMutation() {
  return Urql.useMutation<Operations.CreateChatMutation, Operations.CreateChatMutationVariables>(Operations.CreateChatDocument);
};

export function useCreateCodeExampleMutation() {
  return Urql.useMutation<Operations.CreateCodeExampleMutation, Operations.CreateCodeExampleMutationVariables>(Operations.CreateCodeExampleDocument);
};

export function useCreateExperienceMutation() {
  return Urql.useMutation<Operations.CreateExperienceMutation, Operations.CreateExperienceMutationVariables>(Operations.CreateExperienceDocument);
};

export function useCreatePostMutation() {
  return Urql.useMutation<Operations.CreatePostMutation, Operations.CreatePostMutationVariables>(Operations.CreatePostDocument);
};

export function useCreateRepositoryMutation() {
  return Urql.useMutation<Operations.CreateRepositoryMutation, Operations.CreateRepositoryMutationVariables>(Operations.CreateRepositoryDocument);
};

export function useDeleteCodeExampleMutation() {
  return Urql.useMutation<Operations.DeleteCodeExampleMutation, Operations.DeleteCodeExampleMutationVariables>(Operations.DeleteCodeExampleDocument);
};

export function useDeleteExperienceMutation() {
  return Urql.useMutation<Operations.DeleteExperienceMutation, Operations.DeleteExperienceMutationVariables>(Operations.DeleteExperienceDocument);
};

export function useDeleteFriendshipMutation() {
  return Urql.useMutation<Operations.DeleteFriendshipMutation, Operations.DeleteFriendshipMutationVariables>(Operations.DeleteFriendshipDocument);
};

export function useDeletePostMutation() {
  return Urql.useMutation<Operations.DeletePostMutation, Operations.DeletePostMutationVariables>(Operations.DeletePostDocument);
};

export function useDeleteRepositoryMutation() {
  return Urql.useMutation<Operations.DeleteRepositoryMutation, Operations.DeleteRepositoryMutationVariables>(Operations.DeleteRepositoryDocument);
};

export function useDeleteUserMutation() {
  return Urql.useMutation<Operations.DeleteUserMutation, Operations.DeleteUserMutationVariables>(Operations.DeleteUserDocument);
};

export function useFollowSkillMutation() {
  return Urql.useMutation<Operations.FollowSkillMutation, Operations.FollowSkillMutationVariables>(Operations.FollowSkillDocument);
};

export function useFollowUserMutation() {
  return Urql.useMutation<Operations.FollowUserMutation, Operations.FollowUserMutationVariables>(Operations.FollowUserDocument);
};

export function useFriendRequestUserMutation() {
  return Urql.useMutation<Operations.FriendRequestUserMutation, Operations.FriendRequestUserMutationVariables>(Operations.FriendRequestUserDocument);
};

export function useInviteToChatMutation() {
  return Urql.useMutation<Operations.InviteToChatMutation, Operations.InviteToChatMutationVariables>(Operations.InviteToChatDocument);
};

export function useLeaveChatMutation() {
  return Urql.useMutation<Operations.LeaveChatMutation, Operations.LeaveChatMutationVariables>(Operations.LeaveChatDocument);
};

export function useOpenChatMutation() {
  return Urql.useMutation<Operations.OpenChatMutation, Operations.OpenChatMutationVariables>(Operations.OpenChatDocument);
};

export function useOpenMessagesMutation() {
  return Urql.useMutation<Operations.OpenMessagesMutation, Operations.OpenMessagesMutationVariables>(Operations.OpenMessagesDocument);
};

export function useOpenNotificationsMutation() {
  return Urql.useMutation<Operations.OpenNotificationsMutation, Operations.OpenNotificationsMutationVariables>(Operations.OpenNotificationsDocument);
};

export function usePublishPostMutation() {
  return Urql.useMutation<Operations.PublishPostMutation, Operations.PublishPostMutationVariables>(Operations.PublishPostDocument);
};

export function useRejectFriendshipMutation() {
  return Urql.useMutation<Operations.RejectFriendshipMutation, Operations.RejectFriendshipMutationVariables>(Operations.RejectFriendshipDocument);
};

export function useRemoveDesiredSkillMutation() {
  return Urql.useMutation<Operations.RemoveDesiredSkillMutation, Operations.RemoveDesiredSkillMutationVariables>(Operations.RemoveDesiredSkillDocument);
};

export function useRemovePostThumbnailMutation() {
  return Urql.useMutation<Operations.RemovePostThumbnailMutation, Operations.RemovePostThumbnailMutationVariables>(Operations.RemovePostThumbnailDocument);
};

export function useRemoveSkillMutation() {
  return Urql.useMutation<Operations.RemoveSkillMutation, Operations.RemoveSkillMutationVariables>(Operations.RemoveSkillDocument);
};

export function useSendChatMessageMutation() {
  return Urql.useMutation<Operations.SendChatMessageMutation, Operations.SendChatMessageMutationVariables>(Operations.SendChatMessageDocument);
};

export function useUnfollowSkillMutation() {
  return Urql.useMutation<Operations.UnfollowSkillMutation, Operations.UnfollowSkillMutationVariables>(Operations.UnfollowSkillDocument);
};

export function useUnfollowUserMutation() {
  return Urql.useMutation<Operations.UnfollowUserMutation, Operations.UnfollowUserMutationVariables>(Operations.UnfollowUserDocument);
};

export function useUnvoteCodeExampleMutation() {
  return Urql.useMutation<Operations.UnvoteCodeExampleMutation, Operations.UnvoteCodeExampleMutationVariables>(Operations.UnvoteCodeExampleDocument);
};

export function useUnvoteCommentMutation() {
  return Urql.useMutation<Operations.UnvoteCommentMutation, Operations.UnvoteCommentMutationVariables>(Operations.UnvoteCommentDocument);
};

export function useUnvotePostMutation() {
  return Urql.useMutation<Operations.UnvotePostMutation, Operations.UnvotePostMutationVariables>(Operations.UnvotePostDocument);
};

export function useUpdateCodeExampleMutation() {
  return Urql.useMutation<Operations.UpdateCodeExampleMutation, Operations.UpdateCodeExampleMutationVariables>(Operations.UpdateCodeExampleDocument);
};

export function useUpdateExperienceMutation() {
  return Urql.useMutation<Operations.UpdateExperienceMutation, Operations.UpdateExperienceMutationVariables>(Operations.UpdateExperienceDocument);
};

export function useUpdatePostMutation() {
  return Urql.useMutation<Operations.UpdatePostMutation, Operations.UpdatePostMutationVariables>(Operations.UpdatePostDocument);
};

export function useUpdatePostDraftMutation() {
  return Urql.useMutation<Operations.UpdatePostDraftMutation, Operations.UpdatePostDraftMutationVariables>(Operations.UpdatePostDraftDocument);
};

export function useUpdateRepositoryMutation() {
  return Urql.useMutation<Operations.UpdateRepositoryMutation, Operations.UpdateRepositoryMutationVariables>(Operations.UpdateRepositoryDocument);
};

export function useUpdateUserFromGitHubMutation() {
  return Urql.useMutation<Operations.UpdateUserFromGitHubMutation, Operations.UpdateUserFromGitHubMutationVariables>(Operations.UpdateUserFromGitHubDocument);
};

export function useUpdateUserInfoMutation() {
  return Urql.useMutation<Operations.UpdateUserInfoMutation, Operations.UpdateUserInfoMutationVariables>(Operations.UpdateUserInfoDocument);
};

export function useUploadPostImageMutation() {
  return Urql.useMutation<Operations.UploadPostImageMutation, Operations.UploadPostImageMutationVariables>(Operations.UploadPostImageDocument);
};

export function useUpvoteCodeExampleMutation() {
  return Urql.useMutation<Operations.UpvoteCodeExampleMutation, Operations.UpvoteCodeExampleMutationVariables>(Operations.UpvoteCodeExampleDocument);
};

export function useUpvoteCommentMutation() {
  return Urql.useMutation<Operations.UpvoteCommentMutation, Operations.UpvoteCommentMutationVariables>(Operations.UpvoteCommentDocument);
};

export function useUpvotePostMutation() {
  return Urql.useMutation<Operations.UpvotePostMutation, Operations.UpvotePostMutationVariables>(Operations.UpvotePostDocument);
};

export function useViewPostMutation() {
  return Urql.useMutation<Operations.ViewPostMutation, Operations.ViewPostMutationVariables>(Operations.ViewPostDocument);
};

export function useGetActivityFeedQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetActivityFeedQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetActivityFeedQuery>({ query: Operations.GetActivityFeedDocument, ...options });
};

export function useGetChatQuery(options: Omit<Urql.UseQueryArgs<Operations.GetChatQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetChatQuery>({ query: Operations.GetChatDocument, ...options });
};

export function useGetChatMessagesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetChatMessagesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetChatMessagesQuery>({ query: Operations.GetChatMessagesDocument, ...options });
};

export function useGetChatsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetChatsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetChatsQuery>({ query: Operations.GetChatsDocument, ...options });
};

export function useGetCodeExampleQuery(options: Omit<Urql.UseQueryArgs<Operations.GetCodeExampleQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetCodeExampleQuery>({ query: Operations.GetCodeExampleDocument, ...options });
};

export function useGetCodeExampleCommentsQuery(options: Omit<Urql.UseQueryArgs<Operations.GetCodeExampleCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetCodeExampleCommentsQuery>({ query: Operations.GetCodeExampleCommentsDocument, ...options });
};

export function useGetCommentRepliesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetCommentRepliesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetCommentRepliesQuery>({ query: Operations.GetCommentRepliesDocument, ...options });
};

export function useGetFollowableSkillsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetFollowableSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetFollowableSkillsQuery>({ query: Operations.GetFollowableSkillsDocument, ...options });
};

export function useGetMyUserQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetMyUserQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetMyUserQuery>({ query: Operations.GetMyUserDocument, ...options });
};

export function useGetNotificationCountsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetNotificationCountsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetNotificationCountsQuery>({ query: Operations.GetNotificationCountsDocument, ...options });
};

export function useGetNotificationsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetNotificationsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetNotificationsQuery>({ query: Operations.GetNotificationsDocument, ...options });
};

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<Operations.GetPostQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetPostQuery>({ query: Operations.GetPostDocument, ...options });
};

export function useGetPostCommentsQuery(options: Omit<Urql.UseQueryArgs<Operations.GetPostCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetPostCommentsQuery>({ query: Operations.GetPostCommentsDocument, ...options });
};

export function useGetPostDraftQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetPostDraftQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetPostDraftQuery>({ query: Operations.GetPostDraftDocument, ...options });
};

export function useGetPostsQuery(options: Omit<Urql.UseQueryArgs<Operations.GetPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetPostsQuery>({ query: Operations.GetPostsDocument, ...options });
};

export function useGetSiteWideSideDrawerQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetSiteWideSideDrawerQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSiteWideSideDrawerQuery>({ query: Operations.GetSiteWideSideDrawerDocument, ...options });
};

export function useGetSkillCodeExamplesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillCodeExamplesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillCodeExamplesQuery>({ query: Operations.GetSkillCodeExamplesDocument, ...options });
};

export function useGetSkillFollowersQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillFollowersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillFollowersQuery>({ query: Operations.GetSkillFollowersDocument, ...options });
};

export function useGetSkillInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillInfoSideBarQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillInfoSideBarQuery>({ query: Operations.GetSkillInfoSideBarDocument, ...options });
};

export function useGetSkillOwnerExperiencersQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillOwnerExperiencersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillOwnerExperiencersQuery>({ query: Operations.GetSkillOwnerExperiencersDocument, ...options });
};

export function useGetSkillOwnerInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillOwnerInfoSideBarQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillOwnerInfoSideBarQuery>({ query: Operations.GetSkillOwnerInfoSideBarDocument, ...options });
};

export function useGetSkillOwnerRepositoriesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillOwnerRepositoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillOwnerRepositoriesQuery>({ query: Operations.GetSkillOwnerRepositoriesDocument, ...options });
};

export function useGetSkillsQuery(options: Omit<Urql.UseQueryArgs<Operations.GetSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetSkillsQuery>({ query: Operations.GetSkillsDocument, ...options });
};

export function useGetUserActivitiesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserActivitiesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserActivitiesQuery>({ query: Operations.GetUserActivitiesDocument, ...options });
};

export function useGetUserCodeExamplesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserCodeExamplesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserCodeExamplesQuery>({ query: Operations.GetUserCodeExamplesDocument, ...options });
};

export function useGetUserExperiencesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserExperiencesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserExperiencesQuery>({ query: Operations.GetUserExperiencesDocument, ...options });
};

export function useGetUserFollowersQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserFollowersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserFollowersQuery>({ query: Operations.GetUserFollowersDocument, ...options });
};

export function useGetUserFollowingQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserFollowingQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserFollowingQuery>({ query: Operations.GetUserFollowingDocument, ...options });
};

export function useGetUserFriendRequestsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetUserFriendRequestsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserFriendRequestsQuery>({ query: Operations.GetUserFriendRequestsDocument, ...options });
};

export function useGetUserFriendsQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserFriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserFriendsQuery>({ query: Operations.GetUserFriendsDocument, ...options });
};

export function useGetUserInfoSideBarQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserInfoSideBarQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserInfoSideBarQuery>({ query: Operations.GetUserInfoSideBarDocument, ...options });
};

export function useGetUserOverviewQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserOverviewQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserOverviewQuery>({ query: Operations.GetUserOverviewDocument, ...options });
};

export function useGetUserRepositoriesQuery(options: Omit<Urql.UseQueryArgs<Operations.GetUserRepositoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUserRepositoriesQuery>({ query: Operations.GetUserRepositoriesDocument, ...options });
};

export function useOkQuery(options?: Omit<Urql.UseQueryArgs<Operations.OkQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.OkQuery>({ query: Operations.OkDocument, ...options });
};

export function useSuggestFriendsQuery(options: Omit<Urql.UseQueryArgs<Operations.SuggestFriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SuggestFriendsQuery>({ query: Operations.SuggestFriendsDocument, ...options });
};

export function useSuggestOrganizationsQuery(options: Omit<Urql.UseQueryArgs<Operations.SuggestOrganizationsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SuggestOrganizationsQuery>({ query: Operations.SuggestOrganizationsDocument, ...options });
};

export function useSuggestRepositoriesQuery(options: Omit<Urql.UseQueryArgs<Operations.SuggestRepositoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SuggestRepositoriesQuery>({ query: Operations.SuggestRepositoriesDocument, ...options });
};

export function useSuggestSkillOwnersQuery(options: Omit<Urql.UseQueryArgs<Operations.SuggestSkillOwnersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SuggestSkillOwnersQuery>({ query: Operations.SuggestSkillOwnersDocument, ...options });
};

export function useSuggestSkillsQuery(options: Omit<Urql.UseQueryArgs<Operations.SuggestSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SuggestSkillsQuery>({ query: Operations.SuggestSkillsDocument, ...options });
};

export function useSuggestViewerFriendsQuery(options: Omit<Urql.UseQueryArgs<Operations.SuggestViewerFriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SuggestViewerFriendsQuery>({ query: Operations.SuggestViewerFriendsDocument, ...options });
};