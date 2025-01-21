import queryClient from "@/infra/@adapters/react-query";
import { useCreatePostsMutation } from "@/infra/posts/react-query";
import { PostsKey } from "@/infra/posts/react-query/posts.queries";
import { PostType } from "@/shared/types/global.types";
import { useForm } from "react-hook-form";
import { addPostResolver, AddPostSchemaType } from "./dialog-add-post.schema";
import { UseDialogAddPostProps } from "./dialog-add-post.types";
import { useDisclosure } from "@chakra-ui/react";

export const useDialogAddPost = (props: UseDialogAddPostProps) => {
  const { children } = props;
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

  const onSubmit = handleSubmit((data) =>
    mutate(data, {
      onSuccess: () => {
        reset();

        queryClient.setQueryData(
          [PostsKey.POSTS, null],
          (queryData: { data: Array<PostType> }) => ({
            ...queryData,
            data: [
              {
                ...data,
                userId: Math.random(),
                id: Math.random(),
              },
              ...queryData.data,
            ],
          })
        );

        onClose();
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
  };
};

export type UseDialogAddPostReturnType = ReturnType<typeof useDialogAddPost>;
