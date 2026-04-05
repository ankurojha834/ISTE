'use client';

import { Code, Cpu, Lightbulb, Rocket, Zap, Users } from 'lucide-react';

const activities = [
  {
    icon: Code,
    title: 'Coding Workshops',
    description: 'Learn cutting-edge programming languages and frameworks with hands-on sessions led by industry experts.',
    color: 'from-blue-600 to-blue-500',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Dive deep into artificial intelligence, neural networks, and practical ML applications.',
    color: 'from-cyan-600 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'Collaborate on innovative projects and bring your technical ideas to life with peer support.',
    color: 'from-amber-600 to-amber-500',
  },
  {
    icon: Rocket,
    title: 'Hackathons',
    description: 'Participate in 24-hour coding marathons with exciting prizes and networking opportunities.',
    color: 'from-red-600 to-red-500',
  },
  {
    icon: Zap,
    title: 'Technical Talks',
    description: 'Attend inspiring talks from industry leaders and renowned technical professionals.',
    color: 'from-violet-600 to-violet-500',
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Get personalized guidance from experienced professionals in your field of interest.',
    color: 'from-green-600 to-green-500',
  },
];

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover diverse technical and co-curricular activities designed to enhance your skills and knowledge
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-xl hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {activity.description}
                </p>

                {/* Arrow Indicator */}
                <div className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 gap-1 transition-all">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
