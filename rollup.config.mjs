import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";

const commonPlugins = [
  nodeResolve({
    extensions: [".js", ".ts", ".tsx"],
    preferBuiltins: true,
  }),
  commonjs(),
  json(),
  postcss({
    extract: false,
    modules: true,
    plugins: [tailwindcss],
  }),
];

const commonExternal = ["react"];

const onwarn = (warning, warn) => {
  if (warning.code === "CIRCULAR_DEPENDENCY") return;
  warn(warning);
};

export default [
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.js", format: "cjs", sourcemap: true }],
    plugins: [
      typescript({
        declaration: true,
        declarationMap: true,
        declarationDir: "dist/types",
        rootDir: "src",
      }),
      ...commonPlugins,
    ],
    external: commonExternal,
    onwarn,
  },
  {
    input: "src/client/index.ts",
    output: [{ file: "dist/client/index.js", format: "cjs", sourcemap: true }],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    external: commonExternal,
    onwarn,
  },
  {
    input: "src/client/components/index.ts",
    output: [
      { file: "dist/client/components/index.js", format: "es", sourcemap: true },
      { file: "dist/client/components/index.cjs", format: "cjs", sourcemap: true, },
    ],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    external: commonExternal,
    onwarn,
  },
  {
    input: "src/server/index.ts",
    output: [
      { file: "dist/server/index.js", format: "es", sourcemap: true },
      { file: "dist/server/index.cjs", format: "cjs", sourcemap: true },
    ],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    onwarn,
  },
  {
    input: "src/server/libraries/binance.ts",
    output: [{ file: "dist/server/libraries/binance.js", format: "es", sourcemap: true, },
    { file: "dist/server/libraries/binance.cjs", format: "cjs", sourcemap: true, },
    ],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    onwarn,
  },
  {
    input: "src/server/libraries/bitget.ts",
    output: [
      { file: "dist/server/libraries/bitget.js", format: "es", sourcemap: true, },
      { file: "dist/server/libraries/bitget.cjs", format: "cjs", sourcemap: true, },
    ],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    onwarn,
  },
  {
    input: "src/server/libraries/bybit.ts",
    output: [
      { file: "dist/server/libraries/bybit.js", format: "es", sourcemap: true, },
      { file: "dist/server/libraries/bybit.cjs", format: "cjs", sourcemap: true, },
    ],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    onwarn,
  },
  {
    input: "src/server/libraries/mexc.ts",
    output: [
      { file: "dist/server/libraries/mexc.js", format: "es", sourcemap: true, },
      { file: "dist/server/libraries/mexc.cjs", format: "cjs", sourcemap: true, },
    ],
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false,
      }),
      ...commonPlugins,
    ],
    onwarn,
  },
];
