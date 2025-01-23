import { ReactNode } from "react";
import { UseDialogAddCommentReturnType } from "./use-dialog-add-comment.model";
import { PostType } from "@/shared/types/global.types";

export type UseDialogAddCommentProps = {
  children: ReactNode;
  post: PostType;
};

export type DialogAddCommentProps = UseDialogAddCommentProps;
export type DialogAddCommentViewProps = UseDialogAddCommentReturnType;
