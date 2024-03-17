import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults, defineConfig } from "vitest/config"
import { builtinEnvironments } from "vitest/environments"

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    watch: true,
    include: ["./test/units/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    watchExclude: [...configDefaults.watchExclude],
    globals: false,
    root: "./",
    testTimeout: 1 * 60 * 1000, // 1 minute
    passWithNoTests: false,
    environment: builtinEnvironments.node.name,
    exclude: [...configDefaults.exclude],
    coverage: {
      all: false,
      provider: "v8",
      exclude: configDefaults.coverage.exclude!,
      reporter: ["text", "html-spa"],
      reportsDirectory: "./test/coverage",
      clean: true,
    },
    clearMocks: true,
  }
})