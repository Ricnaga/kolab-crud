import { ReactNode } from "react";
import { UseDialogAddPostReturnType } from "./use-dialog-add-post.model";

export type UseDialogAddPostProps = {
  children?: ReactNode;
};

export type DialogAddPostProps = UseDialogAddPostProps;
export type DialogAddPostViewProps = UseDialogAddPostReturnType;
