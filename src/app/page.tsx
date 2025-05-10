'use client';

import { skills, experiences, competitions, certifications } from './data';
import NavigationDots from './components/NavigationDots';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <section id="header" className="snap-start h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <motion.header 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10 max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-48 h-48 mx-auto mb-12 group"
            >
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-md group-hover:blur-lg transition-all duration-300"></div>
              
              {/* Profile container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src="/Profile_photo.jpg"
                      alt="Otman Mouhib"
                      fill
                      priority
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Otman Mouhib</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light space-x-3"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-block"
              >
                Computer Engineer
              </motion.span>
              <span className="text-blue-500/70 dark:text-blue-400/70">•</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="inline-block"
              >
                AI & Embedded Systems
              </motion.span>
              <span className="text-purple-500/70 dark:text-purple-400/70">•</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-block"
              >
                Full-Stack & Data Engineering
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center gap-8 mt-10"
            >
              <a 
                href="mailto:Otman.Mouhib@univ-nantes.fr"
                className="group flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <HiMail className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="border-b border-transparent group-hover:border-current transition-colors">
                  Otman.Mouhib@univ-nantes.fr
                </span>
              </a>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#0077B5]/90 hover:bg-[#0077B5] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 glass-card px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 gradient-border"
                >
                  <FaDownload className="text-xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Download CV</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.header>
        </section>

        {/* Professional Summary */}
        <section id="summary" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="max-w-5xl w-full relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Professional Summary
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group relative p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-blue-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 dark:hover:from-gray-900 dark:hover:to-blue-900/10 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-cyan-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                      I'm a polyvalent engineer with a foundation in AI research, IoT systems, full-stack development, and data engineering.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="group relative p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-purple-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 dark:hover:from-gray-900 dark:hover:to-purple-900/10 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-pink-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      My focus is on building systems that are not only intelligent but reliable, scalable, and usable.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="group relative p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-emerald-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 dark:hover:from-gray-900 dark:hover:to-emerald-900/10 shadow-sm hover:shadow-md md:col-span-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-teal-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      I approach problems holistically — from neural networks to dashboards — mastering each layer with depth and purpose.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Additional visual elements */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center mt-8 space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">AI & Research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">IoT Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">Full-Stack Dev</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What I Build */}
        <section id="build" className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-purple-50/30 dark:from-transparent dark:via-blue-900/10 dark:to-purple-900/10"></div>
          
          {/* Background decorative elements with enhanced animations */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }} 
              className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-3xl"
            />
          </div>

          <div className="max-w-7xl w-full relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Section Header with enhanced styling */}
              <div className="text-center space-y-4 mb-16">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 w-24 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                >
                  What I Build
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                  Creating delightful digital experiences through innovative design and seamless interactions
                </motion.p>
              </div>

              {/* Project Cards Grid with enhanced interactivity */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web & Data Engineering Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="group relative p-8 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-blue-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 dark:hover:from-gray-900 dark:hover:to-blue-900/10 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-cyan-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      📊 Web & Data Engineering
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Developed secure full-stack applications and real-time dashboards. Built data pipelines for internal monitoring and competition platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Next.js</span>
                      <span className="px-3 py-1 text-sm bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">MongoDB</span>
                      <span className="px-3 py-1 text-sm bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">Streamlit</span>
                      <span className="px-3 py-1 text-sm bg-yellow-100/80 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">Power BI</span>
                      <span className="px-3 py-1 text-sm bg-cyan-100/80 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">Tailwind</span>
                      <span className="px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">REST</span>
                      <span className="px-3 py-1 text-sm bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">MQTT</span>
                    </div>
                  </div>
                </motion.div>

                {/* AI & Predictive Systems Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="group relative p-8 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-purple-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 dark:hover:from-gray-900 dark:hover:to-purple-900/10 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-pink-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      🤖 AI & Predictive Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Created and optimized ML models for research in temporal predictability on multicore processors.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">PyTorch</span>
                      <span className="px-3 py-1 text-sm bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">LSTM</span>
                      <span className="px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Quantile Regression</span>
                      <span className="px-3 py-1 text-sm bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">ARM Cortex-A53</span>
                      <span className="px-3 py-1 text-sm bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">pandas</span>
                    </div>
                  </div>
                </motion.div>

                {/* Backend Development Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="group relative p-8 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-emerald-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 dark:hover:from-gray-900 dark:hover:to-emerald-900/10 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-teal-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      📡 Embedded & IoT Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Designed end-to-end automation using ESP32 and MQTT, including OTA updates, sensor integration, and cloud sync.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">ESP32</span>
                      <span className="px-3 py-1 text-sm bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">Arduino</span>
                      <span className="px-3 py-1 text-sm bg-teal-100/80 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">MQTT</span>
                      <span className="px-3 py-1 text-sm bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">OTA</span>
                      <span className="px-3 py-1 text-sm bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">Sensor Buses</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full relative">
            <div className="flex items-center space-x-4 mb-12">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500"
              />
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                Experience
              </h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-blue-500/30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 dark:hover:from-gray-900 dark:hover:to-blue-900/10 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.02] rounded-xl"></div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      {exp.role} | {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.impact}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
