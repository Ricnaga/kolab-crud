import { useRemoveCommentsMutation } from "@/infra/comments/react-query";
import { useDisclosure } from "@chakra-ui/react";

import { UseDialogRemoveCommentProps } from "./dialog-remove-comment.types";
import queryClient from "@/infra/@adapters/react-query";
import { CommentsKey } from "@/infra/comments/react-query/comments.queries";
import { CommentType } from "@/shared/types/global.types";

export const useDialogRemoveComment = (props: UseDialogRemoveCommentProps) => {
  const { children, post, comment } = props;

  const { mutate, isPending } = useRemoveCommentsMutation();

  const { onToggle, open, onClose } = useDisclosure();

  const handleRemove = () => {
    mutate(post.id.toString(), {
      onSuccess: () => {
        queryClient.setQueryData(
          [CommentsKey.Comments, post.id.toString()],
          (queryData: { data: Array<CommentType> }) => ({
            ...queryData,
            data: queryData.data.filter((data) => data.id !== comment.id),
          })
        );
        onClose();
      },
    });
  };

  return {
    children,
    isPending,
    open,
    onToggle,
    handleRemove,
  };
};

export type UseDialogRemoveCommentReturnType = ReturnType<
  typeof useDialogRemoveComment
>;
