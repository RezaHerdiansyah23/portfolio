'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AeroCard } from '@/components/AeroCard';
import { AeroButton } from '@/components/AeroButton';
import { Navbar } from '@/components/Navbar';
import { projects } from '@/data/projects';
import { 
  Laptop, 
  Database, 
  Smartphone, 
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '3', label: 'Platforms Mastered' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0f172a] selection:bg-orange-500/30 selection:text-white text-slate-200">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bliss.png')] bg-cover bg-center opacity-10 grayscale blur-3xl"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-orange-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600/10 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />

      <div className="relative z-10">

        {/* ═══ HERO ═══ */}
        <section id="hero" className="min-h-screen grid lg:grid-cols-2 items-center container mx-auto px-6 pt-28 pb-10 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-orange-400 font-bold text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>

            <div className="space-y-2">
              <p className="text-orange-400 font-black italic tracking-[0.25em] text-xs uppercase">Reza Herdiansyah</p>
              <h1 className="text-6xl lg:text-8xl font-black italic tracking-tighter text-white leading-[0.88] uppercase">
                Digital<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Architect</span>
              </h1>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Fullstack &amp; Mobile Developer crafting high-performance, tactile experiences across web &amp; Android.
            </p>

            <div className="flex flex-wrap gap-4">
              <AeroButton>VIEW MY PROJECTS</AeroButton>
              <AeroButton variant="glass" className="flex items-center gap-2">
                DOWNLOAD CV <ExternalLink size={14} />
              </AeroButton>
            </div>

            {/* Inline stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-white italic">{s.value}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side — About snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* About card */}
            <div className="aero-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-orange-400 font-black uppercase tracking-widest">About Me</span>
                <ArrowUpRight size={14} className="text-orange-400" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am a passionate developer with expertise in building end-to-end digital products—from pixel-perfect React frontends and robust Node.js backends, to native Android apps with Jetpack Compose. I love blending technical precision with creative design.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['React', 'Next.js', 'Node.js', 'Kotlin', 'PostgreSQL', 'Tailwind'].map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-orange-950/50 border border-orange-900/40 text-orange-300 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* Three value props */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Zap size={18}/>, label: 'Fast', desc: 'Optimized for performance' },
                { icon: <Shield size={18}/>, label: 'Secure', desc: 'Best security practices' },
                { icon: <Layers size={18}/>, label: 'Scalable', desc: 'Built to grow with you' },
              ].map((item, i) => (
                <div key={i} className="aero-card !p-4 text-center space-y-2">
                  <div className="text-orange-400 flex justify-center">{item.icon}</div>
                  <p className="text-white font-black text-sm uppercase">{item.label}</p>
                  <p className="text-slate-500 text-[10px] leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Currently working on */}
            <div className="aero-card !p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <Terminal size={16} className="text-orange-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Currently Working On</p>
                <p className="text-white font-black text-sm">Langkah Kopi POS + Mobile App</p>
              </div>
              <span className="ml-auto text-[10px] text-orange-400 font-bold border border-orange-500/30 px-2 py-1 rounded-full">IN PROGRESS</span>
            </div>
          </motion.div>
        </section>

        {/* ═══ FULL-WIDTH MARQUEE SEPARATOR ═══ */}
        <div className="border-y border-slate-800/60 bg-slate-900/30 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {['Frontend Development', 'Backend Architecture', 'Android Mobile', 'REST & GraphQL APIs', 'UI/UX Design', 'CI/CD & DevOps'].concat(
              ['Frontend Development', 'Backend Architecture', 'Android Mobile', 'REST & GraphQL APIs', 'UI/UX Design', 'CI/CD & DevOps']
            ).map((item, i) => (
              <span key={i} className="text-slate-600 font-black italic uppercase text-sm tracking-widest">
                {item} <span className="text-orange-600 mx-4">•</span>
              </span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 space-y-24 py-24">

          {/* ═══ PROJECTS ═══ */}
          <section id="projects" className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-orange-400 font-black italic tracking-widest uppercase text-xs">Portfolio Showcase</span>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic uppercase mt-1">Selected Works</h2>
              </div>
              <p className="text-slate-400 max-w-xs font-medium text-sm">Carefully selected work across web and Android ecosystems.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <AeroCard className="h-full flex flex-col group">
                    <div className="aspect-video bg-slate-800/60 rounded-xl mb-4 overflow-hidden flex items-center justify-center text-slate-700 group-hover:text-orange-500/40 transition-colors duration-500">
                      {project.category === 'Mobile' ? <Smartphone size={56} strokeWidth={1} /> :
                       project.category === 'Backend' ? <Database size={56} strokeWidth={1} /> : <Laptop size={56} strokeWidth={1} />}
                    </div>

                    <div className="flex-1 space-y-3">
                      <span className="text-[10px] font-black italic tracking-widest text-orange-400 uppercase bg-orange-950/40 px-2 py-0.5 rounded-full border border-orange-800/30">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-black text-white leading-tight italic uppercase">{project.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-slate-500">#{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 mt-4 border-t border-slate-800/60">
                      <AeroButton className="flex-1 !py-2 text-[10px] flex items-center justify-center gap-1">
                        <Code2 size={11} /> SOURCE
                      </AeroButton>
                      <AeroButton variant="glass" className="flex-1 !py-2 text-[10px] flex items-center justify-center gap-1">
                        <ArrowRight size={11} /> LIVE
                      </AeroButton>
                    </div>
                  </AeroCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ═══ SKILLS ═══ */}
          <section id="skills" className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-orange-400 font-black italic tracking-widest uppercase text-xs">Capabilities</span>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic uppercase mt-1">Core Stack</h2>
              </div>
              <p className="text-slate-400 max-w-xs font-medium text-sm">A full toolkit from UI to infrastructure, covering all layers of modern development.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Laptop size={28} />, label: 'Frontend', color: 'orange-500', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
                { icon: <Database size={28} />, label: 'Backend', color: 'orange-600', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL', 'Prisma', 'AWS'] },
                { icon: <Smartphone size={28} />, label: 'Mobile', color: 'orange-400', items: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Room', 'Material 3', 'ViewModel'] },
                { icon: <Cpu size={28} />, label: 'DevOps & Tools', color: 'slate-300', items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Figma', 'Terraform'] },
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AeroCard className={`h-full !p-6 border-t-4 border-${cat.color} space-y-5`}>
                    <div className={`text-${cat.color}`}>{cat.icon}</div>
                    <h4 className={`font-black italic text-${cat.color} text-base uppercase tracking-wide`}>{cat.label}</h4>
                    <ul className="space-y-2">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs text-slate-400 font-bold">
                          <span className={`w-1 h-1 rounded-full bg-${cat.color} flex-shrink-0`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AeroCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ═══ EXPERIENCE / TIMELINE ═══ */}
          <section className="space-y-10">
            <div>
              <span className="text-orange-400 font-black italic tracking-widest uppercase text-xs">Journey</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic uppercase mt-1">Experience</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: '2024 – Present', title: 'Fullstack Developer', company: 'Freelance / Independent', desc: 'Building full-stack web applications and Android apps for clients. Specializing in React, Node.js, and Kotlin.', tags: ['React', 'Node.js', 'Kotlin'] },
                { year: '2023 – 2024', title: 'Frontend Developer', company: 'Project-Based', desc: 'Developed responsive web interfaces and dashboards, focusing on performance optimization and user experience.', tags: ['Next.js', 'Tailwind', 'TypeScript'] },
                { year: '2022 – 2023', title: 'Android Developer', company: 'Side Projects', desc: 'Created several Android applications using Kotlin and Jetpack Compose, integrating REST APIs and local databases.', tags: ['Kotlin', 'Jetpack Compose', 'Room'] },
                { year: '2021 – 2022', title: 'Backend Engineer', company: 'Learning & Internship', desc: 'Built RESTful APIs, worked with relational databases and learned CI/CD practices using Node.js and PostgreSQL.', tags: ['Node.js', 'PostgreSQL', 'Docker'] },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AeroCard className="h-full space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[10px] text-orange-400 font-black italic tracking-widest uppercase">{exp.year}</p>
                    </div>
                    <h3 className="text-xl font-black text-white italic uppercase">{exp.title}</h3>
                    <p className="text-xs text-orange-500/80 font-bold uppercase tracking-wide">{exp.company}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{exp.desc}</p>
                    <div className="flex gap-2 flex-wrap pt-1">
                      {exp.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-orange-950/40 border border-orange-900/30 text-orange-300 rounded-full">{t}</span>
                      ))}
                    </div>
                  </AeroCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ═══ CONTACT ═══ */}
          <section id="contact" className="space-y-10">
            <div>
              <span className="text-orange-400 font-black italic tracking-widest uppercase text-xs">Get In Touch</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic uppercase mt-1">Work With Me</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left — copy */}
              <div className="space-y-6">
                <p className="text-slate-400 text-lg leading-relaxed">
                  Available for freelance projects, full-time opportunities, or just a great tech conversation. Let's build something memorable together.
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Email', value: 'reza@herdiansyah.dev' },
                    { label: 'LinkedIn', value: '/in/rezaherdiansyah' },
                    { label: 'GitHub', value: 'github.com/rezaherdiansyah' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-800/60">
                      <span className="text-slate-600 font-black uppercase text-[10px] tracking-widest w-16">{c.label}</span>
                      <span className="text-orange-300 font-bold text-sm">{c.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <AeroButton>SEND EMAIL</AeroButton>
                  <AeroButton variant="glass" className="flex items-center gap-2">LINKEDIN <ArrowUpRight size={14} /></AeroButton>
                </div>
              </div>

              {/* Right — contact form */}
              <AeroCard className="space-y-4">
                <h3 className="text-white font-black italic uppercase text-lg">Send a Message</h3>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name" className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
                  <input type="email" placeholder="Your Email" className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
                  <textarea placeholder="Your Message..." rows={4} className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
                  <AeroButton className="w-full !py-3">SEND MESSAGE</AeroButton>
                </div>
              </AeroCard>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-orange-400 font-black italic text-sm">REZA H.</span>
            <p className="text-slate-600 text-[10px] font-black tracking-[0.2em] uppercase">
              REZA HERDIANSYAH © 2026 • DESIGNED IN THE SPIRIT OF THE 2000S
            </p>
            <div className="flex gap-6 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
              <a href="#" className="hover:text-orange-400 transition-colors">Github</a>
              <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
