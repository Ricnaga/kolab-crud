import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./application/router/AppRouter.tsx";
import ComposeDataProviders from "./context/Compose.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ComposeDataProviders>
      <AppRouter />
    </ComposeDataProviders>
  </StrictMode>
);
