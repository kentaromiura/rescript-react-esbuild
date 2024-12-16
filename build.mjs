import fs from 'fs';
// not needed but just to be sure.
if (fs.existsSync('out.css')) fs.rmSync('out.css');
const prod = process.env.NODE_ENV === 'production';
import babel from 'esbuild-plugin-babel';
import esbuild from 'esbuild';
esbuild
  .build({
    bundle: true,
    entryPoints: ['src/Main.res.mjs'],    
    minify: prod,
    outfile: 'out.js',
    plugins: [
        babel(),
    ],
  })
  .catch(() => process.exit(1));
