import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useAppSelector } from "@/contexts/RTK/store";
import queryClient from "@/infra/@adapters/react-query";
import { useCreateCommentsMutation } from "@/infra/comments/react-query";
import { CommentsKey } from "@/infra/comments/react-query/comments.queries";
import { CommentType } from "@/shared/types/global.types";
import { useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  addCommentResolver,
  AddCommentSchemaType,
} from "./dialog-add-comment.schema";
import { UseDialogAddCommentProps } from "./dialog-add-comment.types";

export const useDialogAddComment = (props: UseDialogAddCommentProps) => {
  const { children, post } = props;

  const user = useAppSelector(userValue);

  const { mutate, isPending } = useCreateCommentsMutation();

  const { onToggle, open, onClose } = useDisclosure();

  const { handleSubmit, register, watch, reset } =
    useForm<AddCommentSchemaType>({
      resolver: addCommentResolver,
      values: {
        name: "",
        body: "",
      },
    });

  const isDisabled = !watch("body").length || !watch("name").length;

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = handleSubmit((data) =>
    mutate(data, {
      onSuccess: () => {
        queryClient.setQueryData(
          [CommentsKey.Comments, post.id.toString()],
          (queryData: { data: Array<CommentType> }) => ({
            ...queryData,
            data: [
              {
                ...data,
                postId: post.id,
                id: user.id,
                email: user.email,
              },
              ...queryData.data,
            ],
          })
        );

        handleClose();
      },
    })
  );

  return {
    children,
    register,
    onSubmit,
    isPending,
    isDisabled,
    open,
    onToggle,
    handleClose,
  };
};

export type UseDialogAddCommentReturnType = ReturnType<
  typeof useDialogAddComment
>;
