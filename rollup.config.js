import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts', 
  output: [
    {
      file: 'dist/index.js', 
      format: 'cjs',         
      sourcemap: true,      
    },
    {
      file: 'dist/index.mjs', 
      format: 'es',           
      sourcemap: true,        
    }
  ],
  plugins: [
    resolve(),               
    commonjs(),             
    typescript({ tsconfig: './tsconfig.json' }), 
  ],
  external: [
    '@faker-js/faker',       
  ],
};
