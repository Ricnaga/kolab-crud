import {
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
} from "@chakra-ui/react";
import { CardSkeleton } from "./components/CardSkeleton";
import { CardTitleAuthor } from "./components/CardTitleAuthor";
import { AccordionRootComments } from "./components/AccordionRootComments";
import { AccordionItemContentComments } from "./components/AccordionItemContentComments";
import { CardPostViewProps } from "./card-post.types";

export const CardPostView = (props: CardPostViewProps) => {
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

        <AccordionRootComments value={post.id.toString()}>
          {(accordionItemContentCommentsProps) => (
            <AccordionItemContentComments
              {...accordionItemContentCommentsProps}
            />
          )}
        </AccordionRootComments>
      </CardBody>
    </CardRoot>
  ));
};
