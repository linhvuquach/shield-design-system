import { defineConfig } from "tsup";
export default defineConfig({
    entry: ["./src/lib/**/*.ts*", "!src/lib/**/*.(stories|test).ts*"],
    bundle: true,
    clean: true,
    outDir: './dist',
    tsconfig: './tsconfig.lib.json',
    format: ["cjs", "esm"],
    external: ["react"],
    splitting: false,
    sourcemap: true,
    dts: true
});
