import React from 'react';
import { signIn } from 'next-auth/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | NoCapEd',
  description: 'Sign in to your NoCapEd account and start your personalized learning journey.',
};

const SignInPage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      // Handle error
      console.error(result.error);
    } else {
      // Redirect to dashboard or home page
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">Sign In</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
      <div className="mt-4 text-center">
        <button onClick={() => signIn('google')} className="text-primary hover:underline">
          Sign in with Google
        </button>
      </div>
      <div className="mt-4 text-center">
        <button onClick={() => signIn('facebook')} className="text-primary hover:underline">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignInPage;