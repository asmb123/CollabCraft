import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx';
import Page from './Page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
          </ThemeProvider>
        } />
        <Route path='/page/:id' element={<Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)