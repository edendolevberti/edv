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
import BottomNav from './components/BottomNav';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans selection:bg-pink-500 selection:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          
          {/* Wrapper for ALL sections including Contact to share the continuous scroll line */}
          <div className="relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300 pb-20 md:pb-24">
            <ScrollProgressLine />
            <Services />
            <Gallery />
            <About />
            <Experience />
            <Testimonials />
            <Contact />
          </div>

        </main>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}

export default App;