"use client"

import { useState } from 'react'
import Link from 'next/link'

type NavItemProps = {
    title: string
    items?: { label: string; href: string }[]
}

export default function NavItem({ title, items }: NavItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button
                className="px-3 py-2 text-sm font-medium hover:bg-purple-700"
            >
                {title}
            </button>
            {items && isOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-b-md shadow-lg z-10">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}