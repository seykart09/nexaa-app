// Navbar.js 
"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import nexaaLogoFull from '@/assets/nexaa-logo-full.svg';
import nexaaLogoSmall from '@/assets/nexaa-logo-small.svg';
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Tools', href: '#', current: true },
    { name: 'Find Influencers & Creators', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full fixed top-0 left-0 right-0 bg-white">
        <nav className="flex justify-between items-center max-container">
          <Link href="/" className="text-3xl font-bold">
            <Image
                src={nexaaLogoFull}
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
                  className="font-montserrat leading-normal text-sm text-slate-gray"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <button className="py-4 px-8 bg-gray-100 rounded-xl text-sm">Sign in</button>
            <button className="py-4 px-8 bg-primary  text-white rounded-xl text-sm">Get Started</button>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="leading-normal text-lg text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;