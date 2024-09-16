import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const SignInForm = dynamic(() => import('./SignInForm'), {
  ssr: false,
  loading: () => <p>Loading sign-in form...</p>
});

export const metadata: Metadata = {
  title: 'Sign In | NoCapEd',
  description: 'Sign in to your NoCapEd account and start your personalized learning journey.',
};

const SignInPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Sign In to NoCapEd</h1>
      <p className="text-center mb-8 text-gray-600">Choose your preferred sign-in method below</p>
      <SignInForm />
      <p className="mt-8 text-center text-sm text-gray-500">
        By signing in, you agree to NoCapEd's Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default SignInPage;