import Link from 'next/link'
import NavItem from './NavItem'

export default function Header() {
    return (
        <header className="bg-blue-500 text-white py-2">
            <div className="bg-blue-500 container mx-auto px-4 flex items-center">
                <Link href="/" className="bg-blue-500 text-2xl font-bold mr-6">
                    NoCapEd
                </Link>
                <nav className="flex items-center space-x-4">
                    <NavItem
                        title="Our Story"
                        items={[
                            { label: 'Mission', href: '/mission' },
                            { label: 'Team', href: '/team' },
                        ]}
                    />
                    <NavItem
                        title="Resources"
                        items={[
                            { label: 'How it Works', href: '/how-it-works' },
                            { label: 'Pricing', href: '/pricing' },
                            { label: 'FAQ', href: '/faq' },
                            { label: 'Testimonials', href: '/testimonials' },
                            { label: 'Blog', href: '/blog' },
                            { label: 'Use cases', href: '/use-cases' },
                            { label: 'Careers', href: '/careers' },
                            { label: 'Team Up', href: '/team-up' },
                            { label: 'Contact Us', href: '/contact' },
                        ]}
                    />
                </nav>
                <Link href="/login" className="ml-auto bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                    Login
                </Link>
            </div>
        </header>
    )
}