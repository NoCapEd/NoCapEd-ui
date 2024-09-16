import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | NoCapEd',
  description: 'Navigate through NoCapEd\'s website structure with our comprehensive sitemap.',
};

interface SitemapItem {
  title: string;
  path: string;
  children?: SitemapItem[];
}

const sitemapData: SitemapItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Our Story',
    path: '/our-story',
    children: [
      { title: 'Mission', path: '/our-story/mission' },
      { title: 'Team', path: '/our-story/team' },
    ],
  },
  {
    title: 'Resources',
    path: '/resources',
    children: [
      { title: 'How it Works', path: '/resources/how-it-works' },
      { title: 'Pricing', path: '/resources/pricing' },
      { title: 'FAQ', path: '/resources/faq' },
    ],
  },
  {
    title: 'Account',
    path: '/account',
    children: [
      { title: 'Login', path: '/auth/signin' },
      { title: 'Sign Up', path: '/auth/signup' },
      { title: 'Forgot Password', path: '/auth/forgot-password' },
      { title: 'Settings', path: '/settings' },
    ],
  },
  {
    title: 'Legal',
    path: '/legal',
    children: [
      { title: 'Terms of Service', path: '/terms' },
      { title: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const SitemapItem: React.FC<{ item: SitemapItem; level: number }> = ({ item, level }) => (
  <li className={`ml-${level * 4}`}>
    <Link href={item.path} className="text-primary hover:underline">
      {item.title}
    </Link>
    {item.children && (
      <ul className="mt-2 mb-4">
        {item.children.map((child) => (
          <SitemapItem key={child.path} item={child} level={level + 1} />
        ))}
      </ul>
    )}
  </li>
);

const SitemapPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">Sitemap</h1>
      <ul className="space-y-4">
        {sitemapData.map((item) => (
          <SitemapItem key={item.path} item={item} level={0} />
        ))}
      </ul>
    </div>
  );
};

export default SitemapPage;