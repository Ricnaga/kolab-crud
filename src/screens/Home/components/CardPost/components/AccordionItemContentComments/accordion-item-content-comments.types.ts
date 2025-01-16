import { UseAccordionItemContentCommentsReturnType } from "./use-accordion-item-content-comments.model";

export type UseAccordionItemContentCommentsProps = {
  isEnabled?: boolean;
  postId: string;
};

export type AccordionItemContentCommentsProps =
  UseAccordionItemContentCommentsProps;
  
export type AccordionItemContentCommentsViewProps =
  UseAccordionItemContentCommentsReturnType;
