import { Heading, Skeleton } from "@chakra-ui/react";
import { HeadingAuthorViewProps } from "./heading-author.types";

export const HeadingAuthorView = (props: HeadingAuthorViewProps) => {
  const { name, isLoading } = props;

  if (isLoading) return <Skeleton h={5} w="1/2" />;

  return <Heading>Usuário: {name}</Heading>;
};
