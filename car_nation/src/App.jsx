import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Loader from './components/Loader'
import ScrollToTop from './components/ui/ScrollToTop'
import { useEffect, useState } from 'react'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import AsideAlert from './components/AsideAlert'
import NotFound from './pages/NotFound'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <ScrollToTopButton/>
          <Navbar />
          <Aside />
          <AsideAlert />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          
        </div>)}
    </>

  )
}