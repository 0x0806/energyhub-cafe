import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/600.css';
import '@fontsource/figtree/700.css';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The built page is prerendered (see scripts/prerender.mjs); hydrate it. In dev the root is empty.
if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
