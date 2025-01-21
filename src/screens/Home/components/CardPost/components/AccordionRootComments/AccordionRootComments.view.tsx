import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
} from "@chakra-ui/react";
import { AccordionRootCommentsViewProps } from "./accordion-root-comments.types";

export const AccordionRootCommentsView = (
  props: AccordionRootCommentsViewProps
) => {
  const { children, post, onToggle, open } = props;

  return (
    <AccordionRoot variant="plain" collapsible>
      <AccordionItem value={post.id.toString()}>
        <AccordionItemTrigger
          cursor="pointer"
          transition="all"
          bg="yellow.200"
          _hover={{
            bg: "yellow.400",
            color: "red.500",
            fontWeight: 600,
          }}
          mb={4}
          onClick={onToggle}
          display="grid"
        >
          {open ? "Recolher" : "Ver"} comentários
        </AccordionItemTrigger>
        {children({ isEnabled: open, post })}
      </AccordionItem>
    </AccordionRoot>
  );
};
