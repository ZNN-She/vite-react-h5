import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import pkg from '../package.json'
import './theme.css'
import './index.css'
import AtndConfigProvider from './layouts/AtndConfigProvider.tsx';
import axiosInstance from './utils/axiosInstance.ts'
import { PontCore } from './api/pontCore.ts'
import './api/index.ts';

// Pont生成的api实例，重写fetch方法
PontCore.fetch = axiosInstance;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={`/${pkg.name}`} >
      <AtndConfigProvider>
        <App />
      </AtndConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
