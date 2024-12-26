import { Box, ChakraProvider, createSystem } from "@chakra-ui/react";
import { defaultConfig } from "@chakra-ui/react/preset";
import { ReactNode } from "react";

const system = createSystem(defaultConfig, {
  preflight: true,
  globalCss: {
    body: {
      height: "100%",
    },
  },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <Box padding={{ base: 2, sm: "2", md: "6" }} background={"blue.50"} h={"100vh"}>
        {children}
      </Box>
    </ChakraProvider>
  );
}
