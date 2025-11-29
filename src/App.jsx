import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeventyFiveHard from './components/projectPages/SeventyFiveHard'
import Marketplace from './components/projectPages/Marketplace'
import RecyclingApp from './components/projectPages/RecyclingApp'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/75-hard" element={<SeventyFiveHard />} />
        <Route path="/projects/marketplace" element={<Marketplace />} />
        <Route path="/projects/recycling-app" element={<RecyclingApp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App