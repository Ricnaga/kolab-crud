import {
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
} from "@chakra-ui/react";
import { CardPostProps } from "./card-post.types";
import { AccordionItemContentComments } from "./components/AccordionItemContentComments";
import { AccordionRootComments } from "./components/AccordionRootComments";
import { CardSkeleton } from "./components/CardSkeleton";
import { CardTitleAuthor } from "./components/CardTitleAuthor";

export function CardPost(props: CardPostProps) {
  const { isLoading, data } = props;

  if (isLoading)
    return Array.from({ length: 5 }).map(() => (
      <CardSkeleton key={Math.random().toString()} />
    ));

  return data.map((post) => (
    <CardRoot variant="elevated" key={post.id.toString()}>
      <CardHeader>
        <CardTitleAuthor userId={post.userId.toString()} />
      </CardHeader>

      <CardBody>
        <CardDescription>{post.title}</CardDescription>
        <CardDescription mb={6}>{post.body}</CardDescription>

        <CardDescription>
          <AccordionRootComments value={post.id.toString()}>
            {(accordionItemContentCommentsProps) => (
              <AccordionItemContentComments
                {...accordionItemContentCommentsProps}
              />
            )}
          </AccordionRootComments>
        </CardDescription>
      </CardBody>
    </CardRoot>
  ));
}
