import { ReactNode } from "react";
import { AccordionItemContentCommentsProps } from "../AccordionItemContentComments/accordion-item-content-comments.types";
import { AccordionRootCommentsReturnType } from "./use-accordion-root-comments.model";
import { PostType } from "@/shared/types/global.types";

export type UseAccordionRootCommentsProps = {
  post: PostType;
  children: (props: AccordionItemContentCommentsProps) => ReactNode;
};

export type AccordionRootCommentsProps = UseAccordionRootCommentsProps;
export type AccordionRootCommentsViewProps = AccordionRootCommentsReturnType;
