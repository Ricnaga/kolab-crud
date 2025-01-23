import { AccordionRootCommentsProps } from "./accordion-root-comments.types";
import { AccordionRootCommentsView } from "./AccordionRootComments.view";
import { useAccordionRootComments } from "./use-accordion-root-comments.model";

export function AccordionRootComments(props: AccordionRootCommentsProps) {
  const methods = useAccordionRootComments(props);

  return <AccordionRootCommentsView {...methods} />;
}
