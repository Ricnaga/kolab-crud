import { useCommentsQuery } from "@/infra/comments/react-query";
import { UseAccordionItemContentCommentsProps } from "./accordion-item-content-comments.types";

export const useAccordionItemContentComments = (
  props: UseAccordionItemContentCommentsProps
) => {
  const { postId, isEnabled } = props;

  const { data, isLoading } = useCommentsQuery({ postId, isEnabled });

  return { data, isLoading };
};

export type UseAccordionItemContentCommentsReturnType = ReturnType<
  typeof useAccordionItemContentComments
>;
