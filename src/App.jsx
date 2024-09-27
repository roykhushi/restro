import About from './components/About'
import Dishes from './components/Dishes'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Mission from './components/Mission'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className='overflow-y-hidden text-black antialiased'>
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Footer />
    </main>
  )
}

export default App
