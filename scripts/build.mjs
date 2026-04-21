import * as esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { cp } from 'fs/promises'
import { existsSync } from 'fs'

const args = process.argv.slice(2)
const isProd = args[0] === '--production'

// 1. Nettoyer le dossier dist
await rimraf('dist')

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    // On garde les loaders au cas où vous feriez des imports directs
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.gif': 'file',
    '.svg': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
}

// 2. Fonction pour copier les images
async function copyImages() {
  if (existsSync('src/images')) {
    console.log('Copie des images vers dist/images...')
    await cp('src/images', 'dist/images', { recursive: true })
  } else {
    console.warn("Attention: Le dossier src/images n'existe pas.")
  }
}

// 3. Exécution
if (isProd) {
  // En production : On copie les images PUIS on build
  await copyImages()
  await esbuild.build(esbuildOpts)
} else {
  // En développement
  await copyImages() // On copie les images au démarrage
  const ctx = await esbuild.context(esbuildOpts)
  
  await ctx.watch()
  const { hosts, port } = await ctx.serve({
    servedir: 'dist', 
  })
  console.log(`Running on:`)
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`)
  })
}