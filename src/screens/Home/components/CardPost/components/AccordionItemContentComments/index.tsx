import { useCommentsQuery } from "@/infra/comments";
import {
  AccordionItemContent,
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
  Grid,
} from "@chakra-ui/react";
import { AccordionItemContentCommentsProps } from "./accordion-item-content-comments.types";
import { CardSkeleton } from "./components/CardSkeleton";
import { CardTitleAuthor } from "./components/CardTitleAuthor";

export function AccordionItemContentComments(
  props: AccordionItemContentCommentsProps
) {
  const { isEnabled, postId } = props;

  const { data, isLoading } = useCommentsQuery({ postId, isEnabled });

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
        <CardRoot variant="subtle" key={Math.random().toString()}>
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
}
