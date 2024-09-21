'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
//import { useRouter } from 'next/router'

const Header: React.FC = () => {
    const { data: session, status } = useSession()
    const [isOurStoryOpen, setIsOurStoryOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const ourStoryRef = useRef<HTMLDivElement>(null)
    const resourcesRef = useRef<HTMLDivElement>(null)
    const profileRef = useRef<HTMLDivElement>(null)
    
    //const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ourStoryRef.current && !ourStoryRef.current.contains(event.target as Node)) {
                setIsOurStoryOpen(false)
            }
            if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
                setIsResourcesOpen(false)
            }
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

   // const handleSignOut = async () => {
   //     await signOut({ redirect: false })
   //     router.push('/')
   // }
    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/', redirect: true,});
      }

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        NoCapEd
                    </Link>

                    <nav className="hidden md:flex space-x-6">
                        <div className="relative group" ref={ourStoryRef}>
                            <button
                                onClick={() => setIsOurStoryOpen(!isOurStoryOpen)}
                                className="text-gray-600 hover:text-primary transition-colors"
                            >
                                Our Story
                            </button>
                            {isOurStoryOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                    <Link href="/our-story/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Mission
                                    </Link>
                                    <Link href="/our-story/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Team
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="relative group" ref={resourcesRef}>
                            <button
                                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                className="text-gray-600 hover:text-primary transition-colors"
                            >
                                Resources
                            </button>
                            {isResourcesOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                    <Link href="/resources/how-it-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        How it Works
                                    </Link>
                                    <Link href="/resources/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Pricing
                                    </Link>
                                    <Link href="/resources/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        FAQ
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                    </nav>

                    <div className="flex items-center">
                        {status === "authenticated" ? (
                            <div className="relative" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
                                    <img
                                        src={session.user?.image || '/default-avatar.png'}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>{session.user?.name}</span>
                                </button>
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Dashboard
                                        </Link>
                                        <Link href="/footer/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Settings
                                        </Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => signIn()}
                                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header