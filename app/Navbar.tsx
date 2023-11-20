"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";


const Navbar = () => {
    const currentPath = usePathname();
    const links = [
        {label: "Dashboard", url: "/"},
        {label: "Issues", url: "/issues"}
    ]

    return (
        <nav className='flex gap-6 p-4 border-b mb-4 items-center'>
            <Link href="/"> <FaBug/> </Link>
            <ul className='flex gap-4 items-center'>
                {links.map((link, index) => (
                    <Link key={index} href={link.url} className={`${link.url === currentPath ? "text-zinc-800" : "text-zinc-500"} hover:text-zinc-800 transition-all`}>{link.label}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar