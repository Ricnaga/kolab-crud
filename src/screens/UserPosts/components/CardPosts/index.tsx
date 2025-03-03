import { CardPostsProps } from "./card-posts.types";
import { CardPostsView } from "./CardPosts.view";
import { useCardPosts } from "./use-card-posts";

export function CardPosts(props: CardPostsProps) {
  const methods = useCardPosts(props);

  return <CardPostsView {...methods} />;
}
