import React, { lazy, Suspense } from 'react'

const Header = lazy(() => import('components/src/header/Header'))

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
  )
}

export default Home
