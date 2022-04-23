import React, { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom"

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))



const App = () =>
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Suspense>


const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}




const root = createRoot(rootElement)
root.render(
  <StrictMode><App /></StrictMode>
)
