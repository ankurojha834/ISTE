'use client';

import { Trophy, Star, Medal, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Medal,
    year: '2024',
    title: 'National Hackathon Champions',
    description: 'Our team won the prestigious National Tech Hackathon with an innovative IoT solution for smart agriculture.',
    color: 'from-yellow-600 to-amber-600',
  },
  {
    icon: Trophy,
    year: '2024',
    title: 'Best Innovation Award',
    description: 'Recognized for outstanding innovation in AI and machine learning applications at Tech Expo 2024.',
    color: 'from-purple-600 to-blue-600',
  },
  {
    icon: Star,
    year: '2023',
    title: 'Industry Leadership Award',
    description: 'ISTE chapter recognized as the most active technical society in the region.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Zap,
    year: '2023',
    title: 'Most Impactful Event',
    description: 'Our annual symposium attracted 2000+ participants and 50+ industry experts.',
    color: 'from-orange-600 to-red-600',
  },
];

const competitions = [
  {
    name: 'Code Battle 2024',
    date: 'March 15-17, 2024',
    participants: '250+',
    prize: '₹2,00,000',
    status: 'Completed',
  },
  {
    name: 'Innovation Summit',
    date: 'April 2024',
    participants: '150+',
    prize: '₹5,00,000',
    status: 'Completed',
  },
  {
    name: 'National Robotics Challenge',
    date: 'May 2024',
    participants: '80+',
    prize: '₹3,00,000',
    status: 'Completed',
  },
  {
    name: 'Upcoming: Web Dev Marathon',
    date: 'June 15-16, 2024',
    participants: 'Open',
    prize: '₹1,50,000',
    status: 'Upcoming',
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Celebrating our milestones and recognition in technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 overflow-hidden transition-all hover:shadow-xl"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitions */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Competitions & Events
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Showcase your skills in our competitive events
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-bold">Event Name</th>
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-bold">Date</th>
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-bold">Participants</th>
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-bold">Prize Pool</th>
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {competitions.map((comp, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-slate-900 dark:text-white font-semibold">{comp.name}</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{comp.date}</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{comp.participants}</td>
                    <td className="py-4 px-4 text-slate-900 dark:text-white font-bold text-blue-600 dark:text-blue-400">
                      {comp.prize}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        comp.status === 'Completed'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {comp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
