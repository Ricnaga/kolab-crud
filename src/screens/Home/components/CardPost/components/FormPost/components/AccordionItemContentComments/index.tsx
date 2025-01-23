import { AccordionItemContentCommentsProps } from "./accordion-item-content-comments.types";
import { AccordionItemContentCommentsView } from "./AccordionItemContentComments.view";
import { useAccordionItemContentComments } from "./use-accordion-item-content-comments.model";

export function AccordionItemContentComments(
  props: AccordionItemContentCommentsProps
) {
  const methods = useAccordionItemContentComments(props);

  return <AccordionItemContentCommentsView {...methods} />;
}
