'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { signIn, signOut } from 'next-auth/react'

export default function Header() {
    const { data: session, status } = useSession()
    const [isOurStoryOpen, setIsOurStoryOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const ourStoryRef = useRef<HTMLDivElement>(null)
    const resourcesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ourStoryRef.current && !ourStoryRef.current.contains(event.target as Node)) {
                setIsOurStoryOpen(false)
            }
            if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
                setIsResourcesOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className="bg-transparent text-text py-6">
            <div className="container mx-auto px-4 flex items-center">
                <Link href="/" className="text-3xl font-sans font-bold mr-10 hover:opacity-80 transition-opacity">
                    NoCapEd
                </Link>
                <nav className="flex items-center space-x-6">
                    <div className="relative group" ref={ourStoryRef}>
                        <button
                            onClick={() => setIsOurStoryOpen(!isOurStoryOpen)}
                            className="px-3 py-2 hover:bg-primary hover:text-text-light rounded transition-colors"
                        >
                            Our Story
                        </button>
                        {isOurStoryOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-10">
                                <Link href="/mission" className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-text-light">Mission</Link>
                                <Link href="/team" className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-text-light">Team</Link>
                            </div>
                        )}
                    </div>
                    <div className="relative group" ref={resourcesRef}>
                        <button
                            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                            className="px-3 py-2 hover:bg-primary hover:text-text-light rounded transition-colors"
                        >
                            Resources
                        </button>
                        {isResourcesOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-lg z-10">
                                <Link href="/how-it-works" className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-text-light">How it Works</Link>
                                <Link href="/pricing" className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-text-light">Pricing</Link>
                                <Link href="/faq" className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-text-light">FAQ</Link>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="ml-auto">
                    {status === "authenticated" ? (
                        <button onClick={() => signOut()} className="bg-accent text-text-light px-4 py-2 rounded hover:opacity-90 transition-opacity">
                            Logout
                        </button>
                    ) : (
                        <button onClick={() => signIn()} className="bg-primary text-text-light px-4 py-2 rounded hover:opacity-90 transition-opacity">
                            Login
                        </button>
                    )}
                </div>
            </div>
        </header>
    )
}