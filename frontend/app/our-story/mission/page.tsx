"use client"
// app/our-story/mission/page.tsx
import React from 'react';
import { Metadata } from 'next';



const MissionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Our Mission</h1>
      <p className="text-lg mb-4">
        At NoCapEd, our mission is to revolutionize education by providing personalized, 
        story-driven learning experiences that ignite curiosity and foster a lifelong love for learning.
      </p>
      <p className="text-lg mb-4">
        We believe in the power of f(s,q)=K+, where stories (s) and questions (q) combine 
        to create an engaging learning process (f) that leads to continuous knowledge growth (K+).
      </p>
      <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">Our Goals</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Make learning engaging and accessible for all students</li>
        <li>Personalize education to meet individual learning needs</li>
        <li>Empower teachers with innovative tools and resources</li>
        <li>Bridge the gap between education and real-world application</li>
      </ul>
    </div>
  );
};

export default MissionPage;