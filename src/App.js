import './App.css';
import Navbar from './components/navbar'
import Footer from './components/foocter'
import Catalog from './pages/catalog';
import Home from './pages/homepage';
import About from './pages/about';
import Admin from './pages/admin';
import Contact from '/pages/contact';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
