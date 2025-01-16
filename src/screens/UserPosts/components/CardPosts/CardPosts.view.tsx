import {
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
  Grid,
} from "@chakra-ui/react";
import { CardTitleAuthor } from "@components/CardTitleAuthor";
import { CardPostsViewProps } from "./card-posts.types";
import { CardSkeleton } from "./components/CardSkeleton";

export const CardPostsView = (props: CardPostsViewProps) => {
  const { data, isLoading } = props;

  if (isLoading)
    return (
      <Grid gap={2}>
        {Array.from({ length: 5 }).map(() => (
          <CardSkeleton key={Math.random().toString()} />
        ))}
      </Grid>
    );

  return data.map((post) => (
    <CardRoot variant="elevated" key={post.id.toString()}>
      <CardHeader>
        <CardTitleAuthor userId={post.userId.toString()} />
      </CardHeader>

      <CardBody>
        <CardDescription>{post.title}</CardDescription>
        <CardDescription mb={6}>{post.body}</CardDescription>
      </CardBody>
    </CardRoot>
  ));
};
