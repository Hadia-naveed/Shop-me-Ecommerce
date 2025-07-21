import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import TopProducts from "./components/TopProducts"

function App() {
  
  return (
    <>
    <main className="bg-white w-full dark:bg-gray-900 dark:text-white duration-200">
  <div className="max-w-screen-2xl mx-auto ">
    <Navbar />
    <Hero />
    <Products/>
    <TopProducts/>
    <Banner />
    <Testimonials />
    <Footer />
  </div>
</main>
      
    </>
  )
}

export default App
