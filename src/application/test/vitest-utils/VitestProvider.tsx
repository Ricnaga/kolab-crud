import ComposeDataProviders from "@/contexts/Compose";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { render, RenderResult } from "vitest-browser-react";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ComposeDataProviders>{children}</ComposeDataProviders>, {
    wrapper: BrowserRouter,
  });
