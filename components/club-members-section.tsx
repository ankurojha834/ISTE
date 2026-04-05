'use client'

import React from 'react'
import { Linkedin, Mail, Github } from 'lucide-react'

interface Member {
  id: string
  name: string
  role: string
  club: string
  bio: string
  image: string
  social: {
    linkedin?: string
    email?: string
    github?: string
  }
}

const clubMembers: Member[] = [
  // Code Nexus Club
  {
    id: '1',
    name: 'Aditya Sharma',
    role: 'President',
    club: 'Code Nexus',
    bio: 'Full-stack developer with passion for building scalable applications',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aditya',
    social: {
      linkedin: '#',
      email: 'aditya@iste.com',
      github: '#',
    },
  },
  {
    id: '2',
    name: 'Priya Kapoor',
    role: 'Vice President',
    club: 'Code Nexus',
    bio: 'Frontend specialist with creative problem-solving skills',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    social: {
      linkedin: '#',
      email: 'priya@iste.com',
      github: '#',
    },
  },
  {
    id: '3',
    name: 'Rahul Patel',
    role: 'Treasurer',
    club: 'Code Nexus',
    bio: 'Backend engineer focused on database optimization',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
    social: {
      linkedin: '#',
      email: 'rahul@iste.com',
      github: '#',
    },
  },
  {
    id: '4',
    name: 'Sneha Desai',
    role: 'Secretary',
    club: 'Code Nexus',
    bio: 'Event organizer and community builder',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha',
    social: {
      linkedin: '#',
      email: 'sneha@iste.com',
      github: '#',
    },
  },
  // Robotics Club
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'President',
    club: 'Robotics Club',
    bio: 'Roboticist with expertise in autonomous systems',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
    social: {
      linkedin: '#',
      email: 'vikram@iste.com',
      github: '#',
    },
  },
  {
    id: '6',
    name: 'Anjali Gupta',
    role: 'Vice President',
    club: 'Robotics Club',
    bio: 'Mechanical engineer with IoT integration experience',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anjali',
    social: {
      linkedin: '#',
      email: 'anjali@iste.com',
      github: '#',
    },
  },
  {
    id: '7',
    name: 'Arjun Nair',
    role: 'Treasurer',
    club: 'Robotics Club',
    bio: 'Electronics specialist and hardware enthusiast',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun',
    social: {
      linkedin: '#',
      email: 'arjun@iste.com',
      github: '#',
    },
  },
  {
    id: '8',
    name: 'Zara Khan',
    role: 'Secretary',
    club: 'Robotics Club',
    bio: 'Documentation expert and project coordinator',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zara',
    social: {
      linkedin: '#',
      email: 'zara@iste.com',
      github: '#',
    },
  },
  // AI & Data Science Club
  {
    id: '9',
    name: 'Rohan Verma',
    role: 'President',
    club: 'AI & Data Science',
    bio: 'ML engineer passionate about deep learning research',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rohan',
    social: {
      linkedin: '#',
      email: 'rohan@iste.com',
      github: '#',
    },
  },
  {
    id: '10',
    name: 'Divya Sharma',
    role: 'Vice President',
    club: 'AI & Data Science',
    bio: 'Data scientist with expertise in predictive analytics',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=divya',
    social: {
      linkedin: '#',
      email: 'divya@iste.com',
      github: '#',
    },
  },
]

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'President':
      return 'bg-primary text-primary-foreground'
    case 'Vice President':
      return 'bg-secondary text-secondary-foreground'
    case 'Treasurer':
      return 'bg-accent text-accent-foreground'
    case 'Secretary':
      return 'bg-muted text-muted-foreground'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

const groupedMembers = clubMembers.reduce(
  (acc, member) => {
    if (!acc[member.club]) {
      acc[member.club] = []
    }
    acc[member.club].push(member)
    return acc
  },
  {} as Record<string, Member[]>
)

export function ClubMembersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Club Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Meet the passionate leaders driving ISTE initiatives and shaping the future of technical excellence
          </p>
        </div>

        {/* Club Groups */}
        <div className="space-y-16">
          {Object.entries(groupedMembers).map((clubEntry, clubIndex) => {
            const [clubName, members] = clubEntry
            return (
              <div key={clubName} className="animate-slideUp" style={{ animationDelay: `${clubIndex * 0.1}s` }}>
                {/* Club Title */}
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    {clubName}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {members.map((member, index) => (
                    <div
                      key={member.id}
                      className="group animate-slideUp transition-smooth"
                      style={{ animationDelay: `${(clubIndex * members.length + index) * 0.05}s` }}
                    >
                      <div className="relative h-full rounded-xl overflow-hidden glass hover:bg-white/20 transition-smooth border border-white/10 hover:border-accent/30">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth"></div>

                        {/* Content */}
                        <div className="relative p-6 flex flex-col h-full">
                          {/* Avatar */}
                          <div className="mb-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-20 h-20 rounded-full border-2 border-accent/50 group-hover:border-accent object-cover transition-smooth group-hover:scale-110"
                            />
                          </div>

                          {/* Name */}
                          <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {member.name}
                          </h4>

                          {/* Role Badge */}
                          <div className="mb-3">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadgeColor(member.role)} transition-smooth`}>
                              {member.role}
                            </span>
                          </div>

                          {/* Bio */}
                          <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                            {member.bio}
                          </p>

                          {/* Social Links */}
                          <div className="flex gap-3 pt-4 border-t border-white/10">
                            {member.social.linkedin && (
                              <a
                                href={member.social.linkedin}
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-smooth"
                                title="LinkedIn"
                              >
                                <Linkedin size={16} />
                              </a>
                            )}
                            {member.social.email && (
                              <a
                                href={`mailto:${member.social.email}`}
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-smooth"
                                title="Email"
                              >
                                <Mail size={16} />
                              </a>
                            )}
                            {member.social.github && (
                              <a
                                href={member.social.github}
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-smooth"
                                title="GitHub"
                              >
                                <Github size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
