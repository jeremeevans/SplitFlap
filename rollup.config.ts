import { defineConfig } from "rollup"
import postcss from "rollup-plugin-postcss"
import url from "postcss-url"
import postcssLit from "rollup-plugin-postcss-lit"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import summary from "rollup-plugin-summary"
import { nodeResolve } from "@rollup/plugin-node-resolve"

export default defineConfig({
  input: "./src/example-element.ts",
  plugins: [
    nodeResolve(),
    typescript(),
    postcss({
      plugins: [
        url({
          url: "inline",
        }),
      ],
    }),
    postcssLit(),
    terser({
      ecma: 2017,
      module: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
  output: {
    sourcemap: true,
    dir: "dist",
    entryFileNames: "[name].bundled.js",
    format: "esm",
  },
})
