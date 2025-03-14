import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // import HelmetProvider

import { ThemeProvider } from './components/context/ThemeContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider> 
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
