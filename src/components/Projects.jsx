import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nights Poster Series',
    description: 'A bold poster collection exploring neon color systems and kinetic type for a modern music festival.',
    tags: ['Poster', 'Kinetic Type', 'Color'],
    image: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwTmlnaHRzJTIwUG9zdGVyJTIwU2VyaWVzfGVufDB8MHx8fDE3NjIyMzM4NzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Astra Brand Identity',
    description: 'A futuristic brand system built around geometric modules and a playful 3D mascot.',
    tags: ['Branding', '3D', 'Logo'],
    image: 'https://images.unsplash.com/photo-1571508209393-279ee9a6e762?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBc3RyYSUyMEJyYW5kJTIwSWRlbnRpdHl8ZW58MHwwfHx8MTc2MjIzMzg3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Interactive Portfolio Microsite',
    description: 'An interactive web experience that blends motion, depth, and editorial layouts.',
    tags: ['Web', 'Motion', 'UI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative bg-[#0A0A0B] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_80%_0%,rgba(236,72,153,0.12)_0%,rgba(10,10,11,0)_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Work</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">A snapshot of recent projects that combine type, color, and playful 3D elements.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] hover:from-white/10 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <ExternalLink size={18} className="text-zinc-400 group-hover:text-white transition" />
                </div>
                <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
