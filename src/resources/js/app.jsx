// resources/js/app.jsx or app.js
import './bootstrap'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
  resolve: (name) => {
    // ./Pages 以下の .jsx / .tsx を全部対象にする
    const pages = import.meta.glob('./Pages/**/*.{jsx,tsx}')
    const key = `./Pages/${name}.jsx`
    const keyTsx = `./Pages/${name}.tsx`
    if (pages[key]) return pages[key]()
    if (pages[keyTsx]) return pages[keyTsx]()
    console.error('[Inertia] Page not found:', name)
    throw new Error(`Inertia page not found: ${name}`)
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
