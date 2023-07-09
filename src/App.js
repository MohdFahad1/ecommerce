import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/singleproduct/:id" element={<SingleProduct />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
