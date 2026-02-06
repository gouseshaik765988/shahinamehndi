'use client'
import React from "react";
import { useState } from "react";
import Home from "./home";
import Services from "./service";
import Gallery from "./gallery";
import Contact from "./contact";
import Image from 'next/image';


const navOptions = [
    { name: 'Home' },
    { name: 'Services' },
    { name: 'Gallery' },
    { name: 'Contact' },
];

export default function Header() {

    const [activeLink, setActiveLink] = useState('Home');

    const renderContent = () => {
        if (activeLink === 'Home') {
            return <Home />;
        } else if (activeLink === 'Services') {
            return <Services />;
        } else if (activeLink === 'Gallery') {
            return <Gallery />;
        } else if (activeLink === 'Contact') {
            return <Contact />;
        }
        return <Home />; // Fallback component
    };
    return (
        <header className="w-full shadow-lg ">

            <div
                className="flex flex-col items-center justify-center px-4 "

            >      <Image
                    src="/logo.png" // Your gold logo file
                    alt="Shahina's Mehndi Logo"
                    width={80}
                    height={80}
                    className="h-auto max-w-[80px] "
                />
                {/* Wrapper to align logo and text horizontally */}
                <div className="flex items-center justify-center gap-4 mb-2">

                    {/* Use the Next/Image component for optimized images */}


                    <h1
                        className="text-[8vw] md:text-7xl text-center whitespace-nowrap font-normal"
                        style={{
                            fontFamily: "'Dancing Script', cursive",
                            background: "linear-gradient(45deg, #d4af37, #f5de50, #b8860b)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        Shahin's Mehndi
                    </h1>

                </div>

                {/* Subtitle / Quote */}
                <p className="text-[#7d7460] text-xs md:text-sm font-light tracking-wide text-center uppercase opacity-90 max-w-[250px] md:max-w-none line-clamp-2"
                    style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.7)" }}>
                    Where tradition meets intricate beauty
                </p>

                {/* Small Decorative Element */}
                <div className="flex items-center gap-4 mt-1">
                    <div className="h-[1px] w-12 bg-[#daa520] opacity-70"></div>
                    <span className="text-[#daa520]">✦</span>
                    <div className="h-[1px] w-12 bg-[#daa520] opacity-70"></div>
                </div>
            </div>




            <div
                // Use w-full for full width, mt-8 and mb-4 for spacing
                className="w-full mt-0 mb-0"
                style={{
                    height: '2px', // This creates the 5px "bold" line
                    // The gradient starts transparent (dull), goes to gold (glow), back to transparent (dull)
                    background: 'linear-gradient(to right, transparent 0%, #DAA520 50%, transparent 100%)',
                    // Optional: Add a subtle box shadow to enhance the "glow" look
                    boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)'
                }}
            />
            <nav className="w-full shadow-md bg-[var(--secondery)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">

                        <div className="  ">
                            <div className="flex items-baseline space-x-4 ml-6">
                                {navOptions.map((item) => (
                                    <a
                                        key={item.name}

                                        onClick={(e) => {
                                            e.preventDefault(); // Prevents actual navigation, remove if using a router
                                            setActiveLink(item.name);
                                        }}
                                        // Dynamically apply classes based on active state
                                        className={`
                                        px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out
                                        ${activeLink === item.name
                                                ? 'text-[#daa520] font-semibold border-b-2 border-[#daa520]' // Active (Gold)
                                                : 'text-white hover:text-[#daa520] hover:border-b-2 hover:border-[#daa520]' // Inactive (White with Gold hover)
                                            }
                                        bg-[var(--primary)] // Corrected syntax here as well
                                    `}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>


                        </div>

                    </div>

                </div>

            </nav>

            <main>

                {renderContent()}


            </main>

        </header>


    );
}
