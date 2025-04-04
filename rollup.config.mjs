import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "AexSdk",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
  ],
  plugins: [
    resolve({ extensions: [".js", ".ts", ".tsx"] }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      extract: false,
      modules: true,
      plugins: [tailwindcss],
    }),
    json(),
  ],
  external: [
    "react",
    "fs",
    "path",
    "os",
    "crypto",
    "util",
    "stream",
    "http",
    "https",
    "url",
    "assert",
    "zlib",
    "events",
    "net",
    "tls",
    "buffer",
  ],
};
