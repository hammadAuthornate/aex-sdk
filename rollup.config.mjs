import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";

const commonPlugins = [
  nodeResolve({ extensions: [".js", ".ts", ".tsx"] }),
  commonjs(),
  json(),
  postcss({
    extract: false,
    modules: true,
    plugins: [tailwindcss],
  }),
];

export default [
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.js", format: "cjs", sourcemap: true }],
    plugins: [
      typescript({
        declaration: true,
        declarationDir: "dist/types",
        rootDir: "src",
      }),
      ...commonPlugins,
    ],
    external: ["react"],
  },
  {
    input: "src/client/index.ts",
    output: [{ file: "dist/client/index.js", format: "cjs", sourcemap: true }],
    plugins: [typescript({ declaration: false }), ...commonPlugins],
    external: ["react"],
  },
  {
    input: "src/client/components/index.ts",
    output: [
      {
        file: "dist/client/components/index.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/client/components/index.cjs",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ declaration: false }), ...commonPlugins],
    external: ["react"],
  },
  {
    input: "src/server/index.ts",
    output: [
      { file: "dist/server/index.js", format: "es", sourcemap: true },
      { file: "dist/server/index.cjs", format: "cjs", sourcemap: true },
    ],
    plugins: [typescript({ declaration: false }), ...commonPlugins],
  },
  {
    input: "src/server/libraries/binance.ts",
    output: [
      {
        file: "dist/server/libraries/binance.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/server/libraries/binance.cjs",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ declaration: false }), ...commonPlugins],
  },
];
