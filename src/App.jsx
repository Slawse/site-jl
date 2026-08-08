import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
import ServicesPage from './pages/ServicesPage'
import SolutionPage from './pages/SolutionPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="solution" element={<SolutionPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
