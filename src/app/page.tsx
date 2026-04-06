import { SidebarCard } from "@/components/SidebarCard"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-2 lg:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
      <div className="lg:col-span-4">
        <SidebarCard />
      </div>
      
      <div className="lg:col-span-8 flex flex-col gap-14 lg:gap-16">
        {/* Header Section */}
        <section id="home" className="flex flex-col scroll-mt-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-8 text-center lg:text-left transition-colors duration-300">
            <span className="text-zinc-900 dark:text-white block transition-colors duration-300">Software</span>
            <span className="text-zinc-500 dark:text-zinc-800 block transition-colors duration-300">Engineer</span>
          </h1>
          <div className="text-zinc-600 dark:text-zinc-400 text-lg max-w-4xl mb-16 leading-relaxed space-y-5 transition-colors duration-300">
            <p>
              I build software products and systems that scale. My work sits at the intersection of engineering, product thinking, and performance, focused on building fast, efficient, and user-centric platforms.
            </p>
            <p>
              I work across the full stack, using technologies like React, TypeScript, Tailwind CSS, and Vite on the frontend, while designing scalable backend systems and APIs. I focus on clean architecture, modular components, and building systems that perform reliably under real-world usage.
            </p>
            <p>
              Currently, I&apos;m building products like BookMyFarmhouse and functionhall.app, developing high-performance interfaces, optimizing for SEO, and implementing end-to-end systems that handle real users and real data at scale. I&apos;m focused on building scalable architectures, efficient data handling, and continuously improving how products are built and shipped.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-24">
            <span className="text-xl md:text-2xl font-medium flex items-center gap-4 text-zinc-900 dark:text-white transition-colors duration-300">
              Open to work <span className="text-zinc-500 dark:text-zinc-400 transition-colors duration-300">—</span>
            </span>
            <div className="flex flex-wrap gap-3">
              <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-6 py-2.5 rounded-2xl font-medium transition-colors">
                Resume
              </button>
              <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-6 py-2.5 rounded-2xl font-medium transition-colors">
                Contact
              </button>
              <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-6 py-2.5 rounded-2xl font-medium transition-colors">
                Schedule a meet
              </button>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="flex flex-col scroll-mt-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center lg:text-left">
            <span className="text-zinc-900 dark:text-white transition-colors duration-300">Tools I</span>{" "}
            <span className="text-zinc-500 dark:text-zinc-800 transition-colors duration-300">Use</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Framer", "Git"].map((tool, i) => (
              <span key={i} className="px-6 py-3 border border-zinc-300/70 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/30 transition-colors duration-300 text-sm md:text-base cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="flex flex-col scroll-mt-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center lg:text-left">
            <span className="text-zinc-900 dark:text-white block transition-colors duration-300">Work</span>
            <span className="text-zinc-500 dark:text-zinc-800 block transition-colors duration-300">Experience</span>
          </h2>
          
          <div className="flex flex-col gap-12">
            {[
              {
                company: "PixelForge Studios",
                desc: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
                date: "Jan 2020 - Present"
              },
              {
                company: "BlueWave Innovators",
                desc: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
                date: "Jun 2017 - Dec 2019"
              },
              {
                company: "TrendCraft Solutions",
                desc: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
                date: "Mar 2015 - May 2017"
              }
            ].map((exp, i) => (
              <div key={i} className="flex justify-between items-start group cursor-pointer border-b border-zinc-300/60 dark:border-white/5 pb-8 transition-colors duration-300">
                <div className="max-w-md">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors duration-300">{exp.company}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 transition-colors duration-300">{exp.desc}</p>
                  <p className="text-zinc-500 dark:text-zinc-600 text-xs transition-colors duration-300">{exp.date}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Github Contribution Section */}
        <section id="github" className="flex flex-col scroll-mt-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center lg:text-left">
            <span className="text-zinc-900 dark:text-white block transition-colors duration-300">GitHub</span>
            <span className="text-zinc-500 dark:text-zinc-800 block transition-colors duration-300">Contribution</span>
          </h2>
          <div className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-300/60 dark:border-white/5 rounded-3xl p-8 overflow-x-auto transition-colors duration-300">
            <div className="flex gap-1 min-w-max">
              {[...Array(30)].map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {[...Array(7)].map((_, rowIndex) => {
                    const isFilled = Math.random() > 0.6;
                    const intensity = Math.random();
                    let bgColor = 'bg-zinc-800';
                    if (isFilled) {
                      if (intensity > 0.7) bgColor = 'bg-orange-500';
                      else if (intensity > 0.4) bgColor = 'bg-orange-500/80';
                      else bgColor = 'bg-orange-500/40';
                    }
                    return (
                      <div 
                        key={`${colIndex}-${rowIndex}`} 
                        className={`w-4 h-4 rounded-sm ${bgColor}`} 
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 max-w-[500px]">
              <span className="text-zinc-500 text-xs">Less</span>
              <div className="flex gap-1">
                <span className="w-4 h-4 rounded-sm bg-zinc-800" />
                <span className="w-4 h-4 rounded-sm bg-orange-500/40" />
                <span className="w-4 h-4 rounded-sm bg-orange-500/80" />
                <span className="w-4 h-4 rounded-sm bg-orange-500" />
              </div>
              <span className="text-zinc-500 text-xs">More</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex flex-col scroll-mt-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center lg:text-left">
            <span className="text-zinc-900 dark:text-white block transition-colors duration-300">Featured</span>
            <span className="text-zinc-500 dark:text-zinc-800 block transition-colors duration-300">Projects</span>
          </h2>
          
          <div className="flex flex-col gap-12">
            {[
              {
                name: "NajmAI",
                type: "SaaS Framer Template",
                color: "bg-purple-600"
              },
              {
                name: "Damas",
                type: "Free Framer Template",
                color: "bg-emerald-600"
              },
              {
                name: "Faseelh",
                type: "Free Framer Template",
                color: "bg-sky-600"
              }
            ].map((proj, i) => (
              <div key={i} className="flex items-center gap-6 group cursor-pointer border-b border-zinc-300/60 dark:border-white/5 pb-8 transition-colors duration-300">
                <div className={`w-24 h-24 rounded-2xl ${proj.color} flex items-center justify-center shrink-0`}>
                  {/* Pseudo thumbnail */}
                  <div className="w-12 h-8 bg-white/20 rounded shadow-sm border border-white/30 backdrop-blur-sm" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors duration-300">{proj.name}</h3>
                  <p className="text-zinc-500 text-sm">{proj.type}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section id="thoughts" className="flex flex-col scroll-mt-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center lg:text-left">
            <span className="text-zinc-900 dark:text-white block transition-colors duration-300">Recent</span>
            <span className="text-zinc-500 dark:text-zinc-800 block transition-colors duration-300">Post</span>
          </h2>
          
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Building scalable web apps with Next.js",
                date: "April 05, 2026",
                category: "Engineering"
              },
              {
                title: "The art of subtle micro-interactions",
                date: "March 20, 2026",
                category: "Design"
              },
              {
                title: "Why I switched from VS Code to Cursor",
                date: "February 10, 2026",
                category: "Thoughts"
              }
            ].map((post, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between group cursor-pointer border-b border-zinc-300/60 dark:border-white/5 pb-8 gap-4 transition-colors duration-300">
                <div>
                  <p className="text-orange-500 text-sm mb-2">{post.category}</p>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">{post.title}</h3>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-zinc-500 text-sm">{post.date}</p>
                  <ArrowUpRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get In Touch Section */}
        <section id="contact" className="relative z-20 border-t border-zinc-300/60 dark:border-white/10 pt-6 md:pt-8 pb-6 md:pb-8 min-h-[calc(100vh-12rem)] scroll-mt-16 transition-colors duration-300">
        <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-center lg:text-left">
                  <span className="text-zinc-900 dark:text-white block transition-colors duration-300">Let&apos;s Work</span>
                  <span className="text-zinc-500 dark:text-zinc-800 block transition-colors duration-300">Together</span>
                </h2>

                <form className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-600 dark:text-zinc-400 text-sm mb-2 transition-colors duration-300">Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-300/70 dark:border-white/10 px-4 py-2.5 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-600 dark:text-zinc-400 text-sm mb-2 transition-colors duration-300">Email</label>
                      <input
                        type="email"
                        placeholder="Your@email.com"
                        className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-300/70 dark:border-white/10 px-4 py-2.5 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div >
                    <label className="block text-zinc-600 dark:text-zinc-400 text-sm mb-2 transition-colors duration-300">Budget</label>
                    <select className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-300/70 dark:border-white/10 px-4 py-2.5 text-zinc-600 dark:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors duration-300">
                      <option>Select...</option>
                      <option>Below $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-600 dark:text-zinc-400 text-sm mb-2 transition-colors duration-300">Message</label>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-300/70 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 resize-none transition-colors duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-400 text-white rounded-lg py-3 font-medium transition-colors"
                  >
                    Submit
                  </button>
                </form>
            </div>
        </section>

      </div>
    </main>
  );
}
