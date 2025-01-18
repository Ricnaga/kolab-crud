import { ReactNode } from "react";
import { AccordionItemContentCommentsProps } from "../AccordionItemContentComments/accordion-item-content-comments.types";
import { AccordionRootCommentsReturnType } from "./use-accordion-root-comments.model";

export type UseAccordionRootCommentsProps = {
  value: string;
  children: (props: AccordionItemContentCommentsProps) => ReactNode;
};

export type AccordionRootCommentsProps = UseAccordionRootCommentsProps;
export type AccordionRootCommentsViewProps = AccordionRootCommentsReturnType;
