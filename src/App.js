import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import SignUpForm from './components/SignUp';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element= {<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUpForm/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
