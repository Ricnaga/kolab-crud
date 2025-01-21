import { useCommentsQuery } from "@/infra/comments/react-query";
import { UseAccordionItemContentCommentsProps } from "./accordion-item-content-comments.types";
import { useAppSelector } from "@/contexts/RTK/store";
import { userValue } from "@/contexts/RTK/features/user/user.slice";

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

  return { data, isLoading, isPostCreator, post };
};

export type UseAccordionItemContentCommentsReturnType = ReturnType<
  typeof useAccordionItemContentComments
>;
