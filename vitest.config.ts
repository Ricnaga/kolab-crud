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
      exclude: [
        "src/screens/**/index.ts",
        "src/infra/**/endpoints.[j|t]s",
        "src/infra/@adapters",
        "src/infra/**/index.[j|t]s",
      ],
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
          "src/infra/**/*.[j|t]s?(x)",
        ],
        exclude: [
          "**/test/*.test.[j|t]s?(x)",
          "**/index.[j|t]s?(x)",
          "**/*.{types,schema}.[j|t]s?(x)",
          "**/endpoints.[j|t]s",
          "src/infra/@adapters",
          "src/infra/**/index.[j|t]s",
        ],
        reporter: ["html", "text", "text-summary", "lcov"],
        extension: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
  })
);
