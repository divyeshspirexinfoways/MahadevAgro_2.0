import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/HomePage/Home';
import AboutUs from './Page/AboutPage/AboutUs';
import Footer from './Components/layout/Footer';
import WhatsApp3DButton from './Components/common/WhatsApp3DButton';
import ScrollProgress from './Components/common/scrollProgress';
import ScrollToTop from './Components/common/ScrollToTop';
import Gallery from './Page/GalleryPage/Gallery';
import Header from './Components/layout/Header';
import ContactUs from './Page/ContactPage/ContactUs';
import Product from './Page/ProductPage/Product';
import ProductDetails from './Page/ProductPage/ProductDetails';

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <WhatsApp3DButton />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;