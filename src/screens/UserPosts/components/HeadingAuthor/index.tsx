import { HeadingAuthorView } from "./HeadingAuthor.view";
import { useHeadingAuthor } from "./use-heading-author.model";

export function HeadingAuthor() {
  const methods = useHeadingAuthor();

  return <HeadingAuthorView {...methods} />;
}
