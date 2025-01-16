import {
  AccordionItemContent,
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
  Grid,
} from "@chakra-ui/react";
import { AccordionItemContentCommentsViewProps } from "./accordion-item-content-comments.types";
import { CardSkeleton } from "./components/CardSkeleton";
import { CardTitleAuthor } from "./components/CardTitleAuthor";

export const AccordionItemContentCommentsView = (
  props: AccordionItemContentCommentsViewProps
) => {
  const { data, isLoading } = props;

  if (isLoading)
    return (
      <Grid gap={2}>
        {Array.from({ length: 3 }).map(() => (
          <CardSkeleton key={Math.random().toString()} />
        ))}
      </Grid>
    );

  return (
    <AccordionItemContent display="grid" gap={2}>
      {data.map((comment) => (
        <CardRoot variant="subtle" key={Math.random().toString()} bg="gray.200">
          <CardHeader>
            <CardTitleAuthor userId={comment.id.toString()} />
          </CardHeader>
          <CardBody>
            <CardDescription>{comment.name}</CardDescription>
            <CardDescription>{comment.body}</CardDescription>
          </CardBody>
        </CardRoot>
      ))}
    </AccordionItemContent>
  );
};
