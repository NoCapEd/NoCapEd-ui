"use client"
import React from 'react';
import { Metadata } from 'next';



const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Personal information (e.g., name, email address)</li>
            <li>Usage data and learning progress</li>
            <li>Device and browser information</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your learning experience</li>
            <li>Communicate with you about our services</li>
            <li>Analyze usage patterns and trends</li>
          </ul>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;