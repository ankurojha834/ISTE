'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Organization: [
      { label: 'About ISTE', href: '#' },
      { label: 'Our Mission', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Chapters', href: '#' },
    ],
    Activities: [
      { label: 'Workshops', href: '#activities' },
      { label: 'Competitions', href: '#achievements' },
      { label: 'Events', href: '#events' },
      { label: 'Clubs', href: '#clubs' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Code of Conduct', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/iste-logo.png"
                alt="ISTE Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h3 className="text-lg font-bold text-white">ISTE</h3>
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">
              Indian Society for Technical Education - Empowering technical minds through innovation and excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 dark:border-slate-800 py-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Subscribe to get updates about events and activities
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 rounded-lg bg-slate-800 dark:bg-slate-800 border border-slate-700 dark:border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-slate-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {currentYear} ISTE. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Made with passion by the ISTE Community
          </p>
        </div>
      </div>
    </footer>
  );
}
