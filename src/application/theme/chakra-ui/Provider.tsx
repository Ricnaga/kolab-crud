import { Box, ChakraProvider, createSystem } from "@chakra-ui/react";
import { defaultConfig } from "@chakra-ui/react/preset";
import { ReactNode } from "react";

const system = createSystem(defaultConfig, { preflight: true });

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <Box padding={{ base: 2, sm: "2", md: "6" }} background={"green.50"}>
        {children}
      </Box>
    </ChakraProvider>
  );
}
