import { Button } from "@chakra-ui/react";
import { ButtonAddPostViewProps } from "./button-add-post.types";

export const ButtonAddPostView = (props: ButtonAddPostViewProps) => {
  const { isLoading } = props;
  return (
    <Button
      transition="all"
      _hover={{
        filter: "brightness(105%)",
        _active: { filter: "brightness(110%)" },
      }}
      backgroundGradient="to-br"
      gradientFrom="cyan.600"
      gradientVia="cyan.500"
      gradientTo="cyan.400"
      disabled={isLoading}
    >
      Adicionar Post
    </Button>
  );
};
