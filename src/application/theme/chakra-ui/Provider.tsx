import { Box, ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <Box padding={{ base: 2, sm: "2", md: "6" }}>{children}</Box>
    </ChakraProvider>
  );
}
