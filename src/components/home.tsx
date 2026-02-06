'use client'
import React, { useState, useEffect } from "react";
const images = [
    "/scrollingpics/a.jpg",
    "/scrollingpics/b.jpg",
    "/scrollingpics/d.jpg",
    "/scrollingpics/e.jpg",
    "/scrollingpics/f.jpg",
    "/scrollingpics/gh.jpg",
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        // Cleanup function to stop the interval when the component is removed
        return () => clearInterval(intervalId);
    }, []);
    return (


        <main className="w-full overflow-hidden">


            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}} />



            <div
                // Use w-full for full width, mt-8 and mb-4 for spacing
                className="w-full mt-0 mb-0"
                style={{
                    height: '5px', // This creates the 5px "bold" line
                    // The gradient starts transparent (dull), goes to gold (glow), back to transparent (dull)
                    background: 'linear-gradient(to right, transparent 0%, #DAA520 50%, transparent 100%)',
                    // Optional: Add a subtle box shadow to enhance the "glow" look
                    boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)'
                }}
            />
            {/* This code replaces your previous style block and div structure */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt="Mehndi Design"
                        // These classes control the fade effect
                        className={`
                            absolute top-0 left-0 w-full h-full object-cover
                            transition-opacity duration-1000 ease-in-out
                            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                        `}
                    />

                ))}

            </div>



            <div
                // Use w-full for full width, mt-8 and mb-4 for spacing
                className="w-full mt-0 mb-4"
                style={{
                    height: '5px', // This creates the 5px "bold" line
                    // The gradient starts transparent (dull), goes to gold (glow), back to transparent (dull)
                    background: 'linear-gradient(to right, transparent 0%, #DAA520 50%, transparent 100%)',
                    // Optional: Add a subtle box shadow to enhance the "glow" look
                    boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)'
                }}
            />



            {/* --- 3-Card Content Section --- */}
            <h5 className="text-1xl md:text-2xl font-bold text-start ml-2 text-[#dfba00] my-3 tracking-wide">
                Premium Artistry, Organic Ingredients, and Timeless Beauty
            </h5>
            {/* --- Refined 2026 Marriage Mehndi Cards --- */}
            <section className="py-4 px-6 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="group relative bg-black/10 backdrop-blur-md border-[3px] border-[#ffd900a2] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
                    >
                        {/* Floating Emoji Icon */}
                        <div className="absolute -top-6 left-10 w-16 h-16 bg-gray rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">
                            ✨
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-bold mb-4 text-[#dfba00] tracking-wide">
                                Exquisite Detail
                            </h3>
                            <p className="text-gray-100 leading-relaxed opacity-90">
                                Our designs are crafted with microscopic precision, ensuring every petal and pattern is a masterpiece of marriage tradition.
                            </p>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="mt-8 w-12 h-1 bg-[#800000] group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-black/10 backdrop-blur-md border-[3px] border-[#ffd900a2] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
                    >
                        <div className="absolute -top-6 left-10 w-16 h-16 bg-gray rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">
                            🌿
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-bold mb-4 text-[#dfba00] tracking-wide">
                                Custom Designs
                            </h3>
                            <p className="text-gray-100 leading-relaxed opacity-90">
                                Tailored for your special day. From portrait mehndi to modern minimalist styles, we bring your specific vision to life.
                            </p>
                        </div>

                        <div className="mt-8 w-12 h-1 bg-[#800000] group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-black/10 backdrop-blur-md border-[3px] border-[#ffd900a2] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
                    >  <div className="absolute -top-6 left-10 w-16 h-16 bg-gray rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">
                            🎨
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-bold mb-4 text-[#dfba00] tracking-wide">
                                Deep Stains
                            </h3>
                            <p className="text-gray-100 leading-relaxed opacity-90">
                                Using 100% natural henna, we guarantee a rich, long-lasting color that remains vibrant throughout your wedding festivities.
                            </p>
                        </div>

                        <div className="mt-8 w-12 h-1 bg-[#800000] group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>

                </div>
            </section>


            <div
                // Using a deep maroon color that closely matches the image background
                className="text-gray p-8 md:p-12"
            >


                {/* The horizontal line seen below the title */}
                <div className="border-t border-white/50 mb-6 w-full"></div>

                <p className="mb-6 leading-relaxed">
                    Welcome to the innovative world of henna art & design, combining fusion designs from Arabic, Indian to Moghul. Shahin's Mehndi offers a highly personalised and bespoke service to suit your individual needs and budgets.
                </p>

                <p className="mb-6 leading-relaxed">
                    Shahin's Mehndi are a new generation of artists, using unique techniques together with natural ingredients for the mehndi, to add depth to its colour for your special occasions to last for days to come.
                </p>

                <p className="leading-relaxed">
                    We at Shahin's Mehndi, are available for all occasions such as weddings, mehndi parties, hen parties, fashion shows & corporate events to name a few..
                </p>
            </div>

        </main>

    );
}
