import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Loginpage/Login';
import Dash from './Dashboard/Dash';
import About from './About/About';
import Contact from './Contact/Contact';
import NewArrivals from './Routes/NewArrivals';
import Bestseller from './Routes/Bestseller';
import Awardwin from './Routes/Awardwin';
import Request from './Routes/Request';
import Fiction from './Routes/Fiction';
import Nonfiction from './Routes/Nonfiction';
import CartComponent from './Cart/Components/CartComponent';

export default function HomePage() {
  return (
    <div><div>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newarrivals' element={<NewArrivals />} />
        <Route path='/bestseller' element={<Bestseller />} />
        <Route path='/awardwinning' element={<Awardwin />} />
        <Route path='/request' element={<Request />} />
        <Route path='/fiction' element={<Fiction />} />
        <Route path='nonfiction' element={<Nonfiction />} />
        <Route path='/cart' element={<CartComponent />} />
      </Routes>
    </Router>
  </div></div>
  )
}
