// Navbar.js 
"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import nexaaLogoFull from '@/assets/nexaa-logo-full.svg';
import nexaaLogoSmall from '@/assets/nexaa-logo-small.svg';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Tools', href: '#', current: true },
    { name: 'Find Influencers & Creators', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-4 z-40 w-full fixed top-0 left-0 right-0 bg-white shadow-sm">
        <nav className="flex justify-between items-center max-container section">
          <Link href="/" className="text-3xl font-bold">
            <Image
                src={nexaaLogoFull}
                alt=""
                className="object-contain"
                width={100}
            />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-montserrat leading-normal text-sm text-slate-gray"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal max-lg:hidden wide:mr-24">
            <button className="py-4 px-8 bg-gray-100 rounded-xl text-sm">Login</button>
            <button className="py-4 px-8 bg-primary hover:bg-[#0F3AD2] text-white rounded-xl text-sm">Get Started</button>
          </div>
          <div className="hidden max-lg:flex items-center space-x-4">
            <button className="py-4 px-8 bg-primary hover:bg-[#0F3AD2] text-white rounded-xl text-sm">Get Started</button>
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {!isMenuOpen?<RxHamburgerMenu className="text-4xl" />:<AiOutlineClose className="text-4xl" />}
            </div>
          </div>
          
        </nav>
      </header>
      {isMenuOpen && (
        <div className="z-40">
          <div className="fixed top-[84px] right-0 left-0 bottom-0 lg:bottom-auto bg-white shadow h-fit">
            <ul className=" lg:hidden flex flex-col h-full container px-4 py-4">
              {navLinks.map((item, index) => (
                <li key={index} className="py-3">
                  <Link
                    href={item.href}
                    className="leading-normal text-lg text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;