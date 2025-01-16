import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { AccordionRootCommentsProps } from "./accordion-root-comments.types";

export function AccordionRootComments(props: AccordionRootCommentsProps) {
  const { value, children } = props;

  const { open, onToggle } = useDisclosure();

  return (
    <AccordionRoot variant="plain" collapsible>
      <AccordionItem value={value}>
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
        {children({ isEnabled: open, postId: value })}
      </AccordionItem>
    </AccordionRoot>
  );
}
