'use client';

import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: 'April 20, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Lab, Building A',
    attendees: '45/100',
    description: 'Learn modern web development with React and Next.js from industry experts.',
    color: 'from-blue-600 to-cyan-600',
    featured: true,
  },
  {
    id: 2,
    title: 'AI & Machine Learning Bootcamp',
    date: 'April 25, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Seminar Hall, Building B',
    attendees: '30/60',
    description: 'Hands-on bootcamp covering neural networks, TensorFlow, and practical ML projects.',
    color: 'from-purple-600 to-pink-600',
    featured: true,
  },
  {
    id: 3,
    title: 'Robotics Club Meeting',
    date: 'April 18, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Robotics Lab',
    attendees: '25/40',
    description: 'Monthly meetup to discuss ongoing projects and prepare for upcoming competitions.',
    color: 'from-orange-600 to-red-600',
    featured: false,
  },
  {
    id: 4,
    title: 'Monthly Tech Talk',
    date: 'April 22, 2024',
    time: '3:00 PM - 4:30 PM',
    location: 'Auditorium',
    attendees: '150/300',
    description: 'Industry leader discussing latest trends in cloud computing and DevOps.',
    color: 'from-green-600 to-emerald-600',
    featured: false,
  },
  {
    id: 5,
    title: 'Code Review Session',
    date: 'April 19, 2024',
    time: '5:00 PM - 6:30 PM',
    location: 'Tech Lab, Building A',
    attendees: '20/50',
    description: 'Get feedback on your code from experienced developers and improve coding practices.',
    color: 'from-red-600 to-orange-600',
    featured: false,
  },
  {
    id: 6,
    title: 'Cybersecurity Workshop',
    date: 'April 27, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'Security Lab',
    attendees: '35/50',
    description: 'Learn ethical hacking, penetration testing, and cybersecurity best practices.',
    color: 'from-red-600 to-pink-600',
    featured: false,
  },
];

export function EventsSection() {
  const featuredEvents = upcomingEvents.filter(e => e.featured);
  const otherEvents = upcomingEvents.filter(e => !e.featured);

  return (
    <section id="events" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join our exciting workshops, competitions, and networking events
          </p>
        </div>

        {/* Featured Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-2xl"
            >
              {/* Gradient Header */}
              <div className={`h-40 bg-gradient-to-br ${event.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

              {/* Content */}
              <div className="p-8 -mt-8 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {event.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>{event.attendees} registered</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all">
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Events */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">More Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEvents.map((event) => (
              <div
                key={event.id}
                className="group p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                {/* Date Badge */}
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${event.color} text-white text-xs font-bold rounded-lg mb-4`}>
                  {event.date.split(',')[0]}
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {event.title}
                </h4>

                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded text-sm transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
