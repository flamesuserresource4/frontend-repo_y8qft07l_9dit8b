import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0A0A0B] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_10%,rgba(20,184,166,0.12)_0%,rgba(10,10,11,0)_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-white text-2xl font-semibold">Let's collaborate</h3>
              <p className="mt-2 text-zinc-400">
                Have a project in mind or want to say hello? I'm always open to freelance opportunities and creative collaborations.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:senularohanaweera@example.com"
                  className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition"
                >
                  <Mail size={16} /> Email me
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
            <div>
              <form className="grid gap-4">
                <div>
                  <label className="block text-sm text-zinc-300">Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="button"
                  onClick={() => alert('Thanks for reaching out! This demo form does not send yet.')}
                  className="inline-flex justify-center rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-black hover:opacity-95"
                >
                  Send message
                </button>
                <p className="text-xs text-zinc-500">This is a demo form. Use the email button to contact directly.</p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Senula Rohanaweera. All rights reserved.</p>
          <p>Designed with love for playful, modern visuals.</p>
        </div>
      </div>
    </section>
  );
}
