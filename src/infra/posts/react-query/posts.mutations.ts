import { useMutation } from "@tanstack/react-query";
import {
  createPostsRequest,
  updatePostsRequest,
  removePostsRequest,
} from "../posts.requests";

export const useCreatePostsMutation = () => {
  return useMutation({
    mutationKey: ["CREATE_POST"],
    mutationFn: createPostsRequest,
  });
};

export const useUpdatePostsMutation = () => {
  return useMutation({
    mutationKey: ["UPDATE_POST"],
    mutationFn: updatePostsRequest,
  });
};

export const useRemovePostsMutation = () => {
  return useMutation({
    mutationKey: ["REMOVE_POST"],
    mutationFn: removePostsRequest,
  });
};
