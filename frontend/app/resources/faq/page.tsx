"use client"
import React, { useState } from 'react';
import { Metadata } from 'next';
import { motion, AnimatePresence } from 'framer-motion';


interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is NoCapEd?',
    answer: 'NoCapEd is an innovative educational platform that uses AI-powered storytelling and personalized Skill Scans to enhance learning experiences. Our approach, represented by the formula f(s,q)=K+, combines engaging Stories (s) with thought-provoking Questions (q) to promote continuous Knowledge growth (K+).'
  },
  {
    question: 'How does NoCapEd personalize learning?',
    answer: 'NoCapEd uses advanced AI algorithms to analyze each student\'s learning style, interests, and progress. Based on this analysis, we create tailored stories and questions that align with the curriculum while engaging the student\'s natural curiosity.'
  },
  {
    question: 'What age group is NoCapEd suitable for?',
    answer: 'Currently, NoCapEd is designed for UK students aged 5-11. However, we\'re continuously working on expanding our content to cater to a wider age range and different educational systems.'
  },
  {
    question: 'Can NoCapEd be used in schools?',
    answer: 'Absolutely! NoCapEd can be a valuable tool for teachers to supplement their classroom instruction. We offer special pricing for schools and educational institutions. Please contact us for more information on our school programs.'
  },
  {
    question: 'How secure is my child\'s data on NoCapEd?',
    answer: 'We take data privacy very seriously. All user data is encrypted and stored securely. We comply with GDPR and other relevant data protection regulations. We never share personal information with third parties without explicit consent.'
  },
  {
    question: 'Can I track my child\'s progress?',
    answer: 'Yes, NoCapEd provides detailed progress tracking for parents. You can view your child\'s learning journey, completed stories, skill improvements, and areas that may need more focus.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all our plans. This allows you to experience the full power of NoCapEd before committing to a subscription.'
  }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-primary">{item.question}</span>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="mb-4">Can't find the answer you're looking for?</p>
        <a href="/contact" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FAQPage;