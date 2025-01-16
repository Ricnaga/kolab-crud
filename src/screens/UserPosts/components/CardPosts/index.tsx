import { CardPostsView } from "./CardPosts.view";
import { useCardPosts } from "./use-card-posts";

export function CardPosts() {
  const methods = useCardPosts();

  return <CardPostsView {...methods} />;
}
