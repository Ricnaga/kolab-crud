import { CardTitle, Skeleton } from "@chakra-ui/react";
import { CardTitleAuthorViewProps } from "./card-title-author.types";

export const CardTitleAuthorView = (props: CardTitleAuthorViewProps) => {
  const { authorName, isLoading } = props;

  if (isLoading) return <Skeleton h={7} />;

  return <CardTitle>{authorName}</CardTitle>;
};
