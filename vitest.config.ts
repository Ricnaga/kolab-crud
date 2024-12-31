/// <reference types="vitest" />
/// <reference types="vite/client" />

import viteConfig from "./vite.config";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      css: true,
      passWithNoTests: true,
      globals: true,
      environment: "jsdom",
      include: [
        "src/screens/**/*.test.[j|t]s?(x)",
        "src/shared/components/**/*.test.[j|t]s?(x)",
      ],
      exclude: ["src/screens/**/index.ts"],
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
          "src/screens/**/*.test.[j|t]s?(x)",
          "src/screens/**/index.ts",
          "src/shared/components/**/*.test.[j|t]s?(x)",
        ],
        reporter: ["html", "text", "text-summary", "lcov"],
        extension: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
  })
);
