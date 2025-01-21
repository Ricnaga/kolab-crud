import { useMutation } from "@tanstack/react-query";
import {
  createCommentsRequest,
  deleteCommentsRequest,
  updateCommentsRequest,
} from "../comments.requests";

export const useCreateCommentsMutation = () => {
  return useMutation({
    mutationKey: ["CREATE_COMMENTS"],
    mutationFn: createCommentsRequest,
  });
};

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
