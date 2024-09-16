// app/resources/how-it-works/page.tsx
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How NoCapEd Works | Personalized Learning Experience',
  description: 'Learn how NoCapEd uses AI-powered storytelling and personalized questions to create an engaging, adaptive learning experience.',
};

const HowItWorksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">How NoCapEd Works</h1>
      <p className="text-lg mb-8">
        NoCapEd revolutionizes learning through our unique f(s,q)=K+ approach, 
        combining engaging stories with personalized questions to foster continuous knowledge growth.
      </p>
      
      <div className="space-y-8">
        <Section
          title="AI-Powered Storytelling"
          content="Our advanced AI generates captivating, curriculum-aligned stories tailored to each student's interests and learning goals."
        />
        <Section
          title="Personalized Questions"
          content="Intelligent questioning adapts to the student's responses, challenging them at the right level to promote critical thinking and deeper understanding."
        />
        <Section
          title="Continuous Assessment"
          content="Regular 'Skill Scans' provide insights into the student's progress, helping to identify areas for improvement and celebrate achievements."
        />
        <Section
          title="Adaptive Learning Path"
          content="Based on performance and preferences, NoCapEd creates a unique learning journey for each student, ensuring optimal engagement and knowledge retention."
        />
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary mb-3">{title}</h2>
      <p className="text-wisdom-navy">{content}</p>
    </div>
  );
};

export default HowItWorksPage;