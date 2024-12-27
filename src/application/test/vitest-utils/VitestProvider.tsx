import ComposeDataProviders from "@/context/Compose";
import { ReactNode } from "react";
import { render, RenderResult } from "vitest-browser-react";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ComposeDataProviders>{children}</ComposeDataProviders>);
