import { Button, CardTitle, Skeleton } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";
import { CardTitleAuthorViewProps } from "./card-title-author.types";

export const CardTitleAuthorView = (props: CardTitleAuthorViewProps) => {
  const { authorName, isLoading, handleNextPage } = props;

  if (isLoading) return <Skeleton h={7} />;

  return (
    <CardTitle display="grid" gap={2} gridTemplateColumns="repeat(2, 1fr)">
      {authorName}
      <Button
        onClick={handleNextPage}
        justifySelf="flex-end"
        borderRadius="full"
        size="xs"
        bg={{
          base: "yellow.500",
          _hover: "yellow.600",
        }}
        _active={{ filter: "brightness(105%)" }}
      >
        <FaChevronRight />
      </Button>
    </CardTitle>
  );
};
