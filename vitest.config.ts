/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      css: true,
      passWithNoTests: true,
      globals: true,
      environment: "jsdom",
      include: ["src/**/test/*.test.[j|t]s?(x)"],
      exclude: ["src/screens/**/index.ts", "**/context/*.[j|t]s?(x)"],
      reporters: ["verbose"],
      mockReset: true,
      clearMocks: true,
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        headless: true,
        api: { port: 3030 },
      },
      coverage: {
        enabled: true,
        all: true,
        provider: "v8",
        include: [
          "src/screens/**/*.[j|t]s?(x)",
          "src/shared/components/**/*.[j|t]s?(x)",
        ],
        exclude: [
          "**/test/*.test.[j|t]s?(x)",
          "**/index.[j|t]s?(x)",
          "**/*.{types,schema}.[j|t]s?(x)",
          "**/context/*.[j|t]s?(x)",
        ],
        reporter: ["html", "text", "text-summary", "lcov"],
        extension: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
  })
);
