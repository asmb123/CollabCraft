import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx';
import Page from './Page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode >,
)
