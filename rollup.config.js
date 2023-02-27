import pkg from "./package.json";
import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import serve from 'rollup-plugin-serve'

export default {
  input: "./src/main.ts",
  output: [
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true
    },
    {
      format: "es",
      file: pkg.module,
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    sourceMaps(),
    serve('dist')
  ],
  server: {

  }
};
