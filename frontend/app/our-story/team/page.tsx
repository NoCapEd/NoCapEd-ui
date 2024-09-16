"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



interface TeamMember {
  name: string;
  role: string;
  experience: string;
  passion: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Srikanth',
    role: 'Co-founder & CEO',
    experience: '25+ years in IT, specializing in enterprise software and AI integration',
    passion: 'Leveraging LLMs to create personalized learning experiences',
    image: '/images/srikanth.jpg', // Replace with actual image path
  },
  {
    name: 'Srini',
    role: 'Co-founder & Chief Education Officer',
    experience: '20 years in IT and EdTech',
    passion: 'Developing AI-driven curricula that adapt to individual learning styles',
    image: '/images/srini.jpg', // Replace with actual image path
  },
  {
    name: 'Venu',
    role: 'Co-founder & CTO',
    experience: '22 years in IT, focusing on data science and machine learning',
    passion: 'Applying data science to identify and bridge educational gaps',
    image: '/images/venu.jpg', // Replace with actual image path
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
            <p className="text-secondary">{member.role}</p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <p className="mb-2"><strong>Experience:</strong> {member.experience}</p>
            <p><strong>Passion:</strong> {member.passion}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">Our Team</h1>
      <p className="text-lg mb-8">
        Meet the passionate individuals behind NoCapEd, each bringing over 20 years of IT experience
        and a shared commitment to revolutionizing education through data science and AI.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;