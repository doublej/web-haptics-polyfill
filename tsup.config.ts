import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/react/index.ts',
    'src/svelte/index.ts',
    'src/vue/index.ts',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  minify: true,
  target: 'es2022',
  external: ['react', 'svelte', 'vue'],
  splitting: true,
  treeshake: true,
})
