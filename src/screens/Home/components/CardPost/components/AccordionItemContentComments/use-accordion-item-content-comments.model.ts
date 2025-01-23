import { useCommentsQuery } from "@/infra/comments/react-query";
import useHomeContext from "@/screens/Home/context";
import { UseAccordionItemContentCommentsProps } from "./accordion-item-content-comments.types";

export const useAccordionItemContentComments = (
  props: UseAccordionItemContentCommentsProps
) => {
  const { post, isEnabled } = props;

  const { handlePostCreator } = useHomeContext();
  const isPostCreator = handlePostCreator(post.userId);

  const { data, isLoading } = useCommentsQuery({
    postId: post.id.toString(),
    isEnabled,
  });

  return { data, isLoading, isPostCreator, post };
};

export type UseAccordionItemContentCommentsReturnType = ReturnType<
  typeof useAccordionItemContentComments
>;
