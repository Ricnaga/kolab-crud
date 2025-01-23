import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useAppSelector } from "@/contexts/RTK/store";
import { useCommentsQuery } from "@/infra/comments/react-query";
import { ButtonProps, useDisclosure } from "@chakra-ui/react";
import { UseAccordionItemContentCommentsProps } from "./accordion-item-content-comments.types";

export const useAccordionItemContentComments = (
  props: UseAccordionItemContentCommentsProps
) => {
  const { post, isEnabled } = props;

  const user = useAppSelector(userValue);
  const isPostCreator = user.id === post.userId;

  const { data, isLoading } = useCommentsQuery({
    postId: post.id.toString(),
    isEnabled,
  });

  const { open, onToggle } = useDisclosure();

  const buttonProps: ButtonProps = {
    size: "sm",
    onClick: onToggle,
    transition: "all",
    ...(open
      ? {
          variant: "plain",
          borderColor: "gray.800",
          _hover: {
            borderColor: "gray.600",
            color: "yellow.600",
          },
        }
      : {
          bg: "gray.800",
          _hover: {
            bg: "gray.700",
            color: "yellow.400",
          },
        }),
  };

  return { data, isLoading, isPostCreator, post, buttonProps };
};

export type UseAccordionItemContentCommentsReturnType = ReturnType<
  typeof useAccordionItemContentComments
>;
