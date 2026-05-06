import React from 'react';
import Home from './Page/HomePage/Home';
import Footer from './Components/layout/Footer';
import WhatsApp3DButton from './Components/common/WhatsApp3DButton';
import ScrollProgress from './Components/common/scrollProgress';
const App = () => {
  return (
    <div>
      <WhatsApp3DButton />
      <Home />
      <ScrollProgress />
      <Footer />
    </div>
  );
};

export default App;