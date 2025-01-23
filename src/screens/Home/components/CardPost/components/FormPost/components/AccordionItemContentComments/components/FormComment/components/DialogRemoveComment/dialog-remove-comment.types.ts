import { ReactNode } from "react";
import { UseDialogRemoveCommentReturnType } from "./use-dialog-remove-comment.model";
import { CommentType, PostType } from "@/shared/types/global.types";

export type UseDialogRemoveCommentProps = {
  children: ReactNode;
  comment: CommentType;
  post: PostType;
};

export type DialogRemoveCommentProps = UseDialogRemoveCommentProps;
export type DialogRemoveCommentViewProps = UseDialogRemoveCommentReturnType;
