import { CardPostProps } from "./card-post.types";
import { CardPostView } from "./CardPost.view";
import { useCardPost } from "./use-card-post.model";

export function CardPost(props: CardPostProps) {
  const methods = useCardPost(props);

  return <CardPostView {...methods} />;
}
