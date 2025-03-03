import {
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
} from "@chakra-ui/react";
import { CardTitleAuthor } from "@components/CardTitleAuthor";
import { CardPostsViewProps } from "./card-posts.types";

export const CardPostsView = (props: CardPostsViewProps) => {
  const { data } = props;

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
