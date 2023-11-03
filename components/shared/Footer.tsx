import React from 'react'
import nexaaLogoFooter from '@/assets/logo-footer.svg';
import Image from 'next/image'
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoInstagramAlt, BiLogoLinkedinSquare} from "react-icons/bi";
import Link from 'next/link';
export const Footer = () => {
    const navLinks = [
        { name: 'Tools', href: '#', current: true },
        { name: 'Find Influencers & Creators', href: '#', current: false },
        { name: 'Pricing', href: '#', current: false },
        { name: 'Blog', href: '#', current: false },
        { name: 'Support', href: '#', current: false },
        { name: 'Contact Us', href: '#', current: false },
    ];

    const socials = [
        { name: 'Linkedin', icon:<BiLogoLinkedinSquare width={100}/>, href: '#' },
        { name: 'Instagram', icon:<BiLogoInstagramAlt width={100}/>, href: '#' },
        { name: 'X', icon:<RiTwitterXLine width={100}/>, href: '#' },
    ]

  return (
    <div>
        <div className='bg-black py-8 px-4'>
            <nav className="flex justify-between items-center max-container section">
                <Link href="/" className="text-3xl font-bold">
                    <Image
                        src={nexaaLogoFooter}
                        alt=""
                        className="object-contain"
                        width={120}
                    />
                </Link>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                    <li key={item.name}>
                        <Link
                        href={item.href}
                        className="leading-normal text-sm text-white"
                        >
                        {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
                <ul className="flex gap-2 text-lg leading-normal font-montserrat max-lg:hidden wide:mr-24">
                    {socials.map((item) => (
                    <li key={item.name}>
                        <Link
                        href={item.href}
                        className="leading-normal text-sm text-white"
                        >
                        {item.icon}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className='bg-grey-100 py-7 px-4'>
            <div className='max-container section'>
                <div className="flex flex-col flex-col-reverse items-center md:flex-row w-full justify-between gap-y-4 md:gap-y-0">
                    <h1 className='text-xs'>Copyright © 2023 Nexaa. All rights reserved</h1>
                    <div className='flex'>
                        <ul className='flex space-x-10 text-xs'>
                            <li>Privacy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
