import React, {lazy, Suspense} from 'react'

const Header  = lazy(() => import('Components/src/header/Header'))

const Home = () => 
  <Suspense fallback={<div>Loading...</div>}>
    <Header />
  </Suspense>

export default Home
