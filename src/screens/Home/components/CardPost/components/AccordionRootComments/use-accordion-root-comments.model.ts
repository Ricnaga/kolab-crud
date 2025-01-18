import { useDisclosure } from "@chakra-ui/react";
import { UseAccordionRootCommentsProps } from "./accordion-root-comments.types";

export const useAccordionRootComments = (
  props: UseAccordionRootCommentsProps
) => {
  const { open, onToggle } = useDisclosure();

  return { ...props, open, onToggle };
};

export type AccordionRootCommentsReturnType = ReturnType<
  typeof useAccordionRootComments
>;
