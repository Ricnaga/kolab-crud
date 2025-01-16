import { chakra, ChakraProvider, createSystem } from "@chakra-ui/react";
import { defaultConfig } from "@chakra-ui/react/preset";
import { ReactNode } from "react";

const system = createSystem(defaultConfig, {
  preflight: true,
  globalCss: {
    body: {
      height: "100%",
      backgroundGradient: "to-t",
      gradientFrom: "yellow.400",
      gradientVia: "yellow.200",
      gradientTo: "yellow.100",
    },
  },
});

const StyledBox = chakra("div", {
  base: {
    h: "100vh",
  },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <StyledBox>{children}</StyledBox>
    </ChakraProvider>
  );
}
