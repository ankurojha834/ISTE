'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-semibold text-blue-900 dark:text-blue-300">Welcome to ISTE Community</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
          Shaping <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">Technical Minds</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join India&apos;s premier technical education society. Explore innovations, competitions, achievements, and grow your technical skills alongside passionate engineers and innovators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#activities"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Activities
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
          >
            View Upcoming Events
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl backdrop-blur border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <p className="text-slate-600 dark:text-slate-400">Active Members</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl backdrop-blur border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <p className="text-slate-600 dark:text-slate-400">Events Annually</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl backdrop-blur border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
            <p className="text-slate-600 dark:text-slate-400">Award Winners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
