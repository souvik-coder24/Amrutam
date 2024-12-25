import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Category from './Components/Category/Category'
import Magic from './Components/Magic/Magicsection'
import Consult from './Components/Consult/Consult'
import Booking from './Components/Booking/Booking'
import Ayurvedic from './Components/Ayurvedic/Ayurvedic'
import Customer from './Components/Customer/Customer'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Magic />
      <Consult />
      <Booking />
      <Ayurvedic />
      <Customer />
      <Footer />
    </>
  )
}

export default App