"use client"

import React from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Account Settings</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Theme Preferences</h2>
        <ThemeSwitcher />
      </section>
      
      {/* Other settings sections... */}
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Profile Information</h2>
        {/* Add form components for updating profile information */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Notification Preferences</h2>
        {/* Add toggle components for notification settings */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Privacy Settings</h2>
        {/* Add privacy setting options */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Change Password</h2>
        {/* Add form for changing password */}
      </section>
      
      <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
        Save Changes
      </button>
    </div>
  );
};

export default SettingsPage;