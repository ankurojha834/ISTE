'use client';

import { Users, Trophy, Globe } from 'lucide-react';
import Image from 'next/image';

const clubs = [
  {
    name: 'Code Nexus',
    description: 'The premier programming club focused on competitive programming, web development, and software engineering practices.',
    members: '120+',
    icon: 'Code',
    color: 'from-blue-600 to-blue-500',
  },
  {
    name: 'Robotics Club',
    description: 'Building intelligent robots and exploring automation. Participate in national robotics competitions.',
    members: '85+',
    icon: 'Robot',
    color: 'from-orange-600 to-orange-500',
  },
  {
    name: 'AI & Data Science',
    description: 'Deep dive into machine learning, data analysis, and AI applications with hands-on projects.',
    members: '95+',
    icon: 'Brain',
    color: 'from-purple-600 to-purple-500',
  },
  {
    name: 'Web Development',
    description: 'Master modern web technologies including React, Next.js, and full-stack development.',
    members: '110+',
    icon: 'Globe',
    color: 'from-cyan-600 to-cyan-500',
  },
  {
    name: 'Cybersecurity',
    description: 'Learn ethical hacking, network security, and protect against cyber threats.',
    members: '75+',
    icon: 'Shield',
    color: 'from-red-600 to-red-500',
  },
  {
    name: 'IoT & Embedded',
    description: 'Work with microcontrollers, sensors, and build connected intelligent devices.',
    members: '65+',
    icon: 'Zap',
    color: 'from-yellow-600 to-yellow-500',
  },
];

export function ClubsSection() {
  return (
    <section id="clubs" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Clubs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join one of our specialized clubs and collaborate with like-minded technical enthusiasts
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-xl"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${club.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

              {/* Content */}
              <div className="p-6 -mt-12 relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {club.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {club.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {club.members}
                    </span>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Can&apos;t find your interest? Propose a new club!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all">
            Propose a Club
          </button>
        </div>
      </div>
    </section>
  );
}
