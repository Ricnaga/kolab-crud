import { useMutation } from "@tanstack/react-query";
import { deleteCommentsRequest, updateCommentsRequest } from "./comments.requests";

export const useUpdateCommentsMutation = () => {
  return useMutation({
    mutationKey: ["UPDATE_COMMENTS"],
    mutationFn: updateCommentsRequest,
  });
};

export const useRemoveCommentsMutation = () => {
  return useMutation({
    mutationKey: ["REMOVE_COMMENTS"],
    mutationFn: deleteCommentsRequest,
  });
};
