import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/singleproduct/:id" element={<SingleProduct />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
