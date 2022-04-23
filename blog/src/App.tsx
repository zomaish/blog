import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

export const App = () =>
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </Suspense>
