import { PostType } from "@/shared/types/global.types";
import { UseAccordionItemContentCommentsReturnType } from "./use-accordion-item-content-comments.model";

export type UseAccordionItemContentCommentsProps = {
  isEnabled?: boolean;
  post: PostType;
};

export type AccordionItemContentCommentsProps =
  UseAccordionItemContentCommentsProps;
  
export type AccordionItemContentCommentsViewProps =
  UseAccordionItemContentCommentsReturnType;
