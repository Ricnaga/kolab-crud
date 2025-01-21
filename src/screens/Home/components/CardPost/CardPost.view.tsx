import {
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
} from "@chakra-ui/react";
import { CardSkeleton } from "./components/CardSkeleton";
import { AccordionRootComments } from "./components/AccordionRootComments";
import { AccordionItemContentComments } from "./components/AccordionItemContentComments";
import { CardPostViewProps } from "./card-post.types";
import { CardTitleAuthor } from "@components/CardTitleAuthor";

export const CardPostView = (props: CardPostViewProps) => {
  const { isLoading, data, handleNextPage } = props;

  if (isLoading)
    return Array.from({ length: 5 }).map(() => (
      <CardSkeleton key={Math.random().toString()} />
    ));

  return data.map((post) => (
    <CardRoot variant="elevated" key={post.id.toString()}>
      <CardHeader>
        <CardTitleAuthor
          userId={post.userId.toString()}
          handleNavigate={() => handleNextPage(post.userId.toString())}
        />
      </CardHeader>

      <CardBody>
        <CardDescription>{post.title}</CardDescription>
        <CardDescription mb={6}>{post.body}</CardDescription>

        <AccordionRootComments post={post}>
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
