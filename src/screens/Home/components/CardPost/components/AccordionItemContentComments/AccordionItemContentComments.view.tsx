import {
  AccordionItemContent,
  Button,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  Grid,
} from "@chakra-ui/react";
import { AccordionItemContentCommentsViewProps } from "./accordion-item-content-comments.types";
import { CardSkeleton } from "./components/CardSkeleton";
import { CardTitleAuthor } from "@components/CardTitleAuthor";
import { DialogAddComment } from "./components/DialogAddComment";
import { DialogRemoveComment } from "./components/DialogRemoveComment";

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
        <CardRoot variant="subtle" key={Math.random().toString()} bg="gray.200">
          <CardHeader>
            <CardTitleAuthor userId={comment.id.toString()} />
          </CardHeader>
          <CardBody>
            <CardDescription>{comment.name}</CardDescription>
            <CardDescription>{comment.body}</CardDescription>
          </CardBody>

          {isPostCreator && (
            <CardFooter ml="auto">
              <DialogRemoveComment post={post} comment={comment}>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="red.400"
                  color="red.500"
                >
                  Remover
                </Button>
              </DialogRemoveComment>
              <Button
                size="sm"
                transition="all"
                bg="gray.800"
                _hover={{
                  bg: "gray.700",
                  color: "yellow.400",
                }}
              >
                Editar
              </Button>
            </CardFooter>
          )}
        </CardRoot>
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
