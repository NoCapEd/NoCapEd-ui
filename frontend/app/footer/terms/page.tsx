import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | NoCapEd',
  description: 'Read the terms and conditions for using NoCapEd\'s educational platform.',
};

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">1. Acceptance of Terms</h2>
          <p>By accessing or using NoCapEd's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">2. Use of Service</h2>
          <p>You agree to use NoCapEd's services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account and password.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">3. Intellectual Property</h2>
          <p>The content, features, and functionality of NoCapEd are owned by NoCapEd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">4. Privacy Policy</h2>
          <p>Your use of NoCapEd is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">5. Disclaimer of Warranties</h2>
          <p>NoCapEd's services are provided "as is" and "as available" without any warranties of any kind, either express or implied.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">6. Limitation of Liability</h2>
          <p>NoCapEd shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-secondary">7. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Please review these terms periodically for changes.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;