import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans | NoCapEd',
  description: 'Explore NoCapEd\'s flexible pricing plans designed to suit learners of all levels.',
};

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '£9.99/month',
    features: [
      'Access to core curriculum stories',
      'Basic Skill Scans',
      'Limited personalization',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '£19.99/month',
    features: [
      'All Basic features',
      'Advanced personalization',
      'Unlimited Skill Scans',
      'Progress tracking',
      'Priority email support'
    ],
    isPopular: true
  },
  {
    name: 'Family',
    price: '£29.99/month',
    features: [
      'All Pro features',
      'Up to 4 child accounts',
      'Parent dashboard',
      'Customizable learning paths',
      '24/7 priority support'
    ]
  }
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${plan.isPopular ? 'border-2 border-primary' : ''}`}>
    {plan.isPopular && (
      <div className="bg-primary text-white text-sm font-bold py-1 px-4 rounded-full self-start mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
    <p className="text-3xl font-semibold mb-6">{plan.price}</p>
    <ul className="mb-6 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors w-full">
      Choose Plan
    </button>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Our Pricing Plans</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        Choose the perfect plan for your learning journey. All plans come with a 14-day free trial, so you can experience the power of NoCapEd risk-free.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
      <p className="mt-8 text-center text-gray-600">
        Need a custom plan for your school or organization? <a href="/contact" className="text-primary hover:underline">Contact us</a> for special pricing.
      </p>
    </div>
  );
};

export default PricingPage;