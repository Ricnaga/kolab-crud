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
      include: [
        "src/screens/**/test/*.test.[j|t]s?(x)",
        "src/shared/components/**/test/*.test.[j|t]s?(x)",
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
          "src/screens/**/test/*.test.[j|t]s?(x)",
          "src/screens/**/index.[j|t]s?(x)",
          "src/screens/**/*.types.ts",
          "src/shared/components/**/test/*.test.[j|t]s?(x)",
          "src/shared/components/**/index.[j|t]s?(x)",
          "src/shared/components/**/*.types.[j|t]s?(x)",
        ],
        reporter: ["html", "text", "text-summary", "lcov"],
        extension: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
  })
);
