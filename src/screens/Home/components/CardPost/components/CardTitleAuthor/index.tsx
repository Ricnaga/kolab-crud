import { CardTitleAuthorProps } from "./card-title-author.types";
import { CardTitleAuthorView } from "./CardTitleAuthor.view";
import { useCardTitleAuthor } from "./use-card-title-author.model";

export function CardTitleAuthor(props: CardTitleAuthorProps) {
  const methods = useCardTitleAuthor(props);

  return <CardTitleAuthorView {...methods} />;
}
