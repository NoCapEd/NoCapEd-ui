import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-sm text-gray-600">
                <div>&copy; 2024 NoCapEd All Rights Reserved</div>
                <div className="flex space-x-4">
                    <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-gray-900">Terms</Link>
                    <Link href="/settings" className="hover:text-gray-900">Settings</Link>
                    <Link href="/sitemap" className="hover:text-gray-900">Sitemap</Link>
                </div>
            </div>
        </footer>
    )
}