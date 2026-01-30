import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Investigacion from './components/Investigacion';
import Articulos from './components/Articulos';
import Prensa from './components/Prensa';
import Novedades from './components/Novedades';
import Contact from './components/Contact';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Blog />
        <Investigacion />
        <Articulos />
        <Prensa />
        <Novedades />
        <Contact />
      </main>
      <WhatsAppBtn />
    </div>
  );
}

export default App;
