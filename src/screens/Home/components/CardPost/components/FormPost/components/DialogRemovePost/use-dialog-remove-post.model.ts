import { useDisclosure } from "@chakra-ui/react";

import queryClient from "@/infra/@adapters/react-query";
import { useRemovePostsMutation } from "@/infra/posts/react-query";
import { PostsKey } from "@/infra/posts/react-query/posts.queries";
import { PostType } from "@/shared/types/global.types";
import { UseDialogRemovePostProps } from "./dialog-remove-post.types";

export const useDialogRemovePost = (props: UseDialogRemovePostProps) => {
  const { children, post } = props;

  const { mutate, isPending } = useRemovePostsMutation();

  const { onToggle, open, onClose } = useDisclosure();

  const handleRemove = () => {
    mutate(post.id.toString(), {
      onSuccess: () => {
        queryClient.setQueryData(
          [PostsKey.POSTS, null],
          (queryData: { data: Array<PostType> }) => ({
            ...queryData,
            data: queryData.data.filter((data) => data.id !== post.id),
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

export type UseDialogRemovePostReturnType = ReturnType<
  typeof useDialogRemovePost
>;
