'use client';

import { skills, experiences, competitions, certifications } from './data';
import NavigationDots from './components/NavigationDots';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const sections = ['header', 'summary', 'build', 'experience', 'competitions', 'skills', 'certifications', 'languages', 'philosophy', 'contact'];
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const observers = new Map();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        observers.set(section, observer);
      }
    });

    // Cleanup observers
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sections]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationDots sections={sections} activeSection={activeSection} />
      
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
        {/* Header Section */}
        <section id="header" className="snap-start h-screen flex items-center justify-center px-4">
          <header className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500 dark:ring-blue-400 shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/Profile_photo.jpg"
                alt="Otman Mouhib"
                fill
                priority
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Otman Mouhib
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Computer Engineer · AI & Embedded Systems · Full-Stack & Data Engineering
            </h2>
            <div className="flex flex-col items-center gap-6">
              <a href="mailto:Otman.Mouhib@univ-nantes.fr" 
                 className="text-blue-600 dark:text-blue-400 hover:underline">
                Otman.Mouhib@univ-nantes.fr
              </a>
              <div className="flex justify-center gap-4">
                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  LinkedIn
                </button>
                <button className="bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  GitHub
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Download CV
                </button>
              </div>
            </div>
          </header>
        </section>

        {/* Professional Summary */}
        <section id="summary" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a polyvalent engineer with a foundation in AI research, IoT systems, full-stack development, and data engineering. 
              My focus is on building systems that are not only intelligent but reliable, scalable, and usable. 
              I approach problems holistically — from neural networks to dashboards — mastering each layer with depth and purpose.
            </p>
          </div>
        </section>

        {/* What I Build */}
        <section id="build" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What I Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Web & Data Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Developed secure full-stack applications and real-time dashboards. Built data pipelines 
                  for internal monitoring and scoring systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    Streamlit
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    Power BI
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">AI & Predictive Systems</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Created and optimized ML models for research in temporal predictability on multicore processors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    PyTorch
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    LSTM
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    Cortex-A53
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Embedded & IoT Systems</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designed end-to-end automation using ESP32 and MQTT, including OTA updates, 
                  sensor integration, and cloud sync.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    ESP32
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    MQTT
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                    OTA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.role} | {exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section id="competitions" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Competitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitions.map((comp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{comp.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{comp.year}</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{comp.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from(new Set(skills.map(s => s.category))).map((category) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.filter(s => s.category === category).map((skill, i) => (
                      <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer} · {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages & Extras */}
        <section id="languages" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Languages & Extras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>🇬🇧 English - Professional Working Proficiency</li>
                  <li>🇫🇷 French - Native</li>
                  <li>🇲🇦 Arabic - Native</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>International Driving License (Type B)</li>
                  <li>Agile teamwork</li>
                  <li>Technical mentoring</li>
                  <li>R&D documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Statement */}
        <section id="philosophy" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Engineering Philosophy</h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-lg text-gray-600 dark:text-gray-400">
              "I design with care, code with intent, and build with a systems mindset. From AI labs to IoT farms, I bring ideas into reliable execution."
            </blockquote>
          </div>
        </section>

        {/* Footer CTA */}
        <section id="contact" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <footer className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's talk.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Interested in a profile that blends innovation, engineering discipline, and versatility?
            </p>
            <div className="flex justify-center gap-4">
              <a href="mailto:Otman.Mouhib@univ-nantes.fr" 
                 className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Contact Me
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Download CV
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
