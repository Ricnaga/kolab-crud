import queryClient from "@/infra/@adapters/react-query";
import { useCreatePostsMutation } from "@/infra/posts/react-query";
import { PostsKey } from "@/infra/posts/react-query/posts.queries";
import { PostType } from "@/shared/types/global.types";
import { useForm } from "react-hook-form";
import { addPostResolver, AddPostSchemaType } from "./dialog-add-post.schema";
import { UseDialogAddPostProps } from "./dialog-add-post.types";
import { useDisclosure } from "@chakra-ui/react";
import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useAppSelector } from "@/contexts/RTK/store";

export const useDialogAddPost = (props: UseDialogAddPostProps) => {
  const { children } = props;

  const user = useAppSelector(userValue);

  const { mutate, isPending } = useCreatePostsMutation();

  const { onToggle, open, onClose } = useDisclosure();

  const { handleSubmit, register, watch, reset } = useForm<AddPostSchemaType>({
    resolver: addPostResolver,
    values: {
      body: "",
      title: "",
    },
  });

  const isDisabled = !watch("body").length || !watch("title").length;

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = handleSubmit((data) =>
    mutate(data, {
      onSuccess: () => {
        queryClient.setQueryData(
          [PostsKey.POSTS, null],
          (queryData: { data: Array<PostType> }) => ({
            ...queryData,
            data: [
              {
                ...data,
                id: Math.random(),
                userId: user.id,
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
    handleClose
  };
};

export type UseDialogAddPostReturnType = ReturnType<typeof useDialogAddPost>;
