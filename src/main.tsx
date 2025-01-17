import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./application/router/AppRouter.tsx";
import ComposeDataProviders, {
  ComposeAppProviders,
} from "./contexts/Compose.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ComposeDataProviders>
      <ComposeAppProviders>
        <AppRouter />
      </ComposeAppProviders>
    </ComposeDataProviders>
  </StrictMode>
);
