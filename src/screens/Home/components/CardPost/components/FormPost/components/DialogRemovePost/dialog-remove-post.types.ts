import { PostType } from "@/shared/types/global.types";
import { ReactNode } from "react";
import { UseDialogRemovePostReturnType } from "./use-dialog-remove-post.model";

export type UseDialogRemovePostProps = {
  children: ReactNode;
  post: PostType;
};

export type DialogRemovePostProps = UseDialogRemovePostProps;
export type DialogRemovePostViewProps = UseDialogRemovePostReturnType;
