import { ReactNode } from "react";
import { AccordionItemContentCommentsProps } from "../AccordionItemContentComments/accordion-item-content-comments.types";

export type AccordionRootCommentsProps = {
  value: string;
  children: (props: AccordionItemContentCommentsProps) => ReactNode;
};
