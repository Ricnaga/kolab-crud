import { Box } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./application/router/AppRouter.tsx";
import ComposeDataProviders from "./context/Compose.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ComposeDataProviders>
      <Box padding="1.5rem">
        <AppRouter />
      </Box>
    </ComposeDataProviders>
  </StrictMode>
);
