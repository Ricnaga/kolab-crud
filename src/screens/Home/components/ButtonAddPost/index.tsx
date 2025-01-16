import { Button } from "@chakra-ui/react";

export function ButtonAddPost() {
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
    >
      Adicionar Post
    </Button>
  );
}
