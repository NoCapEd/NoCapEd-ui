'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

const SignInForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      window.location.href = '/dashboard';
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleFacebookSignIn = () => {
    signIn('facebook', { callbackUrl: '/dashboard' });
  };

  const handleDefaultLogin = async () => {
    const result = await signIn('credentials', {
      redirect: true,
      email: 'admin@nocaped.com',
      password: 'password123',
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
          Sign In
        </button>
      </form>
      <div className="flex flex-col space-y-2">
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Sign in with Google
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign in with Facebook
        </button>
        {process.env.NODE_ENV === 'development' && (
          <button
            onClick={handleDefaultLogin}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Default Login (Dev Only)
          </button>
        )}
      </div>
    </div>
  );
};

export default SignInForm;