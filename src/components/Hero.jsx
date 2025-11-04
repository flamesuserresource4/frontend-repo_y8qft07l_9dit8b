import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative h-[88vh] w-full overflow-hidden bg-[#0A0A0B]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.25)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Hi, I'm Senula Rohanaweera
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300">Graphic Designer & Visual Storyteller</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl">
            I craft immersive brand identities, posters, and digital experiences. I love blending playful 3D with bold typography and clean layouts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="/Senula-Rohanaweera-Portfolio.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
            >
              Download portfolio <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
