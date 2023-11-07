import esbuild from 'esbuild';

// esbuild src/index.ts --bundle  --loader:.map=text --platform=node  --sourcemap --outfile=dist/build-scripts.js
esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  sourcemap: true,
  outfile: './dist/build-scripts.js',
  loader: {
    '.map': 'text'
  }
})