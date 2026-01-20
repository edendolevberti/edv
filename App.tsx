import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import ScrollProgressLine from './components/ScrollProgressLine';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Wrapper for ALL sections including Contact to share the continuous scroll line */}
        <div className="relative bg-slate-900">
          <ScrollProgressLine />
          <Services />
          <Gallery />
          <About />
          <Experience />
          <Testimonials />
          <Contact />
        </div>

      </main>
    </div>
  );
}

export default App;