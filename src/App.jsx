import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
