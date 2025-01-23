import { CardPostViewProps } from "./card-post.types";
import { CardSkeleton } from "./components/CardSkeleton";
import { FormPost } from "./components/FormPost";

export const CardPostView = (props: CardPostViewProps) => {
  const { isLoading, data } = props;

  if (isLoading)
    return Array.from({ length: 5 }).map(() => (
      <CardSkeleton key={Math.random().toString()} />
    ));

  return data.map((post) => <FormPost post={post} key={post.id.toString()} />);
};
