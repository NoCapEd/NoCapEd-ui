"use client"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li><Link href="/our-story/mission" className="hover:text-primary">Our Mission</Link></li>
                            <li><Link href="/our-story/team" className="hover:text-primary">Our Team</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/resources/how-it-works" className="hover:text-primary">How It Works</Link></li>
                            <li><Link href="/resources/pricing" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="/resources/faq" className="hover:text-primary">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/footer/terms" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/footer/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">More</h3>
                        <ul className="space-y-2">
                            <li><Link href="/footer/settings" className="hover:text-primary">Settings</Link></li>
                            <li><Link href="/footer/sitemap" className="hover:text-primary">Sitemap</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p>&copy; {new Date().getFullYear()} NoCapEd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}