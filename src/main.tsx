import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import MainPage from './pages/mainpage.tsx'
import About from './pages/about.tsx';
import Algorithms from './pages/algorithms.tsx';
import Home from './pages/home.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="algorithms" element={<Algorithms />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
