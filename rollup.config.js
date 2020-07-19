import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
import { eslint } from 'rollup-plugin-eslint'
import typescript from 'rollup-plugin-typescript'

export default [{
  input: './src/index.ts',
  output: {
    name: 'MyLib',
    file: './dist/browser/lib.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    eslint({
      fix: true
    }),
    typescript({lib: ['es2015.promise', 'es5', 'es6', 'dom'], target: 'es5'}),
    resolve(),
    commonjs({extensions: ['.js', '.ts']}),
    minify({ comments: false }),
  ],
  watch: {
    include: 'src/**/*',
  }
}]
