import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults, defineConfig } from "vitest/config"
import { builtinEnvironments } from "vitest/environments"

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    watch: true,
    includeSource: ["test"],
    include: ["./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    watchExclude: [...configDefaults.watchExclude],
    globals: false,
    threads: true,
    root: "./",
    testTimeout: 1 * 60 * 1000, // 1 minutes
    passWithNoTests: false,
    environment: builtinEnvironments.node.name,
    exclude: [...configDefaults.exclude],
    coverage: {
      all: false,
      exclude: configDefaults.coverage.exclude,
      provider: "v8",
      reporter: ["text", "html-spa"],
      reportsDirectory: "./test/coverage"
    }
  }
})