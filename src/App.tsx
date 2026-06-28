import { Suspense } from 'react';
import './i18n';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Tools } from './components/sections/Tools';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Tools />
          <Contact />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
