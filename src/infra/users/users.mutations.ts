import { useMutation } from "@tanstack/react-query";
import { updateUserRequest } from "./users.requests";

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationKey: ["UPDATE_USER"],
    mutationFn: updateUserRequest,
  });
};
