import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SeventyFiveHard from './components/projectPages/SeventyFiveHard'
import Marketplace from './components/projectPages/Marketplace'
import RecyclingApp from './components/projectPages/RecyclingApp'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/75-hard" element={<SeventyFiveHard />} />
        <Route path="/projects/marketplace" element={<Marketplace />} />
        <Route path="/projects/recycling-app" element={<RecyclingApp />} />
      </Routes>
    </>
  )
}

export default App