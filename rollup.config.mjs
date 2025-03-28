import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
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
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: false,
      modules: false,
      plugins: [tailwindcss],
    }),
  ],
  external: ["react"],
};
