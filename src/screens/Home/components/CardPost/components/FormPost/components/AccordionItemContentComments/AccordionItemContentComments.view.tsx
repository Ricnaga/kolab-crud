import {
  AccordionItemContent,
  Button,
  CardBody,
  CardDescription,
  CardRoot,
  Grid
} from "@chakra-ui/react";
import { AccordionItemContentCommentsViewProps } from "./accordion-item-content-comments.types";
import { CardSkeleton } from "./components/CardSkeleton";
import { DialogAddComment } from "./components/DialogAddComment";
import { FormComment } from "./components/FormComment";

export const AccordionItemContentCommentsView = (
  props: AccordionItemContentCommentsViewProps
) => {
  const { data, isLoading, isPostCreator, post } = props;

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
        <FormComment
          key={comment.id.toString()}
          comment={comment}
          post={post}
        />
      ))}
      {isPostCreator && (
        <CardRoot variant="subtle">
          <CardBody>
            <CardDescription>
              <DialogAddComment post={post}>
                <Button
                  w="full"
                  transition="all"
                  bg="gray.800"
                  _hover={{
                    bg: "gray.700",
                    color: "yellow.400",
                  }}
                >
                  Adicionar comentário
                </Button>
              </DialogAddComment>
            </CardDescription>
          </CardBody>
        </CardRoot>
      )}
    </AccordionItemContent>
  );
};
