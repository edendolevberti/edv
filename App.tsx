import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;