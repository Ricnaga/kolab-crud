import { CommentType, PostType } from "@/shared/types/global.types";
import { UseFormCommentReturnType } from "./use-form-comment.model";

export type UseFormCommentProps = {
  comment: CommentType;
  post: PostType;
};

export type FormCommentProps = UseFormCommentProps;
export type FormCommentViewProps = UseFormCommentReturnType;

export type FieldStateType = Record<"body" | "name", string>;
