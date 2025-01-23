import { PostType } from "@/shared/types/global.types";
import { UseFormPostReturnType } from "./use-form-post.model";

export type UseFormPostProps = {
  post: PostType;
};

export type FormPostProps = UseFormPostProps;
export type FormPostViewProps = UseFormPostReturnType;

export type FieldStateType = Record<"body" | "title", string>;
